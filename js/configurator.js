// Gestion des boutons de configuration
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.config-option');
  const inputs = {
    largeur: document.getElementById('largeur'),
    hauteur: document.getElementById('hauteur'),
    codepostal: document.getElementById('codepostal')
  };
  const btnCalculer = document.getElementById('calculer-prix');
  const resultatDiv = document.getElementById('resultat-prix');
  const prixDisplay = document.getElementById('prix-display');

  // État de la configuration
  const config = {
    type: '1-vantail',
    activite: 'commerce',
    largeur: null,
    hauteur: null,
    codepostal: ''
  };

  // Gestion des clics sur les boutons d'options
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const option = this.dataset.option;
      const value = this.dataset.value;
      
      // Retirer la sélection des autres boutons du même groupe
      document.querySelectorAll(`[data-option="${option}"]`).forEach(btn => {
        btn.style.background = 'white';
        btn.style.color = '#0f172a';
        btn.style.borderColor = '#e2e8f0';
      });
      
      // Activer le bouton cliqué
      this.style.background = '#0f172a';
      this.style.color = 'white';
      this.style.borderColor = '#0f172a';
      
      // Mettre à jour la config
      config[option] = value;
    });
  });

  // Gestion du focus sur les inputs
  Object.values(inputs).forEach(input => {
    input.addEventListener('focus', function() {
      this.style.borderColor = '#2563eb';
    });
    input.addEventListener('blur', function() {
      this.style.borderColor = '#e2e8f0';
    });
  });

  // Calcul du prix
  btnCalculer.addEventListener('click', function() {
    // Récupérer les valeurs
    config.largeur = parseInt(inputs.largeur.value);
    config.hauteur = parseInt(inputs.hauteur.value);
    config.codepostal = inputs.codepostal.value;

    // Validation (code postal optionnel)
    if (!config.largeur || !config.hauteur) {
      alert('Veuillez renseigner au moins la largeur et la hauteur');
      return;
    }

    if (config.largeur < 700 || config.largeur > 3000) {
      alert('La largeur doit être entre 700 et 3000 mm');
      return;
    }

    if (config.hauteur < 2000 || config.hauteur > 3000) {
      alert('La hauteur doit être entre 2000 et 3000 mm');
      return;
    }

    // FORMULE DE CALCUL DU PRIX (à personnaliser)
    const prixFinal = calculerPrix(config);

    // Afficher le résultat
    prixDisplay.innerHTML = `
      <div style="font-size: 36px; font-weight: 700; color: #2563eb; margin-bottom: 8px;">
        ${prixFinal.toLocaleString('fr-FR')} € <span style="font-size: 18px; font-weight: 500; color: #64748b;">HT</span>
      </div>
      <div style="font-size: 14px; color: #64748b; margin-top: 4px;">
        Hors installation • Livraison sous 3-5 jours
      </div>
    `;
    
    // Si code postal renseigné, afficher le partenaire
    if (config.codepostal && config.codepostal.length === 5) {
      const partenaire = trouverPartenaireProche(config.codepostal);
      if (partenaire) {
        prixDisplay.innerHTML += `
          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
            <div style="font-size: 13px; color: #64748b; margin-bottom: 4px;">Installateur recommandé près de chez vous :</div>
            <div style="font-size: 15px; font-weight: 600; color: #0f172a;">${partenaire.name} - ${partenaire.ville}</div>
          </div>
        `;
      }
    }
    
    resultatDiv.style.display = 'block';
    resultatDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // FONCTION DE CALCUL DU PRIX (personnalisable)
  function calculerPrix(config) {
    let prixBase = 2500;

    // Prix selon le type de porte
    if (config.type === '2-vantaux') prixBase += 800;
    if (config.type === 'telescopique') prixBase += 1500;

    // Prix selon les dimensions (surface en m²)
    const surface = (config.largeur * config.hauteur) / 1000000;
    const coutSurface = surface * 450;
    
    // Coefficient selon l'activité
    let multiplicateur = 1;
    if (config.activite === 'industrie') multiplicateur = 1.15;
    if (config.activite === 'hotel') multiplicateur = 1.25;

    return Math.round((prixBase + coutSurface) * multiplicateur);
  }

  // Trouver le partenaire le plus proche basé sur le code postal
  function trouverPartenaireProche(codePostal) {
    const partenaires = [
      { dept: '38', name: 'Isère Domotique', ville: 'Gières', region: 'Auvergne-Rhône-Alpes' },
      { dept: '26', name: 'DAS 26', ville: 'Valence', region: 'Auvergne-Rhône-Alpes' },
      { dept: '42', name: 'GFA', ville: 'Genilac', region: 'Auvergne-Rhône-Alpes' },
      { dept: '39', name: 'Chapat Automatismes', ville: 'Dole', region: 'Bourgogne-Franche-Comté' },
      { dept: '67', name: 'APA', ville: 'Mundolsheim', region: 'Grand Est' },
      { dept: '77', name: 'IFD', ville: 'Cesson', region: 'Île-de-France' },
      { dept: '54', name: 'Novatech', ville: 'Fléville-devant-Nancy', region: 'Grand Est' },
      { dept: '17', name: 'A.R.E.S Fermeture', ville: 'Mazeray', region: 'Nouvelle-Aquitaine' },
      { dept: '13', name: 'DENORME', ville: 'Mallemort', region: 'Provence-Alpes-Côte d\'Azur' },
      { dept: '59', name: 'JLD Services', ville: 'Sin-le-Noble', region: 'Hauts-de-France' }
    ];

    const dept = codePostal.substring(0, 2);
    return partenaires.find(p => p.dept === dept);
  }

  // Animation hover sur le bouton CTA
  btnCalculer.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.4)';
  });

  btnCalculer.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
  });
});

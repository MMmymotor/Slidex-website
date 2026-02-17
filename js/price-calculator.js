/**
 * SlideX - Calculateur de prix porte automatique
 * Détection code postal → ville → région
 * Logique SLX Ready vs Sur-mesure
 */

// Base de données départements → régions
const POSTAL_TO_REGION = {
  '01': { region: 'Auvergne-Rhône-Alpes', dept: 'Ain' },
  '02': { region: 'Hauts-de-France', dept: 'Aisne' },
  '03': { region: 'Auvergne-Rhône-Alpes', dept: 'Allier' },
  '04': { region: 'Provence-Alpes-Côte d\'Azur', dept: 'Alpes-de-Haute-Provence' },
  '05': { region: 'Provence-Alpes-Côte d\'Azur', dept: 'Hautes-Alpes' },
  '06': { region: 'Provence-Alpes-Côte d\'Azur', dept: 'Alpes-Maritimes' },
  '07': { region: 'Auvergne-Rhône-Alpes', dept: 'Ardèche' },
  '08': { region: 'Grand Est', dept: 'Ardennes' },
  '09': { region: 'Occitanie', dept: 'Ariège' },
  '10': { region: 'Grand Est', dept: 'Aube' },
  '11': { region: 'Occitanie', dept: 'Aude' },
  '12': { region: 'Occitanie', dept: 'Aveyron' },
  '13': { region: 'Provence-Alpes-Côte d\'Azur', dept: 'Bouches-du-Rhône' },
  '14': { region: 'Normandie', dept: 'Calvados' },
  '15': { region: 'Auvergne-Rhône-Alpes', dept: 'Cantal' },
  '16': { region: 'Nouvelle-Aquitaine', dept: 'Charente' },
  '17': { region: 'Nouvelle-Aquitaine', dept: 'Charente-Maritime' },
  '18': { region: 'Centre-Val de Loire', dept: 'Cher' },
  '19': { region: 'Nouvelle-Aquitaine', dept: 'Corrèze' },
  '21': { region: 'Bourgogne-Franche-Comté', dept: 'Côte-d\'Or' },
  '22': { region: 'Bretagne', dept: 'Côtes-d\'Armor' },
  '23': { region: 'Nouvelle-Aquitaine', dept: 'Creuse' },
  '24': { region: 'Nouvelle-Aquitaine', dept: 'Dordogne' },
  '25': { region: 'Bourgogne-Franche-Comté', dept: 'Doubs' },
  '26': { region: 'Auvergne-Rhône-Alpes', dept: 'Drôme' },
  '27': { region: 'Normandie', dept: 'Eure' },
  '28': { region: 'Centre-Val de Loire', dept: 'Eure-et-Loir' },
  '29': { region: 'Bretagne', dept: 'Finistère' },
  '2A': { region: 'Corse', dept: 'Corse-du-Sud' },
  '2B': { region: 'Corse', dept: 'Haute-Corse' },
  '30': { region: 'Occitanie', dept: 'Gard' },
  '31': { region: 'Occitanie', dept: 'Haute-Garonne' },
  '32': { region: 'Occitanie', dept: 'Gers' },
  '33': { region: 'Nouvelle-Aquitaine', dept: 'Gironde' },
  '34': { region: 'Occitanie', dept: 'Hérault' },
  '35': { region: 'Bretagne', dept: 'Ille-et-Vilaine' },
  '36': { region: 'Centre-Val de Loire', dept: 'Indre' },
  '37': { region: 'Centre-Val de Loire', dept: 'Indre-et-Loire' },
  '38': { region: 'Auvergne-Rhône-Alpes', dept: 'Isère' },
  '39': { region: 'Bourgogne-Franche-Comté', dept: 'Jura' },
  '40': { region: 'Nouvelle-Aquitaine', dept: 'Landes' },
  '41': { region: 'Centre-Val de Loire', dept: 'Loir-et-Cher' },
  '42': { region: 'Auvergne-Rhône-Alpes', dept: 'Loire' },
  '43': { region: 'Auvergne-Rhône-Alpes', dept: 'Haute-Loire' },
  '44': { region: 'Pays de la Loire', dept: 'Loire-Atlantique' },
  '45': { region: 'Centre-Val de Loire', dept: 'Loiret' },
  '46': { region: 'Occitanie', dept: 'Lot' },
  '47': { region: 'Nouvelle-Aquitaine', dept: 'Lot-et-Garonne' },
  '48': { region: 'Occitanie', dept: 'Lozère' },
  '49': { region: 'Pays de la Loire', dept: 'Maine-et-Loire' },
  '50': { region: 'Normandie', dept: 'Manche' },
  '51': { region: 'Grand Est', dept: 'Marne' },
  '52': { region: 'Grand Est', dept: 'Haute-Marne' },
  '53': { region: 'Pays de la Loire', dept: 'Mayenne' },
  '54': { region: 'Grand Est', dept: 'Meurthe-et-Moselle' },
  '55': { region: 'Grand Est', dept: 'Meuse' },
  '56': { region: 'Bretagne', dept: 'Morbihan' },
  '57': { region: 'Grand Est', dept: 'Moselle' },
  '58': { region: 'Bourgogne-Franche-Comté', dept: 'Nièvre' },
  '59': { region: 'Hauts-de-France', dept: 'Nord' },
  '60': { region: 'Hauts-de-France', dept: 'Oise' },
  '61': { region: 'Normandie', dept: 'Orne' },
  '62': { region: 'Hauts-de-France', dept: 'Pas-de-Calais' },
  '63': { region: 'Auvergne-Rhône-Alpes', dept: 'Puy-de-Dôme' },
  '64': { region: 'Nouvelle-Aquitaine', dept: 'Pyrénées-Atlantiques' },
  '65': { region: 'Occitanie', dept: 'Hautes-Pyrénées' },
  '66': { region: 'Occitanie', dept: 'Pyrénées-Orientales' },
  '67': { region: 'Grand Est', dept: 'Bas-Rhin' },
  '68': { region: 'Grand Est', dept: 'Haut-Rhin' },
  '69': { region: 'Auvergne-Rhône-Alpes', dept: 'Rhône' },
  '70': { region: 'Bourgogne-Franche-Comté', dept: 'Haute-Saône' },
  '71': { region: 'Bourgogne-Franche-Comté', dept: 'Saône-et-Loire' },
  '72': { region: 'Pays de la Loire', dept: 'Sarthe' },
  '73': { region: 'Auvergne-Rhône-Alpes', dept: 'Savoie' },
  '74': { region: 'Auvergne-Rhône-Alpes', dept: 'Haute-Savoie' },
  '75': { region: 'Île-de-France', dept: 'Paris' },
  '76': { region: 'Normandie', dept: 'Seine-Maritime' },
  '77': { region: 'Île-de-France', dept: 'Seine-et-Marne' },
  '78': { region: 'Île-de-France', dept: 'Yvelines' },
  '79': { region: 'Nouvelle-Aquitaine', dept: 'Deux-Sèvres' },
  '80': { region: 'Hauts-de-France', dept: 'Somme' },
  '81': { region: 'Occitanie', dept: 'Tarn' },
  '82': { region: 'Occitanie', dept: 'Tarn-et-Garonne' },
  '83': { region: 'Provence-Alpes-Côte d\'Azur', dept: 'Var' },
  '84': { region: 'Provence-Alpes-Côte d\'Azur', dept: 'Vaucluse' },
  '85': { region: 'Pays de la Loire', dept: 'Vendée' },
  '86': { region: 'Nouvelle-Aquitaine', dept: 'Vienne' },
  '87': { region: 'Nouvelle-Aquitaine', dept: 'Haute-Vienne' },
  '88': { region: 'Grand Est', dept: 'Vosges' },
  '89': { region: 'Bourgogne-Franche-Comté', dept: 'Yonne' },
  '90': { region: 'Bourgogne-Franche-Comté', dept: 'Territoire de Belfort' },
  '91': { region: 'Île-de-France', dept: 'Essonne' },
  '92': { region: 'Île-de-France', dept: 'Hauts-de-Seine' },
  '93': { region: 'Île-de-France', dept: 'Seine-Saint-Denis' },
  '94': { region: 'Île-de-France', dept: 'Val-de-Marne' },
  '95': { region: 'Île-de-France', dept: 'Val-d\'Oise' }
};

// Logique de prix
const PRICING = {
  slx900: { min: 3500, max: 4500, label: 'SLX Ready 900', desc: 'Porte 1 vantail - 900 mm - Disponible en stock' },
  slx1600: { min: 5500, max: 6500, label: 'SLX Ready 1600', desc: 'Porte 2 vantaux - 1600 mm - Disponible en stock' },
  custom: { min: 4500, max: 8500, label: 'Porte sur-mesure', desc: 'Dimensions personnalisées - Délai 15 jours' }
};

class PriceCalculator {
  constructor() {
    this.form = document.getElementById('price-calculator');
    this.resultContainer = document.getElementById('result-container');
    this.resetBtn = document.getElementById('reset-calculator');
    
    this.init();
  }

  init() {
    if (!this.form) return;
    
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.calculate();
    });

    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => {
        this.reset();
      });
    }

    // Animation FAQ
    this.initFAQ();
  }

  calculate() {
    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);
    const activity = document.getElementById('activity').value;
    const postalCode = document.getElementById('postal-code').value;

    // Validation
    if (!width || !height || !activity || !postalCode) {
      alert('Merci de remplir tous les champs');
      return;
    }

    // Déterminer le produit
    let product;
    if (width >= 850 && width <= 950) {
      product = PRICING.slx900;
    } else if (width >= 1500 && width <= 1700) {
      product = PRICING.slx1600;
    } else {
      product = PRICING.custom;
    }

    // Ajustement selon hauteur
    let priceAdjustment = 0;
    if (height > 2500) {
      priceAdjustment = 500;
    }

    // Localisation
    const deptCode = postalCode.substring(0, 2);
    const location = POSTAL_TO_REGION[deptCode] || { region: 'France', dept: 'votre département' };

    // Afficher le résultat
    this.displayResult({
      product,
      priceAdjustment,
      location,
      postalCode
    });
  }

  displayResult(data) {
    const { product, priceAdjustment, location } = data;

    // Type de produit
    document.getElementById('product-type').innerHTML = product.label;
    document.getElementById('product-description').innerHTML = product.desc;

    // Prix
    const minPrice = product.min + priceAdjustment;
    const maxPrice = product.max + priceAdjustment;
    document.getElementById('price-display').innerHTML = 
      `${minPrice.toLocaleString('fr-FR')} € – ${maxPrice.toLocaleString('fr-FR')} € HT`;

    // Localisation
    document.getElementById('location-display').innerHTML = `
      <div class="location-badge">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
          <path d="M10 2C7.24 2 5 4.24 5 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#2563eb"/>
        </svg>
        <span class="display-2 text-paragraphs">
          <strong>Installation possible dans le ${location.dept}</strong> et dans toute la région <strong>${location.region}</strong>.
        </span>
      </div>
      <p class="display-1 text-paragraphs mg-top-12px" style="opacity: 0.7;">
        Notre réseau de partenaires installateurs couvre toute la France.
      </p>
    `;

    // Animation d'affichage
    this.form.style.display = 'none';
    this.resultContainer.style.display = 'block';
    
    // Smooth scroll vers résultat
    this.resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  reset() {
    this.form.reset();
    this.form.style.display = 'block';
    this.resultContainer.style.display = 'none';
    
    // Scroll vers le formulaire
    this.form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      
      if (question && answer) {
        // Masquer toutes les réponses au chargement
        answer.style.display = 'none';
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease';
        
        question.style.cursor = 'pointer';
        question.style.userSelect = 'none';
        
        question.addEventListener('click', () => {
          const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';
          
          if (isOpen) {
            answer.style.maxHeight = '0';
            answer.style.paddingTop = '0';
            setTimeout(() => {
              answer.style.display = 'none';
            }, 300);
          } else {
            answer.style.display = 'block';
            answer.style.paddingTop = '16px';
            answer.style.maxHeight = answer.scrollHeight + 'px';
          }
        });
      }
    });
  }
}

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', () => {
  new PriceCalculator();
});

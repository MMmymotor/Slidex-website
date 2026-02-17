# SlideX Website

Site web officiel de SlideX - Fabricant français de portes automatiques piétonnes.

## 🚀 Déploiement

Deux options de déploiement automatique via GitHub :

### Option 1 : Déploiement sur Infomaniak (FTP)

**Configuration requise (secrets GitHub) :**

1. Aller dans Settings → Secrets and variables → Actions
2. Créer 3 secrets :
   - `FTP_SERVER` : Adresse du serveur FTP Infomaniak (ex: `ftp.infomaniak.com`)
   - `FTP_USERNAME` : Votre nom d'utilisateur FTP
   - `FTP_PASSWORD` : Votre mot de passe FTP

**Déploiement :**
- Push sur la branche `main` → Déploiement automatique
- Ou clic sur "Run workflow" dans l'onglet Actions

**Workflow actif :** `.github/workflows/deploy-ftp.yml`

---

### Option 2 : GitHub Pages (gratuit)

**Configuration requise :**

1. Aller dans Settings → Pages
2. Source : GitHub Actions
3. Votre site sera accessible sur : `https://votre-username.github.io/nom-du-repo/`

**Avantages :**
- ✅ Gratuit
- ✅ HTTPS automatique
- ✅ CDN mondial
- ✅ Pas de configuration FTP

**Limites :**
- Domaine par défaut : `.github.io` (sauf si domaine personnalisé configuré)
- Taille max : 1 GB

**Workflow actif :** `.github/workflows/deploy-github-pages.yml`

---

## 📝 Workflow de développement

### 1. Initialiser le repo (première fois)

```bash
cd "/Users/bastienpoggioli/kDrive/Common documents/Bastien - My Motor/Slide X/PORTE AUTO/WEB/slidex-fixed"

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Site SlideX"

# Créer le repo sur GitHub (via l'interface web)
# Puis ajouter le remote :
git remote add origin https://github.com/VOTRE-USERNAME/slidex-website.git

# Push
git branch -M main
git push -u origin main
```

### 2. Workflow quotidien

```bash
# Vérifier les modifications
git status

# Ajouter les fichiers modifiés
git add .

# Commit avec un message descriptif
git commit -m "Fix: correction du configurateur de prix"

# Push vers GitHub (déclenche le déploiement automatique)
git push
```

### 3. Commandes Git utiles

```bash
# Voir l'historique
git log --oneline

# Annuler les modifications non commitées
git restore fichier.html

# Voir les différences
git diff

# Créer une branche de développement
git checkout -b dev
git push -u origin dev
```

---

## 🎯 Recommandation

**Pour commencer :** GitHub Pages (Option 2)
- Gratuit, simple, rapide
- Bon pour tester et valider
- Vous pouvez ajouter votre domaine slidex.fr plus tard

**Pour la production :** Déploiement FTP sur Infomaniak (Option 1)
- Garde votre infrastructure actuelle
- Déploiement automatique depuis GitHub
- Plus de contrôle

---

## 🔧 Scripts disponibles

- `update_all_headers.py` - Met à jour tous les headers du site
- `fix_index_footers.py` - Standardise les footers
- `add_crisp.py` - Ajoute le chat Crisp

---

## 📁 Structure du projet

```
.
├── index.html              # Page d'accueil
├── porte-automatique-prix.html  # Configurateur de prix
├── analyse-devis.html      # Page analyse de devis
├── regions/                # Pages régionales SEO (11 pages)
├── blog/                   # Articles de blog
├── partenaires/            # Pages partenaires
├── kits-renovation/        # Kits de rénovation
├── nos-produits/           # Catalogue produits
├── css/                    # Feuilles de style
├── js/                     # Scripts JavaScript
└── images/                 # Images et ressources
```

---

## 🌐 Domaine personnalisé (si GitHub Pages)

Pour utiliser `www.slidex.fr` :

1. Dans les DNS Infomaniak, ajouter :
   ```
   CNAME www votre-username.github.io
   ```

2. Dans Settings → Pages → Custom domain : `www.slidex.fr`

3. Attendre la propagation DNS (quelques heures)

---

## 📞 Support

Pour toute question : hello@slidex.fr

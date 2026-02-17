# 🚀 Démarrage Rapide - GitHub

## Étape 1 : Créer le repo sur GitHub

1. Allez sur https://github.com/new
2. Nom du repo : `slidex-website` (ou autre nom)
3. Description : "Site web SlideX - Fabricant français de portes automatiques"
4. **Public** ou **Private** (votre choix)
5. ❌ **NE PAS** cocher "Add README" (on l'a déjà)
6. Cliquez sur **Create repository**

---

## Étape 2 : Pousser votre code

### Option A : Script automatique (recommandé)

```bash
cd "/Users/bastienpoggioli/kDrive/Common documents/Bastien - My Motor/Slide X/PORTE AUTO/WEB/slidex-fixed"

./setup-github.sh
```

Le script vous guidera pas à pas !

### Option B : Manuellement

```bash
cd "/Users/bastienpoggioli/kDrive/Common documents/Bastien - My Motor/Slide X/PORTE AUTO/WEB/slidex-fixed"

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Site SlideX"

# Ajouter le remote (remplacez USERNAME et REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Push
git branch -M main
git push -u origin main
```

---

## Étape 3 : Activer le déploiement automatique

### 🎯 Option recommandée : GitHub Pages (gratuit)

1. Allez dans votre repo → **Settings** → **Pages**
2. Section "Build and deployment" :
   - Source : **GitHub Actions**
3. C'est tout ! 🎉

Votre site sera accessible sur :
```
https://votre-username.github.io/slidex-website/
```

### 🔧 Option alternative : FTP vers Infomaniak

1. Allez dans votre repo → **Settings** → **Secrets and variables** → **Actions**
2. Créez 3 secrets (bouton "New repository secret") :
   - `FTP_SERVER` : `ftp.votredomaine.com` (demandez à Infomaniak)
   - `FTP_USERNAME` : votre username FTP
   - `FTP_PASSWORD` : votre mot de passe FTP

3. Désactivez le workflow GitHub Pages :
   - Allez dans **Actions**
   - Cliquez sur "Deploy to GitHub Pages" à gauche
   - Menu "..." en haut à droite → **Disable workflow**

4. Au prochain `git push`, votre site se déploiera automatiquement sur Infomaniak !

---

## Étape 4 : Utilisation quotidienne

```bash
# 1. Modifier vos fichiers dans VS Code

# 2. Vérifier les changements
git status

# 3. Ajouter les fichiers modifiés
git add .

# 4. Commit
git commit -m "Description de vos modifications"

# 5. Push (déclenche le déploiement automatique)
git push
```

**Déploiement automatique** à chaque `git push` ! 🚀

---

## ⚡ Commandes pratiques

```bash
# Voir l'historique
git log --oneline

# Annuler les modifications non sauvegardées
git restore fichier.html

# Créer une branche de test
git checkout -b test
git push -u origin test

# Revenir sur main
git checkout main
```

---

## 🆘 Problèmes courants

**Erreur "remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/REPO.git
```

**Conflit lors du push**
```bash
git pull --rebase
# Résoudre les conflits si nécessaire
git push
```

**Mot de passe GitHub demandé à chaque push**
```bash
# Utiliser un Personal Access Token au lieu du mot de passe
# Créer un token sur : https://github.com/settings/tokens
# Cocher : repo (tous les scopes)
```

---

## 📞 Besoin d'aide ?

Consultez le [README.md](README.md) complet pour plus de détails !

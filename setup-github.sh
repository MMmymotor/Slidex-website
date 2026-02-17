#!/bin/bash

# Script pour initialiser le repo GitHub et faire le premier push

echo "🚀 Configuration du repo GitHub pour SlideX"
echo ""

# Vérifier si Git est initialisé
if [ ! -d ".git" ]; then
    echo "📦 Initialisation de Git..."
    git init
    echo "✅ Git initialisé"
else
    echo "✅ Git déjà initialisé"
fi

# Ajouter tous les fichiers
echo ""
echo "📝 Ajout des fichiers..."
git add .

# Premier commit
echo ""
echo "💾 Premier commit..."
git commit -m "Initial commit - Site SlideX avec configurateur de prix et pages SEO régionales"

echo ""
echo "🔗 Configuration du remote GitHub"
echo ""
echo "⚠️  Avant de continuer :"
echo "1. Créez un nouveau repo sur GitHub : https://github.com/new"
echo "2. Nom suggéré : slidex-website"
echo "3. Laissez-le vide (pas de README, .gitignore, etc.)"
echo ""
read -p "Avez-vous créé le repo sur GitHub ? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo ""
    read -p "Entrez votre username GitHub : " github_username
    read -p "Entrez le nom du repo (ex: slidex-website) : " repo_name
    
    # Ajouter le remote
    git remote add origin "https://github.com/$github_username/$repo_name.git"
    
    # Renommer la branche en main
    git branch -M main
    
    echo ""
    echo "🚀 Push vers GitHub..."
    git push -u origin main
    
    echo ""
    echo "✨ C'est fait ! Votre site est maintenant sur GitHub !"
    echo ""
    echo "📍 Prochaines étapes :"
    echo ""
    echo "Option 1 - GitHub Pages (gratuit, simple) :"
    echo "  1. Allez sur https://github.com/$github_username/$repo_name/settings/pages"
    echo "  2. Source : GitHub Actions"
    echo "  3. Votre site sera sur : https://$github_username.github.io/$repo_name/"
    echo ""
    echo "Option 2 - Déploiement FTP vers Infomaniak :"
    echo "  1. Allez sur https://github.com/$github_username/$repo_name/settings/secrets/actions"
    echo "  2. Créez 3 secrets : FTP_SERVER, FTP_USERNAME, FTP_PASSWORD"
    echo "  3. Désactivez le workflow GitHub Pages dans Actions"
    echo "  4. Le prochain push déploiera automatiquement sur Infomaniak"
    echo ""
else
    echo ""
    echo "⏸️  Configuration interrompue."
    echo "Créez d'abord le repo sur GitHub, puis relancez ce script."
fi

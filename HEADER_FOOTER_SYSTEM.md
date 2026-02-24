# Système de Header/Footer Centralisé

## Vue d'ensemble

Le header et le footer du site sont maintenant centralisés dans le dossier `includes/`:
- `includes/header.html` - Header du site
- `includes/footer.html` - Footer du site

Ces fichiers sont chargés automatiquement sur toutes les pages via JavaScript.

## Structure des fichiers

```
slidex-fixed/
├── includes/
│   ├── header.html         # Header centralisé
│   └── footer.html         # Footer centralisé
├── js/
│   └── includes-loader.js  # Script de chargement automatique
├── update_includes.py      # Script pour mettre à jour les pages
└── [autres fichiers HTML] # Pages du site
```

## Comment ça fonctionne

### 1. Fichiers includes
- Le header et footer sont extraits dans des fichiers séparés
- Ces fichiers contiennent uniquement le HTML du header/footer

### 2. Pages HTML
Chaque page HTML contient maintenant des placeholders:
```html
<body>
  <div class="page-wrapper">
    <!-- Header chargé dynamiquement ici -->
    <div id="header-placeholder"></div>
    
    <!-- Contenu de la page -->
    ...
    
    <!-- Footer chargé dynamiquement ici -->
    <div id="footer-placeholder"></div>
  </div>
</body>
```

### 3. Script de chargement
Le fichier `js/includes-loader.js`:
- Détecte la profondeur de la page (racine, sous-dossier, etc.)
- Charge les fichiers header.html et footer.html
- Ajuste automatiquement les chemins relatifs (images, liens, etc.)
- Injecte le contenu dans les placeholders

## Avantages

✅ **Maintenance simplifiée**: Modifier le header/footer une seule fois au lieu de 46+ fichiers
✅ **Cohérence**: Garantit que toutes les pages ont le même header/footer
✅ **Chemins automatiques**: Les liens relatifs sont automatiquement adaptés selon la profondeur de la page
✅ **Compatible Webflow**: Réinitialise les interactions Webflow après chargement

## Modifier le header ou le footer

### Pour modifier le header:
1. Éditer le fichier `includes/header.html`
2. Sauvegarder
3. Toutes les pages utiliseront automatiquement le nouveau header

### Pour modifier le footer:
1. Éditer le fichier `includes/footer.html`
2. Sauvegarder
3. Toutes les pages utiliseront automatiquement le nouveau footer

## Ajouter une nouvelle page

Pour qu'une nouvelle page utilise le système:

1. Ajouter les placeholders dans le HTML:
```html
<div id="header-placeholder"></div>
<!-- Votre contenu -->
<div id="footer-placeholder"></div>
```

2. Ajouter le script dans le `<head>`:
```html
<script src="js/includes-loader.js" type="text/javascript"></script>
<!-- ou pour un sous-dossier: -->
<script src="../js/includes-loader.js" type="text/javascript"></script>
```

Ou utiliser le script automatique:
```bash
python3 update_includes.py
```

## Pages mises à jour

46 fichiers HTML ont été convertis au système centralisé:
- Index et pages racine (index.html, a-propos.html, etc.)
- Pages produits (product-detail.html, product-detail-2-vantaux.html)
- Pages régions (11 fichiers dans regions/)
- Pages partenaires (10 fichiers dans partenaires/)
- Kits de rénovation (10 fichiers dans kits-renovation/)
- Autres pages (diagnostic-video.html, analyse-devis.html, etc.)

## Fichiers exclus

Certains fichiers ne sont PAS convertis (volontairement):
- Pages d'authentification: connexion-inscription.html
- Pages d'erreur: 401.html, 404.html
- Pages template: template-pages/*, utility-pages/*
- Articles de blog individuels: blog/* (sauf blog/index.html)

## Déploiement

Après toute modification du header/footer:
1. Tester localement
2. Commit les changements: `git add . && git commit -m "Update header/footer"`
3. Push vers GitHub: `git push`
4. Le déploiement FTP automatique mettra à jour le site

## Dépannage

### Les chemins d'images ou liens ne fonctionnent pas
- Vérifier que les chemins dans `includes/header.html` et `includes/footer.html` sont relatifs depuis la racine
- Le script ajuste automatiquement les chemins selon la profondeur

### Le header/footer n'apparaît pas
- Vérifier que le script `includes-loader.js` est chargé
- Vérifier la console du navigateur pour les erreurs
- S'assurer que les placeholders `#header-placeholder` et `#footer-placeholder` existent

### Modifier un menu ou lien
- Éditer directement `includes/header.html`
- Vérifier que le lien utilise un chemin relatif (sans ./ ni ../)
- Exemple: `href="a-propos.html"` au lieu de `href="./a-propos.html"`

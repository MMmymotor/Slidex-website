# Nos produits — restructuration en 3 familles + ajout des ouvre-portes

Date : 2026-09-08
Statut : validé, prêt pour plan d'implémentation

## Contexte

`nos-produits/index.html` présente aujourd'hui une **grille plate de 5 cartes** qui
mélange des natures différentes : produits finis (1 vantail, 2 vantaux,
télescopique), un kit de rénovation, et une carte « Options & Accessoires »
fourre-tout. Le bloc CSS `@media (max-width:1200px)` contient des hacks
`nth-of-type` calés sur exactement 5 cartes
([nos-produits/index.html:46-48](../../../nos-produits/index.html#L46)).

SlideX veut ajouter deux **opérateurs de portes battantes** (« ouvre-portes ») :

| Modèle | Porte jusqu'à | Alimentation | Sortie | Boîtier (mm) | Poids | Vitesse ouv. | Vitesse ferm. | Temporisation | Indice | Normes |
|---|---|---|---|---|---|---|---|---|---|---|
| **Go in 80** | 100 kg | 230 V | 24 V DC · 3 A | 555 × 55 × 83 | 2,8 kg | 45°/s | 45°/s | 0–60 s (ajustable) | IP21 | EN 16005 (testé), TÜV SÜD, CE |
| **Go in 350** | 350 kg | 230 V | 24 V DC · 3 A | 610 × 90 × 128 | 13,5 kg | 40°/s | 30°/s | 3–9 s (ajustable) | IP21 | EN 16005, TÜV SÜD, CE |

Communs : bras à compas **ou** bras à coulisse ; montage **simple ou double**
vantail ; plage de température −20 °C / +50 °C ; degré d'ouverture max 99° (Go in
80) / 105° (Go in 350).

La différence pratique entre les deux modèles est **le poids de vantail admissible**.

## Objectif

1. Réorganiser `nos-produits/index.html` en **3 familles** avec une barre
   d'ancres, sans transformer la page en simple sommaire.
2. Ajouter les deux ouvre-portes dans une nouvelle famille.
3. Créer une **page dédiée** `nos-produits/ouvre-portes.html` présentant les deux
   modèles + un tableau comparatif.

Non-objectifs : modifier le menu principal (`includes/header.html`), ajouter un
lien depuis la page d'accueil, retoucher `css/slidex-custom.css`, créer une page
détail par modèle.

## A. Restructuration de `nos-produits/index.html`

### Barre d'ancres

Nouveau bandeau clair inséré **juste après** `.np-header` (le bandeau foncé avec
la découpe ellipse blanche en bas). Rangée de 3 liens « pill » centrés :

- `Portes automatiques` → `#portes`
- `Kits de rénovation` → `#kits-renovation`
- `Ouvre-portes` → `#ouvre-portes`

Comportement : défilement doux (`scroll-behavior: smooth` sur `html`), non
sticky. Chaque section cible reçoit `scroll-margin-top: 90px` pour compenser le
header (chargé en JS, hauteur ~72–84 px + marge).

### Découpage en sections

La `<section class="section">` unique qui contient `.slidex-grid-3` est
remplacée par **trois** `<section>`, chacune avec :

- un mini en-tête : `<div class="subtitle">…</div>` + `<h2>…</h2>` (nouvelle
  classe `.np-section-head`, style scopé dans le `<style>` de la page) ;
- sa propre grille de cartes (nouvelle classe `.np-grid`, `display:grid`,
  `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`, `gap: 24px`,
  `max-width: 1100px`, centrée).

| Section | `id` | Cartes (ordre) |
|---|---|---|
| Portes automatiques piétonnes | `portes` | 1 vantail · 2 vantaux · télescopique · Options & Accessoires |
| Kits de rénovation | `kits-renovation` | carte kit actuelle |
| Ouvre-portes | `ouvre-portes` | Go in 80 · Go in 350 |

Le bloc `@media (max-width:1200px)` avec les `nth-of-type` est **supprimé** : la
grille `auto-fit` par section rend ces hacks inutiles. Les autres media queries
(`max-width:767px`, ajustement `.np-card-img img`) sont conservées.

### Cartes ouvre-portes (dans la section `#ouvre-portes`)

Réutilisent la structure `.card.v6` / `.np-card-img` / `.np-card-body` /
`.np-spec-tags` / `.np-card-footer` existante.

Pour chaque carte :

- `.np-card-img` : `<img>` vers `../images/go-in-80.png` (resp.
  `../images/go-in-350.png`). Tant que le fichier n'existe pas, un **fallback
  SVG neutre** s'affiche via `onerror` (bloc `<div>` frère masqué par défaut,
  même principe visuel que la carte « Options »). Aucun changement de code requis
  quand les PNG sont déposés.
- badge : `<span class="np-card-badge teal">Ouvre-porte</span>` — nouveau
  modificateur `.np-card-badge.teal { background: #0d9488; }` ajouté dans le
  `<style>` de la page (les couleurs existantes sont déjà prises par les autres
  familles).
- sous-titre : « Opérateur de porte battante ».
- titre : `Go in 80` / `Go in 350`.
- description : 2–3 phrases (usage tertiaire/ERP, accessibilité PMR, EN 16005).
- spec-tags :
  - Go in 80 : `Jusqu'à 100 kg` · `EN 16005` · `Simple ou double` ·
    `Bras compas / coulisse` (neutral)
  - Go in 350 : `Jusqu'à 350 kg` · `EN 16005` · `Simple ou double` ·
    `Bras compas / coulisse` (neutral)
- footer : bouton « Voir en détail » → `ouvre-portes.html#go-in-80` (resp.
  `#go-in-350`).

## B. Nouvelle page `nos-produits/ouvre-portes.html`

Même gabarit `<head>` que `nos-produits/index.html` : mêmes feuilles de style
(`../css/normalize.css`, `webflow.css`, `et-voila.webflow.css`,
`slidex-custom.css`), `../js/includes-loader.js`, Crisp, favicons, WebFont.
Balises `<div id="header-placeholder"></div>` / `<div id="footer-placeholder">
</div>`, `../js/slidex-animations.js` et jQuery en fin de `<body>` comme sur
`index.html` de ce dossier.

Meta : `<title>`, description, canonical
`https://www.slidex.fr/nos-produits/ouvre-portes.html`, og/twitter cohérents avec
les autres pages du dossier.

Contenu :

1. **`.np-header` (foncé)** : sous-titre « Opérateurs de portes battantes »,
   `<h1>` « Ouvre-portes automatiques pour portes battantes », description
   (montage simple/double, bras compas ou coulisse, EN 16005 / TÜV SÜD / CE,
   −20/+50 °C), bouton « Accéder au configurateur » → `../connexion-inscription.html`.
   Lien retour « ← Nos produits » → `index.html`.
2. **Deux blocs produit** avec ancres `id="go-in-80"` et `id="go-in-350"` :
   visuel (même logique `<img>` + fallback SVG que les cartes), description,
   liste de specs clés.
3. **Tableau comparatif** : une ligne par caractéristique du tableau de contexte
   (porte max, alimentation, sortie, boîtier, poids, degré d'ouverture, vitesse
   ouv./ferm., temporisation, indice de protection, normes, bras, montage,
   température). Style de tableau scopé dans le `<style>` de la page ; conteneur
   `overflow-x:auto` pour le mobile.
4. **Section CTA** : réutiliser telle quelle la section `.np-cta` (« Besoin
   d'aide pour choisir ? ») de `nos-produits/index.html`.

CSS : tous les ajouts spécifiques (barre d'ancres, `.np-section-head`, `.np-grid`,
`.np-badge`/`np-card-badge` teal, tableau comparatif, blocs produit de la page
détail) vivent dans les balises `<style>` des pages concernées. `slidex-custom.css`
n'est pas modifié.

## C. Divers

- `sitemap.xml` : ajouter
  `<url><loc>https://www.slidex.fr/nos-produits/ouvre-portes.html</loc></url>`
  (mêmes champs que les entrées voisines).
- Noms d'images attendus : `images/go-in-80.png`, `images/go-in-350.png`
  (photo produit détourée, fond clair, cohérent avec `images/1V-SF-GA.png`).
  Fournis par SlideX après coup.

## D. Risques / points d'attention

- **Header chargé en JS** : la valeur de `scroll-margin-top` doit couvrir la
  hauteur réelle du header une fois injecté. Vérifier au navigateur ; ajuster si
  l'ancre atterrit trop haut/bas.
- **`id` en double** : la section support existante utilise déjà `id="support"`.
  Les nouveaux `id` (`portes`, `kits-renovation`, `ouvre-portes`) ne doivent
  entrer en collision avec aucun `id` existant de la page (à vérifier).
- **Fallback image** : le `onerror` ne doit se déclencher qu'une fois (pas de
  boucle) — retirer le handler après premier échec.
- **Cohérence responsive** : tester le passage 3→2→1 colonnes sur chaque section
  et le tableau comparatif sur mobile.
- Ce chantier est indépendant de la restructuration header (inline header) en
  cours par ailleurs, mais les deux touchent `nos-produits/index.html` : à
  rebaser/relire si l'autre chantier est mergé avant.

## E. Vérification

1. `git diff --stat` → `nos-produits/index.html` (modifié),
   `nos-produits/ouvre-portes.html` (nouveau), `sitemap.xml` (modifié).
2. Navigateur (`nos-produits/index.html`) : les 3 pills scrollent vers la bonne
   section avec un offset correct ; chaque section affiche son en-tête + sa
   grille ; les cartes Go in 80 / Go in 350 s'affichent avec le fallback SVG ;
   responsive 3/2/1 colonnes OK ; console sans erreur.
3. Navigateur (`nos-produits/ouvre-portes.html`) : header/footer chargés ;
   ancres `#go-in-80` / `#go-in-350` fonctionnelles ; tableau comparatif lisible
   et scrollable sur mobile ; CTA et lien retour OK ; console sans erreur.
4. Déposer temporairement un `go-in-80.png` factice → l'image remplace le
   fallback sans modif de code.

# SlideX — Design system extrait pour le thème PrestaShop "Slidex Shop"

Ce document recense ce qui a été trouvé **réellement dans le repo** `slidex-fixed`
(site institutionnel statique). Tout est sourcé (fichier + ligne) pour pouvoir
vérifier facilement. Une remarque importante est signalée en fin de document
(§6) sur la description "Apple clair" du hero produit — à lire avant d'utiliser
`.np-header`.

---

## 1. Palette de couleurs (valeurs réelles)

Le site n'a **pas** de bloc `:root` avec des variables de couleur (seule la
police est en variable, voir §2). Les couleurs sont des valeurs hex/rgba en
dur, répétées de façon cohérente à travers les pages. Voici les valeurs
réellement utilisées, regroupées par rôle :

| Rôle | Valeur | Où on la trouve |
|---|---|---|
| **Bleu accent (marque)** | `#2563eb` | `css/et-voila.webflow.css:160` (`--core--colors--primary--100`, source du bouton primaire) ; répété partout : liens, icônes, `.hl__btn--primary`, `.pd-feature` actif |
| Bleu accent — hover | `#1d4ed8` | `.hl__btn--primary:hover` (`css/slidex-custom.css:2002`) |
| **Navy foncé (texte titres + fond hero)** | `#0f172a` | Couleur de texte des titres (`.gamme__title`, `.np-solutions-title`…) ET premier ton du gradient de hero `.np-header` |
| Navy hero — 2ᵉ ton du gradient | `#162444` | `.np-header { background: linear-gradient(135deg, #0f172a 0%, #162444 100%); }` |
| Navy CTA (footer de page, plus sombre) | `#0a0f1e` → `#0f1f3d` | `.np-cta { background: linear-gradient(135deg, #0a0f1e 0%, #0f1f3d 100%); }` |
| Texte gris moyen (paragraphes) | `#64748b` | quasi tous les `__lead`, `__sub`, `__desc` |
| Texte gris clair (métadonnées) | `#94a3b8` | `.pd-doc-row-ext` |
| Bordures fines | `#e8edf5` | cartes, tableaux, `.pd-spec-list` |
| Bordures très fines / séparateurs | `#eef2f7`, `#eef1f6` | `.pd-table`, `.site-header` border-bottom |
| Fond gris très clair (cartes, tuiles) | `#f8fafc`, `#f2f2f4`, `#f6f8fb` | fonds de `.hl__media`, `.op-product-media`, `.pd-panel-section` |
| Fond teinté bleu très clair | `#eef4ff` | dégradé `.cfg__media` |
| Fond du footer (noir doux, pas du pur noir) | `#171717` | `includes/footer.html:1` |
| Texte blanc sur fond sombre — fort | `rgba(255,255,255,0.85)` | badges/kicker sur `.np-header` |
| Texte blanc sur fond sombre — moyen | `rgba(255,255,255,0.6)` | descriptions sur fond navy |
| Texte blanc sur fond sombre — faible | `rgba(255,255,255,0.4)` | mentions légales / proof sur fond navy |

**Pas de vert, orange, rouge en couleur de marque** — la seule couleur
d'accent du site est ce bleu `#2563eb`. Les seules exceptions ponctuelles
sont des badges d'état ("Disponible décembre 2026" en `#9a3412`, ambre/brun),
qui ne font pas partie de l'identité de marque, juste d'un statut produit.

---

## 2. Typographie

Le site **n'utilise aucune police externe (pas de Google Fonts)** — c'était
volontaire, un chargement de police "Onest" a été retiré du site :

```css
/* css/slidex-custom.css:4-9 */
:root {
  --core--font-family--primary-font: "Helvetica Neue", Helvetica, Arial, sans-serif;
  --core--font-family--secondary-font: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

Donc : **"Helvetica Neue", Helvetica, Arial, sans-serif** partout (titres et
corps de texte), système uniquement, aucun fichier de police à charger.

Conventions d'usage observées (répétées sur toutes les pages du site) :
- Grands titres (`h1`/`h2` de section) : `font-weight: 800`, `letter-spacing: -0.03em` à `-0.04em`, tailles en `clamp()` (ex. `clamp(2.6rem, 7.4vw, 5.25rem)`)
- Sous-titres/kickers (au-dessus des titres) : `font-size: 0.8–0.9rem`, `font-weight: 700`, `text-transform: uppercase`, `letter-spacing: 0.1–0.12em`, couleur bleue `#2563eb` (sur fond clair) ou blanc translucide (sur fond sombre)
- Paragraphes (`lead`, `desc`, `sub`) : `font-size: 0.9–1rem`, `line-height: 1.6–1.7`, couleur `#64748b`
- Boutons : `font-weight: 700`, `text-transform: uppercase` sur le bouton principal Webflow (`.primary-button`), mais **pas** d'uppercase sur les boutons de carte (`.hl__btn`)

---

## 3. Header institutionnel — HTML/CSS complet

Source : `includes/header.html` (injecté sur chaque page par `js/includes-loader.js`).

**Nav réelle du site** (à ne pas confondre avec ce qui était supposé dans la
demande — voir §6) : **Solutions / Ressources / Pour les pros**, + un CTA
"Configurer ma porte".

```html
<div class="header-wrapper w-nav site-header" role="banner">
  <div class="container-default w-container">
    <div class="site-header__bar">
      <a class="site-header__logo w-inline-block" href="index.html" aria-label="SlideX — accueil">Slide<span>X</span></a>
      <nav class="nav-menu-wrapper w-nav-menu site-header__nav" role="navigation">
        <ul class="list-nav-menu site-header__links" role="list">
          <li><a class="site-header__link" href="nos-produits/index.html">Solutions</a></li>
          <li><a class="site-header__link" href="blog/index.html">Ressources</a></li>
          <li><a class="site-header__link" href="partenaires-fabricant.html">Pour les pros</a></li>
        </ul>
        <a class="primary-button w-inline-block site-header__cta--mobile" href="connexion-inscription.html">
          <div>Configurer ma porte</div>
        </a>
      </nav>
      <div class="site-header__actions">
        <a class="primary-button w-inline-block site-header__cta" href="connexion-inscription.html">
          <div>Configurer ma porte</div>
          <div class="item-icon-right icon-right-circle">
            <div class="base-icon-font" style="display:flex;align-items:center;justify-content:center;">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><path d="M10 5L15 10L10 15" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
        </a>
        <div class="hamburger-menu w-nav-button" role="button" tabindex="0" aria-label="Ouvrir le menu" aria-expanded="false">
          <div class="hamburger-menu-flex">
            <div class="hamburger-menu-line top"></div>
            <div class="hamburger-menu-line middle"></div>
            <div class="hamburger-menu-line bottom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

CSS clé (extrait de `css/slidex-custom.css:412-553`) :

```css
.site-header.header-wrapper.w-nav {
  background: #ffffff !important;
  border-bottom: 1px solid #eef1f6 !important;
}
.site-header__bar { display: flex; align-items: center; justify-content: space-between; gap: 32px; min-height: 76px; }
.site-header__logo { font-size: 1.35rem; font-weight: 800; letter-spacing: -0.03em; color: #0f172a; text-decoration: none; }
.site-header__logo span { color: #2563eb; }
.site-header__link { padding: 10px 16px; border-radius: 10px; font-size: 0.95rem; font-weight: 600; color: #334155; }
.site-header__link:hover { background: #f1f5f9; color: #0f172a; }
.site-header__cta.primary-button { padding: 10px 14px 10px 18px !important; font-size: 0.9rem !important; box-shadow: 0 2px 6px 0 rgba(37, 99, 235, 0.22) !important; }
.hamburger-menu-line { width: 24px; height: 2px; border-radius: 2px; background: #0f172a; }
```

Bouton `.primary-button` (Webflow, `css/et-voila.webflow.css:3817`) : fond
`#2563eb`, texte blanc, `border-radius: 300px` (pilule), `uppercase`,
`font-weight: 700`, `box-shadow: 0 4px 8px rgba(37,99,235,~0.2)`.

---

## 4. Footer institutionnel — HTML/CSS complet

Source : `includes/footer.html`.

Structure en 4 colonnes sur fond `#171717` :
1. Logo + accroche ("La porte automatique des pros") + formulaire newsletter
2. Colonne liens : "Nos portes" (produits) + "Kit de rénovation" (marques) + "Export"
3. Colonne "AGENCES" (villes : Lyon, Grenoble, Marseille, Nice, Toulouse, Montpellier)
4. Colonne "Nous contacter" (email/tél) + "Nous trouver" (adresse)
5. Bas de page : mention groupe "My Motor" + icône LinkedIn

```html
<footer class="footer-v2 footer-large pd-top-large-v2" style="background-color: #171717;">
  <div class="w-layout-blockcontainer container-default w-container">
    <div class="w-layout-grid grid-4-columns gap-large footer-grid-v2">
      <!-- Col 1 : logo + accroche + newsletter -->
      <div>
        <a class="logo-link" href="index.html"><div class="display-5 strong text-light">SlideX</div></a>
        <p class="text-neutral">La porte automatique des pros</p>
        <!-- formulaire newsletter Webflow -->
      </div>
      <!-- Col 2 : Nos portes / Kit de rénovation / Export -->
      <div>
        <div class="display-5 strong text-light">Nos portes</div>
        <ul class="list-wrapper">
          <li><a href="product-detail.html">Un vantail</a></li>
          <li><a href="product-detail-2-vantaux.html">Deux vantaux</a></li>
          <li><a href="telescopique-bientot-disponible.html">Télescopique</a></li>
          <!-- + Kit de rénovation : Record / Dormakaba / Portalp / CITEC / SOFTICA -->
          <!-- + Export : Belgique & Luxembourg -->
        </ul>
      </div>
      <!-- Col 3 : AGENCES -->
      <div>
        <div class="display-5 strong text-light">AGENCES</div>
        <ul><li>Lyon</li><li>Grenoble</li><li>Marseille</li><li>Nice</li><li>Toulouse</li><li>Montpellier</li></ul>
      </div>
      <!-- Col 4 : Nous contacter / Nous trouver -->
      <div>
        <div class="display-5 strong text-light">Nous contacter</div>
        <a href="mailto:hello@slidex.fr">hello@slidex.fr</a>
        <a href="tel:04.38.49.43.16">04.38.49.43.16</a>
        <div class="display-5 strong text-light">Nous trouver</div>
        <div>2 rue raoul follereau 38180 - Seyssins</div>
      </div>
    </div>
    <div class="footer-bottom-v1">
      <p>Slide X, une société du groupe <a href="https://www.my-motor.fr/">My Motor</a></p>
      <!-- icône LinkedIn -->
    </div>
  </div>
</footer>
```

---

## 5. Composants réutilisables

### 5.1 Cartes produit / gamme (`.np-solutions-card` + `.hl__*`)

Utilisées sur la home et `nos-produits/index.html` pour présenter les 3
gammes. C'est le patron de carte le plus proche d'une "carte produit" sur
le site institutionnel :

```css
.np-solutions-card { position: relative; aspect-ratio: 10/7; border-radius: 24px; overflow: hidden; background: #f2f2f4; }
.hl__media { position: absolute; inset: 0; background-size: cover; background-position: center; background-color: #f2f2f4; }
.hl__copy {
  position: absolute; left: 0; right: 0; bottom: 0; padding: clamp(26px, 4vw, 48px);
  color: #fff;
  background: linear-gradient(to top, rgba(10,15,30,0.62) 0%, rgba(10,15,30,0.28) 45%, rgba(10,15,30,0) 88%);
}
.hl__kicker { font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.72); }
.hl__btn { display: inline-flex; padding: 9px 18px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; }
.hl__btn--primary { background: #2563eb; color: #fff; }
.hl__btn--ghost { background: #fff; color: #0f172a; }
```
→ Photo en fond de carte, dégradé sombre en bas pour la lisibilité du texte
blanc, titre + sous-titre + 1-2 boutons pilule.

### 5.2 Bouton CTA principal (`.primary-button`)

Le bouton utilisé partout sur le site (header, hero, CTA de fin de page) :
pilule (`border-radius: 300px`), fond `#2563eb`, texte blanc **uppercase**,
`font-weight: 700`, légère ombre bleutée, icône flèche circulaire à droite,
`hover` = juste une baisse d'opacité (`opacity: 0.88`, pas de scale/décalage).

### 5.3 Bande de réassurance (chiffres clés)

**Il n'existe pas un composant unique nommé "réassurance"** dans le repo —
il y a trois variantes du même concept, réutilisées à plusieurs endroits :

**a) Stats en ligne sur fond sombre** (`kits-renovation.html:81-98` et
`:290-303`), c'est le patron le plus proche de "60% économies / 72h /
6 marques" mentionné dans la demande :
```html
<div class="kr-hero-stats">
  <div><div class="kr-hero-stat-value">60%</div><div class="kr-hero-stat-label">d'économies</div></div>
  <div><div class="kr-hero-stat-value">72h</div><div class="kr-hero-stat-label">Expédition</div></div>
  <div><div class="kr-hero-stat-value">6</div><div class="kr-hero-stat-label">Marques compatibles</div></div>
</div>
```
```css
.kr-hero-stats { display: grid; grid-template-columns: repeat(3, auto); gap: 40px; }
.kr-hero-stat-value { font-size: clamp(1.6rem, 3vw, 2rem); font-weight: 800; color: #fff; }
.kr-hero-stat-label { margin-top: 4px; font-size: 0.82rem; color: rgba(255,255,255,0.5); }
```

**b) Grille de 4 stats en cases** (`nos-produits/index.html`, `.np-why-stats`) :
4 colonnes séparées par des filets de 1px sur fond navy (`12 jours` /
`Prêt à poser` / `10 ans` / `Support direct`).

**c) Carte "délai" isolée** (`index.html`, `.delai__card`) : "12 jours." en
très gros, avec une mini-timeline (Commande → Fabrication → Contrôle →
Expédition).

→ Pour le thème PrestaShop, j'ai retenu le patron **(a)**, le plus proche
d'une bande de réassurance e-commerce classique, et je l'ai branché sur le
hook natif PrestaShop `displayReassurance` (déjà utilisé par le thème
classic pour ça — voir §7, `product.tpl`).

### 5.4 Panneau produit à onglets (`.pd-panel` / `.pd-tabs`, `product-detail.html`)

Le composant le plus proche d'une fiche produit sur le site (Aperçu /
Description / Vitrage / Caractéristiques / Documentation) :

```css
.pd-panel-section { background: #f8fafc; padding: 56px 0; }
.pd-tabs { display: flex; border-bottom: 1px solid #e8edf5; }
.pd-tab[aria-selected="true"] { color: #0f172a; font-weight: 700; border-bottom-color: #0f172a; }
.pd-spec-list { border-top: 1px solid #e8edf5; }
.pd-spec-row { display: flex; justify-content: space-between; padding: 16px 2px; border-bottom: 1px solid #e8edf5; }
.pd-doc-row:hover { background: #f8fafc; }
.pd-glazing-chip[aria-pressed="true"] { border-color: #2563eb; box-shadow: 0 0 0 1px #2563eb; }
```
→ Repris pour habiller les onglets natifs PrestaShop (Description /
Caractéristiques / Avis) dans `product.tpl`, et le sélecteur de "chip"
(`.pd-glazing-chip`) comme référence visuelle pour les déclinaisons produit.

---

## 6. ⚠️ Remarque sur le "style Apple clair" (`.np-header`)

La demande mentionne *"le style 'Apple clair' du header/hero mentionné dans
les pages produits (`.np-header`)"*. En vérifiant le code réel :

**`.np-header` n'est pas clair — c'est un hero sombre** (dégradé navy
`#0f172a → #162444`, texte blanc), utilisé en haut de `nos-produits/index.html`,
`ouvre-porte-automatique-battante.html`, `kits-renovation.html` et
`accessoires-portes-automatiques.html`. Il n'y a **aucun** hero clair de ce
nom dans le repo.

```css
.np-header {
  background: linear-gradient(135deg, #0f172a 0%, #162444 100%);
  padding: 56px 0 52px;
  position: relative;
  overflow: hidden;
}
.np-header::after { /* liseré blanc arrondi en bas, transition vers le contenu clair */
  content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 40px;
  background: white; clip-path: ellipse(55% 100% at 50% 100%);
}
.np-header-title { color: #fff; font-size: clamp(2.1rem, 4vw, 3.25rem); font-weight: 800; }
.np-header-desc { color: rgba(255,255,255,0.62); }
.np-badge { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 100px; }
```

**J'ai donc reproduit fidèlement ce hero tel qu'il existe réellement (sombre,
navy, texte blanc)** dans `header.tpl` — c'est la seule version qui existe
dans le repo, et c'est cohérent avec le reste de l'identité (le `.np-cta`
final de chaque page est encore plus sombre). Si tu voulais spécifiquement un
hero **clair/blanc** façon Apple pour la boutique, dis-le-moi : ce serait une
nouvelle variante à créer, pas une reprise de l'existant.

---

## 7. Correspondance avec les 4 fichiers livrés

| Fichier | Reprend |
|---|---|
| `templates/slidex-brand.css` | Toutes les valeurs ci-dessus, en variables `--slidex-*` |
| `templates/_partials/header.tpl` | §3 (header) — nav adaptée à la boutique, hooks PS ajoutés sans rien supprimer |
| `templates/_partials/footer.tpl` | §4 (footer) — Agences/Contact repris à l'identique, "Nos portes" devient "Nos produits" |
| `templates/catalog/product.tpl` | §5.4 (panneau à onglets) + §5.3a (réassurance) habillant les blocs natifs PrestaShop |

---

## 8. Ce qu'il reste à faire manuellement (liste consolidée)

Chaque fichier contient déjà ses TODO en commentaire à l'endroit précis
concerné ; voici la même liste regroupée pour la vue d'ensemble.

**Assets à copier / déplacer**
- [ ] Déplacer `templates/slidex-brand.css` vers `themes/slidex-shop/assets/css/`
      (emplacement standard PrestaShop pour les CSS de thème) et l'enregistrer
      proprement via `actionRegisterStylesheets` dans le fichier module du
      thème, plutôt que le `<link>` direct actuellement dans `header.tpl`
      (fonctionnel pour démarrer, mais pas la méthode propre en prod).
- [ ] Copier les photos produit déjà utilisées sur le site institutionnel si
      elles doivent réapparaître dans la boutique (ex. les visuels des Go in,
      des portes 1/2 vantaux) vers le dossier d'images produit PrestaShop —
      ce ne sont **pas** les mêmes emplacements que `images/` du site vitrine.
- [ ] Ajouter un favicon/logo boutique si différent du favicon institutionnel.

**Identifiants à renseigner une fois créés dans le back-office**
- [ ] `id_category` : remplacé par le placeholder `2` (catégorie racine par
      défaut d'une install neuve) dans `header.tpl` (2 occurrences) et
      `footer.tpl` — à remplacer par l'id réel de la catégorie "Slidex Shop"
      une fois créée.
- [ ] Boucle catégories du footer (colonne "Nos produits") : actuellement un
      lien statique unique "Catalogue" — à remplacer par un vrai
      `{foreach}` sur les catégories/produits réels.
- [ ] Pages CMS légalement obligatoires pour une boutique en ligne (mentions
      légales, CGV, politique de confidentialité, droit de rétractation) —
      absentes du site vitrine (non nécessaires à une simple vitrine) mais
      requises ici. À créer dans le back-office puis lier via `displayFooter`
      (module `ps_linklist`), pas en dur dans le template.

**Modules à positionner dans Back-office > Modules > Positions**
- [ ] `ps_searchbar` → hook `displaySearch`
- [ ] `ps_customeraccountlink` + `ps_shoppingcart` (ou équivalents) → hook `displayNav2`
- [ ] `ps_reassurance` (ou équivalent) → hook `displayReassurance`, à
      configurer avec 3 items reprenant l'esprit "60% économies / 72h
      expédition / 6 marques" (adapter les libellés au catalogue réel, ex.
      "Expédition 72h / Paiement sécurisé / Support technique dédié").
- [ ] `ps_emailsubscription` (ou équivalent) → si le bloc newsletter du
      footer institutionnel doit être conservé.
- [ ] `ps_linklist` → pages CMS obligatoires (voir ci-dessus).

**Vérifications techniques avant mise en prod**
- [ ] Comparer les chemins d'`{include}` de `product.tpl`
      (`catalog/_partials/product-images.tpl`, `product-prices.tpl`,
      `product-add-to-cart.tpl`, `product-tabs.tpl`) avec ceux du thème
      classic-rocket réellement installé — ils sont corrects pour l'archi
      standard 1.7.6-1.7.8 mais peuvent différer selon la version exacte
      (voir l'avertissement en tête de `product.tpl`).
- [ ] Une fois les déclinaisons de démonstration/produits en place, observer
      le rendu natif du sélecteur de déclinaison PrestaShop dans le
      navigateur et adapter le CSS de `slidex-brand.css` à ses classes
      réelles pour se rapprocher du style `.pd-glazing-chip` du site
      institutionnel (non câblé automatiquement, car ces classes varient
      selon le type d'attribut — couleur, texte, radio…).
- [ ] Vérifier le JS du hamburger mobile natif du thème classic-rocket cible
      bien la classe `.hamburger-menu` utilisée dans `header.tpl`, ou
      adapter la classe à celle attendue par ce JS.
- [ ] Décider si le hero `.np-header` (sombre, voir §6) convient tel quel
      pour la boutique, ou si un hero clair spécifique doit être conçu — ce
      choix n'a pas pu être tranché ici car l'existant n'a que la version
      sombre.

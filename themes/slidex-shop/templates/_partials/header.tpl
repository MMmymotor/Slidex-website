{**
 * header.tpl — Thème "Slidex Shop" (PrestaShop 1.7.8, base classic-rocket)
 *
 * Reproduit le header institutionnel de slidex.fr (includes/header.html,
 * voir DESIGN-SYSTEM.md §3) en conservant TOUS les hooks natifs demandés :
 *   displayTop, displayNav1, displayNav2, displaySearch, displayNavFullWidth
 * Aucun hook n'a été retiré — ils sont simplement habillés visuellement
 * pour s'intégrer au design (voir slidex-brand.css).
 *
 * Légende des commentaires :
 *   [SITE] = repris tel quel du site institutionnel (classes, structure, copy)
 *   [PS]   = spécifique à l'intégration PrestaShop (hooks, variables Smarty,
 *            liens boutique)
 *
 * Remplace le _partials/header.tpl du thème classic-rocket.
 *}

{* [PS] Feuille de styles de marque — voir la note d'emplacement en tête
        de slidex-brand.css (TODO : l'enregistrer proprement via
        actionRegisterStylesheets plutôt qu'un <link> direct en prod). *}
<link rel="stylesheet" href="{$urls.theme_assets}css/slidex-brand.css">

{* [PS] Bannière/annonce en haut de page — hook natif, vide tant qu'aucun
        module n'y est accroché (ex. ps_banner, un module de promo maison). *}
{hook h='displayTop'}

<header id="header" class="site-header" role="banner">
  <div class="container-default">
    <div class="site-header__bar">

      {* [SITE] Logo — repris de includes/header.html:4. Le "Shop" est un
              ajout [PS] pour distinguer la boutique du site institutionnel ;
              à retirer si tu préfères un logo strictement identique. *}
      <a class="site-header__logo" href="{$urls.pages.index}" aria-label="SlideX Shop — accueil">
        Slide<span>X</span> <span class="site-header__logo-suffix">Shop</span>
      </a>

      {* [PS] Emplacement pour un bloc de navigation additionnel côté gauche
              (ex. un module "menu catégories" ou une info de service). *}
      <div class="site-header__nav1">
        {hook h='displayNav1'}
      </div>

      <nav class="site-header__nav" role="navigation" aria-label="Menu principal">
        <ul class="site-header__links" role="list">
          {* [PS] Nav adaptée à la boutique — le site institutionnel affiche
                  "Solutions / Ressources / Pour les pros", non pertinent
                  ici. Remplacer les liens ci-dessous une fois les
                  catégories/pages CMS réelles créées (voir TODO en bas). *}
          <li><a class="site-header__link" href="{$urls.pages.index}">Accueil</a></li>
          <li>
            {* TODO [PS] : remplacer 2 par l'id_category réel du catalogue
                    "Slidex Shop" une fois créé dans le back-office. *}
            <a class="site-header__link" href="{$link->getCategoryLink(2)}">Nos produits</a>
          </li>
          <li><a class="site-header__link" href="{$urls.pages.contact}">Contact</a></li>
        </ul>
      </nav>

      {* [PS] Barre de recherche — hook natif du module ps_searchbar. *}
      <div class="site-header__search">
        {hook h='displaySearch'}
      </div>

      <div class="site-header__actions">
        {* [PS] Compte client + mini-panier — accrochés nativement à
                displayNav2 (modules ps_customeraccountlink, ps_shoppingcart).
                Ne rien coder en dur ici : ce sont ces modules, configurés
                dans Back-office > Modules > Positions, qui remplissent
                ce hook. *}
        {hook h='displayNav2'}

        {* [SITE] CTA principal — classe .primary-button reprise à
                l'identique (pilule bleue, cf. slidex-brand.css). Sur le
                site institutionnel ce CTA ouvre le configurateur ; ici il
                pointe vers le catalogue. *}
        <a class="primary-button site-header__cta" href="{$link->getCategoryLink(2)}">
          <span>Voir les produits</span>
        </a>

        {* [SITE] Bouton hamburger mobile — markup simplifié (sans les
                data-attributes Webflow, inutiles hors export Webflow). *}
        <button class="hamburger-menu" type="button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mobile-menu">
          <span class="hamburger-menu-line top"></span>
          <span class="hamburger-menu-line middle"></span>
          <span class="hamburger-menu-line bottom"></span>
        </button>
      </div>
    </div>

    {* [PS] Bande pleine largeur sous la barre principale (fil d'Ariane,
            méga-menu, bannière promo…) — hook natif, vide par défaut. *}
    <div class="site-header__full-width">
      {hook h='displayNavFullWidth'}
    </div>
  </div>
</header>

{*
  ── TODO manuel (voir aussi la liste globale en fin de DESIGN-SYSTEM.md) ──
  1. Déplacer slidex-brand.css vers themes/slidex-shop/assets/css/ et
     l'enregistrer via le fichier module du thème (actionRegisterStylesheets)
     plutôt que le <link> direct ci-dessus (fonctionnel mais non "propre").
  2. Remplacer l'id_category "2" (placeholder = catégorie racine par défaut
     d'une install PrestaShop neuve) par l'id réel de la catégorie créée
     pour le catalogue Slidex Shop.
  3. Dans le Back-office, positionner les modules ps_searchbar (displaySearch),
     ps_customeraccountlink et ps_shoppingcart (displayNav2) : c'est ce qui
     remplit visuellement ces hooks, rien à coder ici.
  4. Le mobile-menu déclenché par .hamburger-menu n'a pas de JS ici — le
     thème classic-rocket gère nativement ce comportement via son propre
     mobile-menu.tpl / JS ; vérifier qu'il cible bien .hamburger-menu ou
     adapter la classe à celle attendue par ce JS natif.
*}

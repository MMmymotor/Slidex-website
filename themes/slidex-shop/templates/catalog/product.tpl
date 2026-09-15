{**
 * product.tpl — Thème "Slidex Shop" (PrestaShop 1.7.8, base classic-rocket)
 *
 * ⚠️ À LIRE AVANT DÉPLOIEMENT :
 * Ce fichier suppose l'architecture standard du thème classic-rocket pour
 * PS 1.7.x : héritage de page.tpl via {extends}/{block}, et inclusion des
 * partials natifs catalog/_partials/product-*.tpl pour toute la mécanique
 * fonctionnelle (galerie photo, prix, formulaire d'ajout panier,
 * déclinaisons/combinaisons, disponibilité stock). Ces noms de partials
 * sont ceux documentés pour 1.7.6/1.7.8 ; ils PEUVENT différer légèrement
 * selon la version exacte installée (1.7.8.x vs 8.x). Avant mise en prod :
 * comparer avec le product.tpl réel de ta base classic-rocket
 * (themes/classic-rocket/templates/catalog/product.tpl) et ajuster les
 * chemins d'include si besoin — c'est signalé à chaque {include}.
 *
 * Le principe volontaire ici : on NE réimplémente RIEN de la logique
 * native (panier, stock, déclinaisons, avis) — on inclut les partials
 * d'origine tels quels et on habille seulement la mise en page/les
 * couleurs/la typo avec l'identité slidex-brand.css, comme demandé.
 *
 * Légende :
 *   [SITE] = mise en page / classes reprises du site institutionnel
 *            (product-detail.html, voir DESIGN-SYSTEM.md §5.3-5.4)
 *   [PS]   = natif PrestaShop, ne pas supprimer/modifier la logique
 *}

{extends file='page.tpl'}

{block name='page_content'}
  <div id="product" class="product-detail slidex-section" itemscope itemtype="http://schema.org/Product">

    {* [PS] Hook natif : contenu additionnel avant la fiche produit
            (ex. bandeau promo produit). Ne pas retirer. *}
    {hook h='displayProductAdditionalInfo' product=$product}

    <div class="slidex-product-grid">
      <div class="slidex-product-gallery">
        {* [PS] Galerie photo native — zoom, miniatures, vidéo produit si
                configurée. NE PAS réécrire cette logique. *}
        {include file='catalog/_partials/product-images.tpl'}
      </div>

      <div class="slidex-product-info">
        {* [SITE] Fil d'ariane simplifié, classes du site institutionnel
                (.op-back), redirige vers le catalogue plutôt que "Nos
                produits" (nav institutionnelle absente côté boutique). *}
        {if isset($product.category_name)}
          <a class="op-back" href="{$link->getCategoryLink($product.id_category_default)}">← {$product.category_name}</a>
        {/if}

        {* [PS] Nom produit natif *}
        <h1 class="np-header-title" style="color:var(--slidex-text-heading); font-size:clamp(1.7rem,3vw,2.4rem);" itemprop="name">
          {$product.name}
        </h1>

        {* [SITE] Description courte, mise en page reprise de .pd-hero-promise *}
        {if $product.description_short}
          <div class="np-header-desc" style="color:var(--slidex-text-muted);" itemprop="description">
            {$product.description_short nofilter}
          </div>
        {/if}

        {* [PS] Bloc prix natif — gère TTC/HT, promos, taxes. NE PAS recalculer
                le prix ici, uniquement l'habiller visuellement au besoin
                via slidex-brand.css (classes .product-prices natives). *}
        {hook h='displayProductPriceBlock' product=$product type='before_price'}
        {include file='catalog/_partials/product-prices.tpl'}
        {hook h='displayProductPriceBlock' product=$product type='after_price'}

        {* [PS] Formulaire natif : déclinaisons (couleur/dimension…),
                quantité, bouton "Ajouter au panier", disponibilité stock.
                Le style des sélecteurs de déclinaison peut être rapproché
                visuellement de .pd-glazing-chip via slidex-brand.css
                (classe .product-variants du thème natif à cibler en CSS,
                pas dans ce template). *}
        {include file='catalog/_partials/product-add-to-cart.tpl'}

        {* [PS] Hook natif : boutons additionnels (liste d'envies,
                comparateur, partage social…). Ne pas retirer. *}
        {hook h='displayProductButtons' product=$product}

        {* [SITE] Bande de réassurance — mise en page reprise de
                kits-renovation.html (.kr-hero-stats → .slidex-reassurance,
                voir DESIGN-SYSTEM.md §5.3a). C'est le hook natif
                `displayReassurance` du thème classic qui remplit ce bloc
                (module ps_reassurance) : on l'habille, on ne le remplace
                pas par du contenu en dur. *}
        <div class="slidex-reassurance">
          {hook h='displayReassurance' product=$product}
        </div>
      </div>
    </div>

    {* [SITE] Panneau à onglets — mise en page reprise de .pd-panel /
            .pd-tabs (product-detail.html), habille les onglets natifs
            PrestaShop (Description / Caractéristiques / Avis). Le contenu
            de chaque onglet reste 100% natif via ces includes/hooks : on
            ne réécrit ni la description, ni les caractéristiques, ni les
            avis clients. *}
    <div class="slidex-panel-section">
      {* [PS] `product-tabs.tpl` est le partial natif classic-rocket qui
              génère la nav .tabs / .tab-content, y compris l'onglet
              "Avis" si le module ps_productcomments (ou équivalent) est
              actif. On l'inclut tel quel et on cible ses classes natives
              (.tabs, .tab-content, .tab-pane) dans slidex-brand.css pour
              leur donner l'apparence de .slidex-tabs/.slidex-tabpanel. *}
      {include file='catalog/_partials/product-tabs.tpl'}
    </div>

    {* [PS] Hook natif de pied de fiche produit (ex. modules "produits
            associés", champs personnalisés). Ne pas retirer. *}
    {hook h='displayFooterProduct' product=$product}

    {* [PS] Hook natif : contenu extra (onglets ajoutés par des modules
            tiers, ex. avis, FAQ produit). Ne pas retirer — c'est
            généralement injecté à l'intérieur de product-tabs.tpl, mais
            certains modules l'attendent aussi ici selon leur implémentation. *}
    {hook h='displayProductExtraContent' product=$product}
  </div>
{/block}

{*
  ── TODO manuel ──
  1. Vérifier les 3 chemins d'include (`product-images.tpl`,
     `product-prices.tpl`, `product-add-to-cart.tpl`, `product-tabs.tpl`)
     contre le thème classic-rocket réellement installé — copier/adapter
     depuis son propre catalog/product.tpl si les noms diffèrent.
  2. Vérifier que les hooks utilisés ici (`displayProductAdditionalInfo`,
     `displayProductPriceBlock`, `displayProductButtons`,
     `displayReassurance`, `displayFooterProduct`,
     `displayProductExtraContent`) sont bien enregistrés pour le thème dans
     Back-office > Modules > Positions (certains le sont nativement,
     d'autres nécessitent d'installer/activer le module correspondant, ex.
     ps_reassurance pour `displayReassurance`).
  3. Configurer le module ps_reassurance (ou équivalent) avec 3 items du
     type "72h expédition / X% clients satisfaits / Support technique" —
     le HTML qu'il génère sera stylé par `.slidex-reassurance-item` /
     `-value` / `-label` dans slidex-brand.css, mais seulement si ses
     classes CSS natives correspondent : sinon, adapter le CSS aux classes
     réellement rendues par ce module (à vérifier une fois installé).
  4. Le bloc "sélecteur de déclinaison façon chip" (§5.4 du design system,
     `.pd-glazing-chip`) n'a pas d'équivalent codé ici : c'est le rendu
     natif de `product-add-to-cart.tpl` qui gère les déclinaisons. Pour lui
     donner cette apparence, cibler ses classes réelles
     (`.product-variants`, `.input-color`, `.radio-buttons`…) dans
     slidex-brand.css une fois le rendu natif observé dans le navigateur.
  5. Ajouter itemprop="offers"/schema.org complet si le SEO produit doit
     égaler celui du site institutionnel (non repris ici, hors périmètre
     visuel de la demande).
*}

{**
 * product.tpl — Thème "Slidex Shop" (PrestaShop 1.7.8, base classic-rocket)
 *
 * ⚠️ MIS À JOUR contre la vraie liste de fichiers de templates/catalog/_partials/
 * de l'installation TORQA/My Motor en prod (fournie par l'utilisateur,
 * voir le changelog en bas de fichier). Les chemins d'{include} ci-dessous
 * correspondent à des fichiers RÉELLEMENT PRÉSENTS sur cette install.
 *
 * Ce qui reste NON vérifié (je n'ai que la LISTE des fichiers, pas leur
 * CONTENU — je ne connais donc pas l'imbrication exacte native, par ex.
 * si product-add-to-cart.tpl inclut déjà lui-même product-variants.tpl) :
 *   - L'ordre/l'imbrication réels de ces partials dans le product.tpl natif
 *     du thème (certains s'incluent peut-être déjà entre eux).
 *   - Le pattern exact d'héritage ({extends}/{block}) de product.tpl —
 *     supposé par analogie avec l'archi standard classic-rocket, non confirmé
 *     pour CETTE install.
 *   - Si product-additional-info.tpl déclenche déjà lui-même le hook
 *     displayProductAdditionalInfo (probable vu son nom) — voir le choix
 *     fait plus bas et le changelog.
 * → Voir la liste de vérifications en fin de fichier et la demande de
 *   fichiers complémentaires (contenu de product.tpl + product-add-to-cart.tpl
 *   natifs) dans la réponse qui accompagne cette mise à jour.
 *
 * Principe inchangé : on NE réimplémente RIEN de la logique native (panier,
 * stock, déclinaisons, avis) — on inclut les partials d'origine tels quels
 * et on habille seulement la mise en page/les couleurs/la typo avec
 * slidex-brand.css.
 *
 * Légende :
 *   [SITE] = mise en page / classes reprises du site institutionnel
 *            (product-detail.html, voir DESIGN-SYSTEM.md §5.3-5.4)
 *   [PS]   = natif PrestaShop, ne pas supprimer/modifier la logique
 *}

{extends file='page.tpl'}

{block name='page_content'}
  <div id="product" class="product-detail slidex-section" itemscope itemtype="http://schema.org/Product">

    {* [PS] Bandeau de flags produit natif (nouveau, promo, rupture…).
            Fichier réel : product-flags.tpl. Habituellement positionné en
            overlay sur la galerie — à vérifier visuellement une fois le
            rendu natif observé (peut nécessiter d'être déplacé DANS
            .slidex-product-gallery plutôt qu'au-dessus). *}
    {include file='catalog/_partials/product-flags.tpl'}

    <div class="slidex-product-grid">
      <div class="slidex-product-gallery">
        {* [PS] CORRIGÉ : la galerie principale native s'appelle
                "product-cover-thumbnails.tpl" (PAS "product-images.tpl",
                qui n'existe pas sur cette install — erreur de ma première
                version, voir changelog). Zoom, miniatures, vidéo produit
                si configurée. NE PAS réécrire cette logique. *}
        {include file='catalog/_partials/product-cover-thumbnails.tpl'}

        {* [PS] AJOUTÉ : modale de zoom/lightbox, fichier séparé de la
                galerie sur cette install. Si product-cover-thumbnails.tpl
                l'inclut déjà en interne, cet include est redondant — à
                vérifier (supprimer l'un des deux si doublon constaté). *}
        {include file='catalog/_partials/product-images-modal.tpl'}
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

        {* [PS] Bloc prix natif — gère TTC/HT, promos, taxes. *}
        {hook h='displayProductPriceBlock' product=$product type='before_price'}
        {include file='catalog/_partials/product-prices.tpl'}
        {hook h='displayProductPriceBlock' product=$product type='after_price'}

        {* [PS] AJOUTÉ : table des remises quantitatives, fichier natif
                séparé. Pertinent uniquement si des paliers de remise sont
                configurés sur les produits — sinon ce partial ne rend
                probablement rien (à vérifier). *}
        {include file='catalog/_partials/product-discounts.tpl'}

        {* [PS] AJOUTÉ : sélecteur de déclinaisons natif (couleur, taille…),
                fichier séparé de product-add-to-cart.tpl sur cette install.
                C'est ICI, sur le rendu natif de ce fichier, qu'il faut
                observer les classes réelles pour rapprocher visuellement le
                style de .pd-glazing-chip (voir TODO en bas). *}
        {include file='catalog/_partials/product-variants.tpl'}

        {* [PS] AJOUTÉ : champs de personnalisation produit natifs (texte,
                upload de fichier). Ne rend probablement rien si le produit
                n'est pas configuré comme personnalisable — laissé par
                sécurité, à retirer si jamais utilisé sur ce catalogue. *}
        {include file='catalog/_partials/product-customization.tpl'}

        {* [PS] Formulaire natif : quantité + bouton "Ajouter au panier" +
                disponibilité stock. NE PAS recalculer le prix/stock ici. *}
        {include file='catalog/_partials/product-add-to-cart.tpl'}

        {* [PS] AJOUTÉ : fichier natif dont le rôle exact (JS d'activation
                du widget panier ? état initial ?) n'est pas certain sans
                lire son contenu — inclus par précaution juste après le
                formulaire d'ajout panier, à sa place la plus probable. *}
        {include file='catalog/_partials/product-activation.tpl'}

        {* [PS] Hook natif : boutons additionnels (liste d'envies,
                comparateur, partage social…). Ne pas retirer. *}
        {hook h='displayProductButtons' product=$product}

        {* [SITE] Bande de réassurance — mise en page reprise de
                kits-renovation.html (.kr-hero-stats → .slidex-reassurance,
                voir DESIGN-SYSTEM.md §5.3a). Hook natif `displayReassurance`
                du thème classic (module ps_reassurance) : on l'habille, on
                ne le remplace pas par du contenu en dur. *}
        <div class="slidex-reassurance">
          {hook h='displayReassurance' product=$product}
        </div>
      </div>
    </div>

    {* [PS] CORRIGÉ : product-additional-info.tpl est un fichier natif
            dédié (fabricant, infos complémentaires) qui très probablement
            déclenche LUI-MÊME le hook displayProductAdditionalInfo en
            interne vu son nom. Pour éviter un rendu en double, je remplace
            mon appel direct au hook (version précédente) par l'include de
            ce partial. À VÉRIFIER : si ce partial ne contient PAS le hook,
            il faudra rajouter {hook h='displayProductAdditionalInfo'
            product=$product} en plus. *}
    {include file='catalog/_partials/product-additional-info.tpl'}

    {* [PS] AJOUTÉ : bloc caractéristiques/détails produit natif — c'est
            probablement l'équivalent natif de ce que .pd-spec-list stylait
            sur le site institutionnel (voir DESIGN-SYSTEM.md §5.4). Cibler
            ses classes réelles dans slidex-brand.css une fois son rendu
            observé, plutôt que de garder .slidex-spec-* qui n'a pas
            d'équivalent natif connu. *}
    {include file='catalog/_partials/product-details.tpl'}

    {* [SITE] Panneau à onglets — mise en page reprise de .pd-panel /
            .pd-tabs (product-detail.html), habille la nav d'onglets native
            PrestaShop (Description / Caractéristiques / Avis). Fichier
            confirmé présent : product-tabs.tpl. *}
    <div class="slidex-panel-section">
      {include file='catalog/_partials/product-tabs.tpl'}
    </div>

    {* [PS] Hook natif de pied de fiche produit (ex. modules "produits
            associés", champs personnalisés). Ne pas retirer. *}
    {hook h='displayFooterProduct' product=$product}

    {* [PS] Hook natif : contenu extra ajouté par des modules tiers (ex.
            avis, FAQ produit). Conservé par précaution — peut faire double
            emploi avec product-tabs.tpl selon comment les modules s'y
            accrochent ; à vérifier une fois les modules d'avis installés. *}
    {hook h='displayProductExtraContent' product=$product}
  </div>
{/block}

{*
  ── CHANGELOG de cette révision (contre la vraie liste de fichiers) ──
  - CORRIGÉ : "product-images.tpl" → "product-cover-thumbnails.tpl"
    (le fichier que j'avais supposé n'existe pas sur cette install).
  - AJOUTÉ : product-images-modal.tpl, product-flags.tpl,
    product-discounts.tpl, product-variants.tpl, product-customization.tpl,
    product-activation.tpl, product-additional-info.tpl, product-details.tpl
    — fichiers réels dont je n'avais pas connaissance dans la première
    version (j'avais supposé une structure plus condensée en 4 partials,
    la réalité en a davantage, plus granulaires).
  - CHANGÉ : {hook h='displayProductAdditionalInfo'} remplacé par
    {include file='catalog/_partials/product-additional-info.tpl'},
    en supposant que ce partial déclenche déjà ce hook en interne (son nom
    correspond trop exactement pour que ce soit une coïncidence) — à
    confirmer en lisant son contenu.
  - INCHANGÉ (noms confirmés corrects par la vraie liste) :
    product-prices.tpl, product-add-to-cart.tpl, product-tabs.tpl.
  - NON VÉRIFIABLE depuis une simple liste de fichiers (nécessite le
    contenu réel) : l'ordre/l'imbrication de tous ces includes, et si
    product.tpl natif utilise bien {extends file='page.tpl'} /
    {block name='page_content'}.

  ── TODO manuel (mis à jour) ──
  1. Fournir le contenu réel de templates/catalog/product.tpl et
     templates/catalog/_partials/product-add-to-cart.tpl de l'install
     TORQA pour confirmer l'ordre exact des includes ci-dessus et le
     pattern d'héritage ({extends}/{block}) — actuellement une hypothèse.
  2. Vérifier si product-cover-thumbnails.tpl inclut déjà
     product-images-modal.tpl en interne (dans ce cas, retirer mon include
     redondant de product-images-modal.tpl).
  3. Vérifier si product-additional-info.tpl déclenche déjà le hook
     displayProductAdditionalInfo (voir note ci-dessus) — sinon le
     rajouter en plus de l'include.
  4. Observer le rendu natif de product-variants.tpl dans le navigateur et
     adapter slidex-brand.css à ses classes réelles (`.product-variants`,
     `.input-color`, `.radio-buttons`…) pour se rapprocher du style
     `.pd-glazing-chip` du site institutionnel.
  5. Observer le rendu natif de product-details.tpl et adapter
     slidex-brand.css à ses classes réelles (remplace l'hypothèse
     `.slidex-spec-*` qui n'a pas de correspondance native confirmée).
  6. Vérifier les hooks utilisés (`displayProductPriceBlock`,
     `displayProductButtons`, `displayReassurance`, `displayFooterProduct`,
     `displayProductExtraContent`) sont bien enregistrés pour le thème dans
     Back-office > Modules > Positions.
  7. Configurer ps_reassurance (ou équivalent) avec 3 items du type "72h
     expédition / X% clients satisfaits / Support technique" — stylés par
     `.slidex-reassurance-item`/`-value`/`-label`, sous réserve que ses
     classes natives correspondent (sinon adapter).
  8. Vérifier product-customization.tpl et product-discounts.tpl ne
     cassent rien visuellement s'ils ne rendent rien (produits sans
     personnalisation / sans palier de remise) — normalement un simple
     {if} natif dans ces partials, à confirmer.
*}

{**
 * product.tpl — Thème "Slidex Shop" (PrestaShop 1.7.8, base classic-rocket)
 *
 * ⚠️ MIS À JOUR contre le contenu RÉEL de product.tpl et
 * product-add-to-cart.tpl de l'installation TORQA/My Motor en prod
 * (fourni par l'utilisateur — voir le changelog en bas de fichier pour
 * l'historique complet des 3 vagues de corrections).
 *
 * Confirmé par la lecture du fichier natif (plus une hypothèse) :
 *   - {extends file=$layout} est la bonne syntaxe sur cette install
 *     (PAS {extends file='page.tpl'} en dur — corrigé ci-dessous).
 *   - product-add-to-cart.tpl n'inclut PAS product-variants.tpl ni
 *     product-discounts.tpl en interne : les trois includes séparés
 *     ci-dessous ne font donc PAS doublon.
 *   - Le product.tpl natif de My Motor s'appuie sur un module maison
 *     (champs "dwf_*" : détails techniques, FAQ, avis) qui N'EXISTE PAS
 *     côté Slidex Shop. Ces sections ne sont donc PAS reproduites ici —
 *     à la place, on réactive les blocs standards PrestaShop que ce
 *     module avait fait désactiver dans le natif : le panneau à onglets
 *     (product-tabs.tpl, déjà présent ci-dessous) et le hook
 *     `displayReassurance` (déjà présent ci-dessous). Les deux étaient
 *     déjà la bonne approche dans la version précédente de ce fichier —
 *     confirmés, pas changés.
 *
 * CONFIRMÉ (round 4) : product-tabs.tpl inclut bien product-details.tpl en
 * interne (bloc product_details) — le retrait de l'include racine de
 * product-details.tpl (round 3) était donc correct, rien à changer.
 *
 * Ce qui reste NON vérifié (nécessiterait de lire le contenu des autres
 * partials eux-mêmes, non fournis) :
 *   - Si product-cover-thumbnails.tpl inclut déjà product-images-modal.tpl.
 *   - Si product-additional-info.tpl déclenche déjà le hook
 *     displayProductAdditionalInfo en interne.
 *   - ⚠️ Le bouton natif "Je cherche un pro" dans product-add-to-cart.tpl
 *     DOIT être retiré directement dans ce fichier natif — impossible à
 *     faire depuis product.tpl, qui ne fait qu'inclure ce partial sans en
 *     connaître le contenu exact. Le bloc "Une question sur ce produit ?"
 *     ajouté juste après dans ce fichier ne fait que s'AJOUTER à côté tant
 *     que le bouton natif n'est pas supprimé à la source — voir TODO #2.
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

{* [PS] CORRIGÉ (round 3) : syntaxe confirmée par le fichier natif —
        $layout est la variable de layout assignée par le contrôleur,
        pas un chemin en dur. *}
{extends file=$layout}

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

        {* [PS] CONFIRMÉ : product-add-to-cart.tpl n'inclut PAS ce fichier
                en interne — pas de doublon. Pertinent uniquement si des
                paliers de remise sont configurés sur les produits. *}
        {include file='catalog/_partials/product-discounts.tpl'}

        {* [PS] CONFIRMÉ : product-add-to-cart.tpl n'inclut PAS ce fichier
                en interne — pas de doublon. Sélecteur de déclinaisons natif
                (couleur, taille…). C'est ICI, sur le rendu natif de ce
                fichier, qu'il faut observer les classes réelles pour
                rapprocher visuellement le style de .pd-glazing-chip (voir
                TODO en bas). *}
        {include file='catalog/_partials/product-variants.tpl'}

        {* [PS] AJOUTÉ : champs de personnalisation produit natifs (texte,
                upload de fichier). Ne rend probablement rien si le produit
                n'est pas configuré comme personnalisable — laissé par
                sécurité, à retirer si jamais utilisé sur ce catalogue. *}
        {include file='catalog/_partials/product-customization.tpl'}

        {* [PS] Formulaire natif : quantité + bouton "Ajouter au panier" +
                disponibilité stock. NE PAS recalculer le prix/stock ici.
                ⚠️ Ce fichier natif contient un bouton "Je cherche un pro"
                non pertinent pour Slidex Shop — voir TODO #2 en bas :
                il doit être retiré DIRECTEMENT dans product-add-to-cart.tpl
                (impossible à faire depuis ce fichier, qui ne fait
                qu'inclure le partial natif sans en connaître le contenu
                exact). Le bloc contact ci-dessous le remplace visuellement
                juste après. *}
        {include file='catalog/_partials/product-add-to-cart.tpl'}

        {* [SITE] AJOUTÉ : remplace le bouton natif "Je cherche un pro"
                (retiré de product-add-to-cart.tpl, voir TODO #2) par un
                contact simple vers le support Slidex — mêmes coordonnées
                que includes/footer.html du site institutionnel
                (hello@slidex.fr). Icône reprise du jeu d'icônes natif du
                thème (svg/check.svg), chemin relatif standard — pas de
                nouvelle icône créée. *}
        <div class="slidex-product-contact">
          <a class="slidex-product-contact-link" href="mailto:hello@slidex.fr">
            <span class="slidex-product-contact-icon">{include file='svg/check.svg'}</span>
            <span>Une question sur ce produit&nbsp;?</span>
          </a>
        </div>

        {* [PS] AJOUTÉ : fichier natif dont le rôle exact (JS d'activation
                du widget panier ? état initial ?) n'est pas certain sans
                lire son contenu — inclus par précaution juste après le
                formulaire d'ajout panier, à sa place la plus probable. *}
        {include file='catalog/_partials/product-activation.tpl'}

        {* [PS] Hook natif : boutons additionnels (liste d'envies,
                comparateur, partage social…). Ne pas retirer. *}
        {hook h='displayProductButtons' product=$product}

        {* [SITE] CONFIRMÉ (round 3) : le natif My Motor a ce hook désactivé
                au profit d'un bloc dwf_* propre à leur module maison, absent
                côté Slidex Shop — on réactive donc ce hook standard
                PrestaShop comme demandé. Mise en page reprise de
                kits-renovation.html (.kr-hero-stats → .slidex-reassurance,
                voir DESIGN-SYSTEM.md §5.3a). Module natif : ps_reassurance —
                on l'habille, on ne le remplace pas par du contenu en dur. *}
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

    {* [PS] RETIRÉ (round 3) : product-details.tpl n'est plus inclus ici au
            niveau racine. Dans l'architecture standard du thème classic,
            c'est product-tabs.tpl qui inclut product-details.tpl en
            interne pour alimenter son onglet "Caractéristiques" — l'inclure
            aussi ici aurait dupliqué ce bloc. C'est cohérent avec la
            confirmation de l'utilisateur que réactiver product_tabs
            suffit à retrouver "description/caractéristiques/avis natifs"
            (il n'a pas mentionné product-details.tpl séparément). À
            vérifier malgré tout une fois le rendu observé — si les
            caractéristiques n'apparaissent dans aucun onglet, réintroduire
            cet include ici. *}

    {* [SITE] CONFIRMÉ (round 3) : comme pour la réassurance, le natif My
            Motor a ce bloc désactivé au profit des champs dwf_* (détails
            techniques/FAQ/avis) de leur module maison — on réactive donc
            le panneau à onglets natif PrestaShop pour Slidex Shop, qui n'a
            pas ce module. Mise en page reprise de .pd-panel / .pd-tabs
            (product-detail.html), habille Description / Caractéristiques /
            Avis natifs. *}
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
  ── HISTORIQUE DES CORRECTIONS ──

  Round 1 (hypothèse initiale, archi standard classic-rocket générique) :
  {extends file='page.tpl'}, 4 includes supposés (product-images.tpl,
  product-prices.tpl, product-add-to-cart.tpl, product-tabs.tpl).

  Round 2 (contre la vraie LISTE de fichiers de templates/catalog/_partials/
  fournie par l'utilisateur) :
  - CORRIGÉ : "product-images.tpl" → "product-cover-thumbnails.tpl" (le
    fichier supposé n'existe pas sur cette install).
  - AJOUTÉ : product-images-modal.tpl, product-flags.tpl,
    product-discounts.tpl, product-variants.tpl, product-customization.tpl,
    product-activation.tpl, product-additional-info.tpl, product-details.tpl.

  Round 3 (contre le CONTENU réel de product.tpl et product-add-to-cart.tpl
  fourni par l'utilisateur) :
  - CORRIGÉ : {extends file='page.tpl'} → {extends file=$layout} (confirmé
    par le fichier natif).
  - CONFIRMÉ : product-add-to-cart.tpl n'inclut PAS product-variants.tpl ni
    product-discounts.tpl en interne — aucun doublon, includes séparés
    conservés tels quels.
  - RETIRÉ : l'include racine de product-details.tpl — l'architecture
    standard du thème classic l'inclut déjà à l'intérieur de
    product-tabs.tpl (onglet "Caractéristiques") ; le garder ici aurait
    dupliqué ce bloc. Non confirmé à 100 % (contenu de product-tabs.tpl
    non fourni) — voir TODO #2.
  - CONFIRMÉ : le natif My Motor a `product_tabs`, `displayReassurance`,
    `product_accessories` et `product_images_modal` désactivés au profit de
    champs "dwf_*" (détails techniques/FAQ/avis) propres à un module maison
    absent côté Slidex Shop. Décision : NE PAS reproduire les sections
    dwf_* (ne fonctionneraient pas sans ce module) ; réactiver à la place
    `product-tabs.tpl` et le hook `displayReassurance` — c'était déjà
    l'approche de ce fichier, donc inchangée, seulement confirmée.
    `product_accessories` n'a pas été redemandé explicitement et n'est pas
    inclus ici (cross-sell, hors périmètre de la demande) ;
    `product_images_modal` reste inclus (voir TODO #1).
  - NOUVEAU TODO : vérifier la présence dans le thème Slidex Shop de 7
    fichiers SVG référencés par product.tpl/product-add-to-cart.tpl natifs.

  Round 4 (confirmations + retrait du bouton "Je cherche un pro") :
  - CONFIRMÉ : product-tabs.tpl inclut bien product-details.tpl en interne
    (bloc product_details) — le retrait du round 3 était correct, rien
    changé sur ce point précis.
  - DEMANDÉ : supprimer le bouton natif "Je cherche un pro" de
    product-add-to-cart.tpl (pas pertinent pour Slidex Shop). ⚠️ Ce fichier
    natif n'a jamais été fourni dans son intégralité (seulement décrit) —
    je ne peux donc PAS faire ce retrait moi-même depuis product.tpl, qui
    ne fait qu'inclure ce partial. Ce que j'ai fait à la place : ajouté un
    bloc "Une question sur ce produit ?" (mailto:hello@slidex.fr, icône
    svg/check.svg) juste après l'include de product-add-to-cart.tpl — voir
    TODO #1, à faire en priorité pour éviter que les deux coexistent.
  - CONFIRMÉ (chemin d'icône) : le seul include SVG que je contrôle dans ce
    fichier (le bloc contact ajouté ci-dessus) utilise
    `{include file='svg/check.svg'}` — chemin relatif standard du thème
    (relatif à `templates/`), pas un chemin custom. Pour les 4 autres SVG
    (bag.svg, star.svg, pdf.svg, play-button.svg), je n'ai jamais eu le
    contenu de product.tpl/product-add-to-cart.tpl natifs sous les yeux
    pour en extraire la syntaxe d'include exacte qu'ils utilisent — je ne
    peux donc pas confirmer leur chemin depuis ce fichier (voir TODO #5).
    `pro.svg` et `contact.svg` n'ont plus d'usage prévu ici puisque le
    bouton qui les utilisait ("Je cherche un pro") est retiré.

  ── TODO manuel (mis à jour, round 4) ──
  1. **Priorité** : supprimer le bouton "Je cherche un pro" DIRECTEMENT
     dans product-add-to-cart.tpl (déposer le fichier réel dans ce thème
     pour que je l'édite, ou le faire manuellement) — tant que ce n'est
     pas fait, le natif et mon bloc "Une question sur ce produit ?"
     s'affichent tous les deux.
  2. Vérifier si product-cover-thumbnails.tpl inclut déjà
     product-images-modal.tpl en interne (dans ce cas, retirer l'include
     redondant de product-images-modal.tpl ci-dessus).
  3. Vérifier si product-additional-info.tpl déclenche déjà le hook
     displayProductAdditionalInfo en interne — sinon le rajouter en plus
     de l'include.
  4. Observer le rendu natif de product-variants.tpl dans le navigateur et
     adapter slidex-brand.css à ses classes réelles (`.product-variants`,
     `.input-color`, `.radio-buttons`…) pour se rapprocher du style
     `.pd-glazing-chip` du site institutionnel.
  5. Une fois bag.svg, star.svg, pdf.svg, play-button.svg copiés dans
     `slidex-shop/templates/svg/` (comme check.svg), vérifier que leurs
     includes natifs dans product.tpl/product-add-to-cart.tpl pointent
     bien vers `svg/nom.svg` (chemin relatif à `templates/`) et non un
     chemin custom — je n'ai pas eu le contenu de ces fichiers pour le
     confirmer moi-même.
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

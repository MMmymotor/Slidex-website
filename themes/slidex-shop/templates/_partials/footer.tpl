{**
 * footer.tpl — Thème "Slidex Shop" (PrestaShop 1.7.8, base classic-rocket)
 *
 * Reproduit le footer institutionnel de slidex.fr (includes/footer.html,
 * voir DESIGN-SYSTEM.md §4), en conservant les hooks natifs demandés :
 *   displayFooterBefore, displayFooter
 * Aucun hook n'a été retiré.
 *
 * Légende :
 *   [SITE] = repris tel quel du site institutionnel (contenu réel : agences,
 *            coordonnées, structure des colonnes)
 *   [PS]   = spécifique à l'intégration PrestaShop
 *
 * Remplace le _partials/footer.tpl du thème classic-rocket.
 *}

{* [PS] Emplacement avant le footer (bandeau réassurance additionnel,
        logos paiement, etc. si un module s'y accroche). *}
{hook h='displayFooterBefore'}

<footer class="slidex-footer" role="contentinfo">
  <div class="container-default">
    <div class="slidex-footer-grid">

      {* [SITE] Colonne 1 : logo + accroche — includes/footer.html:4-16.
              Le formulaire newsletter Webflow n'est pas repris tel quel :
              en PrestaShop, c'est le module natif de newsletter (ps_emailsubscription)
              qui doit être hooké ici plutôt que recoder un formulaire. *}
      <div>
        <a class="site-header__logo" href="{$urls.pages.index}" style="color:#fff;">
          Slide<span style="color:var(--slidex-primary);">X</span>
        </a>
        <p class="slidex-footer-tagline">La porte automatique des pros</p>
        {* TODO [PS] : positionner ps_emailsubscription (ou équivalent) ici
                si tu veux garder le bloc newsletter du site institutionnel. *}
      </div>

      {* [SITE] Colonne 2 : "Nos portes" → renommée "Nos produits" pour la
              boutique. Les sous-catégories (marques de rénovation, export)
              n'ont de sens que si le catalogue Slidex Shop les reprend :
              à adapter selon les produits réellement mis en vente. *}
      <div>
        <h4>Nos produits</h4>
        <ul>
          {* TODO [PS] : remplacer ces liens statiques par une boucle sur les
                  catégories/produits réels une fois créés, par ex. :
                  {foreach from=$categories item=category}
                    <li><a href="{$link->getCategoryLink($category)}">{$category.name}</a></li>
                  {/foreach} *}
          <li><a href="{$link->getCategoryLink(2)}">Catalogue</a></li>
        </ul>
      </div>

      {* [SITE] Colonne 3 : "AGENCES" — reprise à l'identique, ce sont des
              informations institutionnelles réelles (villes où l'entreprise
              est implantée), toujours pertinentes pour une boutique de la
              même société. Source : includes/footer.html:117-136. *}
      <div>
        <h4>Agences</h4>
        <ul>
          <li>Lyon</li>
          <li>Grenoble</li>
          <li>Marseille</li>
          <li>Nice</li>
          <li>Toulouse</li>
          <li>Montpellier</li>
        </ul>
      </div>

      {* [SITE] Colonne 4 : contact + adresse — includes/footer.html:139-182,
              reprise à l'identique (mêmes coordonnées que le site
              institutionnel, c'est la même société). *}
      <div>
        <h4>Nous contacter</h4>
        <ul>
          <li><a href="mailto:hello@slidex.fr">hello@slidex.fr</a></li>
          <li><a href="tel:0438494316">04 38 49 43 16</a></li>
        </ul>
        <h4 style="margin-top:24px;">Nous trouver</h4>
        <p style="margin:0;">2 rue Raoul Follereau<br>38180 Seyssins</p>
      </div>
    </div>

    {* [PS] Emplacement pour les blocs additionnels natifs PrestaShop non
            couverts par la maquette institutionnelle : moyens de paiement,
            liens CMS (mentions légales, CGV — obligatoires en e-commerce et
            absents du site vitrine), sélecteur de langue/devise. *}
    <div class="slidex-footer-hooks">
      {hook h='displayFooter'}
    </div>

    {* [SITE] Bas de page : mention du groupe + réseau social —
            includes/footer.html:185-194, reprise à l'identique. *}
    <div class="slidex-footer-bottom">
      <p style="margin:0;">Slidex Shop, une société du groupe <a href="https://www.my-motor.fr/" target="_blank" rel="noopener">My Motor</a></p>
      <a class="slidex-footer-social" href="https://www.linkedin.com/company/slidex" target="_blank" rel="noopener" aria-label="SlideX sur LinkedIn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
        </svg>
      </a>
    </div>
  </div>
</footer>

{*
  ── TODO manuel ──
  1. Positionner ps_emailsubscription (ou retirer le TODO du bloc newsletter
     si la boutique n'a pas besoin d'inscription email).
  2. Remplacer la boucle catégories placeholder (colonne "Nos produits") une
     fois le catalogue créé.
  3. Ajouter les pages CMS obligatoires (mentions légales, CGV, politique de
     confidentialité, droit de rétractation) — absentes du site institutionnel
     car non nécessaires à une vitrine, mais légalement requises pour une
     boutique en ligne. Les accrocher via displayFooter (ps_linklist) plutôt
     que les coder en dur.
  4. Vérifier avec le service juridique/comptable si les mentions légales du
     site institutionnel (SIRET, etc.) doivent apparaître aussi ici.
*}

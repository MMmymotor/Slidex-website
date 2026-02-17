#!/usr/bin/env python3
"""
Script pour uniformiser tous les footers du site SlideX avec le format de référence.
Background: #171717, classes: footer-v2 footer-large pd-top-large-v2
"""

import os
import re
from pathlib import Path

# Footer de référence (depuis blog/porte-telescopique-3-vantaux-avant-premiere.html)
FOOTER_REFERENCE = '''    <footer class="footer-v2 footer-large pd-top-large-v2" style="background-color: #171717;">
      <div class="w-layout-blockcontainer container-default w-container">
        <div class="w-layout-grid grid-4-columns gap-large footer-grid-v2">
          <div id="w-node-_4f08d2cd-5c61-64e6-3cc5-bddc030e84a7-57241a43">
            <div class="inner-container _340px---mbp">
              <div class="logo-wrapper _42px">
                <a class="logo-link w-inline-block" href="INDEX_PATH">
                  <div class="display-5 strong text-light" style="white-space: nowrap; text-decoration: none;">SlideX</div>
                </a>
              </div>
            </div>
            <div class="mg-top-small mg-top-16px---mbl">
              <div class="inner-container _340px">
                <p class="text-neutral" data-w-id="4f08d2cd-5c61-64e6-3cc5-bddc030e84aa">La porte automatique des pros</p>
              </div>
            </div>
            <div class="mg-top-default mg-top-24px---mbl">
              <div class="inner-container _340px _100-tablet">
                <div class="footer-form-v1-block w-form" data-w-id="4f08d2cd-5c61-64e6-3cc5-bddc030e84b1">
                  <form data-name="Footer Form" data-wf-element-id="4f08d2cd-5c61-64e6-3cc5-bddc030e84b2" data-wf-page-id="6799d9a3630f757829978fbc" id="wf-form-Footer-Form" method="get" name="wf-form-Footer-Form">
                    <div class="overflow-hidden">
                      <div class="display-5 strong text-light" data-w-id="4f08d2cd-5c61-64e6-3cc5-bddc030e84ae">Inscrivez-vous &amp; restez connecté </div>
                    </div>
                    <div class="mg-top-small">
                      <div class="input-wrapper"><input class="input dark-mode large icon-right w-input" data-name="Email" id="email-footer" maxlength="256" name="Email" placeholder="Enter your email" required="" type="email"/>
                        <div class="primary-button form-button-v1 large"><input class="icon-font-rounded form-button large w-button" data-wait="" type="submit" value=""/></div>
                      </div>
                    </div>
                  </form>
                  <div class="success-message-wrapp w-form-done">
                    <div class="flex-horizontal justify-start">
                      <div class="mg-right-extra-small">
                        <div class="icon-font-rounded success-message-icon icon-small"></div>
                      </div>
                      <div class="text-light">
                        <div class="display-2 mid">Thanks for joining <span class="text-no-wrap">our newsletter.</span><br/></div>
                      </div>
                    </div>
                  </div>
                  <div class="error-message-wrapper w-form-fail">
                    <div>Oops! Something <span class="text-no-wrap">went wrong.</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_4f08d2cd-5c61-64e6-3cc5-bddc030e84c2-57241a43">
            <div class="mg-bottom-medium">
              <div class="overflow-hidden title-wrap">
                <div class="display-5 strong text-light" data-w-id="4f08d2cd-5c61-64e6-3cc5-bddc030e84c4" style="font-size: calc(1em + 2px);">Nos portes</div>
              </div>
            </div>
            <div class="w-layout-grid grid-1-column footer-grid-v2">
              <ul class="list-wrapper" data-w-id="4f08d2cd-5c61-64e6-3cc5-bddc030e84c7" role="list" style="font-size: calc(1em + 1px);">
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="PRODUCT_DETAIL_PATH">
                    <div class="display-3">Un vantail</div>
                  </a>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="PRODUCT_DETAIL_2_PATH">
                    <div class="display-3">Deux vantaux</div>
                  </a>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="TELESCOPIQUE_PATH">
                    <div class="display-3">Télescopique</div>
                  </a>
                </li>
                <li class="list-item" style="margin-top: 24px; margin-bottom: 16px;">
                  <div class="display-5 strong text-light" style="font-size: calc(1em + 2px);">Kit de rénovation</div>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="KITS_RECORD_PATH">
                    <div class="display-3">Record</div>
                  </a>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="KITS_DORMAKABA_PATH">
                    <div class="display-3">Dormakaba</div>
                  </a>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="KITS_PORTALP_PATH">
                    <div class="display-3">Portalp</div>
                  </a>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="KITS_CITEC_PATH">
                    <div class="display-3">CITEC</div>
                  </a>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="KITS_SOFTICA_PATH">
                    <div class="display-3">SOFTICA</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-layout-grid grid-1-column align-top footer-contact-grid">
            <div>
              <div class="overflow-hidden title-wrap">
                <div class="w-layout-grid grid-auto-1fr">
                  <div><img alt="Location Icon" loading="eager" src="IMAGES_PATH/location-icon-homerepair-x-webflow-template.svg"/></div>
                  <div class="display-5 strong text-light" style="font-size: calc(1em + 2px);">AGENCES</div>
                </div>
              </div>
              <ul class="list unstyled w-list-unstyled" role="list">
                <li class="list-item" style="margin-bottom: 12px;">
                  <div class="display-3 text-neutral-500">Lyon</div>
                </li>
                <li class="list-item" style="margin-bottom: 12px;">
                  <div class="display-3 text-neutral-500">Grenoble</div>
                </li>
                <li class="list-item" style="margin-bottom: 12px;">
                  <div class="display-3 text-neutral-500">Marseille</div>
                </li>
                <li class="list-item" style="margin-bottom: 12px;">
                  <div class="display-3 text-neutral-500">Nice</div>
                </li>
                <li class="list-item" style="margin-bottom: 12px;">
                  <div class="display-3 text-neutral-500">Toulouse</div>
                </li>
                <li class="list-item">
                  <div class="display-3 text-neutral-500">Montpellier</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-layout-grid grid-1-column align-top footer-contact-grid" id="w-node-_4f08d2cd-5c61-64e6-3cc5-bddc030e8519-57241a43">
            <div>
              <div class="overflow-hidden title-wrap">
                <div class="w-layout-grid grid-auto-1fr" data-w-id="4f08d2cd-5c61-64e6-3cc5-bddc030e851c">
                  <div><img alt="Message Icon" loading="eager" src="IMAGES_PATH/message-icon-homerepair-x-webflow-template.svg"/></div>
                  <div class="display-5 strong text-light">Nous contacter</div>
                </div>
              </div>
              <div data-w-id="4f08d2cd-5c61-64e6-3cc5-bddc030e8521">
                <div class="mg-top-small mg-bottom-extra-small">
                  <div class="flex-horizontal justify-start footer-contact-wrap">
                    <div class="text-neutral-500">Email: </div>
                    <div class="mid">
                      <div class="text-break-all">
                        <a class="link light w-inline-block" href="mailto:hello@slidex.fr">
                          <div class="display-3">hello@slidex.fr</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-horizontal justify-start footer-contact-wrap">
                  <div class="text-neutral-500">Phone: </div>
                  <div class="mid">
                    <a class="link light w-inline-block" href="tel:04.38.49.43.16">
                      <div class="display-3">04.38.49.43.16</div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="overflow-hidden title-wrap">
                  <div class="w-layout-grid grid-auto-1fr" data-w-id="4f08d2cd-5c61-64e6-3cc5-bddc030e8531">
                    <div><img alt="Location Icon" loading="eager" src="IMAGES_PATH/location-icon-homerepair-x-webflow-template.svg"/></div>
                    <div class="display-5 strong text-light">Nous trouver</div>
                  </div>
                </div>
                <div class="mg-top-small" data-w-id="4f08d2cd-5c61-64e6-3cc5-bddc030e8536">
                  <div class="inner-container _210px">
                    <div class="text-neutral-500">2 rue raoul follereau<span class="text-no-wrap"> 38180 - Seyssins</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom-v1" data-w-id="4f08d2cd-5c61-64e6-3cc5-bddc030e853a">
          <p class="text-neutral-500">Slide X, une société du groupe <a class="link light inline-block" href="https://www.my-motor.fr/" target="_blank">My Motor</a></p>
          <div class="social-media-flex left">
            <a class="social-media-link dark-mode w-inline-block" href="https://www.linkedin.com/company/slidex" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: rgba(255,255,255,0.1); border-radius: 8px; margin-right: 12px;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>'''


def get_relative_paths(file_path, base_dir):
    """Calcule les chemins relatifs en fonction de la profondeur du fichier."""
    rel_path = os.path.relpath(file_path, base_dir)
    depth = len(Path(rel_path).parts) - 1  # -1 car on compte pas le fichier lui-même
    
    if depth == 0:  # Racine
        return {
            'INDEX_PATH': 'index.html',
            'IMAGES_PATH': 'images',
            'PRODUCT_DETAIL_PATH': 'product-detail.html',
            'PRODUCT_DETAIL_2_PATH': 'product-detail-2-vantaux.html',
            'TELESCOPIQUE_PATH': 'telescopique-bientot-disponible.html',
            'KITS_RECORD_PATH': 'kits-renovation/record.html',
            'KITS_DORMAKABA_PATH': 'kits-renovation/dormakaba.html',
            'KITS_PORTALP_PATH': 'kits-renovation/portalp.html',
            'KITS_CITEC_PATH': 'kits-renovation/citec.html',
            'KITS_SOFTICA_PATH': 'kits-renovation/softica.html',
        }
    else:  # Sous-dossier
        prefix = '../' * depth
        return {
            'INDEX_PATH': f'{prefix}index.html',
            'IMAGES_PATH': f'{prefix}images',
            'PRODUCT_DETAIL_PATH': f'{prefix}product-detail.html',
            'PRODUCT_DETAIL_2_PATH': f'{prefix}product-detail-2-vantaux.html',
            'TELESCOPIQUE_PATH': f'{prefix}telescopique-bientot-disponible.html',
            'KITS_RECORD_PATH': f'{prefix}kits-renovation/record.html',
            'KITS_DORMAKABA_PATH': f'{prefix}kits-renovation/dormakaba.html',
            'KITS_PORTALP_PATH': f'{prefix}kits-renovation/portalp.html',
            'KITS_CITEC_PATH': f'{prefix}kits-renovation/citec.html',
            'KITS_SOFTICA_PATH': f'{prefix}kits-renovation/softica.html',
        }


def replace_footer(file_path, base_dir):
    """Remplace le footer d'un fichier HTML par le footer de référence."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Trouver le footer existant
        footer_pattern = r'<footer\s+class=["\'].*?["\'].*?>.*?</footer>'
        
        if not re.search(footer_pattern, content, re.DOTALL):
            print(f"❌ Pas de footer trouvé dans {file_path}")
            return False
        
        # Préparer le footer de référence avec les bons chemins
        paths = get_relative_paths(file_path, base_dir)
        new_footer = FOOTER_REFERENCE
        for placeholder, path in paths.items():
            new_footer = new_footer.replace(placeholder, path)
        
        # Remplacer le footer
        new_content = re.sub(footer_pattern, new_footer, content, flags=re.DOTALL)
        
        # Sauvegarder
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"✅ Footer mis à jour: {file_path}")
        return True
    
    except Exception as e:
        print(f"❌ Erreur sur {file_path}: {e}")
        return False


def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Pages à traiter
    pages_to_process = [
        # Articles de blog (sauf index.html et porte-telescopique-3-vantaux-avant-premiere.html déjà fait)
        'blog/accessibilite-pmr-en16005.html',
        'blog/bien-choisir-vitrage-porte-automatique.html',
        'blog/choisir-porte-sectionnelle-enroulable.html',
        'blog/choisir-vitrage-laquage-porte-pietonne.html',
        'blog/comprendre-pose-tunnel-applique.html',
        'blog/dimensionner-porte-pietonne-automatique.html',
        'blog/guide-portes-automatiques-industrielles.html',
        'blog/maintenance-preventive-portes-automatiques.html',
        'blog/mise-en-service-presets-documentation.html',
        'blog/normes-pmr-largeur-passage-900mm.html',
        'blog/plan-maintenance-preventive-porte-automatique.html',
        'blog/preparer-chantier-porte-automatique.html',
        'blog/ral-personnalises-ce-qu-il-faut-savoir.html',
        'blog/securite-active-passive-portes-pietonnes.html',
        'blog/securite-normes-portes-automatiques.html',
        'blog/un-vantail-deux-vantaux-telescopique.html',
        
        # Kits de rénovation
        'kits-renovation/besam.html',
        'kits-renovation/citec.html',
        'kits-renovation/ditec.html',
        'kits-renovation/dormakaba.html',
        'kits-renovation/faac.html',
        'kits-renovation/geze.html',
        'kits-renovation/portalp.html',
        'kits-renovation/record.html',
        'kits-renovation/softica.html',
        'kits-renovation/tormax.html',
        
        # Pages racine
        'a-propos.html',
        'product-detail.html',
        'product-detail-2-vantaux.html',
        'contact-new.html',
        'connexion-inscription.html',
        'telescopique-bientot-disponible.html',
        'kit-renovation-bientot-disponible.html',
        'kits-renovation.html',
        
        # Autres pages
        'services-pages/services.html',
        'nos-produits/index.html',
    ]
    
    success_count = 0
    fail_count = 0
    
    for page in pages_to_process:
        file_path = os.path.join(base_dir, page)
        if os.path.exists(file_path):
            if replace_footer(file_path, base_dir):
                success_count += 1
            else:
                fail_count += 1
        else:
            print(f"⚠️  Fichier non trouvé: {file_path}")
            fail_count += 1
    
    print(f"\n📊 Résumé: {success_count} succès, {fail_count} échecs")


if __name__ == '__main__':
    main()

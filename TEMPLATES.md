# Templates Header & Footer - Slide X

Ce document contient les templates **exacts** à utiliser pour créer toutes les nouvelles pages du site. **Ces structures doivent être identiques partout** pour garantir l'harmonisation complète.

---

## 📋 HEADER STANDARD (à placer après `<body>`)

**Important : Ajuster les chemins des images/CSS selon la profondeur du dossier**
- Pages racine : `images/`, `css/`, `js/`
- Pages blog : `../images/`, `../css/`, `../js/`
- Pages sous-dossiers : adapter avec `../`

```html
<div class="header-wrapper w-nav" data-animation="default" data-collapse="medium" data-doc-height="1" data-duration="400" data-easing="ease" data-easing2="ease" role="banner">
  <div class="container-default w-container">
    <div class="header-container-wrapper">
      <div class="split-content header-left">
        <div class="overflow-hidden">
          <div class="logo-wrapper _42px" data-w-id="c39f46a6-42a9-e1d8-5e66-fa7ab32d71be">
            <a class="logo-link w-inline-block" href="index.html">
              <div class="display-5 strong" style="white-space: nowrap; text-decoration: none;">Slide X</div>
            </a>
          </div>
        </div>
      </div>
      <div class="split-content header-center">
        <nav class="nav-menu-wrapper w-nav-menu" role="navigation">
          <ul class="list-nav-menu w-list-unstyled" role="list">
            <li class="list-item nav-item">
              <div class="overflow-hidden">
                <a class="nav-link w-nav-link" data-w-id="c39f46a6-42a9-e1d8-5e66-fa7ab32d71c8" href="index.html">
                  <div class="display-3 text-uppercase">Accueil</div>
                </a>
              </div>
            </li>
            <li class="list-item nav-item">
              <div class="overflow-hidden">
                <a class="nav-link w-nav-link" data-w-id="c39f46a6-42a9-e1d8-5e66-fa7ab32d71ce" href="a-propos.html">
                  <div class="display-3 text-uppercase">A propos</div>
                </a>
              </div>
            </li>
            <li class="list-item nav-item">
              <div class="overflow-hidden">
                <a class="nav-link w-nav-link" data-w-id="c39f46a6-42a9-e1d8-5e66-fa7ab32d71d4" href="nos-produits/index.html">
                  <div class="display-3 text-uppercase">Nos produits</div>
                </a>
              </div>
            </li>
            <li class="list-item nav-item">
              <div class="overflow-hidden">
                <a class="nav-link w-nav-link" data-w-id="c39f46a6-42a9-e1d8-5e66-fa7ab32d71da" href="kits-renovation.html">
                  <div class="display-3 text-uppercase">Kits de rénovation</div>
                </a>
              </div>
            </li>
            <li class="list-item nav-item dropdown">
              <div class="dropdown-wrapper dropdown-default w-dropdown" data-delay="0" data-hover="false">
                <div class="dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-0">
                  <div class="overflow-hidden">
                    <div class="display-3 text-uppercase" data-w-id="c39f46a6-42a9-e1d8-5e66-fa7ab32d71e1">
                      <div class="flex-horizontal justify-start">
                        <div>Pages</div>
                        <div class="mg-left-6px">
                          <div class="icon-font-rounded dropdown-arrow-icon"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav class="dropdown-column-wrapper _3-columns w-dropdown-list" id="w-dropdown-list-0">
                  <div class="w-layout-grid dropdown-grid-v1">
                    <div class="dropdown-column-v1">
                      <div class="mg-bottom-medium">
                        <div class="overflow-hidden">
                          <div class="dropdown-nav-main-heading-wrapper">
                            <div class="display-5 strong">Main pages</div>
                          </div>
                        </div>
                      </div>
                      <div class="w-layout-grid grid-1-column">
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="home-preview.html">
                            <div class="display-3">Preview</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="index.html">
                            <div class="display-3">Home V1</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="home-v2.html">
                            <div class="display-3">Home V2</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="home-v3.html">
                            <div class="display-3">Home V3</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="a-propos.html">
                            <div class="display-3">About</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="team-members.html">
                            <div class="display-3">Team members</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="contact-new.html">
                            <div class="display-3">Contact V1</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="contact-v2.html">
                            <div class="display-3">Contact V2</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="contact-v3.html">
                            <div class="display-3">Contact V3</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="dropdown-column-v1">
                      <div class="mg-bottom-medium">
                        <div class="overflow-hidden">
                          <div class="dropdown-nav-main-heading-wrapper">
                            <div class="display-5 strong">Main pages</div>
                          </div>
                        </div>
                      </div>
                      <div class="w-layout-grid grid-1-column">
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="blog/index.html">
                            <div class="display-3">Blog V1</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="blog-v2.html">
                            <div class="display-3">Blog V2</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="blog-v3.html">
                            <div class="display-3">Blog V3</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="blog-detail.html">
                            <div class="display-3">Blog post</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="services-pages/services.html">
                            <div class="display-3">Services</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="service-single.html">
                            <div class="display-3">Service single</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="nos-produits/index.html">
                            <div class="display-3">Products</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="product-detail.html">
                            <div class="display-3">Product single</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="shopping-cart.html">
                            <div class="display-3">Shopping cart</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="order-confirmed.html">
                            <div class="display-3">Order confirmed</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="dropdown-column-v1">
                      <div class="mg-bottom-medium">
                        <div class="overflow-hidden">
                          <div class="dropdown-nav-main-heading-wrapper">
                            <div class="display-5 strong">Utility pages</div>
                          </div>
                        </div>
                      </div>
                      <div class="w-layout-grid grid-1-column">
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="start-here.html">
                            <div class="display-3">Start here</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="styleguide.html">
                            <div class="display-3">Style guide</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="404.html">
                            <div class="display-3">404 not found</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="password-protected.html">
                            <div class="display-3">Password protected</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="coming-soon.html">
                            <div class="display-3">Coming soon</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="licenses.html">
                            <div class="display-3">Licenses</div>
                          </a>
                        </div>
                        <div class="overflow-hidden">
                          <a class="dropdown-nav-link-v1 w-inline-block" href="changelog.html">
                            <div class="display-3">Changelog</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div class="split-content header-right">
        <div class="nav-menu-right-side">
          <div class="overflow-hidden">
            <div class="nav-menu-show-on-tablet" data-w-id="c39f46a6-42a9-e1d8-5e66-fa7ab32d728a">
              <a class="primary-button-dark nav-btn w-inline-block" href="connexion-inscription.html">
                <div class="flex-horizontal justify-start">
                  <div class="primary-button-text-v1">Get a quote</div>
                  <div class="primary-button-icon-wrapper mg-left-8px">
                    <div class="icon-font-rounded primary-button-icon arrow-right"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="overflow-hidden">
            <div class="nav-menu-hidden-on-tablet" data-w-id="c39f46a6-42a9-e1d8-5e66-fa7ab32d7292">
              <a class="primary-button-dark nav-btn w-inline-block" href="connexion-inscription.html">
                <div class="flex-horizontal justify-start">
                  <div class="primary-button-text-v1">Configurateur</div>
                  <div class="primary-button-icon-wrapper mg-left-8px">
                    <div class="icon-font-rounded primary-button-icon arrow-right"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="overflow-hidden">
            <div class="menu-button w-nav-button" data-w-id="c39f46a6-42a9-e1d8-5e66-fa7ab32d729a">
              <div class="hamburger-menu-wrapper">
                <div class="hamburger-menu-bar top"></div>
                <div class="hamburger-menu-bar middle"></div>
                <div class="hamburger-menu-bar bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Personnalisation du header :**
- Pour marquer la page active, ajouter la classe `w--current` au lien correspondant
- Ajuster tous les `href` selon l'emplacement du fichier (ex: `../index.html` depuis blog/)

---

## 📋 FOOTER STANDARD (à placer avant `</body>`)

**Important : Ajuster les chemins des images selon la profondeur du dossier**
- Pages racine : `images/`
- Pages blog : `../images/`
- Pages sous-dossiers : adapter avec `../`

```html
<footer class="footer-v1" style="background-color: #171717;">
  <div class="card footer-middle-card">
    <div class="w-layout-blockcontainer container-default w-container">
      <div class="footer-middle">
        <div class="w-layout-grid footer-grid-v1 grid-4-columns gap-large">
          
          <!-- Colonne 1 : Logo + Newsletter -->
          <div class="inner-container _450px---tablet _100-mbl" id="w-node-footer-col1">
            <div class="overflow-hidden">
              <div class="footer-logo" data-w-id="footer-logo">
                <a class="logo-link w-inline-block" href="index.html">
                  <div class="display-5 strong text-light" style="white-space: nowrap; text-decoration: none;">SlideX</div>
                </a>
              </div>
            </div>
            <div class="mg-top-small mg-top-16px---mbl">
              <div class="inner-container _340px">
                <p class="text-neutral" data-w-id="footer-tagline">La porte automatique des pros</p>
              </div>
            </div>
            <div class="mg-top-default mg-top-24px---mbl">
              <div class="inner-container _340px _100-tablet">
                <div class="footer-form-v1-block w-form" data-w-id="footer-form-block">
                  <form data-name="Footer Form" data-wf-element-id="footer-form" id="wf-form-Footer-Form" method="get" name="wf-form-Footer-Form">
                    <div class="overflow-hidden">
                      <div class="display-5 strong text-light" data-w-id="footer-newsletter-title">Inscrivez-vous &amp; restez connecté</div>
                    </div>
                    <div class="mg-top-small">
                      <div class="input-wrapper">
                        <input class="input dark-mode large icon-right w-input" data-name="Email" id="email-footer" maxlength="256" name="Email" placeholder="Enter your email" required="" type="email"/>
                        <div class="primary-button form-button-v1 large">
                          <input class="icon-font-rounded form-button large w-button" data-wait="" type="submit" value=""/>
                        </div>
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
          
          <!-- Colonne 2 : Nos portes + Kits de rénovation -->
          <div id="w-node-footer-col2">
            <div class="mg-bottom-medium">
              <div class="overflow-hidden title-wrap">
                <div class="display-5 strong text-light" data-w-id="footer-products-title" style="font-size: calc(1em + 2px);">Nos portes</div>
              </div>
            </div>
            <div class="w-layout-grid grid-1-column footer-grid-v2">
              <ul class="list-wrapper" data-w-id="footer-products-list" role="list" style="font-size: calc(1em + 1px);">
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="product-detail.html">
                    <div class="display-3">Un vantail</div>
                  </a>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="product-detail.html">
                    <div class="display-3">Deux vantaux</div>
                  </a>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="product-detail.html">
                    <div class="display-3">Télescopique</div>
                  </a>
                </li>
                <li class="list-item" style="margin-top: 24px; margin-bottom: 16px;">
                  <div class="display-5 strong text-light" style="font-size: calc(1em + 2px);">Kit de rénovation</div>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="kits-renovation/record.html">
                    <div class="display-3">Record</div>
                  </a>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="kits-renovation/dormakaba.html">
                    <div class="display-3">Dormakaba</div>
                  </a>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="kits-renovation/portalp.html">
                    <div class="display-3">Portalp</div>
                  </a>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="kits-renovation/citec.html">
                    <div class="display-3">CITEC</div>
                  </a>
                </li>
                <li class="list-item">
                  <a class="link neutral w-inline-block" href="kits-renovation/softica.html">
                    <div class="display-3">SOFTICA</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Colonne 3 : AGENCES -->
          <div class="w-layout-grid grid-1-column align-top footer-contact-grid">
            <div>
              <div class="overflow-hidden title-wrap">
                <div class="w-layout-grid grid-auto-1fr">
                  <div><img alt="Location Icon - Homerepair X Webflow Template" loading="eager" src="images/location-icon-homerepair-x-webflow-template.svg"/></div>
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

          <!-- Colonne 4 : Contact + Nous trouver -->
          <div class="w-layout-grid grid-1-column align-top footer-contact-grid" id="w-node-footer-col4">
            <div>
              <div class="overflow-hidden title-wrap">
                <div class="w-layout-grid grid-auto-1fr" data-w-id="footer-contact-title">
                  <div><img alt="Message Icon - Homerepair X Webflow Template" loading="eager" src="images/message-icon-homerepair-x-webflow-template.svg"/></div>
                  <div class="display-5 strong text-light">Nous contacter</div>
                </div>
              </div>
              <div data-w-id="footer-contact-info">
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
            </div>
            <div>
              <div class="overflow-hidden title-wrap">
                <div class="w-layout-grid grid-auto-1fr" data-w-id="footer-location-title">
                  <div><img alt="Location Icon - Homerepair X Webflow Template" loading="eager" src="images/location-icon-homerepair-x-webflow-template.svg"/></div>
                  <div class="display-5 strong text-light">Nous trouver</div>
                </div>
              </div>
              <div class="mg-top-small" data-w-id="footer-address">
                <div class="inner-container _210px">
                  <div class="text-neutral-500">2 rue raoul follereau<span class="text-no-wrap"> 38180 - Seyssins</span></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <!-- Footer Bottom : My Motor + LinkedIn -->
      <div class="footer-bottom-v1" data-w-id="footer-bottom">
        <p class="text-neutral-500">Slide X, une société du groupe <a class="link light inline-block" href="https://www.my-motor.fr/" target="_blank">My Motor</a></p>
        <div class="social-media-flex left">
          <a class="social-media-link dark-mode w-inline-block" href="https://www.linkedin.com/" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: rgba(255,255,255,0.1); border-radius: 8px; margin-right: 12px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
      
    </div>
  </div>
</footer>
```

**Personnalisation du footer :**
- Ajuster TOUS les liens `href` selon l'emplacement du fichier
- Ajuster les chemins des images SVG (location-icon, message-icon)
- Pour pages blog : préfixer avec `../` (ex: `../index.html`, `../images/...`)

---

## 🎨 Charte Graphique (à respecter partout)

### Couleurs principales
- **Bleu primaire** : `#2563eb`
- **Fond blanc** : `#ffffff`
- **Fond footer** : `#171717`
- **Texte sombre** : `#1d1d1f` (Apple style)
- **Texte gris** : `#86868b`, `#64748b`
- **Texte footer** : `.text-neutral`, `.text-neutral-500`

### Typographie
- **Headings** : `letter-spacing: -0.015em` à `-0.02em`
- **Style Apple/Tesla** : épuré, minimal, beaucoup d'espace blanc
- **Classes principales** : `.display-5`, `.display-3`, `.strong`, `.text-uppercase`

### Transitions
- **Cubic-bezier** : `cubic-bezier(0.4, 0, 0.2, 1)` pour animations fluides
- **Durée** : 300-400ms
- **Border-radius** : 24px (buttons), 12px (cards)

---

## ✅ Checklist pour nouvelle page

1. [ ] Copier le header complet (ajuster chemins selon dossier)
2. [ ] Copier le footer complet (ajuster chemins selon dossier)
3. [ ] Vérifier tous les liens `href` (index.html, kits-renovation.html, etc.)
4. [ ] Vérifier chemins images (location-icon, message-icon, logo)
5. [ ] Ajouter classe `w--current` au lien de navigation actif
6. [ ] Respecter la charte graphique (bleu #2563eb, fond blanc, style minimal)
7. [ ] Tester la page sur le serveur local (port 5500)

---

## 📁 Structure CSS/JS à inclure dans `<head>`

```html
<link href="css/normalize.css" rel="stylesheet" type="text/css"/>
<link href="css/webflow.css" rel="stylesheet" type="text/css"/>
<link href="css/et-voila.webflow.css" rel="stylesheet" type="text/css"/>
<link href="css/slidex-custom.css" rel="stylesheet" type="text/css"/>
```

```html
<script src="js/slidex-animations.js" type="text/javascript"></script>
```

**Pour pages blog**, préfixer avec `../` :
```html
<link href="../css/normalize.css" rel="stylesheet" type="text/css"/>
```

---

**Ce document est la référence ABSOLUE pour toutes les nouvelles pages. Ne jamais dévier de ces templates.**

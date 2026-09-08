# Nos produits — 3 familles + ouvre-portes : plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructurer `nos-produits/index.html` en trois familles avec barre d'ancres, ajouter les deux opérateurs de portes battantes (Go in 80, Go in 350) et créer la page dédiée `nos-produits/ouvre-portes.html`.

**Architecture:** Site statique HTML/CSS servi tel quel (GitHub Pages). Header/footer injectés en JS via `js/includes-loader.js`. Aucune étape de build, aucun framework de test — la vérification se fait par `grep` sur les fichiers et par contrôle navigateur. Tout le CSS spécifique vit dans les balises `<style>` des pages concernées ; `css/slidex-custom.css` n'est pas touché (la classe `.slidex-grid-3` y est globale et utilisée aussi par `index.html`).

**Tech Stack:** HTML5, CSS3 (pas de préprocesseur), un peu de JS inline (`onerror` de fallback image). Python 3 stdlib disponible si besoin d'un contrôle scripté.

## Global Constraints

- Ne pas modifier `css/slidex-custom.css` ni `includes/header.html` ni `js/includes-loader.js`.
- Sur `nos-produits/index.html`, remplacer l'usage de `.slidex-grid-3` par une classe locale `.np-grid` ; ne pas réutiliser `.slidex-grid-3` (rester compatible avec `index.html`).
- Noms de fichiers image attendus, exacts : `images/go-in-80.png` et `images/go-in-350.png` (déposés plus tard par SlideX). Chemin depuis les pages du dossier `nos-produits/` : `../images/go-in-80.png`.
- Nouveau modificateur de badge : `.np-card-badge.teal { background: #0d9488; }`.
- `id` des sections familles : `portes`, `kits-renovation`, `ouvre-portes`. Ancres modèles sur la page dédiée : `go-in-80`, `go-in-350`. Ne pas entrer en collision avec `id="support"` déjà présent.
- Offset d'ancre : `scroll-margin-top: 90px` sur les sections cibles ; `scroll-behavior: smooth` sur `html`.
- Le `onerror` de fallback image doit se neutraliser lui-même (`this.onerror=null`) pour ne pas boucler.
- Specs produits (valeurs verbatim) :
  - **Go in 80** : porte ≤ 100 kg · 230 V · 24 V DC 3 A · boîtier 555 × 55 × 83 mm · 2,8 kg · ouverture max 99° · vitesse ouv. 45°/s · vitesse ferm. 45°/s · temporisation 0–60 s (ajustable) · −20 °C/+50 °C · IP21 · EN 16005 (testé), TÜV SÜD, CE.
  - **Go in 350** : porte ≤ 350 kg · 230 V · 24 V DC 3 A · boîtier 610 × 90 × 128 mm · 13,5 kg · ouverture max 105° · vitesse ouv. 40°/s · vitesse ferm. 30°/s · temporisation 3–9 s (ajustable) · −20 °C/+50 °C · IP21 · EN 16005, TÜV SÜD, CE.
  - Communs : bras à compas ou à coulisse ; montage simple ou double vantail.
- Attribution de commit : finir chaque message par `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`.

---

## File Structure

| Fichier | Rôle | Action |
|---|---|---|
| `nos-produits/ouvre-portes.html` | Page dédiée : hero foncé, 2 blocs produit ancrés, tableau comparatif, CTA | Créer |
| `sitemap.xml` | Plan de site | Modifier (1 ligne) |
| `nos-produits/index.html` | Page catalogue : barre d'ancres + 3 sections + 2 cartes ouvre-portes | Modifier (`<style>` + corps) |

Ordre : la page dédiée d'abord (Task 1), puis le câblage de `index.html` vers elle (Task 2) — aucun lien cassé à aucun commit.

---

## Task 1 : Créer `nos-produits/ouvre-portes.html` + entrée sitemap

**Files:**
- Create: `nos-produits/ouvre-portes.html`
- Modify: `sitemap.xml` (après la ligne `<loc>https://www.slidex.fr/nos-produits/</loc>`)

**Interfaces:**
- Consumes : rien (première tâche). Réutilise des conventions de `nos-produits/index.html` : 4 feuilles de style `../css/…`, `../js/includes-loader.js`, placeholders `#header-placeholder` / `#footer-placeholder`, `../js/slidex-animations.js` + jQuery en fin de `<body>`.
- Produces : URL `nos-produits/ouvre-portes.html` avec ancres `#go-in-80` et `#go-in-350` (ciblées par les boutons des cartes en Task 2). Classes CSS internes `op-*` (non réutilisées ailleurs).

- [ ] **Step 1 : Écrire le fichier `nos-produits/ouvre-portes.html`**

Contenu complet à créer :

```html
<!DOCTYPE html>
<html data-wf-page="nos-produits-ouvre-portes-slidex" data-wf-site="6799d9a3630f757829978f69" lang="fr">
<head>
<meta charset="utf-8"/>
<title>Ouvre-portes automatiques pour portes battantes — Go in 80 &amp; Go in 350 | SlideX</title>
<meta name="description" content="Opérateurs de portes battantes SlideX : Go in 80 (jusqu'à 100 kg) et Go in 350 (jusqu'à 350 kg). Montage simple ou double vantail, bras à compas ou à coulisse, conformité EN 16005, TÜV SÜD, CE."/>
<meta property="og:title" content="Ouvre-portes automatiques pour portes battantes | SlideX"/>
<meta property="og:description" content="Go in 80 et Go in 350 : opérateurs de portes battantes pour professionnels. Simple ou double vantail, EN 16005, TÜV SÜD, CE."/>
<meta content="https://www.slidex.fr/images/Photo-porte-auto.jpg" property="og:image"/>
<meta property="og:url" content="https://www.slidex.fr/nos-produits/ouvre-portes.html"/>
<meta content="website" property="og:type"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<meta content="SlideX" name="generator"/>
<meta property="og:locale" content="fr_FR"/>
<meta property="og:site_name" content="SlideX"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:title" content="Ouvre-portes automatiques pour portes battantes | SlideX"/>
<meta property="twitter:description" content="Go in 80 (100 kg) et Go in 350 (350 kg) : opérateurs de portes battantes, montage simple ou double, EN 16005 / TÜV SÜD / CE."/>
<meta property="twitter:image" content="https://www.slidex.fr/images/Photo-porte-auto.jpg"/>
<meta name="keywords" content="ouvre-porte automatique, opérateur de porte battante, motorisation porte battante, Go in 80, Go in 350, EN 16005, porte battante PMR, SlideX"/>
<link rel="canonical" href="https://www.slidex.fr/nos-produits/ouvre-portes.html"/>
<link href="../css/normalize.css" rel="stylesheet" type="text/css"/>
<link href="../css/webflow.css" rel="stylesheet" type="text/css"/>
<link href="../css/et-voila.webflow.css" rel="stylesheet" type="text/css"/>
<link href="../css/slidex-custom.css" rel="stylesheet" type="text/css"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect"/>
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
<script type="text/javascript">WebFont.load({  google: {    families: ["Onest:regular,500,700"]  }});</script>
<script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
<link href="../images/favicon.svg" rel="shortcut icon" type="image/x-icon"/>
<link href="../images/webclip.svg" rel="apple-touch-icon"/>
<style>
html { scroll-behavior: smooth; }

/* ── Hero foncé (repris de nos-produits/index.html) ── */
.np-header {
  background: linear-gradient(135deg, #0f172a 0%, #162444 100%);
  padding: 56px 0 52px;
  position: relative;
  overflow: hidden;
}
.np-header::after {
  content: '';
  position: absolute;
  bottom: -1px; left: 0; right: 0;
  height: 40px;
  background: white;
  clip-path: ellipse(55% 100% at 50% 100%);
}
.np-header-inner {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
}
.np-header-text .subtitle {
  color: rgba(255,255,255,0.5) !important;
  font-size: 11px !important;
  letter-spacing: 2px !important;
}
.np-header-text h1 {
  color: white !important;
  font-size: clamp(1.9rem, 3.5vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 12px 0 0;
  letter-spacing: -0.3px;
}
.np-header-desc {
  max-width: 520px;
  color: rgba(255,255,255,0.6);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-top: 16px;
}
.np-header-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}
.np-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.75);
  padding: 5px 12px;
  border-radius: 100px;
  font-size: 0.78rem;
  font-weight: 600;
}
.np-badge svg { flex-shrink: 0; }
.op-back {
  color: rgba(255,255,255,0.6);
  font-size: 0.85rem;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 14px;
}
.op-back:hover { color: #fff; }

/* ── En-tête de section centré ── */
.np-section-head { text-align: center; margin-bottom: 40px; }
.np-section-head .subtitle {
  font-size: 11px !important;
  letter-spacing: 1.5px !important;
  text-transform: uppercase !important;
  color: #2563eb !important;
  font-weight: 700 !important;
}
.np-section-head h2 {
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 800;
  color: #0f172a;
  margin: 10px 0 0;
  letter-spacing: -0.3px;
}

/* ── Blocs produit ── */
.op-product {
  display: grid;
  grid-template-columns: minmax(0, 420px) 1fr;
  gap: 48px;
  align-items: center;
  padding: 56px 0;
  border-bottom: 1px solid #eef2f7;
  scroll-margin-top: 90px;
}
.op-product:last-of-type { border-bottom: 0; }
.op-product-media {
  background: #f8fafc;
  border: 1px solid #e8edf5;
  border-radius: 16px;
  overflow: hidden;
}
.op-product-media img {
  width: 100%;
  height: 320px;
  object-fit: contain;
  display: block;
  padding: 24px;
}
.op-product-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 320px;
  background: linear-gradient(135deg, #0f172a, #1e293b);
}
.op-product-fallback[hidden] { display: none; }
.op-product-fallback svg { opacity: 0.5; }
.op-product-info .subtitle {
  font-size: 11px !important;
  letter-spacing: 1.5px !important;
  text-transform: uppercase !important;
  color: #2563eb !important;
  font-weight: 700 !important;
}
.op-product-info h2 {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 800;
  color: #0f172a;
  margin: 8px 0 12px;
}
.op-product-info p {
  color: #64748b;
  line-height: 1.7;
  font-size: 0.95rem;
  margin: 0 0 20px;
}
.op-keyspecs { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
.op-keyspecs li { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: #374151; font-weight: 500; }
.op-keyspecs li::before { content: ''; flex-shrink: 0; width: 6px; height: 6px; border-radius: 50%; background: #2563eb; }

/* ── Tableau comparatif ── */
.op-table-wrap {
  overflow-x: auto;
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid #e8edf5;
  border-radius: 14px;
}
.op-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; min-width: 520px; }
.op-table th, .op-table td { padding: 14px 18px; text-align: left; border-bottom: 1px solid #eef2f7; }
.op-table thead th { background: #0f172a; color: #fff; font-weight: 700; }
.op-table tbody th { font-weight: 700; color: #0f172a; background: #f8fafc; width: 38%; }
.op-table tbody tr:last-child th, .op-table tbody tr:last-child td { border-bottom: 0; }

/* ── CTA (repris de nos-produits/index.html) ── */
.np-cta {
  background: linear-gradient(135deg, #0a0f1e 0%, #0f1f3d 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}
.np-cta::before {
  content: '';
  position: absolute;
  top: -80px; left: 50%;
  transform: translateX(-50%);
  width: 700px; height: 350px;
  background: radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.np-cta-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.18);
  color: white;
  padding: 13px 26px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.2s ease;
}
.np-cta-ghost:hover { background: rgba(255,255,255,0.14); color: white; }

@media (max-width: 767px) {
  .np-header-inner { flex-direction: column; gap: 0; }
  .np-header { padding: 40px 0 48px; }
  .op-product { grid-template-columns: 1fr; gap: 24px; padding: 40px 0; }
  .op-product-media img, .op-product-fallback { height: 240px; }
}
</style>
<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="28263fbc-fd1c-4adc-8204-571acc2440a4";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>

<script src="../js/includes-loader.js" type="text/javascript"></script>
</head>

<body>
<div class="page-wrapper">
  <div id="header-placeholder"></div>

  <!-- ── Hero ── -->
  <div class="np-header">
    <div class="w-layout-blockcontainer container-default w-container">
      <div class="np-header-inner">
        <div class="np-header-text">
          <a class="op-back" href="index.html">← Nos produits</a>
          <div class="subtitle">Opérateurs de portes battantes</div>
          <h1 class="display-10 strong">Ouvre-portes automatiques pour portes battantes</h1>
          <p class="np-header-desc">Motorisez vos portes battantes, neuves ou existantes : montage simple ou double vantail, bras à compas ou à coulisse, conformité EN 16005, TÜV SÜD et marquage CE. Deux modèles selon le poids du vantail.</p>
          <div class="np-header-badges">
            <span class="np-badge"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M3 5l1.5 1.5L7 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>EN 16005</span>
            <span class="np-badge"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M3 5l1.5 1.5L7 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>TÜV SÜD</span>
            <span class="np-badge"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M3 5l1.5 1.5L7 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Marquage CE</span>
          </div>
        </div>
        <div style="flex-shrink: 0;">
          <a class="primary-button w-inline-block" href="../connexion-inscription.html">
            <div>Accéder au configurateur</div>
            <div class="item-icon-right icon-right-circle">
              <div class="base-icon-font" style="display:flex;align-items:center;justify-content:center;">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><path d="M10 5L15 10L10 15" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- ── Blocs produit ── -->
  <section class="section">
    <div class="w-layout-blockcontainer container-default w-container">

      <div class="op-product" id="go-in-80">
        <div class="op-product-media">
          <img src="../images/go-in-80.png" alt="Opérateur de porte battante SlideX Go in 80" onerror="this.onerror=null; this.hidden=true; this.nextElementSibling.hidden=false;"/>
          <div class="op-product-fallback" hidden>
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 21h18" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M12 11h.01" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M16 8l5 3-5 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
        <div class="op-product-info">
          <div class="subtitle">Opérateur de porte battante</div>
          <h2>Go in 80</h2>
          <p>Compact et léger (2,8 kg), le Go in 80 motorise les portes battantes jusqu'à 100 kg. Idéal pour bureaux, commerces et accès PMR intérieurs. Temporisation ajustable de 0 à 60 s, vitesses d'ouverture et de fermeture à 45°/s.</p>
          <ul class="op-keyspecs">
            <li>Porte jusqu'à 100 kg</li>
            <li>Boîtier 555 × 55 × 83 mm — 2,8 kg</li>
            <li>Ouverture / fermeture 45°/s — max 99°</li>
            <li>Bras à compas ou à coulisse</li>
            <li>Montage simple ou double vantail</li>
            <li>EN 16005, TÜV SÜD, CE — IP21</li>
          </ul>
        </div>
      </div>

      <div class="op-product" id="go-in-350">
        <div class="op-product-media">
          <img src="../images/go-in-350.png" alt="Opérateur de porte battante SlideX Go in 350" onerror="this.onerror=null; this.hidden=true; this.nextElementSibling.hidden=false;"/>
          <div class="op-product-fallback" hidden>
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 21h18" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M12 11h.01" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M16 8l5 3-5 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
        <div class="op-product-info">
          <div class="subtitle">Opérateur de porte battante</div>
          <h2>Go in 350</h2>
          <p>Robuste (13,5 kg), le Go in 350 motorise les portes battantes lourdes jusqu'à 350 kg. Adapté aux ERP, entrées de bâtiments publics et portes coupe-feu. Temporisation ajustable de 3 à 9 s, ouverture jusqu'à 105°.</p>
          <ul class="op-keyspecs">
            <li>Porte jusqu'à 350 kg</li>
            <li>Boîtier 610 × 90 × 128 mm — 13,5 kg</li>
            <li>Ouverture 40°/s · fermeture 30°/s — max 105°</li>
            <li>Bras à compas ou à coulisse</li>
            <li>Montage simple ou double vantail</li>
            <li>EN 16005, TÜV SÜD, CE — IP21</li>
          </ul>
        </div>
      </div>

    </div>
  </section>

  <!-- ── Comparatif ── -->
  <section class="section" style="background:#f8fafc;">
    <div class="w-layout-blockcontainer container-default w-container">
      <div class="np-section-head">
        <div class="subtitle">Comparatif</div>
        <h2>Go in 80 ou Go in 350 ?</h2>
      </div>
      <div class="op-table-wrap">
        <table class="op-table">
          <thead>
            <tr><th scope="col">Caractéristique</th><th scope="col">Go in 80</th><th scope="col">Go in 350</th></tr>
          </thead>
          <tbody>
            <tr><th scope="row">Porte jusqu'à</th><td>100 kg</td><td>350 kg</td></tr>
            <tr><th scope="row">Alimentation</th><td>230 V</td><td>230 V</td></tr>
            <tr><th scope="row">Courant de sortie</th><td>24 V DC · 3 A</td><td>24 V DC · 3 A</td></tr>
            <tr><th scope="row">Boîtier</th><td>555 × 55 × 83 mm</td><td>610 × 90 × 128 mm</td></tr>
            <tr><th scope="row">Poids</th><td>2,8 kg</td><td>13,5 kg</td></tr>
            <tr><th scope="row">Degré d'ouverture max</th><td>99°</td><td>105°</td></tr>
            <tr><th scope="row">Vitesse d'ouverture</th><td>45°/s</td><td>40°/s</td></tr>
            <tr><th scope="row">Vitesse de fermeture</th><td>45°/s</td><td>30°/s</td></tr>
            <tr><th scope="row">Temporisation</th><td>0–60 s (ajustable)</td><td>3–9 s (ajustable)</td></tr>
            <tr><th scope="row">Plage de température</th><td>−20 °C / +50 °C</td><td>−20 °C / +50 °C</td></tr>
            <tr><th scope="row">Indice de protection</th><td>IP21</td><td>IP21</td></tr>
            <tr><th scope="row">Bras</th><td>Compas ou coulisse</td><td>Compas ou coulisse</td></tr>
            <tr><th scope="row">Montage</th><td>Simple ou double vantail</td><td>Simple ou double vantail</td></tr>
            <tr><th scope="row">Normes</th><td>EN 16005, TÜV SÜD, CE</td><td>EN 16005, TÜV SÜD, CE</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- ── CTA ── -->
  <section class="np-cta">
    <div class="w-layout-blockcontainer container-default w-container" style="position:relative;z-index:1;">
      <div style="text-align:center;max-width:580px;margin:0 auto;">
        <h2 style="font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:800;color:white;margin-bottom:16px;letter-spacing:-0.3px;">Besoin d'aide pour choisir ?</h2>
        <p style="color:rgba(255,255,255,0.6);font-size:1rem;margin-bottom:36px;line-height:1.7;">Notre équipe technique vous accompagne dans le choix de l'opérateur adapté à votre porte et à votre chantier.</p>
        <div class="flex-horizontal justify-center gap-small-wrap">
          <a class="primary-button w-inline-block" href="../connexion-inscription.html">
            <div>Utiliser le configurateur</div>
            <div class="item-icon-right icon-right-circle"><div class="base-icon-font" style="display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><path d="M10 5L15 10L10 15" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
          </a>
          <a class="np-cta-ghost" href="../contact-new.html">Nous contacter</a>
        </div>
      </div>
    </div>
  </section>

</div>

    <div id="footer-placeholder"></div>
<div class="page-load-wrapper _01"><div class="progress-bar" data-w-id="5b7f4b82-2598-8533-eabc-5c83b3645aed"></div></div>
<script crossorigin="anonymous" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6799d9a3630f757829978f69" type="text/javascript"></script>
<script>
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href="#"]');
    if (a) { e.preventDefault(); }
  });
</script>
<script src="../js/slidex-animations.js" type="text/javascript"></script>
</body>
</html>
```

- [ ] **Step 2 : Ajouter l'entrée sitemap**

Dans `sitemap.xml`, juste après la ligne :

```xml
	<url><loc>https://www.slidex.fr/nos-produits/</loc></url>
```

insérer :

```xml
	<url><loc>https://www.slidex.fr/nos-produits/ouvre-portes.html</loc></url>
```

- [ ] **Step 3 : Contrôles fichier (doivent tous passer)**

Lancer depuis la racine du repo :

```bash
test -f nos-produits/ouvre-portes.html && echo "fichier OK"
grep -c 'id="go-in-80"\|id="go-in-350"' nos-produits/ouvre-portes.html   # attendu : 2
grep -c 'this.onerror=null' nos-produits/ouvre-portes.html               # attendu : 2
grep -q 'https://www.slidex.fr/nos-produits/ouvre-portes.html' sitemap.xml && echo "sitemap OK"
grep -q 'slidex-grid-3' nos-produits/ouvre-portes.html && echo "ERREUR: slidex-grid-3 interdit" || echo "pas de slidex-grid-3 OK"
python3 -c "import xml.dom.minidom,sys; xml.dom.minidom.parse('sitemap.xml'); print('sitemap XML valide')"
```

Attendu : `fichier OK`, `2`, `2`, `sitemap OK`, `pas de slidex-grid-3 OK`, `sitemap XML valide`.

- [ ] **Step 4 : Contrôle navigateur**

Servir le site en local (`python3 -m http.server 8000`) puis ouvrir `http://localhost:8000/nos-produits/ouvre-portes.html`.

Vérifier :
- header et footer chargés (injectés par `includes-loader.js`), pas d'erreur dans la console.
- hero foncé avec le lien « ← Nos produits », les 3 badges, le bouton configurateur.
- 2 blocs produit : le visuel affiche le **fallback SVG foncé** (les PNG n'existent pas encore), pas d'image cassée.
- tableau comparatif lisible ; sur fenêtre étroite (< 520 px) il scrolle horizontalement dans son cadre sans faire déborder la page.
- section CTA affichée, boutons cliquables.
- dans la barre d'URL, ajouter `#go-in-350` et recharger : la page défile jusqu'au 2ᵉ bloc avec ~90 px d'air au-dessus.
- responsive : à ≤ 767 px, les blocs produit passent en 1 colonne (image au-dessus du texte).

- [ ] **Step 5 : Commit**

```bash
git add nos-produits/ouvre-portes.html sitemap.xml
git commit -m "$(cat <<'EOF'
Ajoute la page ouvre-portes (Go in 80 / Go in 350)

Nouvelle page nos-produits/ouvre-portes.html : hero, 2 blocs produit
ancrés (#go-in-80, #go-in-350), tableau comparatif scrollable, CTA
réutilisée. Fallback SVG tant que images/go-in-80.png et go-in-350.png
ne sont pas déposées. Entrée sitemap ajoutée.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 2 : Restructurer `nos-produits/index.html` (barre d'ancres + 3 sections + 2 cartes ouvre-portes)

**Files:**
- Modify: `nos-produits/index.html` — bloc `<style>` (lignes ~34-49 et ajout), et corps (lignes ~345-483)

**Interfaces:**
- Consumes : la page `nos-produits/ouvre-portes.html` avec ses ancres `#go-in-80` / `#go-in-350` (créée en Task 1).
- Produces : rien pour une tâche ultérieure (dernière tâche).

- [ ] **Step 1 : Remplacer le bloc CSS grille par les nouvelles classes**

Dans `nos-produits/index.html`, **supprimer** ce bloc au début du `<style>` (le `@media (max-width: 1200px)` avec les hacks `nth-of-type`) :

```css
/* ── Layout grille responsive ── */
@media (max-width: 1200px) {
  .slidex-grid-3 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 24px;
    row-gap: 24px;
    justify-content: center;
    justify-items: stretch;
    max-width: 1100px;
    margin: 0 auto;
  }
  .slidex-grid-3 > .card.v6:nth-of-type(4) { grid-column: 1; grid-row: 2; }
  .slidex-grid-3 > .card.v6:nth-of-type(5) { grid-column: 2; grid-row: 2; }
  .slidex-grid-3 > .card.v6:nth-of-type(3) { grid-column: 1; grid-row: 3; }
}
```

et le **remplacer** par :

```css
/* ── Ancre : défilement doux + offset header ── */
html { scroll-behavior: smooth; }
.np-fam { scroll-margin-top: 90px; }

/* ── Barre d'ancres familles ── */
.np-anchor-nav { background: #fff; border-bottom: 1px solid #e8edf5; }
.np-anchor-nav .container-default {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 18px;
}
.np-anchor-nav a {
  display: inline-flex;
  align-items: center;
  padding: 8px 18px;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #334155;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.np-anchor-nav a:hover { background: #2563eb; color: #fff; border-color: #2563eb; }

/* ── En-tête de section ── */
.np-section-head { text-align: center; margin-bottom: 40px; }
.np-section-head .subtitle {
  font-size: 11px !important;
  letter-spacing: 1.5px !important;
  text-transform: uppercase !important;
  color: #2563eb !important;
  font-weight: 700 !important;
}
.np-section-head h2 {
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 800;
  color: #0f172a;
  margin: 10px 0 0;
  letter-spacing: -0.3px;
}
.np-section-head p { color: #64748b; margin-top: 10px; font-size: 0.95rem; }

/* ── Grille de cartes par section ── */
.np-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}
@media (max-width: 991px) { .np-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 767px) { .np-grid { grid-template-columns: 1fr; } }

/* ── Fallback visuel carte (image absente) ── */
.np-card-img-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 260px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}
.np-card-img-fallback[hidden] { display: none; }
.np-card-img-fallback svg { opacity: 0.5; }
```

Puis, plus bas dans le `<style>`, après la règle `.np-card-badge.future { background: #374151; }`, **ajouter** :

```css
.np-card-badge.teal { background: #0d9488; }
```

- [ ] **Step 2 : Insérer la barre d'ancres après le hero**

Entre la fermeture de `.np-header` (`</div>` suivi d'une ligne vide) et le commentaire `<!-- ── Grille des produits ── -->`, insérer :

```html
  <!-- ── Barre d'ancres familles ── -->
  <nav class="np-anchor-nav" aria-label="Familles de produits">
    <div class="w-layout-blockcontainer container-default w-container">
      <a href="#portes">Portes automatiques</a>
      <a href="#kits-renovation">Kits de rénovation</a>
      <a href="#ouvre-portes">Ouvre-portes</a>
    </div>
  </nav>
```

- [ ] **Step 3 : Remplacer la section grille unique par 3 sections**

Remplacer **tout le bloc** qui va de `<!-- ── Grille des produits ── -->` jusqu'à la balise `</section>` qui ferme `<section class="section">` contenant `<div class="slidex-grid-3">` (soit, dans le fichier actuel, des lignes ~347 à ~483 incluses), par :

```html
  <!-- ══ Famille 1 : Portes automatiques ══ -->
  <section class="section np-fam" id="portes">
    <div class="w-layout-blockcontainer container-default w-container">
      <div class="np-section-head">
        <div class="subtitle">Portes piétonnes automatiques</div>
        <h2>Portes automatiques piétonnes</h2>
        <p>Coulissantes 1 vantail, 2 vantaux ou télescopiques — produites en 12 jours.</p>
      </div>
      <div class="np-grid">

        <!-- Porte 1 Vantail -->
        <div class="card v6">
          <div class="np-card-img">
            <span class="np-card-badge">1 vantail</span>
            <img alt="Porte automatique 1 vantail SlideX" src="../images/1V-SF-GA.png"/>
          </div>
          <div class="np-card-body">
            <div class="subtitle">Porte automatique 1 vantail</div>
            <h3>Un vantail</h3>
            <p>Optez pour notre porte piétonne automatique 1 vantail, idéale pour les espaces restreints et les entrées simples. Compacte, fiable et facile à installer, elle garantit une ouverture fluide, un accès sécurisé et un design discret. Produite en 12 jours, prête à poser.</p>
            <div class="np-spec-tags">
              <span class="np-spec-tag">600 – 1 200 mm</span>
              <span class="np-spec-tag">12 j. standard</span>
              <span class="np-spec-tag">Compatible PMR</span>
              <span class="np-spec-tag neutral">Plug &amp; play</span>
            </div>
          </div>
          <div class="np-card-footer">
            <a class="primary-button w-inline-block" href="../product-detail.html">
              <div>Voir en détail</div>
              <div class="item-icon-right icon-right-circle"><div class="base-icon-font" style="display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><path d="M10 5L15 10L10 15" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
            </a>
          </div>
        </div>

        <!-- Porte 2 Vantaux -->
        <div class="card v6">
          <div class="np-card-img">
            <span class="np-card-badge green">2 vantaux</span>
            <img alt="Porte automatique 2 vantaux SlideX" src="../images/2V-SF-GA.png"/>
          </div>
          <div class="np-card-body">
            <div class="subtitle">Porte automatique deux vantaux</div>
            <h3>Deux vantaux</h3>
            <p>Choisissez notre porte piétonne automatique 2 vantaux pour un passage large, fluide et confortable. Parfaite pour les zones à fort trafic ou les entrées professionnelles, elle allie performance, esthétique et sécurité. Livrée en 12 jours standard (15 jours avec laquage et vitrage), simple à installer.</p>
            <div class="np-spec-tags">
              <span class="np-spec-tag">1 200 – 2 400 mm</span>
              <span class="np-spec-tag">12 j. standard</span>
              <span class="np-spec-tag">Fort trafic</span>
              <span class="np-spec-tag neutral">Ouverture symétrique</span>
            </div>
          </div>
          <div class="np-card-footer">
            <a class="primary-button w-inline-block" href="../product-detail-2-vantaux.html">
              <div>Voir en détail</div>
              <div class="item-icon-right icon-right-circle"><div class="base-icon-font" style="display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><path d="M10 5L15 10L10 15" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
            </a>
          </div>
        </div>

        <!-- Porte Télescopique -->
        <div class="card v6">
          <div class="np-card-img">
            <span class="np-card-badge orange">Télescopique</span>
            <span class="np-card-badge future" style="left:auto;right:12px;">Disponible décembre 2026</span>
            <img alt="Porte télescopique SlideX" src="../images/1V-T-GA.png"/>
          </div>
          <div class="np-card-body">
            <div class="subtitle">Porte télescopique</div>
            <h3>Télescopique</h3>
            <p>Solution optimale pour les espaces restreints nécessitant un large passage. Le système télescopique permet un encombrement réduit tout en offrant un passage généreux. Idéale pour les entrées d'hôpitaux, centres commerciaux et bâtiments publics.</p>
            <div class="np-spec-tags">
              <span class="np-spec-tag">Encombrement optimisé</span>
              <span class="np-spec-tag">Passage maximal</span>
              <span class="np-spec-tag neutral">Sur mesure</span>
            </div>
          </div>
          <div class="np-card-footer">
            <a class="primary-button w-inline-block" href="../kit-renovation-bientot-disponible.html">
              <div>Voir en détail</div>
              <div class="item-icon-right icon-right-circle"><div class="base-icon-font" style="display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><path d="M10 5L15 10L10 15" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
            </a>
          </div>
        </div>

        <!-- Options & Accessoires -->
        <div class="card v6">
          <div class="np-card-img" style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);">
            <span class="np-card-badge cyan">Options</span>
            <div style="display:flex;align-items:center;justify-content:center;height:260px;">
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity:0.6;">
                <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 12L11 14L15 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="np-card-body">
            <div class="subtitle">Accessoires &amp; Options</div>
            <h3>Options &amp; Accessoires</h3>
            <p>Personnalisez vos portes avec nos options : détecteurs de sécurité, systèmes d'ouverture sans contact, finitions spéciales, vitrages sur mesure, laquage RAL. Tout pour adapter votre porte à vos besoins spécifiques.</p>
            <div class="np-spec-tags">
              <span class="np-spec-tag">Détecteurs sécurité</span>
              <span class="np-spec-tag">Sans contact</span>
              <span class="np-spec-tag neutral">Laquage RAL</span>
              <span class="np-spec-tag neutral">Vitrage sur mesure</span>
            </div>
          </div>
          <div class="np-card-footer">
            <a class="primary-button w-inline-block" href="../connexion-inscription.html">
              <div>Configurer</div>
              <div class="item-icon-right icon-right-circle"><div class="base-icon-font" style="display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><path d="M10 5L15 10L10 15" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ══ Famille 2 : Kits de rénovation ══ -->
  <section class="section np-fam" id="kits-renovation">
    <div class="w-layout-blockcontainer container-default w-container">
      <div class="np-section-head">
        <div class="subtitle">Modernisation</div>
        <h2>Kits de rénovation</h2>
        <p>Compatibles toutes marques — Record, Portalp, Dormakaba, GEZE…</p>
      </div>
      <div class="np-grid">

        <!-- Kit de Rénovation -->
        <div class="card v6">
          <div class="np-card-img">
            <span class="np-card-badge purple">Rénovation</span>
            <img alt="Kit de rénovation SlideX" src="../images/1V-SF-N.png"/>
          </div>
          <div class="np-card-body">
            <div class="subtitle">Kit de rénovation</div>
            <h3>Kit rénovation</h3>
            <p>Modernisez vos installations existantes avec nos kits de rénovation compatibles toutes marques (Record, Portalp, etc.). Solution économique pour donner une seconde vie à vos portes automatiques. Installation rapide, performance optimisée.</p>
            <div class="np-spec-tags">
              <span class="np-spec-tag">Toutes marques</span>
              <span class="np-spec-tag">Économique</span>
              <span class="np-spec-tag neutral">Installation rapide</span>
            </div>
          </div>
          <div class="np-card-footer">
            <a class="primary-button w-inline-block" href="../kits-renovation.html">
              <div>Voir en détail</div>
              <div class="item-icon-right icon-right-circle"><div class="base-icon-font" style="display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><path d="M10 5L15 10L10 15" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ══ Famille 3 : Ouvre-portes ══ -->
  <section class="section np-fam" id="ouvre-portes">
    <div class="w-layout-blockcontainer container-default w-container">
      <div class="np-section-head">
        <div class="subtitle">Portes battantes</div>
        <h2>Ouvre-portes</h2>
        <p>Opérateurs de portes battantes — montage simple ou double vantail, conformes EN 16005.</p>
      </div>
      <div class="np-grid">

        <!-- Go in 80 -->
        <div class="card v6">
          <div class="np-card-img">
            <span class="np-card-badge teal">Ouvre-porte</span>
            <img alt="Opérateur de porte battante SlideX Go in 80" src="../images/go-in-80.png" onerror="this.onerror=null; this.hidden=true; this.nextElementSibling.hidden=false;"/>
            <div class="np-card-img-fallback" hidden>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 21h18" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M12 11h.01" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M16 8l5 3-5 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
          <div class="np-card-body">
            <div class="subtitle">Opérateur de porte battante</div>
            <h3>Go in 80</h3>
            <p>Opérateur compact pour portes battantes jusqu'à 100 kg. Idéal bureaux, commerces et accès PMR intérieurs. Temporisation ajustable 0–60 s, montage simple ou double vantail.</p>
            <div class="np-spec-tags">
              <span class="np-spec-tag">Jusqu'à 100 kg</span>
              <span class="np-spec-tag">EN 16005</span>
              <span class="np-spec-tag">Simple ou double</span>
              <span class="np-spec-tag neutral">Bras compas / coulisse</span>
            </div>
          </div>
          <div class="np-card-footer">
            <a class="primary-button w-inline-block" href="ouvre-portes.html#go-in-80">
              <div>Voir en détail</div>
              <div class="item-icon-right icon-right-circle"><div class="base-icon-font" style="display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><path d="M10 5L15 10L10 15" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
            </a>
          </div>
        </div>

        <!-- Go in 350 -->
        <div class="card v6">
          <div class="np-card-img">
            <span class="np-card-badge teal">Ouvre-porte</span>
            <img alt="Opérateur de porte battante SlideX Go in 350" src="../images/go-in-350.png" onerror="this.onerror=null; this.hidden=true; this.nextElementSibling.hidden=false;"/>
            <div class="np-card-img-fallback" hidden>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 21h18" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M12 11h.01" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M16 8l5 3-5 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
          <div class="np-card-body">
            <div class="subtitle">Opérateur de porte battante</div>
            <h3>Go in 350</h3>
            <p>Opérateur robuste pour portes battantes lourdes jusqu'à 350 kg. Adapté ERP, bâtiments publics et portes coupe-feu. Temporisation ajustable 3–9 s, ouverture jusqu'à 105°.</p>
            <div class="np-spec-tags">
              <span class="np-spec-tag">Jusqu'à 350 kg</span>
              <span class="np-spec-tag">EN 16005</span>
              <span class="np-spec-tag">Simple ou double</span>
              <span class="np-spec-tag neutral">Bras compas / coulisse</span>
            </div>
          </div>
          <div class="np-card-footer">
            <a class="primary-button w-inline-block" href="ouvre-portes.html#go-in-350">
              <div>Voir en détail</div>
              <div class="item-icon-right icon-right-circle"><div class="base-icon-font" style="display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><path d="M10 5L15 10L10 15" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
```

- [ ] **Step 2b : Ajuster l'`id` en double sur la section support**

Vérifier la section support plus bas : elle porte `id="support"`. Ne pas y toucher (aucune collision avec `portes` / `kits-renovation` / `ouvre-portes`). Confirmer par :

```bash
grep -o 'id="[^"]*"' nos-produits/index.html | sort | uniq -d
```

Attendu : **aucune sortie** (pas d'id dupliqué). Si une collision apparaît, renommer le nouvel id fautif (ex. `portes` → `portes-auto`) et répercuter dans la barre d'ancres.

- [ ] **Step 3 : Contrôles fichier (doivent tous passer)**

```bash
grep -c 'slidex-grid-3' nos-produits/index.html                        # attendu : 0
grep -c 'class="np-grid"' nos-produits/index.html                      # attendu : 3
grep -c 'np-anchor-nav' nos-produits/index.html                        # attendu : >=4 (1 style-nav + 3 sélecteurs) ; au minimum le <nav> présent
grep -c 'id="portes"\|id="kits-renovation"\|id="ouvre-portes"' nos-produits/index.html   # attendu : 3
grep -c 'nth-of-type' nos-produits/index.html                          # attendu : 0
grep -c 'ouvre-portes.html#go-in-80\|ouvre-portes.html#go-in-350' nos-produits/index.html # attendu : 2
grep -c 'np-card-badge.teal\|np-card-badge teal' nos-produits/index.html # attendu : 3 (1 règle CSS + 2 badges)
grep -o 'id="[^"]*"' nos-produits/index.html | sort | uniq -d          # attendu : vide
python3 -c "import html.parser,sys
class P(html.parser.HTMLParser):
    d=0
    def handle_starttag(s,t,a):
        if t not in ('img','br','meta','link','input','hr','source','path','circle','svg','use'): s.d+=1
    def handle_endtag(s,t):
        if t not in ('img','br','meta','link','input','hr','source','path','circle','svg','use'): s.d-=1
p=P(); p.feed(open('nos-produits/index.html',encoding='utf-8').read())
print('profondeur finale', p.d)"
```

Le dernier contrôle est indicatif (le HTML Webflow n'est pas strict) : comparer la « profondeur finale » à celle obtenue sur une copie `git stash` du fichier d'origine — elle doit être identique (pas de balise ouvrante/fermante orpheline introduite).

- [ ] **Step 4 : Contrôle navigateur**

`python3 -m http.server 8000`, ouvrir `http://localhost:8000/nos-produits/index.html`.

Vérifier :
- barre d'ancres visible sous le hero foncé, 3 pills.
- clic sur « Ouvre-portes » → défilement doux jusqu'à la section, titre « Ouvre-portes » visible avec ~90 px d'air sous le header ; idem « Portes automatiques » et « Kits de rénovation ».
- **Section Portes** : 4 cartes (1 vantail, 2 vantaux, télescopique, Options), grille 3 colonnes en desktop, la 4ᵉ passe à la ligne.
- **Section Kits** : 1 carte, alignée à gauche.
- **Section Ouvre-portes** : 2 cartes Go in 80 / Go in 350 avec badge teal, visuel = fallback SVG foncé (PNG absents), pas d'image cassée.
- clic « Voir en détail » sur Go in 80 → arrive sur `ouvre-portes.html` ancré au bon bloc.
- responsive : 991 px → 2 colonnes ; 767 px → 1 colonne ; le hero passe en colonne (comportement existant conservé).
- console sans erreur ; header/footer chargés.
- section « Support et garantie » (id `support`) toujours présente et inchangée en bas.

- [ ] **Step 5 : Commit**

```bash
git add nos-produits/index.html
git commit -m "$(cat <<'EOF'
Nos produits : barre d'ancres + 3 familles, ajout des ouvre-portes

Découpe la grille plate en 3 sections (#portes, #kits-renovation,
#ouvre-portes) avec barre d'ancres et défilement doux. Remplace
.slidex-grid-3 (et ses hacks nth-of-type calés sur 5 cartes) par une
grille locale .np-grid par section. Ajoute les cartes Go in 80 et
Go in 350 pointant vers ouvre-portes.html.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

## Self-Review

**Spec coverage :**
- Spec A (barre d'ancres, 3 sections, grille auto, suppression nth-of-type, 2 cartes + fallback) → Task 2, steps 1-3. ✓
- Spec B (page dédiée : head cloné, hero foncé, 2 blocs ancrés, tableau comparatif scrollable, CTA réutilisée, lien retour) → Task 1, step 1. ✓
- Spec C (sitemap, noms d'images) → Task 1 step 2 + Global Constraints. ✓
- Spec D (offset ancre vs header JS, id en double, boucle onerror, chevauchement chantier header) → `scroll-margin-top` dans les 2 tasks, Task 2 step 2b + contrôle `uniq -d`, `this.onerror=null` partout, note ci-dessous. ✓
- Spec E (git diff attendu, contrôles navigateur) → steps 3-4 de chaque task. ✓

**Placeholder scan :** aucun « TBD/TODO/à compléter » ; tous les blocs de code sont complets et copiés en entier (pas de « idem Task 1 »).

**Type/nom consistency :** ancres `#go-in-80` / `#go-in-350` identiques entre Task 1 (définition sur `.op-product`) et Task 2 (liens `ouvre-portes.html#go-in-80`). Classe `.np-card-img-fallback` définie (Task 2 step 1) et utilisée (Task 2 step 3). Classe `.op-product-fallback` définie et utilisée dans Task 1. `.np-card-badge.teal` définie et utilisée. `scroll-margin-top: 90px` cohérent (`.np-fam` sur index, `.op-product` sur la page dédiée).

**Note de coordination :** le chantier « header inline » (spec séparée du même jour) modifie aussi `nos-produits/index.html` (remplacement de `<div id="header-placeholder"></div>`). Les deux chantiers ne se recouvrent pas au niveau des lignes, mais si le header inline est mergé d'abord, relire le contexte des edits de Task 2 step 2 (insertion après `.np-header`) avant de les appliquer.

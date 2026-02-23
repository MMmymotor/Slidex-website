# 🎯 Diagnostic Vidéo - Schémas & Visuels

## 📊 Funnel de conversion

```
┌─────────────────────────────────────────────────────────────┐
│                    ACQUISITION                               │
│  Sources: SEO, Google Ads, Newsletter, Réseaux sociaux     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              PAGE /diagnostic-video.html                     │
│  1000 visiteurs                                             │
│  • Hero avec badge zone                                     │
│  • Rassurance (5 points)                                    │
│  • Comment ça marche                                        │
│  • FAQ                                                      │
└─────────────────────────────────────────────────────────────┘
                            ↓ 15% cliquent CTA
┌─────────────────────────────────────────────────────────────┐
│                   TYPEFORM                                   │
│  150 ouvrent le formulaire                                  │
│  • Coordonnées                                              │
│  • Localisation (vérif zone)                                │
│  • Type de porte                                            │
│  • Description panne                                        │
│  • Upload photo/vidéo                                       │
└─────────────────────────────────────────────────────────────┘
                            ↓ 60% complètent
┌─────────────────────────────────────────────────────────────┐
│               STRIPE CHECKOUT                                │
│  90 arrivent sur paiement                                   │
│  • Paiement 19€ TTC                                         │
│  • Carte bancaire sécurisée                                 │
└─────────────────────────────────────────────────────────────┘
                            ↓ 70% payent
┌─────────────────────────────────────────────────────────────┐
│          EMAIL + CALENDLY                                    │
│  63 paiements validés                                       │
│  • Email confirmation immédiat                              │
│  • Lien Calendly pour choisir créneau                       │
└─────────────────────────────────────────────────────────────┘
                            ↓ 90% prennent RDV
┌─────────────────────────────────────────────────────────────┐
│              RENDEZ-VOUS CONFIRMÉ                            │
│  57 RDV pris                                                │
│  • Email confirmation                                       │
│  • Rappel 1h avant                                          │
│  • Lien Google Meet                                         │
└─────────────────────────────────────────────────────────────┘
                            ↓ 85% honorés
┌─────────────────────────────────────────────────────────────┐
│           DIAGNOSTIC VIDÉO 10-12 MIN                         │
│  48 diagnostics réalisés                                    │
│  • Expert SlideX en visio                                   │
│  • Analyse en direct de la panne                            │
│  • Estimation immédiate                                     │
└─────────────────────────────────────────────────────────────┘
                            ↓ 100% reçoivent devis
┌─────────────────────────────────────────────────────────────┐
│                 ENVOI DEVIS                                  │
│  48 devis envoyés (sous 2h)                                 │
│  • Détail du diagnostic                                     │
│  • Prix intervention                                        │
│  • Proposition Expert SlideX                                │
└─────────────────────────────────────────────────────────────┘
                            ↓
              ┌─────────────┴─────────────┐
              ↓                           ↓
┌─────────────────────────┐   ┌──────────────────────────┐
│   ACCEPTE (35%)         │   │   REFUSE (65%)           │
│  17 interventions       │   │  31 gardent diagnostic   │
│  • Mise en relation     │   │  • Conservent les 19€    │
│  • 19€ déduits          │   │  • Peuvent revenir +tard │
│  • CA: 17 × 1500€       │   │  • CA: 31 × 19€          │
│  = 25 500€              │   │  = 589€                  │
└─────────────────────────┘   └──────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    RÉSULTATS                                 │
│                                                             │
│  CA Diagnostics: 63 × 19€ = 1 197€                         │
│  Remboursements: 17 × 19€ = -323€                          │
│  CA Net Diag: 874€                                         │
│                                                             │
│  CA Interventions: 17 × 1500€ = 25 500€                    │
│                                                             │
│  TOTAL: 26 374€                                            │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Workflow automation

```
┌──────────────────────────────────────────────────────────────┐
│                   TYPEFORM SOUMIS                            │
└──────────────────────────────────────────────────────────────┘
                            ↓
              ┌─────────────┴─────────────┐
              ↓                           ↓
┌──────────────────────┐       ┌──────────────────────┐
│  GOOGLE SHEETS       │       │  NOTIFICATION EMAIL  │
│  Nouvelle ligne      │       │  → Équipe SlideX     │
│  avec toutes infos   │       │  "Nouveau lead!"     │
└──────────────────────┘       └──────────────────────┘
              ↓
┌──────────────────────────────────────────────────────────────┐
│              REDIRECTION STRIPE CHECKOUT                     │
└──────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────┐
│                 PAIEMENT 19€ VALIDÉ                          │
└──────────────────────────────────────────────────────────────┘
                            ↓
              ┌─────────────┴─────────────┬─────────────────┐
              ↓                           ↓                 ↓
┌──────────────────┐       ┌──────────────────┐  ┌────────────────┐
│  UPDATE SHEETS   │       │  EMAIL CLIENT    │  │  NOTIF ÉQUIPE  │
│  Statut = Payé   │       │  + Lien Calendly │  │  Paiement OK   │
└──────────────────┘       └──────────────────┘  └────────────────┘
                                    ↓
┌──────────────────────────────────────────────────────────────┐
│                CLIENT PREND RDV CALENDLY                     │
└──────────────────────────────────────────────────────────────┘
                            ↓
              ┌─────────────┴─────────────┬─────────────────┐
              ↓                           ↓                 ↓
┌──────────────────┐       ┌──────────────────┐  ┌────────────────┐
│  UPDATE SHEETS   │       │  EMAIL CONFIRMA  │  │  EMAIL ÉQUIPE  │
│  Date RDV        │       │  Détails RDV     │  │  Préparer diag │
└──────────────────┘       └──────────────────┘  └────────────────┘
                                    ↓
┌──────────────────────────────────────────────────────────────┐
│                  RAPPEL AUTOMATIQUE 1H AVANT                 │
│                  (via Calendly)                              │
└──────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────┐
│              DIAGNOSTIC VIDÉO RÉALISÉ                        │
│              (Expert remplit notes dans Sheets)              │
└──────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────┐
│         ENVOI MANUEL DEVIS PAR EMAIL (sous 2h)               │
└──────────────────────────────────────────────────────────────┘
                            ↓
              ┌─────────────┴─────────────┐
              ↓                           ↓
┌──────────────────────┐       ┌──────────────────────┐
│  CLIENT ACCEPTE      │       │  CLIENT REFUSE       │
│  Envoi email         │       │  Update Sheets       │
│  mise en relation    │       │  Statut = Refusé     │
└──────────────────────┘       └──────────────────────┘
              ↓
┌──────────────────────────────────────────────────────────────┐
│           UPDATE SHEETS: STATUT = CONVERTI                   │
│           CA Intervention tracké                             │
└──────────────────────────────────────────────────────────────┘
              ↓
┌──────────────────────────────────────────────────────────────┐
│        EMAIL J+3: DEMANDE AVIS & NPS                         │
└──────────────────────────────────────────────────────────────┘
```

---

## 📍 Zone de couverture (carte visuelle)

```
                    FRANCE
        ┌─────────────────────────────┐
        │                             │
        │         GRENOBLE ●          │
        │       (Centre MVP)          │
        │                             │
        │    ┌───────────────┐        │
        │    │   40 km       │        │
        │    │  ┌─────────┐  │        │
        │    │  │    ●    │  │        │ ← Zone service MVP
        │    │  │Grenoble │  │        │   (Grenoble + 40km)
        │    │  └─────────┘  │        │
        │    └───────────────┘        │
        │                             │
        │  Lyon ○ (Q2 2026)          │
        │                             │
        │         Chambéry ○          │
        │         (Q3 2026)           │
        │                             │
        │  Valence ○ (Q3 2026)       │
        │                             │
        └─────────────────────────────┘

● = Service actif
○ = Prévu (liste d'attente)
```

---

## 📊 Timeline déploiement

```
2026

Fév ──────► Mars ────► Avril ────► Mai ──────► Juin ─────► Juil ─────► Déc
│          │          │          │          │          │          │
│ PHASE 1  │          │ PHASE 2  │          │          │ PHASE 3  │
│ MVP      │          │ Lyon     │          │          │ National │
│ Grenoble │          │          │          │          │          │
│          │          │          │          │          │          │
│ Setup    │ 50 diag  │ Extension│ 200 diag │ Chmb+Val │ All FR   │
│ Test 10  │          │          │          │          │          │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘
   2h30      3 mois      +1 mois    3 mois     +2 mois    ongoing
```

---

## 💰 Répartition du CA

```
POUR 100 DIAGNOSTICS:

    Visiteurs page (1000)
         ↓ 15%
    CTA cliqué (150)
         ↓ 60%
    Formulaire soumis (90)
         ↓ 70%
    ╔══════════════════════════════════╗
    ║   PAIEMENT VALIDÉ (63)           ║
    ║   63 × 19€ = 1 197€              ║
    ╚══════════════════════════════════╝
         ↓ 90%
    RDV pris (57)
         ↓ 85%
    ╔══════════════════════════════════╗
    ║   DIAGNOSTIC RÉALISÉ (48)        ║
    ╚══════════════════════════════════╝
         ↓
      ┌──┴─────────────────┐
      ▼                    ▼
   ACCEPTE (35%)       REFUSE (65%)
   ┌─────────┐        ┌─────────┐
   │   17    │        │   31    │
   └─────────┘        └─────────┘
      │                    │
      │                    │
   Interven.           Conserve
   1500€ moy           19€
      │                    │
      ▼                    ▼
   ╔═══════════╗      ╔══════════╗
   ║ 25 500€   ║      ║  589€    ║
   ╚═══════════╝      ╚══════════╝
      │                    │
      └────────┬───────────┘
               ▼
     ╔═════════════════════╗
     ║   TOTAL: 26 089€    ║
     ║   (CA diagnostics   ║
     ║   + interventions)  ║
     ╚═════════════════════╝
       - Remboursements 323€
       = NET: 25 766€
```

---

## 🎯 Dashboard KPIs

```
┌────────────────────────────────────────────────────────────┐
│              TABLEAU DE BORD - MOIS EN COURS               │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ACQUISITION                                               │
│  ├─ Visiteurs page:        427  ▲ +12%                    │
│  ├─ Taux rebond:           52%  ▼ -3%                     │
│  └─ Clics CTA:             68   ▲ +8%                     │
│                                                            │
│  CONVERSION                                                │
│  ├─ Formulaires soumis:    38   ▲ +15%                    │
│  ├─ Paiements validés:     27   ▲ +10%                    │
│  ├─ Taux conversion:       71%  ▼ -2%                     │
│  ├─ RDV pris:              24   ▲ +5%                     │
│  └─ RDV honorés:           21   → 0%                      │
│                                                            │
│  BUSINESS                                                  │
│  ├─ CA diagnostics:        513€ ▲ +10%                    │
│  ├─ Interventions:         8    ▲ +2                      │
│  ├─ CA interventions:   12 400€ ▲ +20%                    │
│  └─ Taux conversion:       38%  ▲ +3%                     │
│                                                            │
│  QUALITÉ                                                   │
│  ├─ NPS:                   67   ▲ +5                      │
│  ├─ Durée moy. diag:       11min ▼ -1min                  │
│  └─ Taux annulation:       12%  ▼ -3%                     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 🔔 Notifications & Alertes

```
┌──────────────────────────────────────┐
│   TRIGGERS AUTOMATIQUES              │
├──────────────────────────────────────┤
│                                      │
│  ✅ Nouveau lead                     │
│     → Email équipe immédiat          │
│                                      │
│  💳 Paiement validé                  │
│     → Email client + Calendly        │
│     → Update Google Sheets           │
│                                      │
│  📅 RDV pris                         │
│     → Email confirmation             │
│     → Notif équipe pour préparer     │
│                                      │
│  🔔 Rappel 1h avant                  │
│     → Email client automatique       │
│                                      │
│  📄 Post-diagnostic                  │
│     → Envoi manuel devis             │
│                                      │
│  ⭐ J+3 intervention                 │
│     → Email demande avis NPS         │
│                                      │
│  🚨 Hors zone                        │
│     → Email liste d'attente          │
│                                      │
└──────────────────────────────────────┘
```

---

## 📱 Responsive design

```
DESKTOP (> 1024px)
┌─────────────────────────────────────┐
│  Header Nav Products Contact        │
├─────────────────────────────────────┤
│         HERO                        │
│  [Titre]    [Badge zone]            │
│  [CTA 1]    [CTA 2]                 │
├─────────────────────────────────────┤
│  [ Card 1 ] [ Card 2 ] [ Card 3 ]   │
│  [ Card 4 ] [ Card 5 ]              │
├─────────────────────────────────────┤
│  [ Étape 1 ] [ Étape 2 ]            │
│  [ Étape 3 ] [ Étape 4 ]            │
└─────────────────────────────────────┘

MOBILE (< 768px)
┌──────────────┐
│  ☰  SlideX   │
├──────────────┤
│    HERO      │
│   [Titre]    │
│ [Badge zone] │
│   [CTA 1]    │
│   [CTA 2]    │
├──────────────┤
│   Card 1     │
├──────────────┤
│   Card 2     │
├──────────────┤
│   Card 3     │
├──────────────┤
│   Étape 1    │
├──────────────┤
│   Étape 2    │
└──────────────┘
```

---

## 🎨 Charte couleurs

```
Couleurs principales SlideX:

#2563eb ████████  Bleu primaire (CTA, liens)
#f97316 ████████  Orange (CTA secondaire, accents)
#1e293b ████████  Gris foncé (textes titres)
#64748b ████████  Gris moyen (textes corps)
#f8fafc ████████  Gris clair (backgrounds)
#ffffff ████████  Blanc (backgrounds cards)

Couleurs feedback:

#16a34a ████████  Vert (succès, validation)
#ea580c ████████  Orange foncé (attention)
#dc2626 ████████  Rouge (erreur, urgent)
#fef3c7 ████████  Jaune clair (badge zone)
```

---

**Ce document fournit une vue visuelle complète du projet.**

Utilisez-le pour :
- Présenter le projet à l'équipe
- Former les collaborateurs
- Suivre les performances
- Optimiser le funnel

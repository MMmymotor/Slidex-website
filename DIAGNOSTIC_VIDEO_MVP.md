# Diagnostic Vidéo - Documentation MVP

## 📋 Vue d'ensemble

Page de vente pour tester le funnel de diagnostic vidéo payant pour portes automatiques en panne.

**URL :** `/diagnostic-video.html`

**Positionnement :** Service premium simple et rapide pour les clients avec une panne.

---

## 🎯 Objectifs du MVP

- Tester le marché du diagnostic vidéo payant
- Qualifier les leads avant intervention
- Créer une nouvelle source de revenus
- Améliorer l'expérience client (diagnostic rapide, évite les déplacements inutiles)

---

## 💰 Modèle économique

- **Prix :** 19€ TTC
- **Remboursement :** Déduit si intervention via un Expert SlideX
- **Durée visio :** 10-12 minutes
- **Engagement :** Sous 24h ouvrées
- **Zone :** Grenoble + 40 km (phase pilote)

---

## 🛠️ Stack technique MVP

### 1. Formulaire & Upload : **Typeform**

**Pourquoi Typeform ?**
- Interface intuitive et mobile-first
- Upload photo/vidéo natif
- Logique conditionnelle (vérification zone)
- Intégrations faciles

**Champs à créer :**
```
1. Informations contact
   - Nom / Prénom *
   - Email *
   - Téléphone *
   
2. Localisation
   - Adresse complète * (pour vérifier la zone)
   - Code postal *
   
3. Informations technique
   - Type de porte : [1 vantail / 2 vantaux / Télescopique / Autre]
   - Marque du moteur existant (si connue)
   - Description de la panne * (texte long)
   
4. Médias
   - Upload photo/vidéo de la panne *
   - Upload photo plaque signalétique moteur (optionnel)
   
5. Vérification zone
   - Logique : Si code postal hors zone 38xxx proche Grenoble
     → Message "Service non disponible + lien liste d'attente"
```

**Actions après soumission :**
- Webhook vers Google Sheets pour stockage lead
- Redirection vers Stripe Checkout

**TODO :**
- [ ] Créer le formulaire Typeform
- [ ] Configurer les webhooks
- [ ] Tester le parcours complet

---

### 2. Paiement : **Stripe Checkout**

**Configuration :**
```
Produit : Diagnostic Vidéo Porte Automatique
Prix : 19.00 EUR
Type : One-time payment
```

**Flow :**
1. Client remplit Typeform → Redirigé vers Stripe Checkout
2. Paiement validé → Webhook Stripe déclenché
3. Email automatique envoyé avec lien Calendly

**Webhook Stripe à configurer :**
```javascript
Événement : checkout.session.completed
Action : 
  - Enregistrer paiement dans Google Sheets
  - Envoyer email avec lien Calendly
  - Notifier équipe SlideX (Slack/Email)
```

**TODO :**
- [ ] Créer produit Stripe "Diagnostic Vidéo"
- [ ] Générer Payment Link
- [ ] Configurer webhook pour `checkout.session.completed`
- [ ] Tester en mode test
- [ ] Passer en mode production

---

### 3. Prise de RDV : **Calendly**

**Configuration événement :**
```
Nom : Diagnostic Vidéo Porte Automatique
Durée : 15 minutes (+ 5min de marge)
Lieu : Visio Google Meet ou Zoom
Disponibilités : Lun-Ven 9h-18h (ajuster selon dispo réelle)
Buffer : 15min entre chaque RDV
```

**Questions à poser lors de la résa :**
- Numéro de commande Stripe (pour tracking)
- Préférence outil visio (Meet / Zoom / WhatsApp)

**Notifications :**
- Email confirmation immédiate
- Rappel 1h avant le RDV
- Email à l'équipe SlideX avec les infos du lead

**TODO :**
- [ ] Créer événement Calendly
- [ ] Configurer notifications
- [ ] Tester la prise de RDV
- [ ] Former l'équipe au diagnostic vidéo

---

### 4. Stockage leads : **Google Sheets** (ou Airtable)

**Structure de la feuille :**

| Timestamp | Nom | Email | Téléphone | Adresse | Code Postal | Type Porte | Marque Moteur | Description Panne | Lien Photos | Paiement | Montant | Statut RDV | Date RDV | Notes Expert |
|-----------|-----|-------|-----------|---------|-------------|------------|---------------|-------------------|-------------|----------|---------|------------|----------|--------------|

**Workflow automatisation (Zapier/Make) :**
```
1. Typeform soumis → Nouvelle ligne Google Sheets
2. Stripe paiement → Mise à jour colonne "Paiement" = ✓
3. Calendly RDV pris → Mise à jour "Statut RDV" + "Date RDV"
```

**TODO :**
- [ ] Créer Google Sheet "Diagnostic Vidéo - Leads MVP"
- [ ] Configurer Zapier/Make pour automation
- [ ] Tester le flux complet
- [ ] Donner accès à l'équipe

---

## 🔗 URLs à configurer

Dans le fichier `js/diagnostic-config.js`, remplacer les placeholders :

```javascript
// Typeform
typeformUrl: 'https://VOTRE-COMPTE.typeform.com/to/VOTRE-FORM-ID'

// Stripe
stripePublicKey: 'pk_live_XXXXX' // ou pk_test pour les tests
stripePaymentLink: 'https://buy.stripe.com/XXXXX'

// Calendly
calendlyUrl: 'https://calendly.com/VOTRE-COMPTE/diagnostic-video'

// Webhooks
leadWebhook: 'https://hooks.zapier.com/hooks/catch/XXXXX/'
waitlistWebhook: 'https://hooks.zapier.com/hooks/catch/XXXXX/'

// Analytics
googleAnalyticsId: 'G-XXXXXXXXXX'
```

---

## 📊 Analytics & Tracking

**Événements à tracker :**

| Événement | Déclencheur | Objectif |
|-----------|-------------|----------|
| `cta_click` | Clic sur CTA "Réserver diagnostic" | Mesurer l'intention |
| `form_start` | Ouverture Typeform | Taux de conversion formulaire |
| `form_submitted` | Soumission Typeform | Leads générés |
| `payment_start` | Redirection Stripe | Intention d'achat |
| `payment_success` | Paiement validé | CA généré |
| `calendly_open` | Ouverture Calendly | Engagement post-paiement |
| `calendly_scheduled` | RDV confirmé | Taux de prise de RDV |
| `waitlist_signup` | Inscription liste d'attente | Demande hors zone |

**KPIs à suivre :**
- Taux de conversion : Visiteurs → CTA → Formulaire → Paiement → RDV
- CA généré (19€ × nombre de diagnostics)
- Taux de remboursement (interventions via Expert SlideX)
- NPS post-diagnostic

---

## 🗺️ Gestion de la zone

**Zone actuelle : Grenoble + 40 km**

Codes postaux indicatifs couverts :
- 38000 (Grenoble centre)
- 38100, 38130, 38180, 38320, 38400, 38600, 38610, 38640, 38700

**Si client hors zone :**
1. Message affiché sur la page
2. Formulaire liste d'attente
3. Stockage email + ville dans Google Sheets séparé
4. Email automatique de confirmation

**Extension géographique future :**
- Lyon (Q2 2026)
- Chambéry (Q3 2026)
- Valence (Q3 2026)
- National (2027)

---

## ✅ Checklist de lancement

### Phase 1 : Setup technique (Semaine 1)
- [ ] Créer formulaire Typeform complet
- [ ] Créer produit & payment link Stripe
- [ ] Créer événement Calendly
- [ ] Configurer Google Sheets
- [ ] Mettre en place webhooks Zapier/Make
- [ ] Tester le parcours complet en mode test

### Phase 2 : Contenu & formation (Semaine 2)
- [ ] Valider les textes de la page
- [ ] Préparer photos/illustrations si besoin
- [ ] Former l'équipe au diagnostic vidéo
- [ ] Créer script/checklist pour l'expert
- [ ] Préparer templates emails (confirmation, rappel, devis)

### Phase 3 : Lancement soft (Semaine 3)
- [ ] Passer Stripe en mode production
- [ ] Activer analytics
- [ ] Tester avec 1-2 clients pilotes
- [ ] Ajuster le process selon retours
- [ ] Valider qualité du diagnostic

### Phase 4 : Communication (Semaine 4)
- [ ] Annoncer sur site web (homepage + footer)
- [ ] Newsletter clients
- [ ] Post réseaux sociaux (LinkedIn)
- [ ] Google Ads ciblé "porte automatique en panne grenoble"
- [ ] Relance clients existants zone Grenoble

---

## 🎨 Charte graphique respectée

La page utilise :
- **Couleurs :** Bleu primaire (#2563eb), Orange (#f97316), Gris (#1e293b, #64748b)
- **Typographie :** Onest (family existante)
- **Composants :** primary-button, secondary-button, faq-item (déjà présents)
- **Structure :** Sections avec container-default (cohérence totale)

---

## 📞 Support & Contact

**Équipe diagnostic vidéo :**
- Email : hello@my-motor.fr
- Téléphone : 04.38.49.13.16

**Urgences techniques :**
- Problème Typeform → Support Typeform
- Problème paiement → Dashboard Stripe
- Problème RDV → Calendly admin

---

## 🚀 Évolutions futures (post-MVP)

1. **Zone géographique :** Extension progressive à toute la France
2. **Langue :** Version anglaise pour clients internationaux
3. **Automatisation :** IA pour pré-diagnostic automatique via upload vidéo
4. **Plateforme custom :** Remplacer Typeform+Calendly par solution maison
5. **Abonnement :** Offre diagnostic illimité pour professionnels
6. **API :** Intégration avec CRM SlideX

---

## 📝 Notes importantes

- **SlideX ne fait PAS l'intervention** → Uniquement diagnostic + mise en relation Expert
- Les 19€ sont **remboursés uniquement si intervention via Expert SlideX**
- Zone limitée pour MVP → Liste d'attente pour demandes hors zone
- Engagement 24h → Prévoir planning équipe + backup
- Qualité prioritaire → Former équipe avant lancement

---

**Version :** 1.0.0 MVP  
**Date :** 18 février 2026  
**Auteur :** SlideX Team

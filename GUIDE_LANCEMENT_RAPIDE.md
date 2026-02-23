# 🚀 Guide de lancement rapide - Diagnostic Vidéo

## ⚡ Checklist express (pour lancer en 1 journée)

### 🔧 Étape 1 : Typeform (30 min)

1. **Créer un compte Typeform** (si pas déjà fait)
   - Aller sur [typeform.com](https://typeform.com)
   - Plan gratuit suffisant pour MVP

2. **Créer le formulaire "Diagnostic Porte Automatique"**
   
   **Questions à ajouter :**
   
   ```
   📝 Écran 1 : Bienvenue
   "Diagnostic vidéo professionnel pour votre porte automatique
   19€ TTC - Déduit si intervention"
   
   📋 Écran 2 : Vos coordonnées
   - Nom Prénom (texte court)
   - Email (email)
   - Téléphone (numéro)
   
   📍 Écran 3 : Localisation
   - Adresse complète (texte long)
   - Code postal (texte court, nombre)
   
   🔧 Écran 4 : Votre porte
   - Type de porte (choix multiple : 1 vantail / 2 vantaux / Télescopique / Je ne sais pas)
   - Marque du moteur si connue (texte court, optionnel)
   
   💬 Écran 5 : La panne
   - Description de la panne (texte long)
   - Upload photo ou vidéo de la porte (file upload)
   - Photo de la plaque moteur si accessible (file upload, optionnel)
   
   ✅ Écran final
   "Merci ! Vous allez être redirigé vers le paiement."
   ```

3. **Configurer la logique conditionnelle** (optionnel mais recommandé)
   - Si code postal ne commence pas par 38 → Afficher message "Service non disponible dans votre zone"
   - Proposer un champ email pour liste d'attente

4. **Paramètres de fin de formulaire**
   - Redirection après soumission → Vers Stripe Payment Link (étape 2)
   - Ou afficher un bouton "Passer au paiement"

5. **Copier l'URL du formulaire**
   - Format : `https://votre-compte.typeform.com/to/XXXXX`
   - La coller dans `js/diagnostic-config.js` → `typeformUrl`

---

### 💳 Étape 2 : Stripe (20 min)

1. **Créer un compte Stripe** (si pas déjà fait)
   - [stripe.com](https://stripe.com)
   - Activer le mode Test pour commencer

2. **Créer un produit**
   - Aller dans "Produits" → "Ajouter un produit"
   - Nom : `Diagnostic Vidéo Porte Automatique`
   - Prix : `19.00 EUR`
   - Type : Paiement unique (one-time)

3. **Créer un Payment Link**
   - Dans le produit → "Créer un lien de paiement"
   - Activer "Collecter les coordonnées du client"
   - Texte de succès : "Paiement confirmé ! Vous allez recevoir un email avec le lien pour prendre RDV"
   - Page de succès URL : `https://www.slidex.fr/diagnostic-video.html#success` (ou page dédiée)

4. **Configurer le webhook** (pour automatisation)
   - Aller dans "Développeurs" → "Webhooks"
   - Ajouter un endpoint
   - URL : Votre webhook Zapier/Make (étape 4)
   - Événements : `checkout.session.completed`

5. **Copier les clés**
   - Clé publique : `pk_test_XXXXX` (ou `pk_live_` en production)
   - Payment Link URL : `https://buy.stripe.com/XXXXX`
   - Les coller dans `js/diagnostic-config.js`

---

### 📅 Étape 3 : Calendly (15 min)

1. **Créer un compte Calendly**
   - [calendly.com](https://calendly.com)
   - Plan gratuit OK pour MVP

2. **Créer un événement**
   - Type : Rendez-vous vidéo
   - Nom : `Diagnostic Vidéo Porte Automatique`
   - Durée : `15 minutes`
   - Emplacement : Google Meet (ou Zoom)

3. **Disponibilités**
   - Définir vos créneaux (ex: Lun-Ven 9h-18h)
   - Buffer entre RDV : 15 min
   - Préavis minimum : 2 heures

4. **Questions à poser**
   - "Numéro de commande Stripe" (pour tracking)
   - "Préférence outil visio" (Meet / Zoom / WhatsApp)

5. **Notifications**
   - Email confirmation immédiate ✓
   - Rappel 1h avant ✓
   - Email à vous-même ✓

6. **Copier l'URL de l'événement**
   - Format : `https://calendly.com/votre-compte/diagnostic-video`
   - La coller dans `js/diagnostic-config.js`

---

### 📊 Étape 4 : Automation (Zapier/Make) (30 min)

**Option A : Zapier** (plus simple)

1. Créer un Zap : **Typeform → Google Sheets**
   - Trigger : "New Entry in Typeform"
   - Action : "Create Spreadsheet Row in Google Sheets"
   - Mapper les champs

2. Créer un Zap : **Stripe → Email + Google Sheets**
   - Trigger : "New Payment in Stripe"
   - Action 1 : "Update Row in Google Sheets" (ajouter statut paiement)
   - Action 2 : "Send Email" avec lien Calendly

3. Créer un Zap : **Calendly → Google Sheets**
   - Trigger : "Invitee Created"
   - Action : "Update Row in Google Sheets" (ajouter date RDV)

**Option B : Make (plus puissant)**
- Même logique mais avec Make.com
- Interface visuelle similaire

**Webhook URLs à copier dans `diagnostic-config.js`**

---

### 📈 Étape 5 : Google Analytics (10 min)

1. **Créer une propriété GA4**
   - [analytics.google.com](https://analytics.google.com)
   - Ajouter un nouveau flux de données

2. **Copier l'ID de mesure**
   - Format : `G-XXXXXXXXXX`
   - Le coller dans `js/diagnostic-config.js`

3. **Ajouter le tag sur la page** (optionnel, déjà géré via config)

---

### ✅ Étape 6 : Test complet (15 min)

1. **Tester le parcours en mode TEST**
   - Cliquer sur CTA → Typeform
   - Remplir formulaire
   - Payer avec carte test Stripe : `4242 4242 4242 4242`
   - Vérifier email de confirmation
   - Prendre RDV Calendly
   - Vérifier que tout est enregistré dans Google Sheets

2. **Vérifier les webhooks**
   - Dashboard Stripe → Webhooks → Logs
   - Vérifier que les événements sont bien reçus

3. **Valider les emails**
   - Email confirmation paiement
   - Email confirmation RDV
   - Email à l'équipe

---

### 🚀 Étape 7 : Mise en production (10 min)

1. **Passer Stripe en mode Live**
   - Remplacer `pk_test_` par `pk_live_`
   - Activer webhook en production

2. **Mettre à jour les URLs dans le config**
   - Vérifier que toutes les URLs pointent vers production

3. **Activer la page**
   - La page est déjà prête : `diagnostic-video.html`
   - Ajouter un lien dans le menu de navigation (optionnel)

4. **Communication**
   - Annoncer sur page d'accueil
   - Newsletter
   - Réseaux sociaux

---

## 🎯 URLs à configurer - Récap

Ouvrir `js/diagnostic-config.js` et remplacer :

```javascript
// 1. Typeform
typeformUrl: 'https://VOTRE-COMPTE.typeform.com/to/XXXXX'

// 2. Stripe
stripePublicKey: 'pk_live_XXXXX'
stripePaymentLink: 'https://buy.stripe.com/XXXXX'

// 3. Calendly
calendlyUrl: 'https://calendly.com/VOTRE-COMPTE/diagnostic-video'

// 4. Webhooks
leadWebhook: 'https://hooks.zapier.com/hooks/catch/XXXXX/'
waitlistWebhook: 'https://hooks.zapier.com/hooks/catch/XXXXX/'

// 5. Analytics
googleAnalyticsId: 'G-XXXXXXXXXX'
```

---

## 📋 Template email confirmation (à configurer dans Stripe/Zapier)

**Sujet :** ✅ Diagnostic vidéo SlideX - Paiement confirmé

**Corps :**
```
Bonjour {nom},

Votre paiement de 19€ pour le diagnostic vidéo a bien été enregistré.

🎯 Prochaine étape : Prenez rendez-vous pour votre diagnostic

Cliquez ici pour choisir votre créneau :
👉 {lien_calendly}

⏱️ Durée : 10-12 minutes
📱 Via visio (lien envoyé automatiquement)
💰 Les 19€ seront déduits si intervention via Expert SlideX

Pensez à préparer :
✅ Accès à la porte automatique
✅ Smartphone/ordinateur avec caméra
✅ Photo de la plaque moteur (si accessible)

Une question ? Répondez à cet email ou appelez-nous au 04.38.49.13.16

À très vite,
L'équipe SlideX

---
SlideX - Fabricant français de portes automatiques
2 rue Raoul Follereau, 38180 Seyssins
www.slidex.fr
```

---

## 🎓 Formation équipe diagnostic (30 min)

**Checklist pour l'expert qui réalise le diagnostic :**

1. **Avant la visio**
   - [ ] Consulter le formulaire Typeform du client
   - [ ] Regarder les photos/vidéos envoyées
   - [ ] Préparer questions complémentaires

2. **Pendant la visio (10-12 min)**
   - [ ] Saluer et mettre en confiance
   - [ ] Faire montrer la porte en fonctionnement (si possible)
   - [ ] Identifier marque/modèle du moteur
   - [ ] Diagnostiquer la panne
   - [ ] Expliquer le problème au client
   - [ ] Estimer le coût de réparation

3. **Après la visio**
   - [ ] Envoyer devis par email (sous 2h)
   - [ ] Proposer mise en relation Expert SlideX
   - [ ] Noter dans Google Sheets : diagnostic + montant devis

**Script type :**
- Intro : "Bonjour, je suis [nom] de SlideX, merci d'avoir pris RDV..."
- Questions : "Depuis quand avez-vous ce problème ? Quel bruit fait la porte ?"
- Diagnostic : "D'après ce que je vois, il s'agit probablement de..."
- Devis : "La réparation devrait coûter environ X€. Je vous envoie un devis détaillé par email."
- Next step : "Si vous souhaitez passer par un Expert SlideX, les 19€ seront déduits."

---

## 💡 Conseils pour le lancement

1. **Commencer petit** : 5-10 diagnostics/semaine pour ajuster le process
2. **Collecter feedback** : Demander NPS après chaque diagnostic
3. **Optimiser le funnel** : Tracker les abandons (formulaire → paiement → RDV)
4. **Communiquer** : Email aux clients existants dans la zone Grenoble
5. **A/B testing** : Tester différents titres/prix/mises en page

---

## 🆘 Support

**Problème technique ?**
- Typeform : support.typeform.com
- Stripe : support.stripe.com
- Calendly : help.calendly.com

**Question métier ?**
- Email : hello@my-motor.fr
- Tel : 04.38.49.13.16

---

**Durée totale setup : ~2h30**

**Coût MVP : Gratuit** (plans gratuits Typeform + Calendly + frais Stripe 1.5% + 0.25€/transaction)

**Go live possible : Aujourd'hui même ! 🚀**

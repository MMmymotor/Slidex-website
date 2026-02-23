# ✅ CHECKLIST LANCEMENT - Diagnostic Vidéo SlideX

**MVP Grenoble + 40km | 19€ TTC | Sous 24h**

---

## 📅 PLANNING

| Étape | Durée | Deadline | Statut |
|-------|-------|----------|--------|
| Setup technique | 2h | ___/___/___ | ☐ |
| Formation équipe | 1h | ___/___/___ | ☐ |
| Tests pilotes | 1 sem | ___/___/___ | ☐ |
| Lancement soft | - | ___/___/___ | ☐ |

---

## 🔧 SETUP TECHNIQUE

### Typeform
- [ ] Compte créé
- [ ] Formulaire "Diagnostic Porte Auto" créé
- [ ] Champs configurés (coordonnées, localisation, type porte, description, upload)
- [ ] Logique conditionnelle zone 38xxx activée
- [ ] Redirection Stripe configurée
- [ ] Webhook vers Zapier testé
- [ ] URL copiée dans `diagnostic-config.js`
- [ ] **✅ TEST OK**

### Stripe
- [ ] Compte créé/activé
- [ ] Produit "Diagnostic Vidéo" créé (19€)
- [ ] Payment Link généré
- [ ] Webhook endpoint configuré (`checkout.session.completed`)
- [ ] Mode Test validé avec carte 4242 4242 4242 4242
- [ ] Email confirmation configuré
- [ ] Clés API copiées dans config
- [ ] **Mode LIVE activé**
- [ ] **✅ TEST OK**

### Calendly
- [ ] Compte créé
- [ ] Événement "Diagnostic Vidéo" créé (15 min)
- [ ] Google Meet/Zoom configuré
- [ ] Disponibilités définies (Lun-Ven _h-_h)
- [ ] Buffer 15 min entre RDV activé
- [ ] Questions personnalisées ajoutées
- [ ] Notifications email activées
- [ ] Rappel 1h avant activé
- [ ] URL copiée dans config
- [ ] **✅ TEST OK**

### Automation (Zapier/Make)
- [ ] Zap 1: Typeform → Google Sheets ✓
- [ ] Zap 2: Stripe → Email + Sheets ✓
- [ ] Zap 3: Calendly → Sheets ✓
- [ ] Webhook liste d'attente configuré
- [ ] Notification équipe Slack/Email configurée
- [ ] **✅ TOUS LES ZAPS TESTÉS**

### Google Sheets
- [ ] Feuille "Diagnostics Leads" créée
- [ ] Colonnes configurées (timestamp, nom, email, tel, adresse, CP, type porte, marque, description, médias, paiement, RDV, statut)
- [ ] Feuille partagée avec équipe
- [ ] **✅ PREMIÈRE LIGNE TEST OK**

### Analytics
- [ ] Google Analytics GA4 configuré
- [ ] ID copié dans config
- [ ] Événements personnalisés créés
- [ ] Tracking CTAs opérationnel
- [ ] **✅ TEST TRACKING OK**

---

## 📄 CONTENU & DOCUMENTATION

### Page web
- [ ] diagnostic-video.html déployée sur serveur
- [ ] Responsive testé (mobile, tablette, desktop)
- [ ] Tous les CTA fonctionnels
- [ ] FAQ accordion opérationnelle
- [ ] Formulaire liste d'attente testé
- [ ] Vitesse chargement < 3sec
- [ ] **✅ PAGE LIVE**

### Configuration
- [ ] diagnostic-config.js mis à jour avec vraies URLs
- [ ] zone-checker.js activé (optionnel)
- [ ] Toutes les clés API renseignées
- [ ] Mode production activé
- [ ] **✅ CONFIG VALIDÉE**

### SEO
- [ ] Sitemap.xml mis à jour
- [ ] Meta descriptions optimisées
- [ ] Structured data validée
- [ ] Canonical URL définie
- [ ] robots.txt vérifié
- [ ] **✅ SEO OK**

### Emails
- [ ] Template 1: Confirmation paiement ✓
- [ ] Template 2: Rappel RDV ✓
- [ ] Template 3: Envoi devis ✓
- [ ] Template 4: Mise en relation Expert ✓
- [ ] Template 5: Demande avis J+3 ✓
- [ ] Template 6: Liste d'attente ✓
- [ ] Template 7: Notification équipe ✓
- [ ] **✅ TOUS TEMPLATES PRÊTS**

---

## 👥 FORMATION ÉQUIPE

### Documentation lue
- [ ] README_DIAGNOSTIC_VIDEO.md
- [ ] GUIDE_LANCEMENT_RAPIDE.md
- [ ] EMAIL_TEMPLATES_DIAGNOSTIC.md
- [ ] SCHEMAS_VISUELS_DIAGNOSTIC.md

### Formation pratique
- [ ] Vidéo formation enregistrée (30 min)
- [ ] Session live avec équipe réalisée
- [ ] Checklist diagnostic imprimée
- [ ] Script visio type distribué
- [ ] Template devis Excel/PDF prêt

### Outils maîtrisés
- [ ] Typeform admin
- [ ] Stripe dashboard
- [ ] Calendly gestion RDV
- [ ] Google Sheets mise à jour
- [ ] Outil visio (Meet/Zoom)

### Personnes formées
- [ ] _________________ (nom)
- [ ] _________________ (nom)
- [ ] _________________ (nom)

---

## 🧪 TESTS PILOTES

### Test complet parcours
- [ ] **Test 1:** Client dans zone (38xxx)
  - [ ] CTA cliqué
  - [ ] Formulaire rempli
  - [ ] Paiement validé (cart test)
  - [ ] Email reçu
  - [ ] RDV pris Calendly
  - [ ] Diagnostic réalisé
  - [ ] Devis envoyé
  - [ ] Feedback collecté

- [ ] **Test 2:** Client hors zone
  - [ ] Message zone affiché
  - [ ] Inscription liste d'attente
  - [ ] Email confirmation reçu
  - [ ] Enregistrement Sheets OK

### Validation workflow
- [ ] Webhook Typeform → Sheets ✓
- [ ] Webhook Stripe → Email ✓
- [ ] Webhook Calendly → Sheets ✓
- [ ] Email rappel 1h avant ✓
- [ ] Tous les emails bien reçus ✓

### Performance technique
- [ ] Temps chargement page < 3 sec
- [ ] Mobile responsive OK
- [ ] Formulaire upload photo OK
- [ ] Paiement Stripe sécurisé OK
- [ ] Aucune erreur console

---

## 📣 COMMUNICATION

### Site web
- [ ] Lien ajouté dans menu navigation (optionnel)
- [ ] Homepage: banner "Porte en panne ? Diagnostic 19€"
- [ ] Footer: lien vers /diagnostic-video.html
- [ ] Blog: article "Nouveau service diagnostic vidéo"
- [ ] Popup exit-intent configuré (optionnel)

### Newsletter
- [ ] Template newsletter créé
- [ ] Segment clients zone Grenoble
- [ ] Email envoyé
- [ ] Taux ouverture > 20% ✓

### Réseaux sociaux
- [ ] Post LinkedIn publié
- [ ] Post Facebook publié (si pertinent)
- [ ] Story Instagram (si pertinent)
- [ ] Visuels créés (Canva)

### Google Ads (optionnel)
- [ ] Campagne "porte automatique panne grenoble" créée
- [ ] Budget défini: ___€/jour
- [ ] Landing page = /diagnostic-video.html
- [ ] Tracking conversions activé
- [ ] **✅ CAMPAGNE ACTIVE**

### Relations presse (optionnel)
- [ ] Communiqué de presse rédigé
- [ ] Liste médias locaux Grenoble
- [ ] Emails envoyés

---

## 📞 OPÉRATIONS

### Planning & disponibilités
- [ ] Créneaux Calendly définis
- [ ] Planning équipe synchronisé
- [ ] Backup en cas d'absence prévu
- [ ] Téléphone 04.38.49.13.16 actif

### Outils de travail
- [ ] Ordinateur + webcam OK
- [ ] Connexion internet stable
- [ ] Google Meet/Zoom compte Pro
- [ ] Deuxième écran recommandé
- [ ] Casque micro pour meilleure qualité

### Documentation prête
- [ ] Checklist diagnostic imprimée
- [ ] Script questions type
- [ ] Liste pannes fréquentes
- [ ] Catalogue pièces détachées
- [ ] Liste Experts SlideX par zone

---

## 💰 FINANCE & ADMIN

### Comptabilité
- [ ] Code comptable diagnostics défini
- [ ] Compte Stripe lié à compta
- [ ] TVA 20% bien configurée
- [ ] Factures automatiques activées (Stripe)

### Juridique
- [ ] CGV diagnostic vidéo rédigées
- [ ] Politique de confidentialité mise à jour
- [ ] Consentement RGPD formulaire
- [ ] Mentions légales à jour

### Assurance
- [ ] Activité diagnostic couverte par RC Pro ✓

---

## 📊 SUIVI & MESURE

### Dashboard KPIs
- [ ] Google Analytics Dashboard créé
- [ ] Google Sheets rapport hebdo
- [ ] Tableau suivi conversions
- [ ] Graphique CA diagnostics
- [ ] Graphique CA interventions générées

### Indicateurs définis
- [ ] Objectif diagnostics mois 1: ___
- [ ] Objectif taux conversion: ____%
- [ ] Objectif NPS minimum: ___
- [ ] Budget max acquisition: ___€

### Revue hebdomadaire
- [ ] Meeting équipe tous les ___
- [ ] Point KPIs
- [ ] Retours clients
- [ ] Ajustements à faire

---

## 🚀 LANCEMENT

### J-7
- [ ] ✅ Tout setup technique validé
- [ ] ✅ Équipe formée
- [ ] ✅ Tests pilotes OK
- [ ] Communication préparée

### J-3
- [ ] Annonce sur homepage
- [ ] Newsletter envoyée
- [ ] Posts réseaux sociaux programmés

### J-1
- [ ] Vérification finale de TOUS les systèmes
- [ ] Planning équipe confirmé
- [ ] Mode production activé partout

### JOUR J - ___/___/___
- [ ] 🎉 **PAGE MISE EN LIGNE**
- [ ] Monitoring actif toute la journée
- [ ] Équipe disponible pour support
- [ ] Premier diagnostic réalisé ✓

### J+1
- [ ] Analyse premiers résultats
- [ ] Ajustements urgents si besoin
- [ ] Feedback équipe collecté

### J+7
- [ ] Bilan semaine 1
- [ ] Diagnostics réalisés: ___
- [ ] Taux conversion: ___%
- [ ] CA généré: ___€
- [ ] NPS: ___
- [ ] **Décision: continuer / ajuster / pivoter**

---

## ⚠️ PLAN B / TROUBLESHOOTING

### Si trop de demandes
- [ ] Liste d'attente secondaire
- [ ] Augmenter créneaux Calendly
- [ ] Recruter expert supplémentaire
- [ ] Augmenter délai à 48h temporairement

### Si pas assez de demandes
- [ ] Augmenter budget Google Ads
- [ ] Tester prix 9€ ou 29€
- [ ] Promotion "3 premiers gratuits"
- [ ] Cibler autres zones (Lyon)

### Si problème technique
- [ ] Contact support Typeform/Stripe/Calendly
- [ ] Backup: formulaire Google Forms
- [ ] Paiement manuel par virement
- [ ] RDV par téléphone direct

---

## ✍️ SIGNATURES

**Chef de projet:**  
Nom: _________________  
Date: ___/___/___  
Signature: _________________

**Responsable technique:**  
Nom: _________________  
Date: ___/___/___  
Signature: _________________

**Responsable commercial:**  
Nom: _________________  
Date: ___/___/___  
Signature: _________________

---

## 📝 NOTES

```
_____________________________________________________________

_____________________________________________________________

_____________________________________________________________

_____________________________________________________________

_____________________________________________________________
```

---

**Document version 1.0 - SlideX 2026**  
**À imprimer et compléter au stylo ✓**

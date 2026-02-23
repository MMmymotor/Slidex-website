# 🎬 Diagnostic Vidéo - Mode d'emploi

## 🎯 Objectif

Tester un funnel de **diagnostic vidéo payant** pour portes automatiques en panne.  
Service disponible zone **Grenoble + 40 km** en phase MVP.

**Prix :** 19€ TTC (déduit si intervention via Expert SlideX)  
**Délai :** Sous 24h ouvrées  
**Durée :** 10-12 minutes de visio

---

## 📂 Fichiers du projet

| Fichier | Description |
|---------|-------------|
| **diagnostic-video.html** | 🌐 Page principale (à mettre en ligne) |
| **js/diagnostic-config.js** | ⚙️ Configuration (Typeform, Stripe, Calendly) |
| **js/zone-checker.js** | 📍 Vérification zone géographique |
| **DIAGNOSTIC_VIDEO_MVP.md** | 📚 Documentation complète du MVP |
| **GUIDE_LANCEMENT_RAPIDE.md** | 🚀 Setup en 2h30 étape par étape |
| **EMAIL_TEMPLATES_DIAGNOSTIC.md** | 📧 7 templates d'emails prêts |
| **RESUME_PROJET_DIAGNOSTIC.md** | 📊 Vue d'ensemble (ce fichier) |

---

## ⚡ Démarrage rapide

### 1️⃣ Lire la documentation (5 min)

```bash
# Ordre de lecture recommandé :
1. Ce fichier (README)
2. GUIDE_LANCEMENT_RAPIDE.md (pour le setup)
3. DIAGNOSTIC_VIDEO_MVP.md (pour comprendre le projet)
4. EMAIL_TEMPLATES_DIAGNOSTIC.md (pour les emails)
```

### 2️⃣ Configurer les outils (2h)

Suivre **GUIDE_LANCEMENT_RAPIDE.md** pour :
- Créer le formulaire Typeform
- Configurer Stripe
- Paramétrer Calendly
- Mettre en place les automations

### 3️⃣ Mettre à jour la config (5 min)

Éditer **js/diagnostic-config.js** et remplacer les placeholders :

```javascript
// Vos vraies URLs :
typeformUrl: 'https://VOTRE-COMPTE.typeform.com/to/XXXXX'
stripePaymentLink: 'https://buy.stripe.com/XXXXX'
calendlyUrl: 'https://calendly.com/VOTRE-COMPTE/diagnostic-video'
```

### 4️⃣ Tester en local (10 min)

```bash
# Le serveur local est déjà lancé sur le port 5500
# Ouvrir dans le navigateur :
http://localhost:5500/diagnostic-video.html

# Tester le parcours complet :
1. Cliquer sur CTA
2. Remplir Typeform (mode test)
3. Payer avec carte test Stripe : 4242 4242 4242 4242
4. Vérifier emails/webhooks
5. Prendre RDV Calendly
```

### 5️⃣ Mettre en production (5 min)

```bash
# 1. Passer Stripe en mode Live
# 2. Vérifier que les URLs sont en production
# 3. Déployer la page sur le serveur
# 4. Tester une dernière fois
# 5. Communiquer ! 🎉
```

---

## 🎨 Aperçu de la page

La page respecte à 100% la charte graphique SlideX :

**Structure :**
1. **Hero** - Badge zone + titre accrocheur + double CTA
2. **Rassurance** - 5 points clés (éviter déplacement, estimation, expert, fabricant, remboursement)
3. **Comment ça marche** - 4 étapes visuelles
4. **Zone de service** - Carte + formulaire liste d'attente hors zone
5. **FAQ** - 6 questions essentielles avec accordion
6. **CTA final** - Rappel prix + zone + engagement

**Composants réutilisés :**
- `primary-button` / `secondary-button`
- `container-default`
- `faq-item` avec animation
- Header/Footer existants
- Couleurs (#2563eb, #f97316, #1e293b...)
- Font Onest

---

## 🔗 Parcours utilisateur

```
Visiteur arrive sur /diagnostic-video.html
    ↓
Lit la proposition de valeur
    ↓
Clique sur CTA "Réserver mon diagnostic"
    ↓
Redirigé vers Typeform
    ↓
Remplit formulaire + upload photo/vidéo
    ↓
Redirigé vers Stripe Checkout
    ↓
Paye 19€
    ↓
Reçoit email avec lien Calendly
    ↓
Choisit son créneau
    ↓
RDV confirmé (email + rappel 1h avant)
    ↓
Diagnostic vidéo 10-12 min
    ↓
Reçoit devis par email
    ↓
Accepte → Mise en relation Expert SlideX (19€ déduits)
OU
Refuse → Garde le diagnostic pour 19€
```

---

## 🛠️ Stack technique

| Outil | Rôle | Statut |
|-------|------|--------|
| **HTML/CSS/JS** | Page front | ✅ Créé |
| **Typeform** | Formulaire + upload | ⏳ À configurer |
| **Stripe** | Paiement 19€ | ⏳ À configurer |
| **Calendly** | Prise de RDV | ⏳ À configurer |
| **Zapier/Make** | Automation | ⏳ À configurer |
| **Google Sheets** | Stockage leads | ⏳ À créer |
| **Google Analytics** | Tracking | ⏳ À activer |

---

## 📊 KPIs à suivre

**Acquisition :**
- Visiteurs `/diagnostic-video.html`
- Taux de clic CTA
- Sources de trafic

**Conversion :**
- Formulaires soumis
- Paiements validés (19€)
- RDV pris
- RDV honorés
- Interventions converties

**Business :**
- CA diagnostics
- Taux remboursement
- CA interventions générées
- ROI global

**Qualité :**
- NPS post-diagnostic
- Temps moyen diagnostic
- Taux de résolution

---

## 🎯 Objectifs MVP (3 mois)

| Métrique | Objectif |
|----------|----------|
| Diagnostics réalisés | 50 |
| Taux conversion intervention | 30% |
| CA diagnostics | 1 000€ |
| CA interventions | 20 000€ |
| NPS | > 50 |

---

## 📧 Emails automatiques

7 templates prêts dans **EMAIL_TEMPLATES_DIAGNOSTIC.md** :

1. ✅ Confirmation paiement + lien Calendly
2. 🔔 Rappel RDV (1h avant)
3. 📄 Envoi devis post-diagnostic
4. 🤝 Mise en relation Expert local
5. 💬 Demande d'avis (J+3)
6. 🔔 Confirmation inscription liste d'attente
7. 🆕 Notification interne équipe

---

## 🗺️ Zone de service

**Phase MVP :** Grenoble + 40 km

Codes postaux couverts : 38000, 38100, 38130, 38180, 38240, 38320, 38400, etc.

**Hors zone ?**  
→ Formulaire liste d'attente sur la page  
→ Email automatique d'inscription  
→ Notification lors de l'extension

---

## 💰 Modèle économique

**Prix diagnostic :** 19€ TTC  
**Remboursement :** Si intervention via Expert SlideX  
**Coût marginal :** ~10-15 min expert  
**Taux conversion espéré :** 30-40%

**Exemple :**
- 100 diagnostics = 1 900€
- 35% convertis = 665€ remboursés
- CA net = **1 235€**
- + CA interventions = **20-30k€**

---

## ⚠️ Points d'attention

**SlideX ne fait PAS l'intervention**  
→ Uniquement diagnostic + mise en relation

**Zone limitée au départ**  
→ Liste d'attente pour hors zone

**Engagement 24h**  
→ Prévoir planning + backup

**Qualité avant quantité**  
→ Former équipe avant scaling

---

## 🚀 Prochaines étapes

### Semaine 1 : Setup
- [ ] Créer Typeform
- [ ] Configurer Stripe
- [ ] Paramétrer Calendly
- [ ] Setup automations

### Semaine 2 : Test
- [ ] Former équipe
- [ ] Tester avec 2 clients pilotes
- [ ] Ajuster process

### Semaine 3 : Lancement soft
- [ ] Passer en production
- [ ] Annoncer sur site
- [ ] Newsletter Grenoble

### Semaine 4 : Communication
- [ ] Réseaux sociaux
- [ ] Google Ads local
- [ ] Mesurer résultats

---

## 💡 Idées d'amélioration future

**Court terme :**
- Témoignages vidéo clients
- Chat en direct pendant diagnostic
- Extension Lyon

**Moyen terme :**
- App mobile diagnostic
- IA pré-diagnostic
- Abonnement pros

**Long terme :**
- Capteurs IoT prédictifs
- Plateforme marketplace Experts
- International

---

## 📞 Support

**Questions techniques ?**
- 📧 hello@my-motor.fr
- 📞 04.38.49.13.16

**Outils externes :**
- Typeform : support.typeform.com
- Stripe : support.stripe.com
- Calendly : help.calendly.com

---

## 📚 Documentation complète

| Document | Contenu |
|----------|---------|
| **DIAGNOSTIC_VIDEO_MVP.md** | Documentation détaillée MVP (stack, zone, prix, workflow) |
| **GUIDE_LANCEMENT_RAPIDE.md** | Setup étape par étape (2h30) |
| **EMAIL_TEMPLATES_DIAGNOSTIC.md** | 7 templates emails + config |
| **RESUME_PROJET_DIAGNOSTIC.md** | Vue d'ensemble + KPIs |

---

## ✅ Checklist finale avant production

### Technique
- [ ] Typeform créé et testé
- [ ] Stripe configuré (mode live)
- [ ] Calendly paramétré
- [ ] Webhooks actifs
- [ ] Google Sheets prêt
- [ ] Analytics configuré
- [ ] Parcours complet testé

### Contenu
- [ ] Tous les textes validés
- [ ] Templates emails prêts
- [ ] FAQ complète
- [ ] Politique confidentialité

### Équipe
- [ ] Formation réalisée
- [ ] Checklist diagnostic
- [ ] Planning disponibilités
- [ ] Script visio type

### Communication
- [ ] Annonce homepage
- [ ] Newsletter préparée
- [ ] Posts réseaux sociaux
- [ ] Budget Google Ads

---

## 🎉 Félicitations !

Vous avez tout ce qu'il faut pour lancer le diagnostic vidéo SlideX.

**Temps de setup estimé :** 2h30  
**Coût MVP :** 0-55€/mois  
**Prêt pour production :** ✅ OUI

**🚀 Go live et bonne chance !**

---

**Version :** 1.0.0 - MVP  
**Date :** 18 février 2026  
**Auteur :** SlideX Team  
**Contact :** hello@my-motor.fr

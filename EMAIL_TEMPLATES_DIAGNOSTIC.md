# 📧 Templates Emails - Diagnostic Vidéo

## Email 1️⃣ : Confirmation paiement + Lien Calendly

**À déclencher :** Après paiement Stripe validé  
**Envoyé par :** Automation Zapier/Make ou Stripe  
**Délai :** Immédiat

---

**De :** SlideX <hello@my-motor.fr>  
**Sujet :** ✅ Diagnostic vidéo confirmé - Prenez votre rendez-vous

**Corps :**

```
Bonjour {prenom},

Votre paiement de 19€ pour le diagnostic vidéo a bien été validé ! 🎉

🎯 PROCHAINE ÉTAPE : Choisissez votre créneau

Cliquez ici pour réserver votre diagnostic vidéo :
👉 [PRENDRE RENDEZ-VOUS]({lien_calendly})

⏱️ Durée : 10-12 minutes
📱 Via visio (Google Meet)
🔧 Diagnostic professionnel par un expert SlideX
💰 Les 19€ seront déduits de votre facture finale si vous passez par un Expert SlideX pour l'intervention

📝 PENSEZ À PRÉPARER :

✅ Accès à votre porte automatique
✅ Smartphone ou ordinateur avec caméra
✅ Photo de la plaque signalétique du moteur (si accessible)
✅ Lampe torche si la zone est sombre

📋 RAPPEL DE VOTRE DEMANDE :

Type de porte : {type_porte}
Problème signalé : {description_panne}

⚡ ENGAGEMENT : Rendez-vous sous 24h ouvrées

Une question avant votre RDV ?
📞 04.38.49.13.16
📧 Répondez à cet email

À très bientôt,
L'équipe SlideX

---
SlideX - Fabricant français de portes automatiques
2 rue Raoul Follereau, 38180 Seyssins
www.slidex.fr | 04.38.49.13.16
```

---

## Email 2️⃣ : Rappel RDV (1h avant)

**À déclencher :** 1h avant le RDV Calendly  
**Envoyé par :** Calendly automatique  
**Délai :** T-1h

---

**De :** SlideX <hello@my-motor.fr>  
**Sujet :** 🔔 Rappel - Diagnostic vidéo dans 1h

**Corps :**

```
Bonjour {prenom},

Rappel : Votre diagnostic vidéo est prévu dans 1 heure.

🕐 Horaire : {heure_rdv}
📱 Lien visio : {lien_meet}
⏱️ Durée : 10-12 minutes

✅ CHECKLIST RAPIDE :

☑️ Accès à la porte automatique
☑️ Connexion internet stable
☑️ Caméra fonctionnelle
☑️ Lampe torche (si nécessaire)

💡 CONSEIL : Préparez les photos de la plaque moteur pour gagner du temps

🆘 Besoin de décaler ?
Cliquez ici : {lien_reprogrammer}

À tout de suite !
L'équipe SlideX
```

---

## Email 3️⃣ : Envoi du devis post-diagnostic

**À déclencher :** Manuellement après le diagnostic  
**Envoyé par :** Expert qui a fait le diagnostic  
**Délai :** Sous 2h après le RDV

---

**De :** {nom_expert} - SlideX <hello@my-motor.fr>  
**Sujet :** 📄 Votre devis diagnostic porte automatique - Réf {ref}

**Corps :**

```
Bonjour {prenom},

Merci d'avoir pris le temps pour ce diagnostic vidéo.

Comme convenu, voici le résumé de notre échange et le devis pour l'intervention.

🔍 DIAGNOSTIC :

Problème identifié : {diagnostic_resume}
Cause probable : {cause}
Solution recommandée : {solution}

💰 DEVIS INTERVENTION :

Main d'œuvre : {prix_mo} €
Pièces nécessaires : {prix_pieces} €
Déplacement : {prix_deplacement} €
---
SOUS-TOTAL : {total} €
Déduction diagnostic : -19 €
---
TOTAL TTC : {total_final} €

✅ PROCHAINES ÉTAPES :

Si vous souhaitez réaliser l'intervention via un Expert SlideX certifié :

1. Répondez à cet email pour valider le devis
2. Nous vous mettons en relation avec {nom_expert_local} ({ville})
3. Intervention sous {delai} jours
4. Les 19€ du diagnostic sont automatiquement déduits

🔧 EXPERT PROPOSÉ :

{nom_expert_local}
📍 {ville} - Zone d'intervention : {zone}
⭐ Certifié SlideX - Formé sur nos produits
📞 {telephone_expert}

❌ Si vous ne souhaitez pas donner suite, aucun problème. Vous conservez votre diagnostic pour 19€.

📞 Questions ?
Appelez-moi directement : {tel_expert_diag}
Ou répondez à cet email

Cordialement,
{nom_expert}
Expert SlideX

---
SlideX - Fabricant français de portes automatiques
2 rue Raoul Follereau, 38180 Seyssins
www.slidex.fr | 04.38.49.13.16
```

---

## Email 4️⃣ : Mise en relation avec Expert local

**À déclencher :** Après validation du devis par le client  
**Envoyé par :** Équipe SlideX  
**Délai :** Immédiat après validation

---

**De :** SlideX <hello@my-motor.fr>  
**Sujet :** 🤝 Mise en relation - Expert SlideX {nom_expert}

**Corps :**

```
Bonjour {prenom},

Parfait ! Nous validons votre devis.

Voici les coordonnées de votre Expert SlideX qui va réaliser l'intervention :

👷 {nom_expert}
📍 {adresse_expert}
📞 {tel_expert}
📧 {email_expert}

⚡ IL VA VOUS CONTACTER SOUS 24H pour planifier l'intervention.

💸 RAPPEL FINANCIER :

Montant intervention : {total_final} €
(Diagnostic 19€ déjà déduit)

Le paiement se fera directement auprès de {nom_expert} après l'intervention.

📋 DOCUMENTS À PRÉPARER :

- Facture d'achat de la porte (si disponible)
- Derniers rapports de maintenance (si existants)

✅ GARANTIE SLIDEX :

- Intervention par expert certifié
- Pièces d'origine disponibles
- Support technique SlideX si besoin
- Garantie constructeur maintenue

📞 Besoin d'aide ?
Contactez-nous au 04.38.49.13.16

Bonne intervention !
L'équipe SlideX

---
SlideX - Fabricant français de portes automatiques
www.slidex.fr
```

---

## Email 5️⃣ : Demande d'avis après intervention

**À déclencher :** 3 jours après l'intervention  
**Envoyé par :** Automation  
**Délai :** J+3

---

**De :** SlideX <hello@my-motor.fr>  
**Sujet :** 💬 Votre avis sur le diagnostic vidéo SlideX

**Corps :**

```
Bonjour {prenom},

Nous espérons que votre porte automatique fonctionne à nouveau parfaitement ! 🎉

Votre avis nous intéresse :

⭐ Notez votre expérience (1 clic) :

[😞 Pas satisfait] [😐 Moyen] [😊 Satisfait] [🤩 Excellent]

💬 Quelques questions rapides :

1. Le diagnostic vidéo vous a-t-il été utile ? (Oui/Non)
2. Le délai de 24h a-t-il été respecté ? (Oui/Non)
3. Recommanderiez-vous ce service ? (Oui/Non)

✍️ Un commentaire ? (optionnel)
[Zone de texte]

🎁 En remerciement, vous recevrez 10% de réduction sur votre prochaine commande SlideX.

Merci pour votre confiance !
L'équipe SlideX

---
SlideX - Fabricant français de portes automatiques
www.slidex.fr
```

---

## Email 6️⃣ : Liste d'attente (hors zone)

**À déclencher :** Après inscription liste d'attente  
**Envoyé par :** Automation  
**Délai :** Immédiat

---

**De :** SlideX <hello@my-motor.fr>  
**Sujet :** 🔔 Inscription confirmée - Diagnostic vidéo SlideX

**Corps :**

```
Bonjour,

Merci pour votre intérêt pour notre service de diagnostic vidéo !

📍 Vous avez indiqué être situé(e) à {ville}

Malheureusement, ce service n'est pas encore disponible dans votre zone.
Il est actuellement limité à Grenoble et ses environs (40 km).

✅ BONNE NOUVELLE : Vous êtes inscrit(e) sur notre liste d'attente

Nous vous préviendrons dès que le service sera disponible dans votre région.

📅 Extension prévue :
- Lyon : 2e trimestre 2026
- Chambéry : 3e trimestre 2026
- Valence : 3e trimestre 2026
- Autres régions : contact individuel

💡 EN ATTENDANT :

Vous avez besoin d'aide dès maintenant ?
Contactez-nous, nous vous orienterons vers un professionnel de confiance :
📞 04.38.49.13.16
📧 hello@my-motor.fr

🛒 Découvrez nos produits : www.slidex.fr

À très bientôt,
L'équipe SlideX

---
SlideX - Fabricant français de portes automatiques
2 rue Raoul Follereau, 38180 Seyssins
www.slidex.fr | 04.38.49.13.16
```

---

## Email 7️⃣ : Notification interne équipe (nouveau lead)

**À déclencher :** Après chaque soumission Typeform  
**Envoyé à :** Équipe SlideX  
**Délai :** Immédiat

---

**De :** Système SlideX <notifications@my-motor.fr>  
**À :** equipe@my-motor.fr  
**Sujet :** 🆕 Nouveau diagnostic vidéo - {nom} ({ville})

**Corps :**

```
📋 NOUVEAU LEAD DIAGNOSTIC VIDÉO

👤 CLIENT :
Nom : {nom}
Email : {email}
Téléphone : {tel}
Ville : {ville} ({code_postal})

🔧 DEMANDE :
Type de porte : {type_porte}
Marque moteur : {marque}
Problème : {description}

📸 Médias uploadés :
{lien_photos_videos}

💳 PAIEMENT :
Statut : {statut_paiement}
Montant : 19€

📅 RDV :
Statut : {statut_rdv}
Date : {date_rdv}

🔗 ACTIONS RAPIDES :

[Voir le formulaire complet]
[Voir les photos/vidéos]
[Consulter Google Sheets]
[Contacter le client]

---
Généré automatiquement par le système SlideX
```

---

## 📊 Suivi des emails (KPIs à tracker)

- Taux d'ouverture confirmation paiement
- Taux de clics sur lien Calendly
- Taux de prise de RDV (confirmé vs. payé)
- Taux de conversion devis (accepté vs. envoyé)
- NPS satisfaction diagnostic

---

## 🔧 Configuration technique

**Outil recommandé :** Sendinblue, Mailchimp ou directement via Zapier

**Variables dynamiques à configurer :**
- {prenom}, {nom}, {email}, {tel}
- {type_porte}, {description_panne}, {marque}
- {lien_calendly}, {lien_meet}
- {prix_mo}, {total_final}
- {nom_expert}, {tel_expert}

**Tracking :**
- Ajouter des UTM dans les liens
- Pixels de tracking (ouverture, clics)

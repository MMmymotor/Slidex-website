# 🌐 Configuration du domaine personnalisé slidex.fr avec GitHub Pages

## ✅ Étape 1 : Fichier CNAME (déjà fait)

Le fichier `CNAME` a été créé et poussé sur GitHub avec le contenu : `www.slidex.fr`

---

## 🔧 Étape 2 : Configuration DNS chez Infomaniak

### Connectez-vous à votre console Infomaniak :

1. Allez sur https://manager.infomaniak.com/
2. Dans **Nom de domaine** → Sélectionnez **slidex.fr**
3. Cliquez sur **Zone DNS**

### Ajoutez/Modifiez les enregistrements DNS suivants :

#### Pour www.slidex.fr (CNAME)
```
Type: CNAME
Nom: www
Valeur: mmmymotor.github.io
TTL: 3600 (1 heure)
```

#### Pour slidex.fr (sans www) - Enregistrements A
Ajoutez ces 4 enregistrements A qui pointent vers les serveurs GitHub :

```
Type: A
Nom: @  (ou laissez vide)
Valeur: 185.199.108.153
TTL: 3600

Type: A
Nom: @
Valeur: 185.199.109.153
TTL: 3600

Type: A
Nom: @
Valeur: 185.199.110.153
TTL: 3600

Type: A
Nom: @
Valeur: 185.199.111.153
TTL: 3600
```

**Important :** Supprimez tout enregistrement A existant pour `@` qui pointe ailleurs avant d'ajouter ceux-ci.

---

## 🎯 Étape 3 : Activer GitHub Pages avec votre domaine

1. Allez sur : https://github.com/MMmymotor/Slidex-website/settings/pages

2. Dans **"Build and deployment"** :
   - Source : **GitHub Actions**

3. Dans **"Custom domain"** :
   - Entrez : `www.slidex.fr`
   - Cliquez sur **Save**
   - ⏳ Attendez quelques secondes...
   - ✅ Cochez **"Enforce HTTPS"** (apparaît après quelques minutes)

---

## ⏱️ Étape 4 : Attendre la propagation DNS

- **Temps estimé :** 15 minutes à 48 heures (généralement 1-2 heures)
- Vous pouvez vérifier l'état avec : https://dnschecker.org/#A/slidex.fr

Pendant ce temps, un message peut apparaître sur GitHub :
> "DNS check in progress..."
> 
C'est normal ! Patientez.

---

## 🔍 Étape 5 : Vérifier que tout fonctionne

Une fois la propagation DNS terminée :

1. Testez `http://www.slidex.fr` → doit afficher votre site
2. Testez `http://slidex.fr` → doit rediriger vers `www.slidex.fr`
3. Testez `https://www.slidex.fr` → HTTPS doit fonctionner (certificat auto-généré par GitHub)

---

## ✨ Résultat final

- ✅ `www.slidex.fr` → Votre site SlideX
- ✅ `slidex.fr` → Redirige automatiquement vers `www.slidex.fr`
- ✅ HTTPS activé automatiquement (certificat SSL gratuit de GitHub)
- ✅ CDN mondial (site rapide partout)
- ✅ Déploiement automatique à chaque `git push`

---

## 🆘 Problèmes courants

### "DNS check failed" sur GitHub

**Solution :** Vérifiez que :
1. Les enregistrements DNS sont bien configurés (utilisez https://dnschecker.org)
2. Vous avez bien supprimé les anciens enregistrements A
3. Attendez encore un peu (propagation DNS)

### "Certificate error" ou "Not secure"

**Solution :** 
1. Décochez puis recochez "Enforce HTTPS" dans GitHub Pages
2. Attendez 5-10 minutes
3. Videz le cache de votre navigateur (Cmd+Shift+R)

### Le site n'affiche pas ou erreur 404

**Solution :**
1. Vérifiez que le fichier CNAME contient bien `www.slidex.fr`
2. Vérifiez que GitHub Pages est activé avec "GitHub Actions"
3. Regardez l'onglet **Actions** sur GitHub pour voir si le déploiement a réussi

---

## 📧 Configuration email (optionnel)

Si vous voulez garder vos emails `@slidex.fr` chez Infomaniak :

**Ne touchez PAS** aux enregistrements MX ! Gardez-les tels quels.

Les enregistrements DNS pour le site web (A et CNAME) et pour les emails (MX) sont indépendants.

---

## 🔄 Migration depuis Infomaniak

Une fois que tout fonctionne sur GitHub Pages :

1. Vous pouvez supprimer l'ancien hébergement web Infomaniak
2. Gardez seulement le nom de domaine + emails chez Infomaniak
3. **Économie :** Vous ne payez plus l'hébergement, juste le domaine !

---

## 📞 Besoin d'aide ?

Si vous avez des problèmes avec la configuration DNS :
- Support Infomaniak : https://www.infomaniak.com/fr/support
- Documentation GitHub Pages : https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

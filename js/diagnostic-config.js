/**
 * Configuration pour la page Diagnostic Vidéo
 * SlideX - Service de diagnostic vidéo pour portes automatiques
 * 
 * @version 1.0.0 - MVP
 * @date 2026-02-18
 */

const DIAGNOSTIC_CONFIG = {
  
  // ============================================
  // PRICING
  // ============================================
  price: {
    amount: 19,
    currency: 'EUR',
    displayText: '19€ TTC',
    description: 'Déduit si intervention via Expert SlideX'
  },

  // ============================================
  // ZONE DE SERVICE
  // ============================================
  serviceArea: {
    city: 'Grenoble',
    radiusKm: 40,
    displayText: 'Grenoble + 40 km',
    coordinates: {
      lat: 45.1594,
      lng: 5.6932
    },
    // Liste indicative des villes couvertes
    cities: [
      'Grenoble',
      'Seyssins',
      'Échirolles',
      'Meylan',
      'Saint-Martin-d\'Hères',
      'Fontaine',
      'Vizille',
      'Voreppe',
      'Sassenage',
      'Claix',
      'Vif',
      'Saint-Égrève',
      'Domène',
      'Crolles'
    ]
  },

  // ============================================
  // TIMING & ENGAGEMENT
  // ============================================
  timing: {
    commitmentHours: 24, // Engagement sous 24h ouvrées
    sessionDurationMin: 10,
    sessionDurationMax: 12,
    displayText: 'Sous 24h ouvrées'
  },

  // ============================================
  // INTÉGRATIONS EXTERNES (MVP)
  // ============================================
  
  // Typeform pour le formulaire de diagnostic
  typeformUrl: 'https://VOTRE-COMPTE.typeform.com/to/VOTRE-FORM-ID',
  // TODO: Créer le formulaire Typeform avec les champs suivants :
  // - Nom / Prénom
  // - Email
  // - Téléphone
  // - Adresse complète (pour vérifier la zone)
  // - Type de porte (1 vantail / 2 vantaux / télescopique / autre)
  // - Marque du moteur existant (si connue)
  // - Description de la panne
  // - Upload photo/vidéo de la panne
  // - Upload photo plaque signalétique (optionnel)

  // Stripe Checkout pour le paiement
  stripePublicKey: 'pk_test_VOTRE_CLE_PUBLIQUE',
  stripePaymentLink: 'https://buy.stripe.com/VOTRE-PAYMENT-LINK',
  // TODO: Créer un produit Stripe "Diagnostic Vidéo" à 19€
  // TODO: Configurer webhook Stripe pour confirmation paiement

  // Calendly pour la prise de RDV
  calendlyUrl: 'https://calendly.com/VOTRE-COMPTE/diagnostic-video',
  // TODO: Créer un événement Calendly "Diagnostic Vidéo - 15min"
  // TODO: Configurer les créneaux disponibles (Lun-Ven 9h-18h par ex)

  // ============================================
  // WEBHOOKS & TRACKING
  // ============================================
  webhooks: {
    // Webhook pour stocker les leads (Google Sheets, Make.com, Zapier...)
    leadWebhook: 'https://hooks.zapier.com/hooks/catch/VOTRE-WEBHOOK/',
    // TODO: Configurer un webhook Zapier/Make pour enregistrer :
    // - Tous les formulaires soumis
    // - Tous les paiements validés
    // - Toutes les inscriptions liste d'attente
    
    // Webhook liste d'attente
    waitlistWebhook: 'https://hooks.zapier.com/hooks/catch/VOTRE-WEBHOOK-WAITLIST/',
  },

  // ============================================
  // ANALYTICS
  // ============================================
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX', // TODO: Ajouter votre GA4 ID
    
    // Événements à tracker
    events: {
      cta_click: 'Clic sur CTA diagnostic',
      payment_start: 'Paiement initié',
      payment_success: 'Paiement confirmé',
      calendly_open: 'Calendly ouvert',
      calendly_scheduled: 'RDV pris',
      waitlist_signup: 'Inscription liste d\'attente',
      form_start: 'Formulaire démarré',
      form_submitted: 'Formulaire soumis'
    }
  },

  // ============================================
  // CONTACT & SUPPORT
  // ============================================
  contact: {
    phone: '04.38.49.13.16',
    email: 'hello@my-motor.fr',
    address: '2 rue Raoul Follereau, 38180 Seyssins'
  },

  // ============================================
  // TEXTES & MESSAGES
  // ============================================
  messages: {
    outOfZone: {
      title: 'Service non disponible dans votre zone',
      description: 'Le diagnostic vidéo n\'est pas encore disponible dans votre région. Inscrivez-vous sur la liste d\'attente pour être informé de l\'ouverture.',
      cta: 'Rejoindre la liste d\'attente'
    },
    paymentSuccess: {
      title: 'Paiement confirmé !',
      description: 'Vous allez recevoir un email avec le lien pour prendre rendez-vous.',
      nextStep: 'Choisissez votre créneau via Calendly'
    }
  }
};

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

/**
 * Vérifie si une ville est dans la zone de service
 * @param {string} city - Nom de la ville
 * @returns {boolean}
 */
function isInServiceArea(city) {
  const normalizedCity = city.toLowerCase().trim();
  return DIAGNOSTIC_CONFIG.serviceArea.cities.some(
    c => c.toLowerCase() === normalizedCity
  );
}

/**
 * Calcule la distance entre deux coordonnées (formule de Haversine)
 * @param {number} lat1 
 * @param {number} lon1 
 * @param {number} lat2 
 * @param {number} lon2 
 * @returns {number} Distance en km
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Rayon de la Terre en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

/**
 * Track un événement analytics
 * @param {string} eventName 
 * @param {object} params 
 */
function trackEvent(eventName, params = {}) {
  console.log('[Analytics]', eventName, params);
  
  // Google Analytics 4
  if (window.gtag && DIAGNOSTIC_CONFIG.analytics.googleAnalyticsId) {
    gtag('event', eventName, params);
  }
  
  // Facebook Pixel (optionnel)
  if (window.fbq) {
    fbq('trackCustom', eventName, params);
  }
}

// Export pour usage dans d'autres scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DIAGNOSTIC_CONFIG;
}

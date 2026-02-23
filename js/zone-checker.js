/**
 * Diagnostic Vidéo - Zone Checker
 * Vérifie si un client est dans la zone de service
 * SlideX - 2026
 */

// Codes postaux de la zone Grenoble + 40km
const GRENOBLE_ZONE_POSTCODES = [
  // Grenoble et proche banlieue
  '38000', '38100', '38130', '38180', '38240', '38320', '38400',
  
  // Agglomération Nord
  '38330', '38340', '38420', '38430', '38560', '38610', '38660',
  
  // Agglomération Sud
  '38600', '38640', '38700', '38120', '38170',
  
  // Vallée du Grésivaudan
  '38190', '38250', '38520', '38580',
  
  // Autres communes proches
  '38140', '38220', '38360', '38410', '38540', '38590'
];

// Coordonnées du centre de la zone (Grenoble)
const ZONE_CENTER = {
  lat: 45.1594,
  lng: 5.6932
};

const MAX_RADIUS_KM = 40;

/**
 * Vérifie si un code postal est dans la zone de service
 * @param {string} postcode - Code postal à vérifier
 * @returns {boolean}
 */
function isPostcodeInZone(postcode) {
  const cleanPostcode = postcode.replace(/\s/g, '').substring(0, 5);
  return GRENOBLE_ZONE_POSTCODES.includes(cleanPostcode);
}

/**
 * Vérifie si une ville est dans la zone via code postal
 * @param {string} city - Nom de la ville
 * @param {string} postcode - Code postal
 * @returns {object} { inZone: boolean, message: string }
 */
function checkServiceAvailability(city, postcode) {
  const isInZone = isPostcodeInZone(postcode);
  
  return {
    inZone: isInZone,
    city: city,
    postcode: postcode,
    message: isInZone 
      ? `✅ Service disponible à ${city}` 
      : `❌ Service non disponible à ${city}`,
    action: isInZone 
      ? 'proceed' 
      : 'waitlist'
  };
}

/**
 * Calcule la distance entre deux points géographiques
 * Formule de Haversine
 * @param {number} lat1 
 * @param {number} lon1 
 * @param {number} lat2 
 * @param {number} lon2 
 * @returns {number} Distance en km
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Rayon de la Terre en km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return Math.round(distance * 10) / 10; // Arrondi à 1 décimale
}

function toRad(degrees) {
  return degrees * (Math.PI / 180);
}

/**
 * Vérifie la zone via géolocalisation du navigateur
 * @returns {Promise<object>}
 */
async function checkZoneByGeolocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Géolocalisation non supportée'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        
        const distance = calculateDistance(
          ZONE_CENTER.lat,
          ZONE_CENTER.lng,
          userLat,
          userLng
        );
        
        const inZone = distance <= MAX_RADIUS_KM;
        
        resolve({
          inZone: inZone,
          distance: distance,
          message: inZone 
            ? `✅ Vous êtes à ${distance} km de notre zone (Grenoble)` 
            : `❌ Vous êtes à ${distance} km de notre zone (max ${MAX_RADIUS_KM} km)`,
          action: inZone ? 'proceed' : 'waitlist',
          coordinates: {
            lat: userLat,
            lng: userLng
          }
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
}

/**
 * Affiche un message de zone sur la page
 * @param {boolean} inZone 
 * @param {string} message 
 */
function displayZoneMessage(inZone, message) {
  const container = document.getElementById('zone-message');
  if (!container) return;
  
  container.innerHTML = `
    <div style="
      padding: 16px 24px;
      border-radius: 12px;
      background: ${inZone ? '#f0fdf4' : '#fef3c7'};
      border: 2px solid ${inZone ? '#22c55e' : '#f59e0b'};
      color: ${inZone ? '#166534' : '#92400e'};
      font-weight: 600;
      text-align: center;
      margin: 24px 0;
    ">
      ${message}
    </div>
  `;
}

/**
 * Redirige vers la liste d'attente si hors zone
 */
function redirectToWaitlist() {
  const waitlistSection = document.getElementById('zone-coverage');
  if (waitlistSection) {
    waitlistSection.scrollIntoView({ behavior: 'smooth' });
    
    // Highlight du formulaire
    const form = document.getElementById('waitlist-form');
    if (form) {
      setTimeout(() => {
        form.style.animation = 'pulse 0.5s ease-in-out 2';
      }, 500);
    }
  }
}

/**
 * Exemple d'utilisation dans la page
 */
function initZoneChecker() {
  // Vérifier automatiquement via géolocalisation (optionnel)
  const autoCheck = false; // Mettre à true pour activer
  
  if (autoCheck) {
    checkZoneByGeolocation()
      .then(result => {
        console.log('[Zone Check]', result);
        displayZoneMessage(result.inZone, result.message);
        
        if (!result.inZone) {
          // Désactiver les CTA ou rediriger vers waitlist
          const ctas = document.querySelectorAll('[id^="cta-diagnostic-"]');
          ctas.forEach(cta => {
            cta.addEventListener('click', (e) => {
              e.preventDefault();
              alert('Service non disponible dans votre zone. Inscrivez-vous sur la liste d\'attente.');
              redirectToWaitlist();
            });
          });
        }
      })
      .catch(error => {
        console.warn('[Zone Check] Géolocalisation échouée:', error);
        // Ne rien faire, laisser le user cliquer normalement
      });
  }
}

// Auto-init si DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initZoneChecker);
} else {
  initZoneChecker();
}

// Export pour usage externe
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isPostcodeInZone,
    checkServiceAvailability,
    checkZoneByGeolocation,
    calculateDistance
  };
}

// Ajouter animation pulse au CSS si besoin
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;
document.head.appendChild(style);

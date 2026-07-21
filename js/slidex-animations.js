// Global UI helpers for SlideX
(function() {
	function initBurger() {
		var header = document.querySelector('.header-wrapper.w-nav');
		if (!header) return;
		var btn = header.querySelector('.w-nav-button');
		var menu = header.querySelector('.w-nav-menu');
		if (!btn || !menu) return;

		// idempotent binding
		if (btn.__slxBound) return;
		btn.__slxBound = true;

		var open = false;
		function setOpen(state) {
			open = state;
			btn.classList.toggle('w--open', open);
			menu.classList.toggle('w--open', open);
			btn.setAttribute('aria-expanded', String(open));
		}

		btn.addEventListener('click', function(e){
			e.stopPropagation();
			setOpen(!open);
		});

		document.addEventListener('click', function(e){
			if (!open) return;
			if (!menu.contains(e.target) && !btn.contains(e.target)) {
				setOpen(false);
			}
		});

		document.addEventListener('keydown', function(e){
			if (e.key === 'Escape' && open) setOpen(false);
		});

		var mq = window.matchMedia('(min-width: 992px)');
		function handleResize(ev){ if (ev.matches) setOpen(false); }
		mq.addEventListener ? mq.addEventListener('change', handleResize) : mq.addListener(handleResize);
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initBurger);
	} else {
		initBurger();
	}
})();

// Sitewide top banner injection
(function(){
		function injectTopBanner(){
				var header = document.querySelector('.header-wrapper.w-nav');
				// Idempotent: skip if already present anywhere
				if (document.querySelector('.top-banner')) {
					document.body.classList.add('has-top-banner');
					return;
				}
			var banner = document.createElement('div');
			banner.className = 'top-banner';
			var inner = document.createElement('div');
			inner.className = 'top-banner-inner';
				var track1 = document.createElement('div');
				track1.className = 'top-banner-track';
			track1.textContent = '⭐ 5 étoiles sur Google  •  Déjà plus de 1000 kits motorisation vendues   •   ⭐ 5 étoiles sur Google  •  Déjà plus de 1000 kits motorisation vendues   •   ';
				var track2 = document.createElement('div');
				track2.className = 'top-banner-track';
				track2.style.left = '100%';
			track2.textContent = '⭐ 5 étoiles sur Google  •  Déjà plus de 1000 kits motorisation vendues   •   ⭐ 5 étoiles sur Google  •  Déjà plus de 1000 kits motorisation vendues   •   ';
				inner.appendChild(track1);
				inner.appendChild(track2);
				banner.appendChild(inner);
				if (header) {
					header.insertAdjacentElement('afterbegin', banner);
				} else if (document.body.firstChild) {
					document.body.insertBefore(banner, document.body.firstChild);
				} else {
					document.body.appendChild(banner);
				}
				document.body.classList.add('has-top-banner');
		}
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', injectTopBanner);
	} else {
		injectTopBanner();
	}
})();

// Widget production — données pseudo-aléatoires, seed toutes les 3 jours
(function(){
  function hash32(n) {
    n = (Math.imul(n ^ (n >>> 16), 0x45d9f3b) | 0);
    n = (Math.imul(n ^ (n >>> 16), 0x45d9f3b) | 0);
    return (n ^ (n >>> 16)) >>> 0;
  }

  function injectProdWidget() {
    if (document.querySelector('.prod-widget')) return;

    // Fermeture estivale : du 8 au 24 août 2026 inclus, reprise le 25 août
    var closureStart = new Date(2026, 7, 8);
    var closureEnd   = new Date(2026, 7, 25);
    var now = new Date();
    if (now >= closureStart && now < closureEnd) {
      var closureWidget = document.createElement('div');
      closureWidget.className = 'prod-widget prod-widget-closure';
      closureWidget.innerHTML =
        '<div class="prod-widget-inner">' +
          '<div class="prod-widget-item">' +
            '<span class="prod-dot prod-dot-closure"></span>' +
            '<span class="prod-item-label">Fermeture estivale </span>' +
            '<span class="prod-item-val">Atelier de fabrication fermé du 8 au 24 août — reprise le 25 août</span>' +
          '</div>' +
        '</div>';
      document.body.appendChild(closureWidget);
      document.body.classList.add('has-prod-widget', 'has-prod-widget-closure');
      return;
    }

    // Seed qui change tous les 3 jours
    var seed = Math.floor(Date.now() / (3 * 24 * 60 * 60 * 1000));
    var h = hash32(seed);

    // Portes en fabrication : 8-14
    var doors = 8 + (h % 7);

    // Délais selon charge
    var delayLaque, delayRAL, valClass;
    if (doors <= 10) {
      delayLaque = 12; delayRAL = 17; valClass = 'ok';
    } else if (doors <= 12) {
      delayLaque = 14; delayRAL = 19; valClass = 'warn';
    } else {
      delayLaque = 16; delayRAL = 21; valClass = 'hot';
    }

    // Prochaine expédition : tous les 2 jours ouvrés depuis ref
    var ref = new Date(2026, 0, 5); // lun. 5 jan 2026
    var today = new Date(); today.setHours(0,0,0,0); ref.setHours(0,0,0,0);
    var diff = Math.round((today - ref) / 86400000);
    var next = new Date(ref.getTime() + (Math.floor(diff / 2) + 1) * 2 * 86400000);
    while (next.getDay() === 0 || next.getDay() === 6) next.setDate(next.getDate() + 1);
    var jours  = ['dim.','lun.','mar.','mer.','jeu.','ven.','sam.'];
    var mois   = ['jan','fév','mar','avr','mai','juin','juil','août','sep','oct','nov','déc'];
    var shipLabel = jours[next.getDay()] + ' ' + next.getDate() + ' ' + mois[next.getMonth()];

    // Construction du widget
    var widget = document.createElement('div');
    widget.className = 'prod-widget';
    widget.innerHTML =
      '<div class="prod-widget-inner">' +
        '<div class="prod-widget-item">' +
          '<span class="prod-dot"></span>' +
          '<span class="prod-item-label">En fabrication </span>' +
          '<span class="prod-item-val">' + doors + ' porte' + (doors > 1 ? 's' : '') + '</span>' +
        '</div>' +
        '<div class="prod-widget-item">' +
          '<span class="prod-item-label">Prochaine exp. </span>' +
          '<span class="prod-item-val">' + shipLabel + '</span>' +
        '</div>' +
        '<div class="prod-widget-item">' +
          '<span class="prod-item-label">Coloris stock — prête en </span>' +
          '<span class="prod-item-val ' + valClass + '">' + delayLaque + ' j</span>' +
        '</div>' +
        '<div class="prod-widget-item">' +
          '<span class="prod-item-label">RAL sur devis — prête en </span>' +
          '<span class="prod-item-val ' + valClass + '">' + delayRAL + ' j</span>' +
          '<span class="prod-item-label"> *hors livraison</span>' +
        '</div>' +
      '</div>';

    document.body.appendChild(widget);
    document.body.classList.add('has-prod-widget');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectProdWidget);
  } else {
    injectProdWidget();
  }
})();

// Simple slider controller for product detail sliders
	(function(){
		function initSlider(root){
			if (!root) return;
			var track = root.querySelector('.slider-track');
			var slides = Array.from(root.querySelectorAll('.slider-slide'));
			var prev = root.querySelector('.slider-prev');
			var next = root.querySelector('.slider-next');
			var dots = Array.from(root.querySelectorAll('.slider-dot'));
			if (!track || slides.length === 0) return;

			var index = 0;
			function update(){
				var pct = -(100 / slides.length) * index;
				track.style.transform = 'translateX(' + pct + '%)';
				slides.forEach(function(s,i){ s.classList.toggle('active', i === index); });
				dots.forEach(function(d,i){ d.classList.toggle('active', i === index); });
			}
			function go(i){ index = (i + slides.length) % slides.length; update(); }

			if (prev) prev.addEventListener('click', function(){ go(index - 1); });
			if (next) next.addEventListener('click', function(){ go(index + 1); });
			dots.forEach(function(d,i){ d.addEventListener('click', function(){ go(i); }); });

			update();
		}

		function initAllSliders(){
			document.querySelectorAll('.product-slider').forEach(initSlider);
		}
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', initAllSliders);
		} else {
			initAllSliders();
		}
	})();

	// Neutralize any anchor with href="#" to prevent page jump
	(function(){
		function preventHashAnchors(){
			document.addEventListener('click', function(e){
				var a = e.target.closest('a[href="#"]');
				if (a) e.preventDefault();
			});
		}
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', preventHashAnchors);
		} else {
			preventHashAnchors();
		}
	})();


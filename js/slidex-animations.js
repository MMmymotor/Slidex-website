// Global UI helpers for SlideX
// Menu burger : gestion 100% déléguée (le header est injecté en JS après coup,
// donc pas de binding direct). Capture phase pour passer devant Webflow w-nav.
(function() {
	var OPEN = 'is-nav-open';

	function header() { return document.querySelector('.site-header'); }
	function close() {
		var h = header();
		if (h) h.classList.remove(OPEN);
	}
	function setExpanded(isOpen) {
		var btn = document.querySelector('.site-header .hamburger-menu, .site-header .w-nav-button');
		if (btn) btn.setAttribute('aria-expanded', String(isOpen));
	}

	document.addEventListener('click', function(e) {
		var h = header();
		if (!h) return;

		var toggle = e.target.closest('.hamburger-menu, .w-nav-button');
		if (toggle && h.contains(toggle)) {
			e.preventDefault();
			e.stopPropagation();
			h.classList.toggle(OPEN);
			setExpanded(h.classList.contains(OPEN));
			return;
		}

		if (!h.classList.contains(OPEN)) return;

		// clic sur un lien du menu -> on ferme et on laisse la navigation suivre
		if (e.target.closest('.site-header__nav a')) { close(); setExpanded(false); return; }

		// clic en dehors du menu -> on ferme
		if (!e.target.closest('.site-header__nav')) { close(); setExpanded(false); }
	}, true);

	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') { close(); setExpanded(false); return; }
		if ((e.key === 'Enter' || e.key === ' ') && e.target.closest && e.target.closest('.site-header .hamburger-menu, .site-header .w-nav-button')) {
			e.preventDefault();
			var h = header();
			if (h) { h.classList.toggle(OPEN); setExpanded(h.classList.contains(OPEN)); }
		}
	});

	var mq = window.matchMedia('(min-width: 992px)');
	function onWide(ev) { if (ev.matches) { close(); setExpanded(false); } }
	mq.addEventListener ? mq.addEventListener('change', onWide) : mq.addListener(onWide);
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
  var DISMISS_KEY = 'slx_prod_widget_dismissed';

  function hash32(n) {
    n = (Math.imul(n ^ (n >>> 16), 0x45d9f3b) | 0);
    n = (Math.imul(n ^ (n >>> 16), 0x45d9f3b) | 0);
    return (n ^ (n >>> 16)) >>> 0;
  }

  function closeIconHtml() {
    return '<button type="button" class="prod-widget-close" aria-label="Fermer">' +
      '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M1 1L11 11M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
      '</svg></button>';
  }

  function bindDismiss(widget, extraClass) {
    var btn = widget.querySelector('.prod-widget-close');
    if (!btn) return;
    btn.addEventListener('click', function(){
      widget.remove();
      document.body.classList.remove('has-prod-widget');
      if (extraClass) document.body.classList.remove(extraClass);
      document.body.style.paddingBottom = '';
      try { localStorage.setItem(DISMISS_KEY, '1'); } catch(e) {}
    });
  }

  function setBodyBottomOffset(widget) {
    // Measure after paint so wrapped/multi-line content is accounted for
    requestAnimationFrame(function(){
      document.body.style.paddingBottom = widget.offsetHeight + 'px';
    });
  }

  function injectProdWidget() {
    if (document.querySelector('.prod-widget')) return;
    try { if (localStorage.getItem(DISMISS_KEY) === '1') return; } catch(e) {}

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
        '</div>' +
        closeIconHtml();
      document.body.appendChild(closureWidget);
      document.body.classList.add('has-prod-widget', 'has-prod-widget-closure');
      setBodyBottomOffset(closureWidget);
      bindDismiss(closureWidget, 'has-prod-widget-closure');
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
    var shipLabel = jours[next.getDay()] + ' ' + next.getDate() + ' ' + mois[next.getMonth()];

    // Construction du widget
    var widget = document.createElement('div');
    widget.className = 'prod-widget';
    widget.innerHTML =
      '<div class="prod-widget-inner">' +
        '<div class="prod-widget-item">' +
          '<span class="prod-dot"></span>' +
          '<span class="prod-item-label">En fabrication </span>' +
          '<span class="prod-item-val">' + doors + ' porte' + (doors > 1 ? 's' : '') + '</span>' +
        '</div>' +
        '<div class="prod-widget-item">' +
          '<span class="prod-item-label">Prochaine exp. </span>' +
          '<span class="prod-item-val">' + shipLabel + '</span>' +
        '</div>' +
        '<div class="prod-widget-item">' +
          '<span class="prod-item-label">Coloris stock — prête en </span>' +
          '<span class="prod-item-val ' + valClass + '">' + delayLaque + ' j</span>' +
        '</div>' +
        '<div class="prod-widget-item">' +
          '<span class="prod-item-label">RAL sur devis — prête en </span>' +
          '<span class="prod-item-val ' + valClass + '">' + delayRAL + ' j</span>' +
          '<span class="prod-item-label"> *hors livraison</span>' +
        '</div>' +
      '</div>' +
      closeIconHtml();

    document.body.appendChild(widget);
    document.body.classList.add('has-prod-widget');
    setBodyBottomOffset(widget);
    bindDismiss(widget, null);
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
			document.querySelectorAll('.product-slider, .testimonial-slider').forEach(initSlider);
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



/* Slider façon Apple — autoplay + pause + segments (instances multiples) */
Array.prototype.forEach.call(document.querySelectorAll('.hl'), function (root) {
  var viewport = root.querySelector('.hl__viewport');
  var slides = Array.prototype.slice.call(root.querySelectorAll('.hl__slide'));
  var segs = Array.prototype.slice.call(root.querySelectorAll('.hl__seg'));
  var btn = root.querySelector('.hl__playpause');
  if (!viewport || !slides.length || !segs.length || !btn) return;

  var DUR = 5000;
  root.style.setProperty('--hl-dur', (DUR / 1000) + 's');
  var idx = 0, timer = null, playing = false, inView = false, scrollT = null;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function render() {
    segs.forEach(function (s, k) {
      s.classList.remove('is-active', 'is-done');
      if (k < idx) s.classList.add('is-done');
    });
    var cur = segs[idx];
    void cur.offsetWidth; /* reflow : relance la transition de remplissage */
    if (playing) cur.classList.add('is-active');
    else cur.classList.add('is-done');
  }
  function go(n, smooth) {
    idx = (n + slides.length) % slides.length;
    slides[idx].scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', inline: 'center', block: 'nearest' });
    render();
  }
  function schedule() {
    clearTimeout(timer);
    if (playing && inView) timer = setTimeout(function () { go(idx + 1, true); schedule(); }, DUR);
  }
  function play() {
    playing = true;
    btn.dataset.state = 'playing';
    btn.setAttribute('aria-label', 'Pause');
    render();
    schedule();
  }
  function pause() {
    playing = false;
    btn.dataset.state = 'paused';
    btn.setAttribute('aria-label', 'Lecture');
    clearTimeout(timer);
    render();
  }

  btn.addEventListener('click', function () { playing ? pause() : play(); });
  segs.forEach(function (s, k) {
    s.addEventListener('click', function () { go(k, true); schedule(); });
  });

  viewport.addEventListener('scroll', function () {
    clearTimeout(scrollT);
    scrollT = setTimeout(function () {
      var c = viewport.getBoundingClientRect();
      var cx = c.left + c.width / 2, best = 0, bd = Infinity;
      slides.forEach(function (sl, k) {
        var r = sl.getBoundingClientRect();
        var d = Math.abs(r.left + r.width / 2 - cx);
        if (d < bd) { bd = d; best = k; }
      });
      if (best !== idx) { idx = best; render(); schedule(); }
    }, 120);
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      inView = es[0].isIntersecting && es[0].intersectionRatio > 0.4;
      schedule();
    }, { threshold: [0, 0.4, 1] }).observe(root);
  } else {
    inView = true;
  }

  render();
  if (reduce) pause(); else play();
});

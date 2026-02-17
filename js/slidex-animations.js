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
				track1.textContent = '100€ offerts sur vos 5 premières portes   •   100€ offerts sur vos 5 premières portes   •   ';
				var track2 = document.createElement('div');
				track2.className = 'top-banner-track';
				track2.style.left = '100%';
				track2.textContent = '100€ offerts sur vos 5 premières portes   •   100€ offerts sur vos 5 premières portes   •   ';
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


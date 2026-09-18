(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  var navBtn = document.querySelector('.navbtn');
  var navLinks = document.querySelector('.navlinks');
  if (navBtn && navLinks) {
    navBtn.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        navLinks.classList.remove('open');
        navBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var revealEls = [].slice.call(document.querySelectorAll('[data-reveal]'));
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
    setTimeout(function () {
      revealEls.forEach(function (el) { el.classList.add('is-in'); });
    }, 3500);
  }

  var pEls = [].slice.call(document.querySelectorAll('[data-parallax]'));
  var mEls = [].slice.call(document.querySelectorAll('[data-mouse]'));
  var hero = document.querySelector('.hero');
  if (!reduce && pEls.length) {
    var mouseX = 0, mouseY = 0, hasMouse = false;
    var store = new WeakMap();
    pEls.forEach(function (el) { store.set(el, parseFloat(el.dataset.parallax || 0)); });
    var rafId = null;

    function render() {
      rafId = null;
      var vh = window.innerHeight;
      pEls.forEach(function (el) {
        var speed = store.get(el) || 0;
        var rect = el.getBoundingClientRect();
        var y = -(rect.top + rect.height / 2 - vh / 2) * speed;
        var x = 0;
        if (hasMouse && el.closest('.hero')) {
          var ms = parseFloat(el.dataset.mouse || 10);
          x += mouseX * ms;
          y += mouseY * ms;
        }
        if (x || y) el.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
      });
    }

    function tick() {
      if (rafId == null) rafId = requestAnimationFrame(render);
    }

    if (hero && mEls.length) {
      hero.addEventListener('mousemove', function (e) {
        var r = hero.getBoundingClientRect();
        mouseX = (e.clientX - r.left) / r.width - 0.5;
        mouseY = (e.clientY - r.top) / r.height - 0.5;
        hasMouse = true;
        tick();
      }, { passive: true });
      hero.addEventListener('mouseleave', function () {
        hasMouse = false; mouseX = 0; mouseY = 0; tick();
      });
    }

    window.addEventListener('scroll', tick, { passive: true });
    window.addEventListener('resize', tick, { passive: true });
    render();
  }
})();
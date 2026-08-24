// Nav scroll state and mobile drawer. The only JS on the marketing sites.
(function () {
  var nav = document.querySelector('[data-nav]');
  if (!nav) return;

  var ticking = false;
  function apply() {
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(apply); ticking = true; }
  }, { passive: true });
  apply();

  var burger = nav.querySelector('[data-nav-burger]');
  var drawer = document.querySelector('[data-nav-drawer]');
  if (!burger || !drawer) return;

  burger.addEventListener('click', function () {
    var open = drawer.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
})();

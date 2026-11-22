// Mobile menu: shows the toggle button and opens/closes the nav.
// Without JavaScript the button stays hidden and the links show as a list.
(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!header || !toggle || !nav) return;

  header.classList.add('has-js');
  toggle.hidden = false;

  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Close after choosing a section, or with Escape.
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('nav-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Reset when the window grows past the mobile breakpoint.
  window.matchMedia('(min-width: 861px)').addEventListener('change', function (mq) {
    if (mq.matches) setOpen(false);
  });
})();

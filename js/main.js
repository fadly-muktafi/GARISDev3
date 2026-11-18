(function () {
  'use strict';

  var header = document.getElementById('siteHeader');
  var toggle = document.getElementById('menuToggle');
  var drawer = document.getElementById('mobileDrawer');
  var backdrop = document.getElementById('drawerBackdrop');

  // ----- Header solid after scroll -----
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Mobile drawer -----
  function openDrawer() {
    if (!drawer || !backdrop || !toggle) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    backdrop.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer || !backdrop || !toggle) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    backdrop.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggle) toggle.addEventListener('click', openDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
  document.querySelectorAll('[data-close]').forEach(function (a) {
    a.addEventListener('click', closeDrawer);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  // ----- Scroll spy for active nav link -----
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.desktop-nav a[data-section]')
  );
  var sections = links
    .map(function (a) {
      return document.getElementById(a.getAttribute('data-section'));
    })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;
          links.forEach(function (a) {
            var active = a.getAttribute('data-section') === id;
            a.classList.toggle('is-active', active);
            if (active) {
              a.setAttribute('data-active', 'true');
              a.setAttribute('aria-current', 'true');
            } else {
              a.removeAttribute('data-active');
              a.removeAttribute('aria-current');
            }
          });
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach(function (s) { observer.observe(s); });
  }

  // ----- Reveal on scroll -----
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    reveals.forEach(function (el) { revealObserver.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ----- Download button micro-states -----
  document.querySelectorAll('.js-download').forEach(function (btn) {
    var span = btn.querySelector('span:not(.btn-meta)');
    if (!span) return;
    var original = span.textContent;
    var timers = [];
    btn.addEventListener('click', function () {
      timers.forEach(clearTimeout);
      timers = [];
      btn.classList.add('is-busy');
      span.textContent = 'Menyiapkan…';
      timers.push(setTimeout(function () { span.textContent = 'Mengunduh…'; }, 420));
      timers.push(setTimeout(function () { span.textContent = 'Tersimpan'; }, 1250));
      timers.push(setTimeout(function () {
        span.textContent = original;
        btn.classList.remove('is-busy');
      }, 3400));
    });
  });
})();

/* ─── MOBILE RESPONSIVE HELPERS ──────────────────
   Auto-injects hamburger toggle for sidebar and
   wraps tables for horizontal scrolling.
   ────────────────────────────────────────────────── */
(function () {
  'use strict';

  var sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  /* ── Hamburger button ─────────────────────────── */
  var btn = document.createElement('button');
  btn.id = 'menu-toggle';
  btn.setAttribute('aria-label', 'Toggle menu');
  btn.innerHTML = '&#9776;';            /* ☰ */
  document.getElementById('header').appendChild(btn);

  /* ── Overlay behind sidebar ───────────────────── */
  var overlay = document.createElement('div');
  overlay.id = 'sidebar-overlay';
  document.body.appendChild(overlay);

  function openSidebar()  { sidebar.classList.add('open'); overlay.classList.add('open'); }
  function closeSidebar() { sidebar.classList.remove('open'); overlay.classList.remove('open'); }

  btn.addEventListener('click', function () {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  overlay.addEventListener('click', closeSidebar);

  /* Close sidebar when a nav link is tapped */
  sidebar.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeSidebar();
  });

  /* ── Wrap tables for horizontal scroll ────────── */
  var tables = document.querySelectorAll('table');
  for (var i = 0; i < tables.length; i++) {
    var wrapper = document.createElement('div');
    wrapper.className = 'table-scroll';
    tables[i].parentNode.insertBefore(wrapper, tables[i]);
    wrapper.appendChild(tables[i]);
  }
})();

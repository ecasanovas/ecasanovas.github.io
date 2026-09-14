// Highlight the nav link of the section in view; toggle the mobile menu.
(function () {
  var links = document.querySelectorAll('.nav-links a');
  var sections = Array.prototype.map.call(links, function (a) {
    return document.querySelector(a.getAttribute('href'));
  });
  function update() {
    var y = window.scrollY + 120, current = 0;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= y) current = i; });
    links.forEach(function (a, i) { a.classList.toggle('active', i === current); });
  }
  window.addEventListener('scroll', update, { passive: true });
  update();

  var toggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.nav-links');
  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.forEach(function (a) { a.addEventListener('click', function () { menu.classList.remove('open'); }); });
})();

/* Simple lightbox gallery: click a photo, then use arrows / keys / swipe. */
document.addEventListener('DOMContentLoaded', function () {
  const links = Array.from(document.querySelectorAll('.gallery-grid a'));
  if (!links.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lb-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML =
    '<button class="lb-btn lb-close" aria-label="Close">&times;</button>' +
    '<button class="lb-btn lb-prev" aria-label="Previous">&#8249;</button>' +
    '<img class="lb-img" alt="">' +
    '<button class="lb-btn lb-next" aria-label="Next">&#8250;</button>' +
    '<div class="lb-count"></div>';
  document.body.appendChild(overlay);

  const img = overlay.querySelector('.lb-img');
  const count = overlay.querySelector('.lb-count');
  let index = 0;

  function show(i) {
    index = (i + links.length) % links.length;
    img.src = links[index].getAttribute('href');
    img.alt = links[index].querySelector('img').alt;
    count.textContent = (index + 1) + ' / ' + links.length;
  }
  function open(i) {
    show(i);
    overlay.classList.add('open');
    document.body.classList.add('lb-lock');
  }
  function close() {
    overlay.classList.remove('open');
    document.body.classList.remove('lb-lock');
    img.removeAttribute('src');
  }

  links.forEach(function (a, i) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      open(i);
    });
  });

  overlay.querySelector('.lb-prev').addEventListener('click', function (e) { e.stopPropagation(); show(index - 1); });
  overlay.querySelector('.lb-next').addEventListener('click', function (e) { e.stopPropagation(); show(index + 1); });
  overlay.querySelector('.lb-close').addEventListener('click', close);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'ArrowRight') show(index + 1);
    else if (e.key === 'ArrowLeft') show(index - 1);
    else if (e.key === 'Escape') close();
  });

  // Swipe on touch screens
  let startX = null;
  overlay.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  overlay.addEventListener('touchend', function (e) {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(dx < 0 ? index + 1 : index - 1);
    startX = null;
  });
});

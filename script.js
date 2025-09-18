document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.menu');
  navToggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Lightbox elements
  const backdrop = document.querySelector('.lightbox-backdrop');
  const lbImg = document.querySelector('.lightbox-image');
  const lbClose = document.querySelector('.lightbox-close');

  function openLightbox(url) {
    if (!backdrop || !lbImg) return;
    lbImg.removeAttribute('src');
    lbImg.alt = 'Loading…';
    backdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    const test = new Image();
    test.onload = () => { lbImg.src = url; lbImg.alt = ''; };
    test.onerror = () => { closeLightbox(); };
    test.src = url;
  }

  function closeLightbox() {
    if (!backdrop) return;
    backdrop.hidden = true;
    document.body.style.overflow = '';
    if (lbImg) { lbImg.removeAttribute('src'); lbImg.alt = 'Expanded photo'; }
  }

  document.querySelectorAll('a.lightbox').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const url = a.getAttribute('href');
      if (url) openLightbox(url);
    });
  });

  lbClose?.addEventListener('click', closeLightbox);
  backdrop?.addEventListener('click', (e) => { if (e.target === backdrop) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
  lbImg?.addEventListener('click', closeLightbox);

  // Footer year
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Contact form
  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent('New inquiry from ' + data.get('name'));
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`
    );
    window.location.href = `mailto:ryanfitz@live.ca?subject=${subject}&body=${body}`;
  });
});

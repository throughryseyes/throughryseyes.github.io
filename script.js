// Robust lightbox + safety fallbacks
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
    // Prevent stale image/alt showing
    lbImg.removeAttribute('src');
    lbImg.setAttribute('alt', 'Loading…');
    backdrop.hidden = false;
    document.body.style.overflow = 'hidden';

    // Load new image and handle failures
    const test = new Image();
    test.onload = () => {
      lbImg.src = url;
      lbImg.alt = '';
    };
    test.onerror = () => {
      // If the image can’t be fetched, close instead of trapping the UI
      closeLightbox();
    };
    test.src = url;
  }

  function closeLightbox() {
    if (!backdrop) return;
    backdrop.hidden = true;
    document.body.style.overflow = '';
    if (lbImg) {
      lbImg.removeAttribute('src');
      lbImg.alt = 'Expanded photo';
    }
  }

  // Wire up all gallery links
  document.querySelectorAll('a.lightbox').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const url = a.getAttribute('href');
      if (!url) return;
      openLightbox(url);
    });
  });

  // Close actions
  lbClose?.addEventListener('click', closeLightbox);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
  lbImg?.addEventListener('click', closeLightbox);

  // Footer year
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Contact form (mailto)
  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent('New inquiry from ' + data.get('name'));
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`
    );
    const yourEmail = 'ryanfitz@live.ca';
    window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
  });
});

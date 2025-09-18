// Mobile menu + lightbox + mailto submit
const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
navToggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('show');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

const backdrop = document.querySelector('.lightbox-backdrop');
const lbImg = document.querySelector('.lightbox-image');
const lbClose = document.querySelector('.lightbox-close');
document.querySelectorAll('.lightbox').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    lbImg.src = a.href;
    backdrop.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});
lbClose?.addEventListener('click', () => {
  backdrop.hidden = true;
  document.body.style.overflow = '';
});
backdrop?.addEventListener('click', (e) => { if(e.target === backdrop) lbClose.click(); });

document.getElementById('year').textContent = new Date().getFullYear();

// Update this email to your real address before going live
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent('New inquiry from ' + data.get('name'));
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`
  );
  const yourEmail = 'ryanfitz@live.ca'; // TODO: set your real email
  window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
});
// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.lightbox-close')?.click();
  }
});

// If the large image fails to load, auto-close the lightbox
const lbImg = document.querySelector('.lightbox-image');
lbImg?.addEventListener('error', () => {
  document.querySelector('.lightbox-close')?.click();
});

// Also allow clicking the image itself to close
lbImg?.addEventListener('click', () => {
  document.querySelector('.lightbox-close')?.click();
});

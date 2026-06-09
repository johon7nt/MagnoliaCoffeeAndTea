/* ================================================
   MAGNOLIA — App Logic
   ================================================ */

/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  waFloat.classList.toggle('show', window.scrollY > 200);
}, { passive: true });

/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');
hamburger.addEventListener('click', () => {
  const open = navMobile.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});
navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navMobile.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

/* ── SMOOTH SCROLL FOR NAV LINKS ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── MENU TABS ── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const content = document.getElementById('menu-content');
    content.style.opacity = '0';
    setTimeout(() => {
      document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById('panel-' + key);
      if (panel) panel.classList.add('active');
      content.style.opacity = '1';
      content.style.transition = 'opacity .25s ease';
    }, 180);
  });
});

/* ── INTERSECTION OBSERVER (scroll animations) ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));

/* ── WHATSAPP FLOAT ── */
const waFloat = document.getElementById('wa-float');

/* ── CONTACT FORM ── */
const form = document.getElementById('contact-form');
const formOk = document.getElementById('form-ok');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name  = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    if (!name || !email) {
      alert('Por favor completá los campos obligatorios.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Por favor ingresá un email válido.');
      return;
    }
    form.style.opacity = '0.4';
    form.style.pointerEvents = 'none';
    setTimeout(() => {
      form.style.display = 'none';
      formOk.classList.add('show');
    }, 500);
  });
}

/* ── LAZY IMAGE FADE-IN ── */
document.querySelectorAll('img[loading="lazy"]').forEach(img => {
  img.style.opacity = '0';
  img.style.transition = 'opacity .5s ease';
  img.addEventListener('load', () => { img.style.opacity = '1'; });
  if (img.complete) img.style.opacity = '1';
});

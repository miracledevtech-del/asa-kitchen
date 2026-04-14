// PRELOADER
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 1800);
});

// HAMBURGER NAV
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// BACK TO TOP
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if (backTop) backTop.classList.toggle('show', window.scrollY > 400);
});
if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// SCROLL REVEAL
const revealEls = document.querySelectorAll('.reveal');
const observer  = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// MENU FILTER (menu.html only)
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('.menu-section-block').forEach(block => {
      block.style.display = (cat === 'all' || block.dataset.cat === cat) ? 'block' : 'none';
    });
  });
});

// RESERVATION FORM (reservations.html)
const resForm = document.getElementById('reservationForm');
if (resForm) {
  resForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Table reserved! We will confirm via WhatsApp or email shortly.');
    resForm.reset();
  });
}

// CONTACT FORM
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you within 24 hours.');
    contactForm.reset();
  });
}


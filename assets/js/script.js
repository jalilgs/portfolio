// ============================================================
// DOM READY
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  // ---------- Scroll Progress Bar ----------
  const progressBar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', Math.round(progress));
  });

  // ---------- Hamburger Toggle ----------
  const hamburger = document.getElementById('hamburger');
  const navList = document.querySelector('.nav__list');
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' ? false : true;
    hamburger.setAttribute('aria-expanded', expanded);
    navList.classList.toggle('open');
  });

  // Close nav on link click (mobile)
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      navList.classList.remove('open');
    });
  });

  // ---------- Active nav link on scroll (Intersection Observer) ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // ---------- Contact Form Validation ----------
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');
  const formStatus = document.getElementById('formStatus');

  // Real-time validation on blur
  const validateField = (input, errorEl, condition) => {
    if (condition) {
      input.classList.remove('error');
      errorEl.classList.remove('show');
      return true;
    } else {
      input.classList.add('error');
      errorEl.classList.add('show');
      return false;
    }
  };

  nameInput.addEventListener('blur', () => {
    validateField(nameInput, nameError, nameInput.value.trim().length > 0);
  });

  emailInput.addEventListener('blur', () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
    validateField(emailInput, emailError, isValid);
  });

  subjectInput.addEventListener('blur', () => {
    validateField(subjectInput, subjectError, subjectInput.value.trim().length > 0);
  });

  messageInput.addEventListener('blur', () => {
    validateField(messageInput, messageError, messageInput.value.trim().length > 0);
  });

  // Submit handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateField(nameInput, nameError, nameInput.value.trim().length > 0);
    const isEmailValid = validateField(emailInput, emailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()));
    const isSubjectValid = validateField(subjectInput, subjectError, subjectInput.value.trim().length > 0);
    const isMessageValid = validateField(messageInput, messageError, messageInput.value.trim().length > 0);

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      // Simulate sending (replace with actual fetch/email integration later)
      formStatus.textContent = '✅ Thank you! Your message has been sent. (Demo)';
      formStatus.className = 'form-status success';
      form.reset();
      // Remove error styles after reset
      document.querySelectorAll('.form-control').forEach(el => el.classList.remove('error'));
      document.querySelectorAll('.form-error').forEach(el => el.classList.remove('show'));
    } else {
      formStatus.textContent = '❌ Please fix the errors above.';
      formStatus.className = 'form-status error';
    }
  });

  // ---------- Footer Year ----------
  document.getElementById('currentYear').textContent = new Date().getFullYear();

});

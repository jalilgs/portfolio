// Portfolio behaviour: menu, scroll progress, local time, active link, contact form.
// Plain JavaScript, no dependencies except the EmailJS SDK loaded in index.html.

(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  // ---------- Footer year ----------
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Local time in Oran ----------
  const timeEl = $('#localTime');
  if (timeEl) {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Africa/Algiers',
    });
    const tick = () => {
      const now = new Date();
      timeEl.textContent = formatter.format(now);
      timeEl.setAttribute('datetime', now.toISOString());
    };
    tick();
    setInterval(tick, 30000);
  }

  // ---------- Scroll progress bar ----------
  const progress = $('#progress');
  if (progress) {
    // Measure the page height only when it can change, not on every scroll frame.
    let max = 0;
    let queued = false;
    const measure = () => { max = document.documentElement.scrollHeight - window.innerHeight; };
    const update = () => {
      progress.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
      queued = false;
    };
    window.addEventListener('scroll', () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    window.addEventListener('resize', () => { measure(); update(); });
    window.addEventListener('load', () => { measure(); update(); });
    measure();
    update();
  }

  // ---------- Mobile menu ----------
  const menuBtn = $('#menuBtn');
  const menuLabel = $('#menuLabel');
  const nav = $('#siteNav');
  const desktop = window.matchMedia('(min-width: 48rem)');

  const setMenu = (open, { returnFocus = false } = {}) => {
    if (!menuBtn || !nav) return;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuLabel.textContent = open ? 'Close' : 'Menu';
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    if (!open && returnFocus) menuBtn.focus();
  };

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
    });
    $$('.nav__link', nav).forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) setMenu(false, { returnFocus: true });
    });
    // If the phone is rotated or the window widened, never leave the sheet open.
    desktop.addEventListener('change', (event) => { if (event.matches) setMenu(false); });
  }

  // ---------- Highlight the nav link for the section on screen ----------
  const navLinks = $$('.nav__link').filter((link) => link.getAttribute('href').startsWith('#') && !link.classList.contains('nav__link--cta'));
  const sections = navLinks.map((link) => $(link.getAttribute('href'))).filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((section) => observer.observe(section));
  }

  // ---------- Contact form ----------
  const form = $('#contactForm');
  if (!form) return;

  const sent = $('#sent');
  const resetBtn = $('#resetBtn');
  const submitBtn = $('#submitBtn');
  const status = $('#formStatus');
  const honeypot = $('#website');

  const rules = {
    name: (value) => value.length > 0,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value),
    subject: (value) => value.length > 0,
    message: (value) => value.length > 0,
  };

  const validate = (input) => {
    const ok = rules[input.name](input.value.trim());
    input.closest('.field').classList.toggle('is-invalid', !ok);
    input.setAttribute('aria-invalid', String(!ok));
    return ok;
  };

  const inputs = Object.keys(rules).map((name) => form.elements[name]);
  inputs.forEach((input) => {
    input.addEventListener('blur', () => validate(input));
    input.addEventListener('input', () => {
      if (input.closest('.field').classList.contains('is-invalid')) validate(input);
    });
  });

  const setStatus = (text, isError = false) => {
    status.textContent = text;
    status.classList.toggle('is-error', isError);
  };

  const COOLDOWN_MS = 15000;
  let lastSentAt = 0;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    setStatus('');

    const results = inputs.map(validate);
    const firstInvalid = inputs[results.indexOf(false)];
    if (firstInvalid) {
      firstInvalid.focus();
      setStatus('Fix the highlighted fields and try again.', true);
      return;
    }

    // Bots fill the hidden field. Pretend it worked and send nothing.
    if (honeypot && honeypot.value) {
      showSent();
      return;
    }

    if (Date.now() - lastSentAt < COOLDOWN_MS) {
      setStatus('Please wait a few seconds before sending another message.', true);
      return;
    }

    if (typeof emailjs === 'undefined') {
      setStatus('The form could not load. Email me at jalilgs13@gmail.com instead.', true);
      return;
    }

    const fullName = form.elements.name.value.trim();
    const space = fullName.indexOf(' ');
    const params = {
      first_name: space === -1 ? fullName : fullName.slice(0, space),
      last_name: space === -1 ? '' : fullName.slice(space + 1),
      email: form.elements.email.value.trim(),
      subject: form.elements.subject.value.trim(),
      message: form.elements.message.value.trim(),
    };

    const label = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      emailjs.init({ publicKey: '_E9tWiIpUq23ggZg4' });
      await emailjs.send('service_wckeyy8', 'template_gqhtsxk', params);
      lastSentAt = Date.now();
      showSent();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Your message was not sent. Try again, or email me at jalilgs13@gmail.com.', true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = label;
    }
  });

  function showSent() {
    form.reset();
    inputs.forEach((input) => {
      input.closest('.field').classList.remove('is-invalid');
      input.removeAttribute('aria-invalid');
    });
    form.hidden = true;
    sent.hidden = false;
    const heading = $('.sent__title', sent);
    heading.setAttribute('tabindex', '-1');
    heading.focus();
  }

  resetBtn.addEventListener('click', () => {
    sent.hidden = true;
    form.hidden = false;
    setStatus('');
    form.elements.name.focus();
  });
})();

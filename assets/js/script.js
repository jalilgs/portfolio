// ============================================================
// DOM READY
// ============================================================
document.addEventListener('DOMContentLoaded', () => {


// ---------- PROJECTS DATA (add/remove projects here) ----------
const projectsData = [
  {
    id: 1,
    title: 'Smart Contact Form',
    desc: 'A fully functional contact form with client-side validation, real-time feedback, and smooth submission flow.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    thumbColor: 'linear-gradient(135deg, #2d2d2d 0%, #4a4a4a 100%)',
    image: 'assets/images/contact-form-2.png',
    demoLink: 'https://jalilgs.github.io/contact-form-2/',
    codeLink: 'https://github.com/jalilgs/contact-form-2',
    status: 'live' // 'live' | 'coming'
  },
  {
    id: 2,
    title: 'Scroll Progress Indicator',
    desc: 'A dynamic progress bar that tracks reading position on any page. Enhances UX with smooth animations.',
    tags: ['JavaScript', 'CSS', 'Accessibility'],
    thumbColor: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    image: 'assets/images/scroll-progress.png',
    demoLink: 'https://jalilgs.github.io/scroll-progress-indicator/',
    codeLink: 'https://github.com/jalilgs/scroll-progress-indicator',
    status: 'live'
  },
  {
  "id": 22,
  "title": "Scroll Progress — The Art of Reading",
  "desc": "A polished, interactive reading experience with real‑time scroll progress, a smart badge, keyboard shortcuts, and subtle animations — built with vanilla HTML, CSS, and JavaScript.",
  "tags": ["HTML", "CSS", "JavaScript", "Responsive", "Accessibility", "Animation"],
  "thumbColor": "linear-gradient(135deg, #08080c 0%, #1a1025 50%, #2d1b3d 100%)",
  "image": "assets/images/scroll-progress-2.png",
  "demoLink": "https://your-username.github.io/scroll-progress/",
  "codeLink": "https://github.com/your-username/scroll-progress",
  "status": "live"
},
  {
    id: 3,
    title: 'Hilal — Ramadan 2027 Countdown',
    desc: 'A hand-built digit-flip countdown with per-digit animation (odometer-style), crescent-moon motif, and fully responsive layout — no libraries, just vanilla HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Accessibility'],
    thumbColor: 'linear-gradient(135deg, #0b201d 0%, #1a3a35 100%)',
    image: 'assets/images/ramadan-coming-soon.png',
    demoLink: 'https://jalilgs.github.io/ramadan-comming-soon/',
    codeLink: 'https://github.com/jalilgs/ramadan-comming-soon',
    status: 'live'
  },
   {
    id: 4,
    title: 'Ramadan Countdown — Crescent Edition',
    desc: 'A serene, crescent-themed Ramadan countdown page featuring a warm, minimal design, live countdown timer, and a simple email notification signup. Built as a spiritual companion for the holy month, with a focus on calm, accessible UI.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Accessibility'],
    thumbColor: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b3d 100%)',
    image: 'assets/images/ramadan-coming-soon-2.png',
    demoLink: 'https://jalilgs.github.io/ramadan-comming-soon-2/',
    codeLink: 'https://github.com/jalilgs/ramadan-comming-soon-2',
    status: 'live'
  },

//   {
//     id: 4,
//     title: 'Django Blog Platform',
//     desc: 'A full-featured blog engine built with Django, featuring authentication, comments, and tags.',
//     tags: ['Python', 'Django', 'PostgreSQL'],
//     thumbColor: 'linear-gradient(135deg, #0f2027 0%, #203a43 100%)',
//     image: 'assets/images/ramadan commin soon.png',

//     demoLink: '#',
//     codeLink: '#',
//     status: 'coming'
//   },

  {
    id: 5,
    title: '404 Page — Explorer\'s Map',
    desc: 'A creative 404 error page themed around a lost explorer. It features a custom map illustration, a playful "You\'ve wandered off the map" message, and coordinates (STATUS: NOT FOUND · COORDINATES UNKNOWN) to reinforce the navigation theme.',
    tags: ['HTML', 'CSS', 'Creative', 'Themed UI'],
    thumbColor: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)',
    image: 'assets/images/404-page-2.png', // Screenshot of https://jalilgs.github.io/404-page-2/
    demoLink: 'https://jalilgs.github.io/404-page-2/',
    codeLink: 'https://github.com/jalilgs/404-page-2', // Assuming this is the correct repo
    status: 'live'
  },
  {
    id: 6,
    title: '404 Page — Minimalist Clean',
    desc: 'A clean, minimalist 404 error page focused on clear communication. It uses a simple, uncluttered layout with a direct message ("Oops! It looks like the page you\'re looking for has been moved...") and a prominent call-to-action button to guide users back to the homepage.',
    tags: ['HTML', 'CSS', 'Minimalist', 'UX'],
    thumbColor: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    image: 'assets/images/404-page-1.png', // Screenshot of https://jalilgs.github.io/404-page/
    demoLink: 'https://jalilgs.github.io/404-page/',
    codeLink: 'https://github.com/jalilgs/404-page', // Assuming this is the correct repo
    status: 'live'
  },
  {
    id: 7,
    title: '404 Page — Dark & Simple',
    desc: 'A dark-themed, straightforward 404 error page. It delivers the error message with a clear, no-frills design, ensuring users immediately understand the issue and can easily navigate back to the main site using the provided link.',
    tags: ['HTML', 'CSS', 'Dark Theme', 'Simplicity'],
    thumbColor: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
    image: 'assets/images/404-page-3.png', // Screenshot of https://jalilgs.github.io/404-page-3/
    demoLink: 'https://jalilgs.github.io/404-page-3/',
    codeLink: 'https://github.com/jalilgs/404-page-3', // Assuming this is the correct repo
    status: 'live'
  },
  {
    id: 8,
    title: 'GitHub User Finder',
    desc: 'A modern, responsive web app to search GitHub users, view their profiles, and filter their repositories. Features include sessionStorage caching to reduce API calls, deep linking with shareable URLs, dark/light theme toggle, search history, and real-time repository filtering — all built with vanilla JavaScript.',
    tags: ['JavaScript', 'CSS', 'API', 'Accessibility', 'LocalStorage'],
    thumbColor: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    image: 'assets/images/github-user-finder.png',
    demoLink: 'https://jalilgs.github.io/github-user-finder/',
    codeLink: 'https://github.com/jalilgs/github-user-finder',
    status: 'live'
  },
  {
    id: 9,
    title: 'Color Palette Generator',
    desc: 'A simple yet powerful tool to generate random 5-color palettes. Lock individual colors to keep them fixed while regenerating others, copy hex codes to your clipboard with one click, and save your favorite palettes with duplicate detection. Built with vanilla HTML, CSS, and JavaScript.',
    tags: ['JavaScript', 'CSS', 'Clipboard API', 'State Management'],
    thumbColor: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    image: 'assets/images/color-palette-generator.png',
    demoLink: 'https://jalilgs.github.io/color-palette-generator/',
    codeLink: 'https://github.com/jalilgs/color-palette-generator',
    status: 'live'
  },
  {
    id: 10,
    title: 'Quiz Game',
    desc: 'A modern, responsive quiz game that pulls 5 random questions from a larger bank, shuffles answers, and provides instant visual feedback (green/red highlights). Features a live score counter, animated progress bar, staggered button animations, and a restart option for a fresh, shuffled round — no frameworks, just vanilla JS.',
    tags: ['JavaScript', 'CSS', 'Animation', 'Accessibility', 'Responsive'],
    thumbColor: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    image: 'assets/images/quiz-game.png',
    demoLink: 'https://jalilgs.github.io/quiz/',
    codeLink: 'https://github.com/jalilgs/quiz',
    status: 'live'
  },
  {
    id: 11,
    title: 'Recipe Finder',
    desc: 'A modern, feature-rich recipe discovery app with advanced search, autocomplete, and an immersive cooking mode. Includes smart timers, dark/light themes, favorites, and uses the Screen Wake Lock API to keep your screen on while you cook. Built with vanilla JS modules.',
    tags: ['JavaScript', 'CSS', 'API', 'Web APIs', 'Accessibility'],
    thumbColor: 'linear-gradient(135deg, #065f46 0%, #047857 100%)',
    image: 'assets/images/recipe-finder.png',
    demoLink: 'https://jalilgs.github.io/coocks-finder/',
    codeLink: 'https://github.com/jalilgs/coocks-finder',
    status: 'live'
  },
  {
    id: 12,
    title: 'Currency Converter',
    desc: 'A sleek, glassmorphic currency converter with real-time exchange rates and smart caching. Features instant swap with rotation animation, currency flags, formatted results via Intl.NumberFormat, conversion history, and one-click copy — all with zero dependencies.',
    tags: ['JavaScript', 'CSS', 'API', 'Glassmorphism', 'State Management'],
    thumbColor: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
    image: 'assets/images/currency-converter.png',
    demoLink: 'https://jalilgs.github.io/currency-converter/',
    codeLink: 'https://github.com/jalilgs/currency-converter',
    status: 'live'
  },
  {
    id: 13,
    title: 'Bookmark Saver',
    desc: 'A lightweight, fast bookmark manager that saves links to localStorage. Features custom drag-and-drop reordering, automatic favicon fetching, smart URL formatting, instant live search, and keyboard shortcuts — all in a clean SaaS-style UI with persistent storage.',
    tags: ['JavaScript', 'CSS', 'Drag-and-Drop', 'LocalStorage', 'UX'],
    thumbColor: 'linear-gradient(135deg, #4338ca 0%, #6366f1 100%)',
    image: 'assets/images/bookmark-saver.png',
    demoLink: 'https://jalilgs.github.io/Bookmark-Saver/',
    codeLink: 'https://github.com/jalilgs/Bookmark-Saver',
    status: 'live'
  },
  {
    id: 14,
    title: 'Contact Form',
    desc: 'A modern, accessible contact form with a dark editorial-style design, client-side validation (email, phone, character counter), a honeypot for spam protection, and loading states—all built with vanilla HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Accessibility', 'Form Validation'],
    thumbColor: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    image: 'assets/images/contact-form.png',
    demoLink: 'https://jalilgs.github.io/contact-form/',
    codeLink: 'https://github.com/jalilgs/contact-form',
    status: 'live'
  },
  {
    id: 15,
    title: 'Prices Card',
    desc: 'A dark-themed, responsive pricing section for freelancers, featuring three tiers (Landing Page, Portfolio, Business), a "Most Popular" highlight, testimonials, and accessible markup—no frameworks required.',
    tags: ['HTML', 'CSS', 'Responsive Design', 'Accessibility'],
    thumbColor: 'linear-gradient(135deg, #0b1018 0%, #1a2332 100%)',
    image: 'assets/images/prices-card.png',
    demoLink: 'https://jalilgs.github.io/Prices-card/',
    codeLink: 'https://github.com/jalilgs/Prices-card',
    status: 'live'
  },
  {
    id: 16,
    title: 'Meet Our Team',
    desc: 'A responsive team showcase with an "Ocean Breeze" theme, live search filtering, light/dark mode, a detail modal, one-click email copying, and scroll-reveal animations using the Intersection Observer API.',
    tags: ['JavaScript', 'CSS', 'Intersection Observer', 'Clipboard API', 'Accessibility'],
    thumbColor: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
    image: 'assets/images/meet-our-team.png',
    demoLink: 'https://jalilgs.github.io/meet-our-team/',
    codeLink: 'https://github.com/jalilgs/meet-our-team',
    status: 'live'
  },
  {
    id: 17,
    title: 'Todo App',
    desc: 'A feature-rich task manager with a TickTick-inspired UI, priority levels, due dates, inline editing, custom drag-and-drop, live search, filter tabs, a persistent focus timer, and an animated progress ring—all powered by localStorage.',
    tags: ['JavaScript', 'CSS', 'Drag-and-Drop', 'localStorage', 'Timer API'],
    thumbColor: 'linear-gradient(135deg, #1e3a5f 0%, #2d6da8 100%)',
    image: 'assets/images/todo-app.png',
    demoLink: 'https://jalilgs.github.io/todo-app/',
    codeLink: 'https://github.com/jalilgs/todo-app',
    status: 'live'
  },
  {
    id: 18,
    title: 'Sign In / Up Form',
    desc: 'A modern authentication UI with real-time validation, a live password strength meter, show/hide password toggle, and a simulated async submit flow—spanning two linked pages (Sign Up & Sign In) with a shared design system.',
    tags: ['JavaScript', 'CSS', 'Form Validation', 'Password Strength', 'UI/UX'],
    thumbColor: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
    image: 'assets/images/sign-in-up-form.png',
    demoLink: 'https://jalilgs.github.io/Sign-In-Up-form/',
    codeLink: 'https://github.com/jalilgs/Sign-In-Up-form',
    status: 'live'
  },
  {
    id: 19,
    title: 'Balance Tracker',
    desc: 'A clean expense tracker to manage income and expenses by category. Features include adding, editing, and deleting transactions, live summaries, search/filter, and full import/export of data as JSON or CSV, with all data stored in localStorage.',
    tags: ['JavaScript', 'CSS', 'localStorage', 'Data Export/Import', 'Category Management'],
    thumbColor: 'linear-gradient(135deg, #065f46 0%, #0d9488 100%)',
    image: 'assets/images/balance-tracker.png',
    demoLink: 'https://jalilgs.github.io/balance-tracker/',
    codeLink: 'https://github.com/jalilgs/balance-tracker',
    status: 'live'
  },
    {
    id: 20,
    title: 'Password Vault — Generator',
    desc: 'A modern, terminal-styled password generator with real-time entropy-based strength meter, customizable options (uppercase, lowercase, numbers, symbols, exclude ambiguous characters, no repeats), recent history with quick-copy, and persistent settings via localStorage.',
    tags: ['JavaScript', 'CSS', 'Security', 'localStorage', 'Accessibility'],
    thumbColor: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    image: 'assets/images/password-generator.png',
    demoLink: 'https://jalilgs.github.io/password-generator/',
    codeLink: 'https://github.com/jalilgs/password-generator',
    status: 'live'
  },
  {
    id: 21,
    title: 'Kanban Menu — Task Board',
    desc: 'A lightweight, dependency-free Kanban board with custom drag & drop (built from scratch with mouse events), three color-coded columns (To Do, In Progress, Done), inline task addition, and keyboard shortcuts (double-click to advance, right-click to go back).',
    tags: ['JavaScript', 'CSS', 'Drag-and-Drop', 'Accessibility', 'Responsive'],
    thumbColor: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    image: 'assets/images/kanban-menu.png',
    demoLink: 'https://jalilgs.github.io/kanban-menu/',
    codeLink: 'https://github.com/jalilgs/kanban-menu',
    status: 'live'
  }
];

// ---------- RENDER PROJECTS ----------
// function renderProjects() {
//   const grid = document.getElementById('projectsGrid');
//   if (!grid) return;

//   const cardsHTML = projectsData.map(project => {
//     const isComing = project.status === 'coming';
//     const linksHTML = isComing
//       ? `<span class="project-card__coming">🚧 In Development</span>`
//       : `
//           <a href="${project.demoLink}" class="project-card__link" target="_blank" aria-label="View live demo">
//             <i class="fas fa-external-link-alt"></i> Live Demo
//           </a>
//           <a href="${project.codeLink}" class="project-card__link" target="_blank" aria-label="View source code">
//             <i class="fab fa-github"></i> Source
//           </a>
//         `;

//     return `
//       <article class="project-card">
//         <div class="project-card__thumb" style="background: ${project.thumbColor || '#2d2d2d'}; overflow: hidden;">
//         ${project.image 
//             ? `<img src="${project.image}" alt="${project.title} screenshot" style="width:100%; height:100%; object-fit:cover; display:block;">` 
//             : `<i class="fas fa-image project-card__icon" aria-hidden="true"></i>` // fallback if image missing
//         }
//         </div>
//         <div class="project-card__body">
//           <h3 class="project-card__title">${project.title}</h3>
//           <p class="project-card__desc">${project.desc}</p>
//           <div class="project-card__tags">
//             ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
//           </div>
//           <div class="project-card__links">
//             ${linksHTML}
//           </div>
//         </div>
//       </article>
//     `;
//   }).join('');

//   grid.innerHTML = cardsHTML;
// }
// ---------- RENDER PROJECTS ----------
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const INITIAL_VISIBLE = 9; // Show 9 projects initially

  const cardsHTML = projectsData.map(project => {
    const isComing = project.status === 'coming';
    const linksHTML = isComing
      ? `<span class="project-card__coming">🚧 In Development</span>`
      : `
          <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="project-card__link" aria-label="View live demo">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
          <a href="${project.codeLink}" target="_blank" rel="noopener noreferrer" class="project-card__link" aria-label="View source code">
            <i class="fab fa-github"></i> Source
          </a>
        `;

    return `
      <article class="project-card" data-index="${project.id}">
        <div class="project-card__thumb" style="background: ${project.thumbColor}; overflow: hidden;">
          ${project.image 
            ? `<img src="${project.image}" alt="${project.title} screenshot" style="width:100%; height:100%; object-fit:cover; display:block;">` 
            : `<i class="fas fa-image project-card__icon" aria-hidden="true"></i>`
          }
        </div>
        <div class="project-card__body">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__desc">${project.desc}</p>
          <div class="project-card__tags">
            ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
          </div>
          <div class="project-card__links">
            ${linksHTML}
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Insert all cards
  grid.innerHTML = cardsHTML;

  // Get all project cards
  const allCards = grid.querySelectorAll('.project-card');

  // Hide cards beyond the initial limit
  if (allCards.length > INITIAL_VISIBLE) {
    allCards.forEach((card, index) => {
      if (index >= INITIAL_VISIBLE) {
        card.style.display = 'none';
      }
    });

    // Add the "Show More" button after the grid
    const showMoreBtn = document.createElement('button');
    showMoreBtn.className = 'btn btn--outline show-more-btn';
    showMoreBtn.textContent = `See More (${allCards.length - INITIAL_VISIBLE})`;
    showMoreBtn.setAttribute('aria-expanded', 'false');
    
    let isExpanded = false;
    showMoreBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;
      allCards.forEach((card, index) => {
        if (index >= INITIAL_VISIBLE) {
          card.style.display = isExpanded ? 'block' : 'none';
        }
      });
      showMoreBtn.textContent = isExpanded 
        ? 'Show Less' 
        : `See More (${allCards.length - INITIAL_VISIBLE})`;
      showMoreBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Insert the button after the grid
    grid.parentNode.insertBefore(showMoreBtn, grid.nextSibling);
  }
}
// Call it
renderProjects();


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
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Validate all fields
//     const isNameValid = validateField(nameInput, nameError, nameInput.value.trim().length > 0);
//     const isEmailValid = validateField(emailInput, emailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()));
//     const isSubjectValid = validateField(subjectInput, subjectError, subjectInput.value.trim().length > 0);
//     const isMessageValid = validateField(messageInput, messageError, messageInput.value.trim().length > 0);

//     if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
//       // Simulate sending (replace with actual fetch/email integration later)
//       formStatus.textContent = '✅ Thank you! Your message has been sent. (Demo)';
//       formStatus.className = 'form-status success';
//       form.reset();
//       // Remove error styles after reset
//       document.querySelectorAll('.form-control').forEach(el => el.classList.remove('error'));
//       document.querySelectorAll('.form-error').forEach(el => el.classList.remove('show'));
//     } else {
//       formStatus.textContent = '❌ Please fix the errors above.';
//       formStatus.className = 'form-status error';
//     }
//   });

  // ---------- Contact Form with EmailJS ----------
// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   // Validate all fields (same as before)
//   const isNameValid = validateField(nameInput, nameError, nameInput.value.trim().length > 0);
//   const isEmailValid = validateField(emailInput, emailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()));
//   const isSubjectValid = validateField(subjectInput, subjectError, subjectInput.value.trim().length > 0);
//   const isMessageValid = validateField(messageInput, messageError, messageInput.value.trim().length > 0);

//   if (!(isNameValid && isEmailValid && isSubjectValid && isMessageValid)) {
//     formStatus.textContent = '❌ Please fix the errors above.';
//     formStatus.className = 'form-status error';
//     return;
//   }

//   // Prepare template parameters
//   // Split full name into first and last (fallback if only one word)
//   const fullName = nameInput.value.trim();
//   const spaceIndex = fullName.indexOf(' ');
//   const firstName = spaceIndex === -1 ? fullName : fullName.slice(0, spaceIndex);
//   const lastName = spaceIndex === -1 ? '' : fullName.slice(spaceIndex + 1);

//   const templateParams = {
//     first_name: firstName,
//     last_name: lastName,
//     email: emailInput.value.trim(),
//     subject: subjectInput.value.trim(),
//     message: messageInput.value.trim()
//   };

//   // Show sending state
//   const submitBtn = form.querySelector('button[type="submit"]');
//   const originalBtnHTML = submitBtn.innerHTML;
//   submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
//   submitBtn.disabled = true;
//   formStatus.textContent = '';
//   formStatus.className = 'form-status';

//   try {
//     // Send the email
//     await emailjs.send(
//       "service_wckeyy8",          // your service ID
//       "template_gqhtsxk",         // your template ID
//       templateParams
//     );

//     // Success
//     formStatus.textContent = '✅ Message sent! We\'ll get back to you soon.';
//     formStatus.className = 'form-status success';
//     form.reset();
//     // Remove error styles
//     document.querySelectorAll('.form-control').forEach(el => el.classList.remove('error'));
//     document.querySelectorAll('.form-error').forEach(el => el.classList.remove('show'));

//   } catch (error) {
//     console.error('EmailJS Error:', error);
//     formStatus.textContent = '❌ Failed to send. Please try again later.';
//     formStatus.className = 'form-status error';
//   } finally {
//     // Restore button
//     submitBtn.innerHTML = originalBtnHTML;
//     submitBtn.disabled = false;
//   }
// });

// ---------- Contact Form with EmailJS + Success Screen ----------
const successContainer = document.getElementById('successContainer');
const resetFormBtn = document.getElementById('resetFormBtn');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Validate all fields
  const isNameValid = validateField(nameInput, nameError, nameInput.value.trim().length > 0);
  const isEmailValid = validateField(emailInput, emailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()));
  const isSubjectValid = validateField(subjectInput, subjectError, subjectInput.value.trim().length > 0);
  const isMessageValid = validateField(messageInput, messageError, messageInput.value.trim().length > 0);

  if (!(isNameValid && isEmailValid && isSubjectValid && isMessageValid)) {
    formStatus.textContent = '❌ Please fix the errors above.';
    formStatus.className = 'form-status error';
    return;
  }

  // Prepare template parameters
  const fullName = nameInput.value.trim();
  const spaceIndex = fullName.indexOf(' ');
  const firstName = spaceIndex === -1 ? fullName : fullName.slice(0, spaceIndex);
  const lastName = spaceIndex === -1 ? '' : fullName.slice(spaceIndex + 1);

  const templateParams = {
    first_name: firstName,
    last_name: lastName,
    email: emailInput.value.trim(),
    subject: subjectInput.value.trim(),
    message: messageInput.value.trim()
  };

  // Show sending state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnHTML = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  try {
    await emailjs.send(
      "service_wckeyy8",
      "template_gqhtsxk",
      templateParams
    );

    // ---- SUCCESS: hide form, show success container ----
    form.style.display = 'none';
    successContainer.classList.remove('hidden');
    // Reset form fields (optional, but good practice)
    form.reset();
    document.querySelectorAll('.form-control').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.form-error').forEach(el => el.classList.remove('show'));

  } catch (error) {
    console.error('EmailJS Error:', error);
    formStatus.textContent = '❌ Failed to send. Please try again later.';
    formStatus.className = 'form-status error';
  } finally {
    // Restore button state (only if form is still visible)
    if (form.style.display !== 'none') {
      submitBtn.innerHTML = originalBtnHTML;
      submitBtn.disabled = false;
    }
  }
});

// Reset / "Send another message" button
resetFormBtn.addEventListener('click', () => {
  // Hide success, show form
  successContainer.classList.add('hidden');
  form.style.display = 'block';
  // Reset form and status
  form.reset();
  formStatus.textContent = '';
  formStatus.className = 'form-status';
  // Reset button to original state (if it was changed)
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
  submitBtn.disabled = false;
});

  // ---------- Footer Year ----------
  document.getElementById('currentYear').textContent = new Date().getFullYear();

});

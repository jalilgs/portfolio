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
    image: 'assets/images/contact-form 2.png',
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
    id: 3,
    title: 'Hilal — Ramadan 2027 Countdown',
    desc: 'A hand-built digit-flip countdown with per-digit animation (odometer-style), crescent-moon motif, and fully responsive layout — no libraries, just vanilla HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Accessibility'],
    thumbColor: 'linear-gradient(135deg, #0b201d 0%, #1a3a35 100%)',
    image: 'assets/images/ramadan comming soon.png',
    demoLink: 'https://jalilgs.github.io/ramadan-comming-soon/',
    codeLink: 'https://github.com/jalilgs/ramadan-comming-soon',
    status: 'live'
  },

  {
    id: 4,
    title: 'Django Blog Platform',
    desc: 'A full-featured blog engine built with Django, featuring authentication, comments, and tags.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    thumbColor: 'linear-gradient(135deg, #0f2027 0%, #203a43 100%)',
    image: 'assets/images/ramadan commin soon.png',

    demoLink: '#',
    codeLink: '#',
    status: 'coming'
  },

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

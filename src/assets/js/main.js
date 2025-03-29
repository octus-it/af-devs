(function() {
  "use strict";

  // Fonction sécurisée pour les éléments null
  function safeQuery(selector) {
    const el = document.querySelector(selector);
    if (!el) console.warn(`Element non trouvé: ${selector}`);
    return el;
  }

  // ======= Sticky Header
  function handleScroll() {
    const ud_header = safeQuery(".ud-header");
    const backToTop = safeQuery(".back-to-top");
    const logo = safeQuery(".header-logo");

    if (!ud_header) return;

    // Gestion du header sticky
    const sticky = ud_header.offsetTop;
    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // Gestion du logo
    if (logo) {
      const isDarkMode = document.documentElement.classList.contains("dark");
      const isSticky = ud_header.classList.contains("sticky");

      logo.src = isDarkMode || isSticky
        ? "assets/images/logo/1.png"
        : "assets/images/logo/2.png";
    }
      // ? "assets/images/logo/logo-white.svg"
      // : "assets/images/logo/logo.svg";

    // Gestion du bouton back-to-top
    if (backToTop) {
      backToTop.style.display =
        (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
          ? "flex"
          : "none";
    }
  }

  // ===== Responsive Navbar
  function setupNavbar() {
    const navbarToggler = safeQuery("#navbarToggler");
    const navbarCollapse = safeQuery("#navbarCollapse");

    if (navbarToggler && navbarCollapse) {
      navbarToggler.addEventListener("click", () => {
        navbarToggler.classList.toggle("navbarTogglerActive");
        navbarCollapse.classList.toggle("hidden");
      });

      // Fermeture au clic sur les liens
      document.querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
        .forEach(link => {
          link.addEventListener("click", () => {
            navbarToggler.classList.remove("navbarTogglerActive");
            navbarCollapse.classList.add("hidden");
          });
        });
    }
  }

  // ===== Sub-menu
  function setupSubmenus() {
    document.querySelectorAll(".submenu-item").forEach(item => {
      const link = item.querySelector("a");
      const submenu = item.querySelector(".submenu");

      if (link && submenu) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          submenu.classList.toggle("hidden");
        });
      }
    });
  }

  // ===== Faq accordion
  function setupFAQs() {
    document.querySelectorAll(".single-faq").forEach(faq => {
      const btn = faq.querySelector(".faq-btn");
      const icon = faq.querySelector(".icon");
      const content = faq.querySelector(".faq-content");

      if (btn && icon && content) {
        btn.addEventListener("click", () => {
          icon.classList.toggle("rotate-180");
          content.classList.toggle("hidden");
        });
      }
    });
  }

  // ===== Scroll Top
  function setupBackToTop() {
    const backToTop = safeQuery(".back-to-top");
    if (!backToTop) return;

    backToTop.onclick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  }

// ===== Theme Switcher (Version Corrigée)
  // ===== Theme Switcher (Version Finale Corrigée)
  function setupThemeSwitcher() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    if (!themeSwitcher) return;

    // Désactive les transitions pendant le changement
    function disableTransitions() {
      document.documentElement.classList.add('[&_*]:!transition-none');
      window.setTimeout(() => {
        document.documentElement.classList.remove('[&_*]:!transition-none');
      }, 100);
    }

    function applyTheme(isDark) {
      disableTransitions();
      const html = document.documentElement;
      isDark ? html.classList.add('dark') : html.classList.remove('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateLogo(isDark);
      themeSwitcher.checked = isDark;
    }

    function updateLogo(isDark) {
      const logo = document.querySelector('.header-logo');
      if (!logo) return;
      logo.src = isDark
        ? "assets/images/logo/1.png"
        : "assets/images/logo/2.png";
    }

    themeSwitcher.addEventListener('change', (e) => {
      applyTheme(e.target.checked);
    });

    // Init avec vérification système
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme ? savedTheme === 'dark' : systemDark);

    // Écouteur système
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) applyTheme(e.matches);
    });
  }

  // Initialisation
  document.addEventListener('DOMContentLoaded', () => {
    // Désactiver le gestionnaire de scroll par défaut de Zone.js
    if (window.Zone) {
      window.Zone.__load_patch('EventTarget', (global, Zone) => {
        Zone.__zone_symbol__ON_PROPERTYscroll = null;
      });
    }

    window.addEventListener('scroll', handleScroll);
    setupNavbar();
    setupSubmenus();
    setupFAQs();
    setupBackToTop();
    setupThemeSwitcher();

    // Initialiser WOW.js si disponible
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }
  });
})();

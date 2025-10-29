// Menu Mobile Toggle
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggleBtn = document.getElementById("menu-toggle-btn");
  const mobileMenu = document.getElementById("menu-mobile");

  menuToggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking menu items
  const mobileMenuLinks = mobileMenu.querySelectorAll(".menu-link");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });
  });

  // FAQ accordion
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      // Close all other open answers
      const allAnswers = document.querySelectorAll(".faq-answer");
      const allQuestions = document.querySelectorAll(".faq-question");

      allAnswers.forEach((ans) => {
        if (ans !== this.nextElementSibling) {
          ans.classList.remove("active");
        }
      });

      allQuestions.forEach((q) => {
        if (q !== this) {
          q.classList.remove("active");
        }
      });

      // Toggle current answer
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    });
  });

  // Contact form validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let isValid = true;

      // Name validation
      const nameInput = document.getElementById("name");
      const nameError = document.getElementById("name-error");
      if (nameInput.value.trim().length < 3) {
        nameError.textContent = "Nome deve ter pelo menos 3 caracteres";
        isValid = false;
      } else {
        nameError.textContent = "";
      }

      // Email validation
      const emailInput = document.getElementById("email");
      const emailError = document.getElementById("email-error");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Email inválido";
        isValid = false;
      } else {
        emailError.textContent = "";
      }

      // Phone validation
      const phoneInput = document.getElementById("phone");
      const phoneError = document.getElementById("phone-error");
      if (phoneInput.value.trim().length < 10) {
        phoneError.textContent = "Telefone inválido";
        isValid = false;
      } else {
        phoneError.textContent = "";
      }

      // Privacy checkbox validation
      const privacyCheckbox = document.getElementById("privacy");
      const privacyError = document.getElementById("privacy-error");
      if (!privacyCheckbox.checked) {
        privacyError.textContent =
          "Você precisa concordar com a política de privacidade";
        isValid = false;
      } else {
        privacyError.textContent = "";
      }

      // If form is valid, simulate form submissionif (isValid) {
      const submitButton = document.getElementById("submit-btn");
      submitButton.textContent = "Enviando...";
      submitButton.disabled = true;

      // Coletar os dados do formulário
      const formData = new FormData(contactForm);

      // Enviar os dados para o FormSubmit
      fetch("https://formsubmit.co/gabriel-pertile@hotmail.com", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            alert(
              "Mensagem enviada com sucesso! Entraremos em contato em breve."
            );
            contactForm.reset();
          } else {
            alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
          }
          submitButton.textContent = "Enviar Mensagem";
          submitButton.disabled = false;
        })
        .catch((error) => {
          console.error(error);
          alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
          submitButton.textContent = "Enviar Mensagem";
          submitButton.disabled = false;
        });
    });
  }

  // Set current year in copyright
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Animations with Anime.js
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasAnime = typeof window.anime !== 'undefined';

  if (hasAnime && !reduceMotion) {
    // Hero intro animation
    try {
      window.anime
        .timeline({ easing: 'easeOutCubic', duration: 700 })
        .add({
          targets: '.hero-title',
          opacity: [0, 1],
          translateY: [24, 0]
        })
        .add({
          targets: '.hero-description',
          opacity: [0, 1],
          translateY: [16, 0],
          offset: '-=400'
        })
        .add({
          targets: '.hero-buttons .btn',
          opacity: [0, 1],
          scale: [0.95, 1],
          delay: window.anime.stagger(80),
          offset: '-=350'
        });
    } catch (err) {
      // noop
    }

    // Button micro-interactions
    document.querySelectorAll('a.btn, button, .cta').forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        window.anime({ targets: btn, scale: 1.03, duration: 160, easing: 'easeOutQuad' });
      });
      btn.addEventListener('mouseleave', () => {
        window.anime({ targets: btn, scale: 1.0, duration: 160, easing: 'easeOutQuad' });
      });
      btn.addEventListener('mousedown', () => {
        window.anime({ targets: btn, scale: 0.98, duration: 80, easing: 'easeOutQuad' });
      });
      btn.addEventListener('mouseup', () => {
        window.anime({ targets: btn, scale: 1.0, duration: 120, easing: 'easeOutQuad' });
      });
    });

    // Reveal on scroll
    const revealEls = document.querySelectorAll('.reveal');

    const animateCounterFromText = (el) => {
      const raw = el.textContent.trim();
      const hasPlusPrefix = raw.startsWith('+');
      const hasPlusSuffix = raw.endsWith('+');
      const numeric = parseInt(raw.replace(/[^0-9]/g, ''), 10);
      if (Number.isNaN(numeric)) return;

      window.anime({
        targets: { val: 0 },
        val: numeric,
        round: 1,
        duration: 1200,
        easing: 'easeOutCubic',
        update: (anim) => {
          const value = anim.animations[0].currentValue;
          el.textContent = `${hasPlusPrefix ? '+' : ''}${value}${hasPlusSuffix ? '+' : ''}`;
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          window.anime({
            targets: target,
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 600,
            easing: 'easeOutCubic'
          });

          // Counters inside achievements
          if (target.classList.contains('achievement')) {
            const valEl = target.querySelector('.achievement-value');
            if (valEl) animateCounterFromText(valEl);
          }

          observer.unobserve(target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach((el) => {
      el.style.opacity = 0;
      observer.observe(el);
    });
  } else {
    // If reduced motion or anime missing, ensure elements are visible
    document.querySelectorAll('.reveal').forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
  }
  // Tab visibility attention hint (blink title and favicon when user leaves the tab)
  const originalTitle = document.title;
  let visibilityIntervalId = null;

  // Favicon helpers
  const getFaviconLink = () => document.querySelector('link[rel~="icon"]');
  const setFavicon = (href) => {
    let link = getFaviconLink();
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = href;
  };
  const originalFaviconHref = (getFaviconLink() && getFaviconLink().href) || '/images/favicon.png';

  // Build an attention favicon by adding a subtle ring around the original
  let attentionFaviconHref = originalFaviconHref;
  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const size = 64;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Draw original favicon centered and scaled
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);

        // Draw subtle ring (brand-friendly gold)
        ctx.save();
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#c2a57a';
        ctx.shadowColor = 'rgba(0,0,0,0.08)';
        ctx.shadowBlur = 2;
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        attentionFaviconHref = canvas.toDataURL('image/png');
      } catch (e) {
        attentionFaviconHref = originalFaviconHref;
      }
    };
    img.onerror = () => {
      attentionFaviconHref = originalFaviconHref;
    };
    img.src = originalFaviconHref;
  } catch (e) {
    attentionFaviconHref = originalFaviconHref;
  }

  const startBlinkTitle = () => {
    if (visibilityIntervalId) return;
    let toggle = false;
    visibilityIntervalId = setInterval(() => {
      toggle = !toggle;
      document.title = toggle
        ? 'Volte para continuar — Fernanda Coelho'
        : originalTitle;
      setFavicon(toggle ? attentionFaviconHref : originalFaviconHref);
    }, 1200);
  };

  const stopBlinkTitle = () => {
    if (visibilityIntervalId) {
      clearInterval(visibilityIntervalId);
      visibilityIntervalId = null;
    }
    document.title = originalTitle;
    setFavicon(originalFaviconHref);
  };

  const onVisibilityChange = () => {
    if (document.hidden) {
      startBlinkTitle();
    } else {
      stopBlinkTitle();
    }
  };

  document.addEventListener('visibilitychange', onVisibilityChange);
});

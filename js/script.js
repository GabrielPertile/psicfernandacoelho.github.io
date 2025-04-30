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
});

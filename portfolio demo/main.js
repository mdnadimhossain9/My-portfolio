const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbysNJzGhrdhHtK-1BF-9LG2YqA4M-2M2sISRQPbyR_LKwTiceI6vTBKaUwiHak4bwd7LA/exec'
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const btnText = document.querySelector('.btn__text');
const btnLoading = document.querySelector('.btn__loading');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };
  
  // Show loading state
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline';
  contactForm.querySelector('.btn__form').disabled = true;
  formMessage.style.display = 'none';
  
  try {
    // Send data to Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    // Show success message
    formMessage.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
    formMessage.className = 'form__message success';
    formMessage.style.display = 'block';
    
    // Reset form
    contactForm.reset();
    
  } catch (error) {
    // Show error message
    formMessage.textContent = '✗ Oops! Something went wrong. Please try again.';
    formMessage.className = 'form__message error';
    formMessage.style.display = 'block';
  } finally {
    // Reset button state
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
    contactForm.querySelector('.btn__form').disabled = false;
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 5000);
  }
});function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

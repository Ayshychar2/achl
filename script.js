/* ===================================================================
   ACHL Learning - Interactive Behaviors v2
   Hero Slider, Testimonial Marquee, FAQ, Scroll Reveal
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // =====================
  // MOBILE MENU
  // =====================
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = menuToggle?.querySelector('.material-symbols-outlined');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('active');
      if (menuIcon) menuIcon.textContent = isOpen ? 'close' : 'menu';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        if (menuIcon) menuIcon.textContent = 'menu';
        document.body.style.overflow = '';
      });
    });
  }

  // =====================
  // HERO SLIDER
  // =====================
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  let currentSlide = 0;
  let slideInterval;
  const SLIDE_DURATION = 5000; // 5 seconds per slide

  function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  function startSlider() {
    slideInterval = setInterval(nextSlide, SLIDE_DURATION);
  }

  function resetSlider() {
    clearInterval(slideInterval);
    startSlider();
  }

  if (slides.length > 1) {
    startSlider();

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.dataset.slide, 10);
        goToSlide(slideIndex);
        resetSlider();
      });
    });
  }

  // =====================
  // TESTIMONIAL MARQUEE - Clone cards for seamless loop
  // =====================
  const marquee = document.getElementById('testimonial-marquee');

  if (marquee) {
    const cards = marquee.querySelectorAll('.testimonial-card');

    // Clone all cards and append for seamless infinite loop
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      marquee.appendChild(clone);
    });

    // Dynamically set animation duration based on content width
    // More cards = longer duration for consistent speed
    const totalCards = marquee.querySelectorAll('.testimonial-card').length;
    const cardWidth = 380 + 24; // width + gap
    const totalWidth = (totalCards / 2) * cardWidth;
    const speed = 40; // pixels per second
    const duration = totalWidth / speed;

    marquee.style.animationDuration = duration + 's';
  }

  // =====================
  // FAQ ACCORDION
  // =====================
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const icon = button.querySelector('.icon');
      const isActive = answer.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-answer.active').forEach(a => {
        a.classList.remove('active');
        const ic = a.previousElementSibling.querySelector('.icon');
        if (ic) ic.textContent = 'add';
      });

      // Toggle current
      if (!isActive) {
        answer.classList.add('active');
        if (icon) icon.textContent = 'remove';
      }
    });
  });

  // =====================
  // SCROLL REVEAL (IntersectionObserver)
  // =====================
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // =====================
  // STICKY HEADER SHADOW
  // =====================
  const header = document.getElementById('main-header');

  if (header) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // =====================
  // FORM SUBMIT (Demo)
  // =====================
  const demoForm = document.getElementById('cta-form');
  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = demoForm.querySelector('.btn-submit');
      const originalHTML = btn.innerHTML;
      btn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> Demo Requested!';
      btn.style.backgroundColor = '#2e7d32';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.backgroundColor = '';
        btn.disabled = false;
        demoForm.reset();
      }, 3000);
    });
  }

});

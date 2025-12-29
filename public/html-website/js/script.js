/* ============================================
   Friends Car Accessories - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initHeader();
  initMobileMenu();
  initTestimonialSlider();
  initGalleryFilter();
  initContactForm();
  initScrollAnimations();
});

/* ============================================
   Header Scroll Effect
   ============================================ */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on load
}

/* ============================================
   Mobile Menu Toggle
   ============================================ */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.toggle('open');
    
    if (menuIcon && closeIcon) {
      menuIcon.style.display = isOpen ? 'none' : 'block';
      closeIcon.style.display = isOpen ? 'block' : 'none';
    }
  });

  // Close menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
      if (menuIcon && closeIcon) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });
  });
}

/* ============================================
   Testimonial Slider
   ============================================ */
function initTestimonialSlider() {
  const testimonials = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  const desktopCards = document.querySelectorAll('.testimonial-desktop-card');

  if (testimonials.length === 0) return;

  let currentIndex = 0;
  const totalSlides = testimonials.length;

  function showSlide(index) {
    // Update mobile slider
    testimonials.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    // Update desktop cards (show 3 at a time, cycling)
    if (desktopCards.length > 0) {
      desktopCards.forEach((card, i) => {
        const slideIndex = (index + i) % totalSlides;
        const testimonialData = getTestimonialData(slideIndex);
        updateCard(card, testimonialData);
      });
    }
  }

  function getTestimonialData(index) {
    const testimonialDataList = [
      { name: 'Rajesh Kumar', role: 'BMW Owner', initials: 'RK', rating: 5, review: 'Excellent ceramic coating work! My car looks brand new even after 6 months. The team was professional and delivered exactly what they promised.' },
      { name: 'Priya Shankar', role: 'Honda City Owner', initials: 'PS', rating: 5, review: 'Got seat covers and audio system installed. Amazing quality and the price was very reasonable. Highly recommend Friends Car Accessories!' },
      { name: 'Mohammed Arif', role: 'Hyundai Creta Owner', initials: 'MA', rating: 5, review: 'The interior care service was outstanding. They cleaned every corner of my car. It feels like driving a new car now!' },
      { name: 'Sunita Devi', role: 'Maruti Swift Owner', initials: 'SD', rating: 4, review: 'Great experience with the LED lighting installation. The ambient lights look premium and the team was very helpful throughout.' },
      { name: 'Karthik Rajan', role: 'Toyota Fortuner Owner', initials: 'KR', rating: 5, review: 'Best place in Chennai for car accessories. They have genuine products and the installation quality is top-notch. 10/10 recommend!' }
    ];
    return testimonialDataList[index];
  }

  function updateCard(card, data) {
    const avatar = card.querySelector('.testimonial-avatar');
    const name = card.querySelector('.testimonial-name');
    const role = card.querySelector('.testimonial-role');
    const stars = card.querySelector('.testimonial-stars');
    const text = card.querySelector('.testimonial-text');

    if (avatar) avatar.textContent = data.initials;
    if (name) name.textContent = data.name;
    if (role) role.textContent = data.role;
    if (text) text.textContent = data.review;
    
    if (stars) {
      stars.innerHTML = '';
      for (let i = 0; i < 5; i++) {
        const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        star.setAttribute('viewBox', '0 0 24 24');
        star.setAttribute('fill', i < data.rating ? 'currentColor' : 'none');
        star.setAttribute('stroke', 'currentColor');
        star.setAttribute('stroke-width', '2');
        star.classList.add(i < data.rating ? 'star-filled' : 'star-empty');
        star.innerHTML = '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>';
        stars.appendChild(star);
      }
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  // Event listeners
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  // Initialize
  showSlide(0);

  // Auto-advance every 5 seconds
  setInterval(nextSlide, 5000);
}

/* ============================================
   Gallery Filter
   ============================================ */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length === 0 || galleryItems.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filter items
      galleryItems.forEach(item => {
        const category = item.dataset.category;
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ============================================
   Contact Form
   ============================================ */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameInput = form.querySelector('#name');
    const phoneInput = form.querySelector('#phone');
    const serviceSelect = form.querySelector('#service');
    const submitBtn = form.querySelector('.form-submit-btn');

    // Simple validation
    if (!nameInput.value.trim() || !phoneInput.value.trim() || !serviceSelect.value) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    // Disable button
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    // Simulate form submission
    setTimeout(() => {
      showToast('Enquiry submitted successfully! We will contact you soon.', 'success');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }, 1500);
  });
}

/* ============================================
   Toast Notifications
   ============================================ */
function showToast(message, type = 'success') {
  // Remove existing toasts
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="toast-close">&times;</button>
  `;

  document.body.appendChild(toast);

  // Show toast
  setTimeout(() => toast.classList.add('show'), 100);

  // Auto hide
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);

  // Close button
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  });
}

// Add toast styles dynamically
const toastStyles = document.createElement('style');
toastStyles.textContent = `
  .toast {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    padding: 1rem 1.5rem;
    background: hsl(0, 0%, 12%);
    border: 1px solid hsl(0, 0%, 20%);
    border-radius: 0.75rem;
    color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 1000;
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  }
  .toast.show {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  .toast-success {
    border-color: hsl(142, 70%, 45%);
  }
  .toast-error {
    border-color: hsl(0, 84%, 60%);
  }
  .toast-close {
    background: none;
    border: none;
    color: inherit;
    font-size: 1.25rem;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
  }
  .toast-close:hover {
    opacity: 1;
  }
`;
document.head.appendChild(toastStyles);

/* ============================================
   Scroll Animations
   ============================================ */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with animate class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

/* ============================================
   WhatsApp Link Generator
   ============================================ */
function getWhatsAppLink(message) {
  const phoneNumber = '919876543210'; // Replace with actual phone number
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/* ============================================
   Smooth Scroll for Anchor Links
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* ============================================
   Active Navigation Highlighting
   ============================================ */
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath === href || (currentPath === '/' && href === 'index.html') || currentPath.endsWith(href)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

setActiveNavLink();

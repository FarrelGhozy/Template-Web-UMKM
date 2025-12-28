/**
 * KREASI NUSANTARA - CUSTOM JAVASCRIPT
 * HCI-Enhanced Interactivity & User Experience
 * Vanilla JavaScript - No Dependencies
 */

// ========================================
// 1. DOM CONTENT LOADED - Initialize
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Kreasi Nusantara Website Loaded');
    
    // Initialize all features
    initNavbar();
    initForms();
    initProductFilters();
    initScrollAnimations();
    initLazyLoading();
    
    console.log('✅ All features initialized');
});

// ========================================
// 2. NAVBAR INTERACTIONS
// HCI: Feedback & Visibility
// ========================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (!navbar) return;
    
    // Sticky navbar with shadow on scroll (Visual feedback)
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
        
        lastScroll = currentScroll;
    });
    
    // Close mobile menu when clicking nav link (UX improvement)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });
    
    console.log('✓ Navbar initialized');
}

// ========================================
// 3. FORM VALIDATION & SUBMISSION
// HCI: Error Prevention, Immediate Feedback
// ========================================
function initForms() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    // Bootstrap form validation
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        // Check validity
        if (contactForm.checkValidity()) {
            handleFormSubmission(contactForm);
        } else {
            // Show validation errors
            contactForm.classList.add('was-validated');
            
            // Focus on first invalid field (Error recovery)
            const firstInvalid = contactForm.querySelector(':invalid');
            if (firstInvalid) {
                firstInvalid.focus();
                
                // Scroll to invalid field
                firstInvalid.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        }
    });
    
    // Real-time validation feedback on input
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                if (this.checkValidity()) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            }
        });
        
        // Remove validation on focus (fresh start)
        input.addEventListener('focus', function() {
            this.classList.remove('is-valid', 'is-invalid');
        });
    });
    
    console.log('✓ Form validation initialized');
}

/**
 * Handle form submission
 * HCI: Clear feedback, Success confirmation
 */
function handleFormSubmission(form) {
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Disable submit button (Prevent double submission)
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Mengirim...';
    
    // Simulate API call (Replace with actual backend integration)
    setTimeout(function() {
        // Success feedback
        showSuccessMessage();
        
        // Reset form
        form.reset();
        form.classList.remove('was-validated');
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Log data (for demonstration)
        console.log('Form submitted:', data);
        
        // Optional: Send to WhatsApp or Email
        // sendToWhatsApp(data);
        
    }, 1500);
}

/**
 * Show success message
 * HCI: Positive feedback
 */
function showSuccessMessage() {
    const successAlert = document.getElementById('successAlert');
    
    if (successAlert) {
        successAlert.classList.remove('d-none');
        successAlert.classList.add('fade-in');
        
        // Scroll to success message
        successAlert.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
        
        // Auto-hide after 5 seconds
        setTimeout(function() {
            successAlert.classList.add('d-none');
        }, 5000);
    }
}

// ========================================
// 4. PRODUCT FILTERING
// HCI: Reduce cognitive load, Instant feedback
// ========================================
function initProductFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const productsGrid = document.getElementById('productsGrid');
    const productCount = document.getElementById('productCount');
    
    if (!categoryFilter || !productsGrid) return;
    
    // Get all product cards
    let products = Array.from(productsGrid.querySelectorAll('[data-category]'));
    
    // Category filter
    categoryFilter.addEventListener('change', function() {
        const selectedCategory = this.value;
        let visibleCount = 0;
        
        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            
            if (selectedCategory === 'all' || productCategory === selectedCategory) {
                product.style.display = 'block';
                product.classList.add('fade-in');
                visibleCount++;
            } else {
                product.style.display = 'none';
            }
        });
        
        // Update count
        if (productCount) {
            productCount.textContent = `${visibleCount} Produk`;
        }
        
        // Smooth scroll to products
        productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    
    // Sort filter
    if (sortFilter) {
        sortFilter.addEventListener('change', function() {
            const sortBy = this.value;
            sortProducts(sortBy);
        });
    }
    
    console.log('✓ Product filters initialized');
}

/**
 * Sort products based on criteria
 * HCI: User control, Predictable results
 */
function sortProducts(criteria) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const products = Array.from(productsGrid.children);
    
    products.sort((a, b) => {
        // Extract price from product card
        const priceA = extractPrice(a);
        const priceB = extractPrice(b);
        
        switch(criteria) {
            case 'price-low':
                return priceA - priceB;
            case 'price-high':
                return priceB - priceA;
            case 'popular':
                // Check for "Best Seller" badge
                const isPopularA = a.querySelector('.badge.bg-success') ? 1 : 0;
                const isPopularB = b.querySelector('.badge.bg-success') ? 1 : 0;
                return isPopularB - isPopularA;
            default:
                return 0; // newest (original order)
        }
    });
    
    // Re-append sorted products
    products.forEach(product => productsGrid.appendChild(product));
    
    // Add animation
    products.forEach((product, index) => {
        setTimeout(() => {
            product.classList.add('fade-in');
        }, index * 50);
    });
}

/**
 * Extract price from product card
 */
function extractPrice(productCard) {
    const priceElement = productCard.querySelector('.text-primary');
    if (!priceElement) return 0;
    
    const priceText = priceElement.textContent;
    const priceNumber = priceText.replace(/[^0-9]/g, '');
    return parseInt(priceNumber) || 0;
}

// ========================================
// 5. SCROLL ANIMATIONS
// HCI: Visual feedback, Engagement
// ========================================
function initScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe cards and sections
    const animateElements = document.querySelectorAll('.card, .section-title');
    animateElements.forEach(el => observer.observe(el));
    
    console.log('✓ Scroll animations initialized');
}

// ========================================
// 6. LAZY LOADING IMAGES
// HCI: Performance, Faster perceived load time
// ========================================
function initLazyLoading() {
    // Modern browsers support native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    // Fallback for older browsers
    if ('loading' in HTMLImageElement.prototype) {
        console.log('✓ Native lazy loading supported');
    } else {
        console.log('⚠ Using IntersectionObserver for lazy loading');
        
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ========================================
// 7. SMOOTH SCROLL TO TOP BUTTON
// HCI: Navigation aid, User control
// ========================================
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    scrollBtn.className = 'btn btn-primary position-fixed bottom-0 end-0 m-4 rounded-circle d-none';
    scrollBtn.style.width = '56px';
    scrollBtn.style.height = '56px';
    scrollBtn.style.zIndex = '1000';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.remove('d-none');
        } else {
            scrollBtn.classList.add('d-none');
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top (optional)
// Uncomment if you want this feature
// initScrollToTop();

// ========================================
// 8. WHATSAPP INTEGRATION
// HCI: Familiar mental model, Easy communication
// ========================================

/**
 * Send form data to WhatsApp
 * @param {Object} data - Form data
 */
function sendToWhatsApp(data) {
    const phone = '6281234567890';
    const message = `
*Pesan Baru dari Website Kreasi Nusantara*

*Nama:* ${data.name}
*Email:* ${data.email}
*Telepon:* ${data.phone}
*Topik:* ${data.subject}

*Pesan:*
${data.message}
    `.trim();
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

// ========================================
// 9. UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function for performance
 * @param {Function} func - Function to debounce
 * @param {Number} wait - Wait time in ms
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Format currency to Indonesian Rupiah
 * @param {Number} amount - Amount to format
 */
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

/**
 * Get query parameter from URL
 * @param {String} param - Parameter name
 */
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// ========================================
// 10. ACCESSIBILITY HELPERS
// HCI: WCAG Compliance
// ========================================

/**
 * Add skip to content link
 */
function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Uncomment to add skip link
// addSkipLink();

/**
 * Keyboard navigation enhancement
 */
document.addEventListener('keydown', function(e) {
    // ESC key closes modals
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal.show');
        if (openModal) {
            const modal = bootstrap.Modal.getInstance(openModal);
            modal.hide();
        }
    }
});

// ========================================
// 11. PERFORMANCE MONITORING (Optional)
// ========================================

/**
 * Log page load performance
 */
window.addEventListener('load', function() {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⏱ Page load time: ${pageLoadTime}ms`);
        
        // Log to analytics (if integrated)
        // analytics.track('page_load', { time: pageLoadTime });
    }
});

// ========================================
// 12. ERROR HANDLING
// ========================================

/**
 * Global error handler
 */
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.message);
    // Log to error tracking service (e.g., Sentry)
    // Sentry.captureException(e.error);
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
    // Log to error tracking service
});

// ========================================
// 13. ANALYTICS INTEGRATION (Template)
// ========================================

/**
 * Track button clicks
 */
function trackButtonClick(buttonName) {
    console.log(`📊 Button clicked: ${buttonName}`);
    // Send to analytics
    // gtag('event', 'button_click', { button_name: buttonName });
}

// Add click tracking to CTA buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        trackButtonClick(buttonText);
    });
});

// ========================================
// END OF SCRIPT
// ========================================

console.log('🚀 Kreasi Nusantara - Ready!');

/**
 * Export functions for testing (if needed)
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        formatRupiah,
        getQueryParam
    };
}g
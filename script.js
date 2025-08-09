// ============================================
// Portfolio Website - Complete JavaScript
// Version: 2.0 with Static Profile Photo
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // ============================================
    // Global Variables and Elements
    // ============================================

    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const backToTopBtn = document.getElementById('back-to-top');
    const themeToggle = document.getElementById('theme-checkbox');
    const contactForm = document.getElementById('contact-form');
    const profileImg = document.getElementById('profile-img');
    const photoPlaceholder = document.getElementById('photo-placeholder');
    const profilePhoto = document.getElementById('profile-photo');

    // ============================================
    // Navbar Scroll Effect and Mobile Menu
    // ============================================

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Show/hide back to top button
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }

        // Update active navigation link
        updateActiveNavLink();
    }

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateActiveNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // ============================================
    // Theme Toggle Functionality
    // ============================================

    const body = document.body;
    const html = document.documentElement;

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the saved theme
    html.setAttribute('data-theme', currentTheme);

    // Update toggle state based on current theme
    if (currentTheme === 'dark' && themeToggle) {
        themeToggle.checked = true;
    }

    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('change', function () {
            if (this.checked) {
                // Switch to dark theme
                html.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                showNotification('Dark theme activated! 🌙', 'success');
            } else {
                // Switch to light theme
                html.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                showNotification('Light theme activated! ☀️', 'success');
            }
            updateScrollEffects();
        });

        // Add keyboard support for theme toggle
        themeToggle.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.checked = !this.checked;
                this.dispatchEvent(new Event('change'));
            }
        });
    }

    // Auto theme detection based on system preference
    function detectSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    // Listen for system theme changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', function (e) {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                html.setAttribute('data-theme', newTheme);
                if (themeToggle) {
                    themeToggle.checked = newTheme === 'dark';
                }
            }
        });
    }

    // Initialize theme on first visit based on system preference
    if (!localStorage.getItem('theme')) {
        const systemTheme = detectSystemTheme();
        html.setAttribute('data-theme', systemTheme);
        if (themeToggle) {
            themeToggle.checked = systemTheme === 'dark';
        }
        localStorage.setItem('theme', systemTheme);
    }

    // Theme-aware scroll effects
    function updateScrollEffects() {
        const isDark = html.getAttribute('data-theme') === 'dark';

        if (navbar) {
            if (isDark) {
                navbar.style.backdropFilter = 'blur(15px)';
            } else {
                navbar.style.backdropFilter = 'blur(10px)';
            }
        }
    }

    // ============================================
    // Static Profile Photo Management
    // ============================================

    // Handle image loading and error states
    if (profileImg) {
        // Add loading effect
        profileImg.addEventListener('load', function () {
            this.style.display = 'block';
            if (photoPlaceholder) {
                photoPlaceholder.style.display = 'none';
            }
            console.log('Profile photo loaded successfully');
        });

        // Handle image load error
        profileImg.addEventListener('error', function () {
            this.style.display = 'none';
            if (photoPlaceholder) {
                photoPlaceholder.style.display = 'flex';
            }
            console.log('Profile photo not found, showing placeholder');
        });

        // Check if image exists and is loaded
        if (profileImg.complete) {
            if (profileImg.naturalWidth > 0) {
                profileImg.style.display = 'block';
                if (photoPlaceholder) {
                    photoPlaceholder.style.display = 'none';
                }
            } else {
                profileImg.style.display = 'none';
                if (photoPlaceholder) {
                    photoPlaceholder.style.display = 'flex';
                }
            }
        }

        // Add accessibility features
        profileImg.setAttribute('tabindex', '0');
        profileImg.addEventListener('focus', function () {
            this.parentElement.style.outline = '2px solid var(--primary-color)';
            this.parentElement.style.outlineOffset = '4px';
        });

        profileImg.addEventListener('blur', function () {
            this.parentElement.style.outline = 'none';
        });
    }

    // Add professional hover effects
    if (profilePhoto) {
        profilePhoto.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });

        profilePhoto.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // ============================================
    // Resume Download Functionality - PDF Only
    // ============================================

    const resumeDownloadBtns = document.querySelectorAll('a[href*="Resume_Murali_Munireddy.pdf"]');

    // Add download tracking and notification
    resumeDownloadBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            // Show download notification
            showNotification('Resume download started! Check your downloads folder.', 'success');

            // Optional: Add download analytics
            console.log('Resume downloaded:', new Date().toISOString());

            // Track downloads for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'download', { 'file_name': 'Murali_Munireddy_Resume.pdf' });
            }
        });

        // Add hover effects
        btn.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
        });

        btn.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });

        // Handle file not found error
        btn.addEventListener('error', function () {
            showNotification('Resume file not found. Please contact the site owner.', 'error');
        });
    });

    // ============================================
    // Contact Form Handling
    // ============================================

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Basic form validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Create mailto link (since we can't use a backend on GitHub Pages)
            const mailtoLink = `mailto:muralee.m13@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            showNotification('Email client opened! Please send the email to complete your message.', 'success');

            // Reset form
            contactForm.reset();
        });
    }

    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ============================================
    // Intersection Observer for Animations
    // ============================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .cert-item, .highlight-item');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Photo visibility observer
    if (profilePhoto) {
        observer.observe(profilePhoto);
    }

    // ============================================
    // Smooth Scrolling for Internal Links
    // ============================================

    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Event Listeners Setup
    // ============================================

    // Mobile menu toggle
    if (mobileMenu) {
        mobileMenu.addEventListener('click', toggleMobileMenu);
    }

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            closeMobileMenu();

            // Smooth scroll to target section
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Back to top button functionality
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Add keyboard support
        backToTopBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Prevent menu close when clicking inside the menu
    if (navMenu) {
        navMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // ============================================
    // Performance Optimizations
    // ============================================

    // Throttle scroll events for better performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }

    // Throttled scroll event listener
    window.addEventListener('scroll', requestTick);

    // ============================================
    // Notification System
    // ============================================

    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Add notification styles if not already added
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 90px;
                    right: 20px;
                    max-width: 400px;
                    padding: 1rem 1.5rem;
                    background: var(--card-bg);
                    border-radius: 8px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border-left: 4px solid var(--primary-color);
                    z-index: 10000;
                    transform: translateX(100%);
                    animation: slideInRight 0.3s ease-out forwards;
                    border: 1px solid var(--border-light);
                }
                
                .notification-error {
                    border-left-color: #ef4444;
                }
                
                .notification-success {
                    border-left-color: #10b981;
                }
                
                .notification-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }
                
                .notification-message {
                    flex: 1;
                    color: var(--text-dark);
                    font-weight: 500;
                }
                
                .notification-close {
                    background: none;
                    border: none;
                    color: var(--text-muted);
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 4px;
                    transition: all 0.2s ease;
                }
                
                .notification-close:hover {
                    background: var(--surface-bg);
                    color: var(--text-dark);
                }
                
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @media (max-width: 480px) {
                    .notification {
                        right: 10px;
                        left: 10px;
                        max-width: none;
                    }
                }
            `;
            document.head.appendChild(styles);
        }

        // Add notification to DOM
        document.body.appendChild(notification);

        // Auto remove notification after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideInRight 0.3s ease-out reverse';
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    }

    // ============================================
    // Keyboard Navigation Support
    // ============================================

    // Add keyboard support for mobile menu
    if (mobileMenu) {
        mobileMenu.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMobileMenu();
            }
        });
    }

    // Trap focus in mobile menu when open
    const focusableElements = navMenu ? navMenu.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])') : [];
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if (navMenu) {
        navMenu.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && navMenu.classList.contains('active')) {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }

            // Close menu with Escape key
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMobileMenu();
                if (mobileMenu) {
                    mobileMenu.focus();
                }
            }
        });
    }

    // ============================================
    // Enhanced Theme Features
    // ============================================

    // Add visual feedback for theme toggle
    const themeLabel = document.querySelector('.theme-label');
    if (themeLabel) {
        themeLabel.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // ============================================
    // Preload Critical Resources
    // ============================================

    // Preload fonts to prevent FOUT (Flash of Unstyled Text)
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontPreload.as = 'style';
    fontPreload.onload = function () {
        this.onload = null;
        this.rel = 'stylesheet';
    };
    document.head.appendChild(fontPreload);

    // ============================================
    // Initialize Everything
    // ============================================

    // Initial function calls
    handleScroll(); // Set initial navbar state
    updateActiveNavLink(); // Set initial active nav link
    updateScrollEffects(); // Set initial scroll effects

    // Log successful initialization
    const currentThemeLog = localStorage.getItem('theme') || 'light';
    console.log(`Portfolio website loaded successfully with ${currentThemeLog} theme! 🚀`);
});

// ============================================
// Service Worker Registration (Optional)
// ============================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ============================================
// Global Utility Functions
// ============================================

// Function to get current theme
function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
}

// Function to toggle theme programmatically
function toggleTheme() {
    const themeCheckbox = document.getElementById('theme-checkbox');
    if (themeCheckbox) {
        themeCheckbox.checked = !themeCheckbox.checked;
        themeCheckbox.dispatchEvent(new Event('change'));
    }
}

// Function to set specific theme
function setTheme(theme) {
    const themeCheckbox = document.getElementById('theme-checkbox');
    const html = document.documentElement;

    if (themeCheckbox && (theme === 'light' || theme === 'dark')) {
        html.setAttribute('data-theme', theme);
        themeCheckbox.checked = theme === 'dark';
        localStorage.setItem('theme', theme);
    }
}

// Function to check different image formats (for development)
function checkProfilePhoto() {
    const imageFormats = [
        './assets/profile-photo.jpg',
        './assets/profile-photo.jpeg',
        './assets/profile-photo.png',
        './assets/profile-photo.webp',
        './assets/profile.jpg',
        './assets/murali-photo.jpg'
    ];

    const profileImg = document.getElementById('profile-img');
    const photoPlaceholder = document.getElementById('photo-placeholder');

    if (!profileImg || !photoPlaceholder) return;

    let currentIndex = 0;

    function tryNextFormat() {
        if (currentIndex >= imageFormats.length) {
            // No image found, show placeholder
            profileImg.style.display = 'none';
            photoPlaceholder.style.display = 'flex';
            console.log('No profile photo found in any format');
            return;
        }

        const testImg = new Image();
        testImg.onload = function () {
            // Image found and loaded
            profileImg.src = imageFormats[currentIndex];
            profileImg.style.display = 'block';
            photoPlaceholder.style.display = 'none';
            console.log(`Profile photo found: ${imageFormats[currentIndex]}`);
        };
        testImg.onerror = function () {
            // Try next format
            currentIndex++;
            tryNextFormat();
        };
        testImg.src = imageFormats[currentIndex];
    }

    // Uncomment the line below to enable auto-detection
    // tryNextFormat();
}

// Export functions for global use
window.getCurrentTheme = getCurrentTheme;
window.toggleTheme = toggleTheme;
window.setTheme = setTheme;
window.checkProfilePhoto = checkProfilePhoto;

// ============================================
// Debug Helper Functions (Development Only)
// ============================================

// Function to test all features (for development)
function debugPortfolio() {
    console.log('=== Portfolio Debug Info ===');
    console.log('Current theme:', getCurrentTheme());
    console.log('Profile image loaded:', document.getElementById('profile-img').style.display === 'block');
    console.log('Mobile menu state:', document.getElementById('nav-menu').classList.contains('active'));
    console.log('Back to top visible:', document.getElementById('back-to-top').classList.contains('visible'));
    console.log('Scroll position:', window.scrollY);
    console.log('Active section:', document.querySelector('.nav-link.active')?.textContent);
}

// Expose debug function globally (remove in production)
window.debugPortfolio = debugPortfolio;

// ============================================
// Navbar Scroll Effect and Mobile Menu
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const backToTopBtn = document.getElementById('back-to-top');

    // Navbar scroll effect
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

    // Mobile menu toggle
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

    // Close mobile menu when clicking on a link
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Update active navigation link based on scroll position
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

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    mobileMenu.addEventListener('click', toggleMobileMenu);

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
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Prevent menu close when clicking inside the menu
    navMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

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

    // ============================================
    // Contact Form Handling
    // ============================================

    const contactForm = document.getElementById('contact-form');

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

    // Notification system
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
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border-left: 4px solid var(--primary-color);
                    z-index: 10000;
                    transform: translateX(100%);
                    animation: slideInRight 0.3s ease-out forwards;
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
                    background: var(--bg-gray);
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
    // Smooth Scrolling for all internal links
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

    // Replace scroll event listener with throttled version
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', requestTick);

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

    // Initialize everything
    handleScroll(); // Initial call to set navbar state
    updateActiveNavLink(); // Initial call to set active nav link

    // ============================================
    // Keyboard Navigation Support
    // ============================================

    // Add keyboard support for mobile menu
    mobileMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMobileMenu();
        }
    });

    // Add keyboard support for back to top button
    backToTopBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    // Trap focus in mobile menu when open
    const focusableElements = navMenu.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

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
            mobileMenu.focus();
        }
    });

    console.log('Portfolio website loaded successfully! 🚀');
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
// Profile Photo Upload Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const photoInput = document.getElementById('photo-input');
    const profileImg = document.getElementById('profile-img');
    const photoPlaceholder = document.getElementById('photo-placeholder');
    const photoUpload = document.getElementById('photo-upload');

    // Handle photo upload
    if (photoInput) {
        photoInput.addEventListener('change', function (e) {
            const file = e.target.files[0];

            if (file) {
                // Validate file type
                const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
                if (!validTypes.includes(file.type)) {
                    showNotification('Please select a valid image file (JPEG, PNG, GIF, or WebP).', 'error');
                    return;
                }

                // Validate file size (max 5MB)
                const maxSize = 5 * 1024 * 1024; // 5MB in bytes
                if (file.size > maxSize) {
                    showNotification('Image size should be less than 5MB.', 'error');
                    return;
                }

                // Create FileReader to display image
                const reader = new FileReader();
                reader.onload = function (e) {
                    profileImg.src = e.target.result;
                    profileImg.style.display = 'block';
                    photoPlaceholder.style.display = 'none';

                    // Store image in localStorage for persistence
                    localStorage.setItem('profilePhoto', e.target.result);

                    showNotification('Profile photo updated successfully!', 'success');
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Load saved profile photo on page load
    const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto && profileImg) {
        profileImg.src = savedPhoto;
        profileImg.style.display = 'block';
        photoPlaceholder.style.display = 'none';
    }

    // Make placeholder clickable
    if (photoPlaceholder) {
        photoPlaceholder.addEventListener('click', function () {
            photoInput.click();
        });
    }

    // ============================================
    // Resume Download Functionality - PDF Only
    // ============================================

    document.addEventListener('DOMContentLoaded', function () {
        const downloadResumeBtn = document.getElementById('download-resume');
        const resumeDownloadBtns = document.querySelectorAll('a[href*="Resume_Murali_Munireddy.pdf"]');

        // Add download tracking and notification
        resumeDownloadBtns.forEach(btn => {
            btn.addEventListener('click', function (e) {
                // Check if file exists (basic check)
                const link = this.getAttribute('href');

                // Show download notification
                showNotification('Resume download started! Check your downloads folder.', 'success');

                // Optional: Add download analytics
                console.log('Resume downloaded:', new Date().toISOString());

                // If you want to track downloads, you can add analytics here
                // Example: gtag('event', 'download', { 'file_name': 'Murali_Munireddy_Resume.pdf' });
            });
        });

        // Add hover effect for resume buttons
        resumeDownloadBtns.forEach(btn => {
            btn.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-3px)';
            });

            btn.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0)';
            });
        });

        // Handle file not found error (optional)
        resumeDownloadBtns.forEach(btn => {
            btn.addEventListener('error', function () {
                showNotification('Resume file not found. Please contact the site owner.', 'error');
            });
        });
    });


    // ============================================
    // Enhanced Photo Management
    // ============================================

    // Add right-click context menu for photo management
    if (profileImg) {
        profileImg.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            showPhotoContextMenu(e.clientX, e.clientY);
        });
    }

    function showPhotoContextMenu(x, y) {
        // Remove existing context menu
        const existingMenu = document.querySelector('.photo-context-menu');
        if (existingMenu) {
            existingMenu.remove();
        }

        // Create context menu
        const contextMenu = document.createElement('div');
        contextMenu.className = 'photo-context-menu';
        contextMenu.innerHTML = `
            <div class="context-menu-item" onclick="changePhoto()">
                <i class="fas fa-edit"></i> Change Photo
            </div>
            <div class="context-menu-item" onclick="removePhoto()">
                <i class="fas fa-trash"></i> Remove Photo
            </div>
        `;

        contextMenu.style.cssText = `
            position: fixed;
            top: ${y}px;
            left: ${x}px;
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            padding: 8px 0;
            min-width: 150px;
        `;

        document.body.appendChild(contextMenu);

        // Add styles for context menu items
        const style = document.createElement('style');
        style.textContent = `
            .photo-context-menu .context-menu-item {
                padding: 10px 15px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 10px;
                color: #333;
                font-size: 14px;
                transition: background-color 0.2s;
            }
            .photo-context-menu .context-menu-item:hover {
                background-color: #f5f5f5;
            }
            .photo-context-menu .context-menu-item i {
                width: 16px;
            }
        `;
        document.head.appendChild(style);

        // Remove context menu when clicking elsewhere
        document.addEventListener('click', function removeContextMenu() {
            contextMenu.remove();
            document.removeEventListener('click', removeContextMenu);
        });
    }

    // Global functions for context menu
    window.changePhoto = function () {
        photoInput.click();
    };

    window.removePhoto = function () {
        profileImg.style.display = 'none';
        photoPlaceholder.style.display = 'flex';
        profileImg.src = '';
        localStorage.removeItem('profilePhoto');
        showNotification('Profile photo removed successfully!', 'success');
    };
});


// ============================================
// Theme Toggle Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-checkbox');
    const body = document.body;
    const html = document.documentElement;

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the saved theme
    html.setAttribute('data-theme', currentTheme);

    // Update toggle state based on current theme
    if (currentTheme === 'dark') {
        themeToggle.checked = true;
    }

    // Theme toggle event listener
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
    });

    // Add keyboard support for theme toggle
    themeToggle.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.checked = !this.checked;
            this.dispatchEvent(new Event('change'));
        }
    });

    // Auto theme detection based on system preference (optional)
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
                themeToggle.checked = newTheme === 'dark';
            }
        });
    }

    // Initialize theme on first visit based on system preference
    if (!localStorage.getItem('theme')) {
        const systemTheme = detectSystemTheme();
        html.setAttribute('data-theme', systemTheme);
        themeToggle.checked = systemTheme === 'dark';
        localStorage.setItem('theme', systemTheme);
    }

    // Add smooth transition to theme changes
    function enableTransitions() {
        const css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = `
            * {
                transition: background-color 0.3s ease, 
                           color 0.3s ease, 
                           border-color 0.3s ease,
                           box-shadow 0.3s ease !important;
            }
        `;
        document.head.appendChild(css);

        // Remove after transitions complete
        setTimeout(() => {
            document.head.removeChild(css);
        }, 300);
    }

    // Apply transitions when theme changes
    themeToggle.addEventListener('change', enableTransitions);

    // ============================================
    // Enhanced Theme Features
    // ============================================

    // Add theme-aware animations
    function updateAnimations() {
        const isDark = html.getAttribute('data-theme') === 'dark';
        const animatedElements = document.querySelectorAll('.fade-in');

        animatedElements.forEach(el => {
            if (isDark) {
                el.style.animationDelay = '0.1s';
            } else {
                el.style.animationDelay = '0s';
            }
        });
    }

    // Update animations when theme changes
    themeToggle.addEventListener('change', updateAnimations);

    // Theme-aware scroll effects
    function updateScrollEffects() {
        const isDark = html.getAttribute('data-theme') === 'dark';
        const navbar = document.getElementById('navbar');

        if (isDark) {
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.backdropFilter = 'blur(10px)';
        }
    }

    // Update scroll effects when theme changes
    themeToggle.addEventListener('change', updateScrollEffects);
    updateScrollEffects(); // Initial call

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

    console.log(`Portfolio loaded with ${currentTheme} theme! 🎨`);
});

// ============================================
// Theme Utility Functions
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

// Export functions for global use
window.getCurrentTheme = getCurrentTheme;
window.toggleTheme = toggleTheme;
window.setTheme = setTheme;

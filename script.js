// ========================================
// DUOTONE EDITORIAL PORTFOLIO - INTERACTIONS
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // LANGUAGE SWITCHER
    // ========================================

    const langSwitch = document.getElementById('langSwitch');
    const langOptions = document.querySelectorAll('.lang-option');
    let currentLang = 'en';

    // Load saved language preference
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    if (langSwitch) {
        langSwitch.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'zh' : 'en';
            setLanguage(currentLang);
            localStorage.setItem('language', currentLang);
        });
    }

    function setLanguage(lang) {
        currentLang = lang;

        // Update language option styling
        langOptions.forEach(option => {
            if (option.dataset.lang === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Update all elements with language attributes
        const elements = document.querySelectorAll('[data-en][data-zh]');
        elements.forEach(element => {
            const text = element.dataset[lang];
            if (text) {
                element.textContent = text;
            }
        });

        // Update document language attribute
        document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

        // Update title
        document.title = lang === 'zh' ? 'Andy Wen - 数据科学家' : 'Andy Wen - Data Scientist';
    }

    // ========================================
    // CUSTOM CURSOR
    // ========================================

    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor following animation
    function animateCursor() {
        // Smooth follow for dot (faster)
        dotX += (mouseX - dotX) * 0.25;
        dotY += (mouseY - dotY) * 0.25;

        // Smooth follow for ring (slower)
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        if (cursorDot) {
            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
        }

        if (cursorRing) {
            cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
        }

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Expand cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .skill-tag, .metric-card, .journey-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursorRing) {
                cursorRing.style.width = '60px';
                cursorRing.style.height = '60px';
            }
            if (cursorDot) {
                cursorDot.style.transform += ' scale(1.5)';
            }
        });

        el.addEventListener('mouseleave', () => {
            if (cursorRing) {
                cursorRing.style.width = '40px';
                cursorRing.style.height = '40px';
            }
            if (cursorDot) {
                cursorDot.style.transform = cursorDot.style.transform.replace(' scale(1.5)', '');
            }
        });
    });

    // ========================================
    // ANIMATED COUNTER FOR HERO METRICS
    // ========================================

    function animateCounter(element, target, duration = 2000) {
        let current = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Trigger counter animation when hero is in view
    const heroMetrics = document.querySelectorAll('.metric-number');
    let metricsAnimated = false;

    const metricsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !metricsAnimated) {
                metricsAnimated = true;
                heroMetrics.forEach(metric => {
                    const target = parseInt(metric.dataset.target);
                    animateCounter(metric, target, 2000);
                });
            }
        });
    }, { threshold: 0.5 });

    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        metricsObserver.observe(heroSection);
    }

    // ========================================
    // NAVIGATION ACTIVE LINK
    // ========================================

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // SCROLL REVEAL ANIMATIONS
    // ========================================

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll(`
        .about-content,
        .about-visual,
        .journey-card,
        .education-item,
        .exp-item,
        .skill-group,
        .contact-wrapper
    `);

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        fadeInObserver.observe(el);
    });

    // ========================================
    // PARALLAX EFFECTS
    // ========================================

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        // Hero background parallax
        const heroBg = document.querySelector('.hero-bg-image');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }

        // Journey section background parallax
        const journeyBg = document.querySelector('.journey-bg');
        if (journeyBg) {
            const journeySection = document.querySelector('.journey-section');
            if (journeySection) {
                const rect = journeySection.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const offset = (window.innerHeight - rect.top) * 0.1;
                    journeyBg.style.transform = `translateY(${offset}px)`;
                }
            }
        }
    });

    // ========================================
    // SKILL TAG INTERACTIONS
    // ========================================

    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // ========================================
    // JOURNEY CARD IMAGE EFFECTS
    // ========================================

    const journeyCards = document.querySelectorAll('.journey-card');

    journeyCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            const image = card.querySelector('.journey-image');
            if (image) {
                image.style.transform = `scale(1.08) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            const image = card.querySelector('.journey-image');
            if (image) {
                image.style.transform = '';
            }
        });
    });

    // ========================================
    // EDUCATION ITEM HOVER EFFECTS
    // ========================================

    const educationItems = document.querySelectorAll('.education-item');

    educationItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const courses = this.querySelectorAll('.edu-courses span');
            courses.forEach((course, index) => {
                setTimeout(() => {
                    course.style.transform = 'translateY(-2px)';
                }, index * 30);
            });
        });

        item.addEventListener('mouseleave', function() {
            const courses = this.querySelectorAll('.edu-courses span');
            courses.forEach(course => {
                course.style.transform = '';
            });
        });
    });

    // ========================================
    // METRIC CARD STAGGER ANIMATION
    // ========================================

    const metricCards = document.querySelectorAll('.metric-card');

    metricCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            metricCards.forEach((otherCard, otherIndex) => {
                if (otherIndex !== index) {
                    otherCard.style.opacity = '0.6';
                    otherCard.style.transform = 'scale(0.95)';
                }
            });
        });

        card.addEventListener('mouseleave', function() {
            metricCards.forEach(otherCard => {
                otherCard.style.opacity = '';
                otherCard.style.transform = '';
            });
        });
    });

    // ========================================
    // NAVBAR BACKGROUND ON SCROLL
    // ========================================

    const navbar = document.querySelector('.nav-bar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(250, 248, 243, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(10, 22, 40, 0.08)';
        } else {
            navbar.style.background = 'rgba(250, 248, 243, 0.92)';
            navbar.style.boxShadow = 'none';
        }
    });

    // ========================================
    // CTA BUTTON RIPPLE EFFECT
    // ========================================

    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.pointerEvents = 'none';

            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - 10;
            const y = e.clientY - rect.top - 10;

            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.transform = 'scale(0)';
            ripple.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
            ripple.style.opacity = '1';

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.style.transform = 'scale(20)';
                ripple.style.opacity = '0';
            }, 10);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ========================================
    // PAGE LOAD ANIMATION
    // ========================================

    document.body.style.opacity = '0';

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.8s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    // ========================================
    // SCROLL PROGRESS INDICATOR (OPTIONAL)
    // ========================================

    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.position = 'fixed';
        progressBar.style.top = '0';
        progressBar.style.left = '0';
        progressBar.style.width = '0%';
        progressBar.style.height = '3px';
        progressBar.style.background = 'linear-gradient(90deg, #00d4ff, #ff6b58)';
        progressBar.style.zIndex = '10001';
        progressBar.style.transition = 'width 0.1s ease';

        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };

    createScrollProgress();

    // ========================================
    // CONSOLE MESSAGE
    // ========================================

    console.log('%c🎨 Duotone Editorial Portfolio', 'font-size: 20px; font-weight: bold; color: #00d4ff;');
    console.log('%cDesigned with intention. Built with precision.', 'font-size: 12px; color: #ff6b58;');
    console.log('%c→ Interested in the code? Check out the repository!', 'font-size: 11px; color: #4b5563;');
});

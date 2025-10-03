document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileNavToggle.classList.toggle('active'); // For styling the 'X' icon
        });
    }

    // --- Header Scroll Effect ---
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Back to Top Button Visibility ---
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = header ? header.offsetHeight : 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open after clicking a link
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileNavToggle.classList.remove('active');
                }
            }
        });
    });

    // --- Animate on Scroll using Intersection Observer ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // --- Animated Counters ---
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const speed = 200; // The lower the number, the faster the count

        const animateCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            const updateCount = () => {
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start animation for all counters when the section is visible
                    counters.forEach(counter => animateCounter(counter));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        // Observe each counter individually
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // --- Testimonial Slider ---
    const track = document.querySelector('.testimonial-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.slider-btn.next');
        const prevButton = document.querySelector('.slider-btn.prev');
        let currentIndex = 0;
        let autoSlideInterval;

        const setSlidePosition = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        const goToSlide = (index) => {
            currentIndex = (index + slides.length) % slides.length;
            setSlidePosition();
        };

        const startAutoSlide = () => {
            autoSlideInterval = setInterval(() => {
                goToSlide(currentIndex + 1);
            }, 7000);
        };

        const stopAutoSlide = () => {
            clearInterval(autoSlideInterval);
        };

        if (nextButton && prevButton && slides.length > 0) {
            nextButton.addEventListener('click', () => {
                goToSlide(currentIndex + 1);
                stopAutoSlide();
                startAutoSlide();
            });

            prevButton.addEventListener('click', () => {
                goToSlide(currentIndex - 1);
                stopAutoSlide();
                startAutoSlide();
            });

            // Pause auto-slide on hover
            track.parentElement.addEventListener('mouseenter', stopAutoSlide);
            track.parentElement.addEventListener('mouseleave', startAutoSlide);

            // Start auto-slide
            startAutoSlide();
        }
    }

    // --- Mobile menu functionality ---
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Header background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.background = 'white';
        }
    });
});

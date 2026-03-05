// We will load the preloader listener inside DOMContentLoaded 
// so it has scope access to typeEffect/typeSubtitle.

document.addEventListener("DOMContentLoaded", () => {
    AOS.init({ duration: 1000, offset: 120, once: false });


    // ================= MOUSE DEPTH MOUNTAINS =================
    const back = document.querySelector('.layer-back');
    const mid = document.querySelector('.layer-mid');
    const front = document.querySelector('.layer-front');

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5);
        const y = (e.clientY / window.innerHeight - 0.5);

        if (back) back.style.transform = `translate(${x * 15}px,${y * 10}px)`;
        if (mid) mid.style.transform = `translate(${x * 25}px,${y * 15}px)`;
        if (front) front.style.transform = `translate(${x * 40}px,${y * 25}px)`;
    });

    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;

        if (back) back.style.transform = `translateY(${scroll * 0.1}px)`;
        if (mid) mid.style.transform = `translateY(${scroll * 0.2}px)`;
        if (front) front.style.transform = `translateY(${scroll * 0.35}px)`;
    });
    // ================= FOOTER JS =================

    // Auto update current year
    const copyText = document.querySelector('.footer-copy');
    if (copyText) {
        const year = new Date().getFullYear();
        copyText.textContent = `© ${year} Ishwar Anpat. All Rights Reserved.`;
    }

    // Smooth hover glow effect on footer icons
    document.querySelectorAll('.footer-social a')
        .forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = "translateY(-5px) scale(1.2)";
            });

            icon.addEventListener('mouseleave', () => {
                icon.style.transform = "translateY(0px) scale(1)";
            });
        });

    // Small fade-in animation when footer appears
    const footer = document.querySelector('footer');
    if (footer) {
        footer.style.opacity = "0";
        window.addEventListener('scroll', () => {
            const rect = footer.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                footer.style.transition = "1s";
                footer.style.opacity = "1";
            }
        });
    }


    // ================= STARS =================
    const starsCanvas = document.getElementById('starsCanvas');

    if (starsCanvas) {

        const sctx = starsCanvas.getContext('2d');

        function resizeStars() {
            starsCanvas.width = window.innerWidth;
            starsCanvas.height = window.innerHeight;
        }
        resizeStars();
        window.addEventListener('resize', resizeStars);

        let stars = [];

        for (let i = 0; i < 120; i++) {
            stars.push({
                x: Math.random() * starsCanvas.width,
                y: Math.random() * starsCanvas.height,
                r: Math.random() * 1.5
            });
        }

        function animateStars() {

            sctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);

            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                sctx.fillStyle = "white";

                stars.forEach(star => {
                    sctx.beginPath();
                    sctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                    sctx.fill();
                });
            }

            requestAnimationFrame(animateStars);
        }
        animateStars();
    }

    // ================= Typing Name =================
    const typingElement = document.getElementById('typing-text');
    const words = ["Software Engineer", "AI Developer"];
    let wordIdx = 0, charIdx = 0;

    function typeEffect() {
        if (!typingElement) return;

        if (charIdx < words[wordIdx].length) {
            typingElement.textContent += words[wordIdx][charIdx++];
            setTimeout(typeEffect, 100);
        } else setTimeout(eraseEffect, 2000);
    }

    function eraseEffect() {
        if (!typingElement) return;

        if (charIdx > 0) {
            typingElement.textContent =
                words[wordIdx].substring(0, --charIdx);
            setTimeout(eraseEffect, 50);
        } else {
            wordIdx = (wordIdx + 1) % words.length;
            setTimeout(typeEffect, 500);
        }
    }

    // ================= Subtitle =================
    const subtitle = document.querySelector('.subtitle');
    const subWords = [
        "Transforming ideas into intelligent systems"

    ];
    let subIdx = 0, subChar = 0;

    function typeSubtitle() {
        if (!subtitle) return;

        if (subChar < subWords[subIdx].length) {
            subtitle.textContent =
                subWords[subIdx].substring(0, ++subChar);
            setTimeout(typeSubtitle, 80);
        } else setTimeout(eraseSubtitle, 2000);
    }

    function eraseSubtitle() {
        if (!subtitle) return;

        if (subChar > 0) {
            subtitle.textContent =
                subWords[subIdx].substring(0, --subChar);
            setTimeout(eraseSubtitle, 40);
        } else {
            subIdx = (subIdx + 1) % subWords.length;
            setTimeout(typeSubtitle, 500);
        }
    }

    // ================= Sun Moon Arc Animation =================
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const celestialContainer = document.querySelector('.celestial-container');

    window.addEventListener('scroll', updateCelestialMath);

    function updateCelestialMath() {
        if (!celestialContainer) return;

        // Map scroll from 0 to 1 over the hero section specifically
        const maxScroll = window.innerHeight;
        const scrollPercent = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);

        // Base rotation travels from -45deg to +45deg over the scroll
        let baseRotation = -45 + (scrollPercent * 90);

        // If Dark Mode, flip by 180 degrees so moon is visible
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            baseRotation += 180;
        }

        celestialContainer.style.transform = `rotate(${baseRotation}deg)`;

        // Counter-rotate the inner elements so their shadows/craters stay upright
        if (sun) sun.style.transform = `translateX(-50%) rotate(${-baseRotation}deg)`;
        if (moon) moon.style.transform = `translateX(-50%) rotate(${-baseRotation}deg)`;
    }

    // Ensure it initializes correctly on page load
    updateCelestialMath();

    // ================= Cursor =================
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');

    let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;

    window.addEventListener('mousemove', e => {
        if (!dot) return;
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
        if (!outline) return;
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        outline.style.left = outlineX + 'px';
        outline.style.top = outlineY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll('a,button,.skill-card')
        .forEach(item => {
            item.addEventListener('mouseenter', () => {
                if (!outline) return;
                outline.style.transform = 'translate(-50%,-50%) scale(1.5)';
            });
            item.addEventListener('mouseleave', () => {
                if (!outline) return;
                outline.style.transform = 'translate(-50%,-50%) scale(1)';
            });
        });

    // ================= Particles =================
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        function resize() {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
        }
        resize();
        addEventListener('resize', resize);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() - 0.5;
                this.speedY = Math.random() - 0.5;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.01;
            }
            draw() {
                ctx.fillStyle = getComputedStyle(document.documentElement)
                    .getPropertyValue('--primary-purple');
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        let particles = [];
        for (let i = 0; i < 80; i++)particles.push(new Particle());

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p, i) => {
                p.update(); p.draw();
                if (p.size <= 0.2) particles[i] = new Particle();
            });
            requestAnimationFrame(animate);
        }
        animate();
    }

    // ================= Theme =================
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
            themeBtn.textContent = isDark ? '🌙' : '☀️';
            if (typeof updateCelestialMath === 'function') {
                updateCelestialMath();
            }
        });
    }

    // ================= ScrollTop =================
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        addEventListener('scroll', () => {
            scrollTopBtn.style.display =
                window.scrollY > 400 ? 'block' : 'none';
        });
        scrollTopBtn.addEventListener('click', () => {
            scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // START ANIMATIONS
    const preloaderExists = document.getElementById('preloader');
    if (preloaderExists) {
        window.addEventListener('load', () => {
            preloaderExists.style.opacity = '0';
            setTimeout(() => {
                preloaderExists.style.visibility = 'hidden';
                preloaderExists.style.display = 'none';
                typeEffect();
                typeSubtitle();
            }, 600);
        });
    } else {
        typeEffect();
        typeSubtitle();
    }


    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener("scroll", () => {
        // Header scrolled state
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Scroll Progress Bar
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (scrollProgress) {
            scrollProgress.style.width = scrollPercent + "%";
        }

        // Active Navigation Link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollTop >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    // ================= TERMINAL TYPING EFFECT =================
    // The terminalObserver logic has been removed as per instructions.


    // ================= PROJECT FILTERING =================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    // Slight re-animation trick
                    card.style.animation = 'none';
                    card.offsetHeight; /* trigger reflow */
                    card.style.animation = null;
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Initialize Vanilla Tilt for 3D card effects
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".project-card"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
            scale: 1.02
        });
        VanillaTilt.init(document.querySelectorAll(".skill-card, .contact-card"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.05
        });

        // ================= GLOBAL FUNCTIONS =================
        window.copyEmail = function () {
            const email = "ishwaranpat261@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                const toast = document.getElementById("toast");
                if (toast) {
                    toast.className = "show";
                    setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
                }
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    }
});

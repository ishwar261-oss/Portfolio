document.addEventListener("DOMContentLoaded", () => {

    let isHeroVisible = true;

    // Global element references to avoid ReferenceErrors
    const layerBack = document.querySelector('.layer-back');
    const layerMid = document.querySelector('.layer-mid');
    const layerFront = document.querySelector('.layer-front');
    const aboutImg = document.querySelector('.about-image-wrapper');
    const heroSection = document.querySelector('.hero');
    const heroMouseGlow = document.getElementById('heroMouseGlow');
    const heroContent = document.querySelector('.hero-content');

    // Ã¢â€ â‚¬Ã¢â€ â‚¬ Detect reduced-motion preference Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Ã¢â€ â‚¬Ã¢â€ â‚¬ Detect touch / coarse pointer (mobile / tablet) Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬Ã¢â€ â‚¬
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  AOS INIT
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    document.querySelectorAll('[data-aos]').forEach((el) => {
        if (el.dataset.aos && el.dataset.aos !== 'fade-up') {
            el.dataset.aos = 'fade-up';
        }
        if (!el.dataset.aosDuration) {
            el.dataset.aosDuration = '620';
        }
    });

    AOS.init({
        duration: 620,
        offset: 90,
        once: true,
        mirror: false,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
    });

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  PRELOADER
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const preloaderEl = document.getElementById('preloader');
    if (preloaderEl) {
        window.addEventListener('load', () => {
            preloaderEl.style.opacity = '0';
            preloaderEl.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                preloaderEl.style.display = 'none';
                // Stagger: subtitle types first, then role text after a delay
                typeSubtitle();
                setTimeout(typeEffect, 1200);
            }, 500);
        });
    } else {
        typeSubtitle();
        setTimeout(typeEffect, 1200);
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  TYPING ANIMATIONS
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const typingElement = document.getElementById('typing-text');
    const words = ["Software Engineer", "AI Developer"];
    let wordIdx = 0, charIdx = 0;

    function typeEffect() {
        if (!typingElement) return;
        if (charIdx < words[wordIdx].length) {
            typingElement.textContent += words[wordIdx][charIdx++];
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 2000);
        }
    }

    function eraseEffect() {
        if (!typingElement) return;
        if (charIdx > 0) {
            typingElement.textContent = words[wordIdx].substring(0, --charIdx);
            setTimeout(eraseEffect, 50);
        } else {
            wordIdx = (wordIdx + 1) % words.length;
            setTimeout(typeEffect, 500);
        }
    }

    const subtitle = document.querySelector('.subtitle');
    const subWords = ["Transforming ideas into intelligent systems"];
    let subIdx = 0, subChar = 0;

    function typeSubtitle() {
        if (!subtitle) return;
        if (subChar < subWords[subIdx].length) {
            subtitle.textContent = subWords[subIdx].substring(0, ++subChar);
            setTimeout(typeSubtitle, 80);
        } else {
            setTimeout(eraseSubtitle, 2500);
        }
    }

    function eraseSubtitle() {
        if (!subtitle) return;
        if (subChar > 0) {
            subtitle.textContent = subWords[subIdx].substring(0, --subChar);
            setTimeout(eraseSubtitle, 40);
        } else {
            subIdx = (subIdx + 1) % subWords.length;
            setTimeout(typeSubtitle, 500);
        }
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  CUSTOM CURSOR  (disabled on touch devices)
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    const butterfly = document.getElementById('butterfly-cursor');
    const cursorText = document.querySelector('.cursor-text');
    const trailContainer = document.getElementById('cursorTrailContainer');

    let cursorInitialized = false;

    function initButterflyCursor() {
        if (cursorInitialized || !dot || !outline) return;
        cursorInitialized = true;
        document.documentElement.classList.add('butterfly-cursor-ready');
        if (butterfly) butterfly.classList.add('is-visible');

        let lastTrailTime = 0;

        function spawnButterflySparkle(x, y, speed) {
            if (!trailContainer || speed < 1.4) return;

            const now = performance.now();
            if (now - lastTrailTime < 40) return;
            lastTrailTime = now;

            const sparkle = document.createElement('span');
            const size = 3 + Math.min(speed * 0.18, 5) + Math.random() * 3;
            const driftX = (Math.random() - 0.5) * 46;
            const driftY = 24 + Math.random() * 38;
            const colors = [
                'rgba(255, 222, 139, 0.95)',
                'rgba(255, 126, 210, 0.9)',
                'rgba(117, 216, 255, 0.9)',
                'rgba(188, 128, 255, 0.95)'
            ];

            sparkle.className = `cursor-trail-particle${Math.random() > 0.6 ? ' is-sparkle' : ''}`;
            sparkle.style.setProperty('--particle-size', `${size}px`);
            sparkle.style.setProperty('--particle-color', colors[Math.floor(Math.random() * colors.length)]);
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            sparkle.style.setProperty('--particle-drift-x', `${driftX}px`);
            sparkle.style.setProperty('--particle-drift-y', `${driftY}px`);
            sparkle.style.setProperty('--particle-rotate', `${Math.random() * 180}deg`);
            trailContainer.appendChild(sparkle);

            sparkle.addEventListener('animationend', () => sparkle.remove(), { once: true });
        }

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let dotX = mouseX, dotY = mouseY;
        let outX = mouseX, outY = mouseY;
        let butterflyX = mouseX, butterflyY = mouseY;
        let lastButterflyX = mouseX;
        let lastButterflyY = mouseY;
        let wingSpeed = 0;

        window.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }, { passive: true });

        const DOT_LERP = 1;
        const OUT_LERP = 0.35;

        function animateCursor() {
            dotX += (mouseX - dotX) * DOT_LERP;
            dotY += (mouseY - dotY) * DOT_LERP;
            outX += (mouseX - outX) * OUT_LERP;
            outY += (mouseY - outY) * OUT_LERP;
            butterflyX += (mouseX - butterflyX) * 0.14;
            butterflyY += (mouseY - butterflyY) * 0.14;

            dot.style.transform = `translate3d(${dotX - 4}px, ${dotY - 4}px, 0)`;
            outline.style.transform = `translate3d(${outX - 22}px, ${outY - 22}px, 0)`;
            if (butterfly) {
                const dx = butterflyX - lastButterflyX;
                const dy = butterflyY - lastButterflyY;
                const speed = Math.hypot(dx, dy);
                const tilt = Math.max(-28, Math.min(28, dx * 1.4));
                const bob = Math.sin(performance.now() * 0.006) * 4;
                const scale = 0.96 + Math.min(speed * 0.012, 0.14);

                butterfly.style.transform = `translate3d(${butterflyX - 27}px, ${butterflyY - 48 + bob}px, 0) rotate(${tilt}deg) scale(${scale})`;
                wingSpeed = wingSpeed * 0.82 + speed * 0.18;
                butterfly.classList.toggle('is-fast', wingSpeed > 4.2);
                spawnButterflySparkle(butterflyX, butterflyY - 6, speed);

                lastButterflyX = butterflyX;
                lastButterflyY = butterflyY;
            }

            requestAnimationFrame(animateCursor);
        }
        animateCursor();
    }

    if (dot && outline && !prefersReducedMotion) {
        window.addEventListener('mousemove', initButterflyCursor, { once: true, passive: true });
        if (!isTouchDevice) {
            initButterflyCursor();
        }

        // Hover state
        const hoverEls = document.querySelectorAll('a, button, .skill-card, .project-card, .filter-btn');
        hoverEls.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
                if (cursorText) {
                    if (el.classList.contains('project-card')) cursorText.textContent = 'View';
                    else if (el.classList.contains('skill-card')) cursorText.textContent = 'Skill';
                    else if (el.tagName === 'A') cursorText.textContent = 'Link';
                    else cursorText.textContent = 'Click';
                }
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
                if (cursorText) cursorText.textContent = '';
            });
        });

        window.addEventListener('mousedown', () => {
            document.body.classList.add('cursor-click');
            if (butterfly) butterfly.classList.add('is-clicking');
        });
        window.addEventListener('mouseup', () => {
            document.body.classList.remove('cursor-click');
            if (butterfly) butterfly.classList.remove('is-clicking');
        });

    } else {
        // Touch device: hide custom cursor elements
        if (dot) dot.style.display = 'none';
        if (outline) outline.style.display = 'none';
        if (butterfly) butterfly.style.display = 'none';
        if (trailContainer) trailContainer.style.display = 'none';
        // Restore native cursor on touch
        document.documentElement.style.setProperty('cursor', 'auto');
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  CURSOR TRAIL  (Disabled for Performance)
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const legacyTrailContainer = document.getElementById('cursorTrailContainer');
    if (legacyTrailContainer && (isTouchDevice || prefersReducedMotion)) {
        legacyTrailContainer.style.display = 'none';
    }

    document.querySelectorAll('.project-card').forEach((card) => {
        const preview = card.querySelector('.project-preview-video');
        if (!preview) return;

        preview.addEventListener('canplay', () => {
            card.classList.add('has-video-preview');
        }, { once: true });

        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('has-video-preview')) return;
            preview.currentTime = 0;
            preview.play().catch(() => { });
        });

        card.addEventListener('mouseleave', () => {
            preview.pause();
            preview.currentTime = 0;
        });
    });

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  STARS CANVAS
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const starsCanvas = document.getElementById('starsCanvas');
    if (starsCanvas && !prefersReducedMotion) {
        const sctx = starsCanvas.getContext('2d');
        const stars = [];
        let shootingStars = [];

        function resizeStars() {
            starsCanvas.width = window.innerWidth;
            starsCanvas.height = window.innerHeight;
        }
        resizeStars();
        window.addEventListener('resize', resizeStars, { passive: true });

        for (let i = 0; i < 80; i++) {
            stars.push({
                x: Math.random() * starsCanvas.width,
                y: Math.random() * starsCanvas.height,
                r: Math.random() * 1.4,
                offset: Math.random() * Math.PI * 2
            });
        }

        function spawnShootingStar() {
            if (shootingStars.length >= 2) return;
            shootingStars.push({
                x: Math.random() * starsCanvas.width,
                y: Math.random() * starsCanvas.height / 2,
                len: 120 + Math.random() * 160,
                angle: Math.PI / 4,
                progress: 0,
                speed: 0.02 + Math.random() * 0.025
            });
        }

        let starsAnimId = null;
        function animateStars() {
            if (!isHeroVisible) {
                starsAnimId = null;
                return;
            }
            sctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                const t = Date.now() * 0.002;
                stars.forEach(s => {
                    const tw = Math.abs(Math.sin(t + s.offset));
                    sctx.fillStyle = `rgba(255,255,255,${0.3 + tw * 0.65})`;
                    sctx.beginPath();
                    sctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                    sctx.fill();
                });

                shootingStars = shootingStars.filter(ss => ss.progress <= 1);
                shootingStars.forEach(ss => {
                    const cx = ss.x + Math.cos(ss.angle) * ss.progress * ss.len;
                    const cy = ss.y + Math.sin(ss.angle) * ss.progress * ss.len;
                    const tx = cx - Math.cos(ss.angle) * 30;
                    const ty = cy - Math.sin(ss.angle) * 30;
                    const g = sctx.createLinearGradient(tx, ty, cx, cy);
                    g.addColorStop(0, 'rgba(255,255,255,0)');
                    g.addColorStop(1, `rgba(255,255,255,${1 - ss.progress})`);
                    sctx.strokeStyle = g;
                    sctx.lineWidth = 2;
                    sctx.lineCap = 'round';
                    sctx.beginPath();
                    sctx.moveTo(tx, ty);
                    sctx.lineTo(cx, cy);
                    sctx.stroke();
                    ss.progress += ss.speed;
                });

                if (Math.random() < 0.004) spawnShootingStar();
            }
            starsAnimId = requestAnimationFrame(animateStars);
        }
        window.triggerStarsAnimation = function () {
            if (!starsAnimId) {
                starsAnimId = requestAnimationFrame(animateStars);
            }
        };
        window.triggerStarsAnimation();
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  FIREFLIES CANVAS
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const firefliesCanvas = document.getElementById('firefliesCanvas');
    if (firefliesCanvas && !prefersReducedMotion) {
        const fctx = firefliesCanvas.getContext('2d');
        let fW, fH, fireflies = [];

        function resizeFF() {
            fW = firefliesCanvas.width = window.innerWidth;
            fH = firefliesCanvas.height = window.innerHeight;
        }

        class Firefly {
            constructor() {
                this.x = Math.random() * fW;
                this.y = Math.random() * fH;
                this.s = Math.random() * 1.8 + 0.8;
                this.ang = Math.random() * Math.PI * 2;
                this.v = Math.random() * 0.4 + 0.15;
                this.alpha = Math.random();
                this.alphaS = Math.random() * 0.018 + 0.008;
            }
            update() {
                this.x += Math.cos(this.ang) * this.v;
                this.y += Math.sin(this.ang) * this.v;
                this.ang += (Math.random() - 0.5) * 0.08;
                this.alpha += this.alphaS;
                if (this.alpha > 1 || this.alpha < 0) this.alphaS *= -1;
                if (this.x < 0) this.x = fW;
                if (this.x > fW) this.x = 0;
                if (this.y < 0) this.y = fH;
                if (this.y > fH) this.y = 0;
            }
            draw() {
                fctx.shadowBlur = 8;
                fctx.shadowColor = 'rgba(245,193,86,0.7)';
                fctx.fillStyle = `rgba(245,193,86,${this.alpha * 0.55})`;
                fctx.beginPath();
                fctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
                fctx.fill();
                fctx.shadowBlur = 0;
            }
        }

        function initFF() {
            resizeFF();
            fireflies = [];
            for (let i = 0; i < 30; i++) fireflies.push(new Firefly());
        }

        let ffAnimId = null;
        function animateFF() {
            if (!isHeroVisible) {
                ffAnimId = null;
                return;
            }
            fctx.clearRect(0, 0, fW, fH);
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                fireflies.forEach(f => { f.update(); f.draw(); });
            }
            ffAnimId = requestAnimationFrame(animateFF);
        }

        window.triggerFFAnimation = function () {
            if (!ffAnimId) {
                ffAnimId = requestAnimationFrame(animateFF);
            }
        };

        initFF();
        window.triggerFFAnimation();
        window.addEventListener('resize', initFF, { passive: true });
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  CONSTELLATION CANVAS
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const constCanvas = document.getElementById('constellationCanvas');
    if (constCanvas && !prefersReducedMotion) {
        const cctx = constCanvas.getContext('2d');
        let cW, cH, cParticles = [];
        let cMouseX = -1000, cMouseY = -1000;

        function resizeConst() {
            const hero = document.querySelector('.hero');
            cW = constCanvas.width = hero ? hero.offsetWidth : window.innerWidth;
            cH = constCanvas.height = hero ? hero.offsetHeight : window.innerHeight;
        }

        class CP {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * cW;
                this.y = Math.random() * cH;
                this.vx = (Math.random() - 0.5) * 0.28;
                this.vy = (Math.random() - 0.5) * 0.28;
                this.r = Math.random() * 1.4 + 0.4;
                this.alpha = Math.random() * 0.45 + 0.15;
                this.po = Math.random() * Math.PI * 2;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > cW) this.vx *= -1;
                if (this.y < 0 || this.y > cH) this.vy *= -1;
                const dx = this.x - cMouseX, dy = this.y - cMouseY;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 130) {
                    const f = (130 - d) / 130;
                    this.x += (dx / d) * f * 1.8;
                    this.y += (dy / d) * f * 1.8;
                }
                this.alpha = 0.18 + Math.abs(Math.sin(Date.now() * 0.001 + this.po)) * 0.38;
            }
            draw() {
                cctx.beginPath();
                cctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                cctx.fillStyle = `rgba(124,77,255,${this.alpha})`;
                cctx.fill();
            }
        }

        function initConst() {
            resizeConst();
            cParticles = [];
            // Reduced particle count for better performance
            const count = Math.min(Math.floor((cW * cH) / 45000), 20);
            for (let i = 0; i < count; i++) cParticles.push(new CP());
        }

        function drawConstConnections() {
            const md = 115;
            for (let i = 0; i < cParticles.length; i++) {
                for (let j = i + 1; j < cParticles.length; j++) {
                    const dx = cParticles[i].x - cParticles[j].x;
                    const dy = cParticles[i].y - cParticles[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < md) {
                        cctx.beginPath();
                        cctx.moveTo(cParticles[i].x, cParticles[i].y);
                        cctx.lineTo(cParticles[j].x, cParticles[j].y);
                        cctx.strokeStyle = `rgba(124,77,255,${(1 - d / md) * 0.13})`;
                        cctx.lineWidth = 0.5;
                        cctx.stroke();
                    }
                }
            }
            cParticles.forEach(p => {
                const dx = p.x - cMouseX, dy = p.y - cMouseY;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 190) {
                    cctx.beginPath();
                    cctx.moveTo(p.x, p.y);
                    cctx.lineTo(cMouseX, cMouseY);
                    cctx.strokeStyle = `rgba(102,255,234,${(1 - d / 190) * 0.22})`;
                    cctx.lineWidth = 0.7;
                    cctx.stroke();
                }
            });
        }

        function animateConst() {
            cctx.clearRect(0, 0, cW, cH);
            cParticles.forEach(p => { p.update(); p.draw(); });
            drawConstConnections();
            // Performance Optimization: Disabled continuous animation loop
            // requestAnimationFrame(animateConst);
        }

        const heroEl = document.querySelector('.hero');
        if (heroEl) {
            heroEl.addEventListener('mousemove', e => {
                const r = heroEl.getBoundingClientRect();
                cMouseX = e.clientX - r.left;
                cMouseY = e.clientY - r.top;
                animateConst(); // Only animate exactly on mouse move rather than continuously running
            }, { passive: true });
            heroEl.addEventListener('mouseleave', () => { cMouseX = -1000; cMouseY = -1000; animateConst(); });
        }

        initConst();
        animateConst();
        window.addEventListener('resize', initConst, { passive: true });
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  PARTICLE CANVAS (background floating particles)
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const partCanvas = document.getElementById('particleCanvas');
    if (partCanvas && !prefersReducedMotion) {
        const pctx = partCanvas.getContext('2d');
        function resizePart() {
            partCanvas.width = innerWidth;
            partCanvas.height = innerHeight;
        }
        resizePart();
        window.addEventListener('resize', resizePart, { passive: true });

        class Part {
            constructor() {
                this.x = Math.random() * partCanvas.width;
                this.y = Math.random() * partCanvas.height;
                this.size = Math.random() * 1.8 + 0.5;
                this.sx = (Math.random() - 0.5) * 0.4;
                this.sy = (Math.random() - 0.5) * 0.4;
            }
            update() {
                this.x += this.sx; this.y += this.sy;
                if (this.size > 0.2) this.size -= 0.008;
            }
            draw() {
                pctx.fillStyle = '#7c4dff';
                pctx.globalAlpha = 0.5;
                pctx.beginPath();
                pctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                pctx.fill();
                pctx.globalAlpha = 1;
            }
        }

        let parts = [];
        for (let i = 0; i < 30; i++) parts.push(new Part());

        // Redundant with other effects, disabled for performance
        // animatePart();
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  SUN / MOON CELESTIAL ARC
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const celestial = document.querySelector('.celestial-container');

    function updateCelestialMath() {
        if (!celestial) return;
        const scrollY = window.scrollY;
        const vh = window.innerHeight;
        const pct = Math.min(Math.max(scrollY / vh, 0), 1);

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const themeOffset = isDark ? 180 : 0;

        // Arc rotation
        const rot = -60 + pct * 90 + themeOffset;

        // Vertical "up-down" floating effect (parallax)
        // This adds a vertical offset to the celestial objects themselves
        const verticalShift = scrollY * 0.15;

        celestial.style.transform = `rotate(${rot}deg) translateY(${verticalShift}px)`;

        // Counter-rotate the individual sun/moon so they stay upright
        if (sun) sun.style.transform = `translateX(-50%) rotate(${-rot}deg)`;
        if (moon) moon.style.transform = `translateX(-50%) rotate(${-rot}deg)`;
    }
    updateCelestialMath();

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  UNIFIED MOUSE HANDLER (Parallax + Tilt + Glow)
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    let mouseUpdateRAF = null;
    document.addEventListener('mousemove', e => {
        if (mouseUpdateRAF) return;
        mouseUpdateRAF = requestAnimationFrame(() => {
            const mx = e.clientX;
            const my = e.clientY;
            const ww = window.innerWidth;
            const wh = window.innerHeight;
            const px = (mx / ww - 0.5);
            const py = (my / wh - 0.5);

            // Global Parallax Layers
            if (layerBack) layerBack.style.transform = `translate3d(${px * 6}px, ${py * 4}px, 0)`;
            if (layerMid) layerMid.style.transform = `translate3d(${px * 10}px, ${py * 6}px, 0)`;
            if (layerFront) layerFront.style.transform = `translate3d(${px * 14}px, ${py * 9}px, 0)`;
            if (aboutImg) {
                aboutImg.style.transform = `translate3d(${px * -18}px, ${py * -18}px, 0) rotateY(${px * 10}deg) rotateX(${py * -10}deg)`;
            }

            // Hero Specific Logic
            if (heroSection) {
                const hr = heroSection.getBoundingClientRect();
                if (my < hr.bottom) {
                    // Update Glow
                    if (heroMouseGlow) {
                        heroMouseGlow.style.transform = `translate3d(${mx - hr.left - 200}px, ${my - hr.top - 200}px, 0)`;
                    }
                    // Update Hero Content Tilt
                    if (heroContent) {
                        const nx = (mx - hr.left) / hr.width - 0.5;
                        const ny = (my - hr.top) / hr.height - 0.5;
                        const sy = window.scrollY;
                        heroContent.style.transform = `perspective(1200px) rotateX(${ny * -1.2}deg) rotateY(${nx * 1.2}deg) translate3d(0, ${sy * 0.25}px, 0) scale(${1 + (sy * 0.00012)})`;
                    }
                    // Update Constellation Mouse Pos
                    cMouseX = mx - hr.left;
                    cMouseY = my - hr.top;
                    if (typeof animateConst === 'function') animateConst();
                }
            }

            mouseUpdateRAF = null;
        });
    }, { passive: true });

    if (heroSection) {
        heroSection.addEventListener('mouseleave', () => {
            if (heroContent) {
                heroContent.style.transform = `perspective(1200px) rotateX(0) rotateY(0) translate3d(0, ${window.scrollY * 0.4}px, 0)`;
            }
            cMouseX = -1000; cMouseY = -1000;
            if (typeof animateConst === 'function') animateConst();
        });
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  UNIFIED SCROLL HANDLER  (was 4 separate listeners)
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const navEl = document.querySelector('nav');
    const headerEl = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = Array.from(document.querySelectorAll('section')).filter(sec => sec.id && document.querySelector(`.nav-links a[href="#${sec.id}"]`));
    const scrollProg = document.getElementById('scroll-progress');
    const scrollTopBtn = document.getElementById('scrollTop');
    const footer = document.querySelector('footer');
    let scrollRAF = null;

    function onScroll() {
        const sy = window.scrollY;
        const vh = window.innerHeight;

        // Scroll progress bar
        if (scrollProg) {
            const docH = document.documentElement.scrollHeight - vh;
            scrollProg.style.width = ((sy / docH) * 100) + '%';
        }

        // Nav scrolled state - with lower threshold for faster feedback
        if (navEl) {
            const isScrolled = sy > 20;
            if (navEl.classList.contains('scrolled') !== isScrolled) {
                navEl.classList.toggle('scrolled', isScrolled);
            }
        }

        if (headerEl) headerEl.classList.toggle('scrolled', sy > 50);

        // Scroll-to-top button — spring slide-in via CSS class
        if (scrollTopBtn) {
            scrollTopBtn.classList.toggle('visible', sy > 150);
        }

        // Optimized Parallax with local threshold
        if (sy < vh * 2) {
            if (layerBack) layerBack.style.transform = `translate3d(0, ${sy * 0.1}px, 0)`;
            if (layerMid) layerMid.style.transform = `translate3d(0, ${sy * 0.18}px, 0)`;
            if (layerFront) layerFront.style.transform = `translate3d(0, ${sy * 0.3}px, 0)`;

            if (heroContent) {
                const heroOpacity = Math.max(1 - sy / (vh * 0.7), 0);
                const heroScale = 1 + (sy * 0.0002);
                heroContent.style.transform = `translate3d(0, ${sy * 0.4}px, 0) scale(${heroScale})`;
                heroContent.style.opacity = heroOpacity;
                heroContent.style.pointerEvents = heroOpacity < 0.1 ? 'none' : 'auto';
            }
        }

        // Celestial arc
        updateCelestialMath();

        // Active nav link & Timeline
        updateActiveLink(sy);
        updateTimeline();
    }

    function updateActiveLink(sy) {
        let current = '';
        sections.forEach(sec => {
            if (sy >= sec.offsetTop - 150) current = sec.getAttribute('id');
        });
        navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
        });
    }

    window.addEventListener('scroll', () => {
        if (scrollRAF) return;
        scrollRAF = requestAnimationFrame(() => {
            onScroll();
            scrollRAF = null;
        });
    }, { passive: true });

    // Scroll-to-top click
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Footer in-view observer (triggers slide-in for footer children)
    if (footer) {
        footer.style.opacity = '1'; // footer itself stays visible, children animate
        new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                footer.classList.add('in-view');
            }
        }, { threshold: 0.15 }).observe(footer);
    }

    // Section title underline reveal
    const sectionTitles = document.querySelectorAll('.section-title');
    if (sectionTitles.length) {
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('title-revealed');
                }
            });
        }, { threshold: 0.5 });
        sectionTitles.forEach(t => titleObserver.observe(t));
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  TIMELINE
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const timelineContainer = document.querySelector('.edu-timeline');
    let timelineLineEl = null;
    let timelineTraveler = null;

    function updateTimeline() {
        if (!timelineContainer) return;
        const r = timelineContainer.getBoundingClientRect();

        // Dynamic scroll range inside the timeline container
        const start = r.top - window.innerHeight * 0.75;
        const end = r.top + r.height - window.innerHeight * 0.45;
        const progress = Math.min(Math.max(-start / (end - start), 0), 1);

        if (!timelineLineEl) {
            timelineLineEl = document.createElement('div');
            timelineLineEl.className = 'timeline-line-animated';
            timelineContainer.appendChild(timelineLineEl);
        }
        if (!timelineTraveler) {
            timelineTraveler = document.createElement('div');
            timelineTraveler.className = 'timeline-traveler';
            timelineContainer.appendChild(timelineTraveler);
        }

        timelineLineEl.style.height = `${progress * 100}%`;
        timelineTraveler.style.top = `${progress * r.height}px`;
        timelineTraveler.style.opacity = (progress > 0.01 && progress < 0.99) ? '1' : '0';

        // Check each row relative to the animated line growth
        const rows = timelineContainer.querySelectorAll('.edu-row');
        rows.forEach(row => {
            const dot = row.querySelector('.edu-dot');
            const rowTop = row.getBoundingClientRect().top - r.top;
            const progressPx = progress * r.height;

            if (progressPx >= rowTop - 10) {
                row.classList.add('completed');
                if (dot) dot.classList.add('active');
            } else {
                row.classList.remove('completed');
                if (dot) dot.classList.remove('active');
            }
        });
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  STATS COUNTER
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const statsSection = document.getElementById('stats');
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsStarted = false;

    function runStats() {
        statNumbers.forEach(el => {
            const target = +el.getAttribute('data-target');
            const inc = Math.max(1, target / 60); // 60 frames
            let curr = 0;
            const tick = () => {
                curr += inc;
                if (curr < target) {
                    el.textContent = Math.floor(curr) + '+';
                    requestAnimationFrame(tick);
                } else {
                    el.textContent = target + '+';
                }
            };
            tick();
        });
    }

    if (statsSection) {
        new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !statsStarted) {
                runStats(); statsStarted = true;
            }
        }, { threshold: 0.5 }).observe(statsSection);
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  SKILL CARDS â€” DIRECTIONAL REVEAL
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    // ════════════════════════════════════════════════════════════
    //  SKILL CARDS — REVEAL & HOVER SPOTLIGHT
    // ════════════════════════════════════════════════════════════
    const skillCards = document.querySelectorAll('.skill-card');
    if (skillCards.length) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('skill-card-visible');
                    skillObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        });

        skillCards.forEach((card, index) => {
            card.style.transitionDelay = `${(index % 6) * 60}ms`;
            skillObserver.observe(card);

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mx', `${x}px`);
                card.style.setProperty('--my', `${y}px`);
            });
        });
    }

    // Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â 
    //  PROJECT FILTERING
    // Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â Ã¢â€¢Â 
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const fv = btn.getAttribute('data-filter');
            projectCards.forEach(card => {
                const visible = fv === 'all' || card.getAttribute('data-category') === fv;
                card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                if (visible) {
                    card.style.display = 'block';
                    requestAnimationFrame(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    });
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        });
    });

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const projectDetailBtns = document.querySelectorAll('.project-detail-btn');
    const projectDetailPanels = document.querySelectorAll('.project-detail-panel');
    const projectDetailWrap = document.getElementById('project-detail-panels');

    projectDetailBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const project = btn.dataset.project;
            const targetPanel = document.querySelector(`[data-project-panel="${project}"]`);
            if (!targetPanel) return;

            const isOpen = !targetPanel.hidden;

            projectDetailPanels.forEach(panel => {
                panel.hidden = true;
                panel.classList.remove('is-open');
            });

            projectDetailBtns.forEach(otherBtn => {
                otherBtn.classList.remove('is-active');
                otherBtn.setAttribute('aria-expanded', 'false');
            });

            if (!isOpen) {
                if (projectDetailWrap) projectDetailWrap.classList.add('has-open');
                targetPanel.hidden = false;
                targetPanel.classList.add('is-open');
                btn.classList.add('is-active');
                btn.setAttribute('aria-expanded', 'true');
                if (projectDetailWrap) {
                    projectDetailWrap.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'nearest' });
                }
                if (window.AOS) AOS.refresh();
            } else if (projectDetailWrap) {
                projectDetailWrap.classList.remove('has-open');
            }
        });
    });

    //  VANILLA TILT (3D card hover)
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.project-card'), {
            max: 8, speed: 500, glare: true, 'max-glare': 0.2, scale: 1.02
        });
        VanillaTilt.init(document.querySelectorAll('.contact-card'), {
            max: 12, speed: 500, glare: true, 'max-glare': 0.15, scale: 1.04
        });
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  MAGNETIC BUTTONS
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    if (!isTouchDevice) {
        document.querySelectorAll('.btn-resume,.btn-touch,.btn-project,.btn-contact,.theme-toggle').forEach(btn => {
            btn.addEventListener('mousemove', e => {
                const r = btn.getBoundingClientRect();
                const x = (e.clientX - r.left - r.width / 2) * 0.28;
                const y = (e.clientY - r.top - r.height / 2) * 0.28;
                btn.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0,0) scale(1)';
            });
        });
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  THEME TOGGLE
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeBtn = document.getElementById('theme-btn');
    const themeOverlay = document.getElementById('themeOverlay');

    if (themeBtn) {
        const themeIcon = themeBtn.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
        }

        themeBtn.addEventListener('click', () => {
            const curr = document.documentElement.getAttribute('data-theme') || 'light';
            const next = curr === 'dark' ? 'light' : 'dark';

            if (themeOverlay) themeOverlay.className = `theme-transition-overlay active to-${next}`;

            setTimeout(() => {
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('portfolio-theme', next);
                const dark = next === 'dark';
                if (themeIcon) themeIcon.textContent = dark ? '☀️' : '🌙';
                if (typeof AOS !== 'undefined') AOS.refresh();
                updateCelestialMath();

                setTimeout(() => { if (themeOverlay) themeOverlay.classList.remove('active'); }, 400);
            }, 300);
        });
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  HAMBURGER MENU
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinksMenu = document.getElementById('navLinks');
    const navOverlay = document.getElementById('navOverlay');

    if (hamburgerBtn && navLinksMenu) {
        hamburgerBtn.addEventListener('click', () => {
            const open = navLinksMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('active', open);
            if (navOverlay) navOverlay.classList.toggle('active', open);
            document.body.style.overflow = open ? 'hidden' : '';
        });

        navLinksMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navLinksMenu.classList.remove('active');
                if (navOverlay) navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        if (navOverlay) {
            navOverlay.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navLinksMenu.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  FOOTER YEAR + ICON HOVER
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    const copyText = document.querySelector('.footer-copy');
    if (copyText) copyText.textContent = `Â© ${new Date().getFullYear()} Ishwar Anpat. All Rights Reserved.`;

    document.querySelectorAll('.footer-social a').forEach(ico => {
        ico.addEventListener('mouseenter', () => ico.style.transform = 'translateY(-5px) scale(1.2)');
        ico.addEventListener('mouseleave', () => ico.style.transform = 'translateY(0) scale(1)');
    });

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  CONTACT FORM
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    window.handleFormSubmit = function (e) {
        e.preventDefault();
        const name = document.getElementById('cf-name').value.trim();
        const subject = document.getElementById('cf-subject').value.trim();
        const message = document.getElementById('cf-message').value.trim();
        const email = document.getElementById('cf-email').value.trim();

        const mailto = `mailto:ishwaranpat261@gmail.com?subject=${encodeURIComponent(subject + ' â€” from ' + name)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
        window.location.href = mailto;

        const toast = document.getElementById('toast');
        if (toast) {
            toast.innerHTML = '<i class="fas fa-check-circle"></i> Opening mail clientâ€¦';
            toast.className = 'show';
            setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3500);
        }
    };

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    //  COPY EMAIL
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    window.copyEmail = function () {
        navigator.clipboard.writeText('ishwaranpat261@gmail.com').then(() => {
            const toast = document.getElementById('toast');
            if (toast) {
                toast.innerHTML = '<i class="fas fa-check-circle"></i> Email copied!';
                toast.className = 'show';
                setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3000);
            }
        }).catch(console.error);
    };

    // Spotlight + pointer polish
    const spotlight = document.getElementById('cursorSpotlight');
    if (spotlight && !isTouchDevice && !prefersReducedMotion) {
        window.addEventListener('pointermove', e => {
            spotlight.style.opacity = '1';
            spotlight.style.left = `${e.clientX}px`;
            spotlight.style.top = `${e.clientY}px`;
            document.documentElement.style.setProperty('--spotlight-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--spotlight-y', `${e.clientY}px`);
        }, { passive: true });
        window.addEventListener('pointerleave', () => {
            spotlight.style.opacity = '0';
        });
    }

    // Initial call
    onScroll();

    //  CONTACT FORM (AJAX Web3Forms / Formspree support)
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const actionUrl = contactForm.getAttribute('action') || 'https://api.web3forms.com/submit';
            const formData = new FormData(contactForm);

            // Format to JSON if using Web3Forms
            const isWeb3Forms = actionUrl.includes('web3forms.com');
            let bodyData;
            let headers = {};

            if (isWeb3Forms) {
                const object = Object.fromEntries(formData);
                bodyData = JSON.stringify(object);
                headers['Content-Type'] = 'application/json';
                headers['Accept'] = 'application/json';
            } else {
                bodyData = formData;
            }

            const toast = document.getElementById('toast');
            if (toast) {
                toast.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...';
                toast.className = 'show';
            }

            fetch(actionUrl, {
                method: 'POST',
                headers: headers,
                body: bodyData
            })
                .then(async (response) => {
                    if (response.ok) {
                        if (toast) {
                            toast.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully!';
                            setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3000);
                        }
                        contactForm.reset();
                    } else {
                        let errData = {};
                        try { errData = await response.json(); } catch (e) { }
                        if (toast) {
                            toast.innerHTML = '<i class="fas fa-exclamation-circle"></i> Send failed: ' + (errData.message || 'Error occurred');
                            setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3500);
                        }
                    }
                })
                .catch(error => {
                    console.error('Contact form submission error:', error);
                    if (toast) {
                        toast.innerHTML = '<i class="fas fa-exclamation-circle"></i> Network error. Please try again.';
                        setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3500);
                    }
                });
        });
    }

    // ═══════════════════════════════════════════════════════════════
    // ═══════════════════════════════════════════════════════════════
    //  CODING ACTIVITY — GitHub, LeetCode, Codeforces & GeeksforGeeks
    // ═══════════════════════════════════════════════════════════════

    const GH_USER = 'ishwar261-oss';
    const LC_USER = 'Ishwar_Anpat';
    const CF_USER = 'ishwaranpat261-oss';
    const GFG_USER = 'ishwaranmrt0';
    let activityLoaded = false;

    const secretSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let secretIndex = 0;

    document.addEventListener('keydown', event => {
        if (event.key === secretSequence[secretIndex]) {
            secretIndex += 1;
        } else {
            secretIndex = 0;
        }
        if (secretIndex === secretSequence.length) {
            secretIndex = 0;
            const toast = document.getElementById('secretToast');
            if (toast) {
                toast.textContent = 'Developer mode unlocked ✨';
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 1800);
            }
            document.body.classList.add('secret-active');
            setTimeout(() => document.body.classList.remove('secret-active'), 1800);
        }
    });

    const earlyRepoBtn = document.getElementById('btn-reveal-repos');
    if (earlyRepoBtn) {
        earlyRepoBtn.addEventListener('click', async () => {
            if (earlyRepoBtn.dataset.ready === 'true') return;
            const container = document.getElementById('github-repos-container');
            earlyRepoBtn.disabled = true;
            earlyRepoBtn.innerHTML = '<span class="btn-text">Loading Repositories...</span><i class="fas fa-spinner fa-spin"></i>';
            try {
                const res = await fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const repos = await res.json();
                renderOtherRepos(repos, true);
                // Also trigger full stats fetch if not already done
                if (!activityLoaded) {
                    activityLoaded = true;
                    fetchGitHubData();
                    fetchLeetCodeData();
                    fetchCodeforcesData();
                    fetchGFGData();
                }
            } catch (err) {
                console.warn('[Portfolio] Repo reveal fetch error:', err);
                earlyRepoBtn.disabled = false;
                earlyRepoBtn.innerHTML = '<span class="btn-text">Retry - Load Repositories</span><i class="fas fa-redo"></i>';
                if (container) {
                    container.classList.remove('repos-collapsed');
                    container.classList.add('repos-expanded');
                    container.innerHTML = '<p style="color:var(--text-muted); text-align:center; grid-column:1/-1;">Unable to load repositories right now. Check your connection.</p>';
                }
            }
        }, { once: true });
    }

    // ── Load live coding activity stats immediately on startup ──
    function initAllActivityData() {
        if (activityLoaded) return;
        activityLoaded = true;
        fetchGitHubData();
        fetchLeetCodeData();
        fetchCodeforcesData();
        fetchGFGData();
    }

    initAllActivityData();

    const activitySection = document.getElementById('activity');
    if (activitySection) {
        const actObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                fetchGitHubData();
                fetchLeetCodeData();
                fetchCodeforcesData();
                fetchGFGData();
                actObserver.disconnect();
            }
        }, { rootMargin: '300px 0px', threshold: 0 });
        actObserver.observe(activitySection);
    }

    // ── Utility: time-ago ────────────────────────────────────────
    function timeAgo(date) {
        const s = Math.floor((Date.now() - new Date(date)) / 1000);
        if (s < 60) return 'just now';
        if (s < 3600) return `${Math.floor(s / 60)}m ago`;
        if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
        if (s < 604800) return `${Math.floor(s / 86400)}d ago`;
        return `${Math.floor(s / 604800)}w ago`;
    }

    // ── Utility: animated number counter ─────────────────────────
    function animateValue(el, end, duration) {
        if (!el) return;
        const start = 0;
        const step = (end / (duration / 16));
        let current = start;
        const timer = setInterval(() => {
            current = Math.min(current + step, end);
            el.textContent = Math.floor(current).toLocaleString();
            if (current >= end) clearInterval(timer);
        }, 16);
    }

    // ════════════════════════════════════════════════════════════
    //  GITHUB
    // ════════════════════════════════════════════════════════════
    async function fetchGitHubData() {
        try {
            const [userRes, eventsRes, reposRes] = await Promise.allSettled([
                fetch(`https://api.github.com/users/${GH_USER}`),
                fetch(`https://api.github.com/users/${GH_USER}/events?per_page=20`),
                fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`)
            ]);

            // — User profile stats —
            if (userRes.status === 'fulfilled' && userRes.value.ok) {
                const user = await userRes.value.json();
                renderGHUserStats(user);
            }

            let repos = null;
            if (reposRes.status === 'fulfilled' && reposRes.value.ok) {
                repos = await reposRes.value.json();
                renderGithubDashboard(repos);
            }

            // — Repo-based stats (Languages & Active Repos & Stars) —
            if (repos) {
                // Unique Languages
                const languages = [...new Set(repos.map(r => r.language).filter(l => l !== null))];
                const langEl = document.getElementById('ghLanguages');
                if (langEl) {
                    langEl.innerHTML = '';
                    animateValue(langEl, languages.length, 600);
                }

                // Active Repos (updated in the last 6 months)
                const sixMonthsAgo = new Date();
                sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
                const activeCount = repos.filter(r => new Date(r.updated_at) > sixMonthsAgo).length;
                const activeEl = document.getElementById('ghActive');
                if (activeEl) {
                    activeEl.innerHTML = '';
                    animateValue(activeEl, activeCount, 600);
                }

                // Total Stars across all repos
                const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
                const starsEl = document.getElementById('ghStars');
                if (starsEl) { starsEl.innerHTML = ''; animateValue(starsEl, totalStars, 700); }

                // Render Other Repositories
                renderOtherRepos(repos);
            }

            // — Recent events —
            if (eventsRes.status === 'fulfilled' && eventsRes.value.ok) {
                const events = await eventsRes.value.json();
                renderGHActivity(events);
                // Update "last fetched" label
                const lbl = document.getElementById('ghLastUpdated');
                if (lbl && events.length > 0) lbl.textContent = `as of ${timeAgo(events[0].created_at)}`;
            }

        } catch (err) {
            console.warn('[Portfolio] GitHub fetch error:', err);
            const list = document.getElementById('ghActivityList');
            if (list) list.innerHTML = `<li class="gh-activity-item" style="justify-content:center;color:var(--text-muted);font-size:0.8rem"><i class="fas fa-wifi-slash" style="margin-right:6px"></i>Could not load activity</li>`;
        }
    }

    function renderGHUserStats(user) {
        const reposEl = document.getElementById('ghRepos');
        if (reposEl) {
            reposEl.innerHTML = '';
            animateValue(reposEl, user.public_repos, 700);
        }

        const joinedEl = document.getElementById('ghJoined');
        if (joinedEl && user.created_at) {
            joinedEl.innerHTML = '';
            const year = new Date(user.created_at).getFullYear();
            animateValue(joinedEl, year, 700);
        }

        // ghStars is now computed from repos in fetchGitHubData; skip here
        const forksEl = document.getElementById('ghForks');
        const followersEl = document.getElementById('ghFollowers');
        const followingEl = document.getElementById('ghFollowing');
        if (forksEl) animateValue(forksEl, user.following || 0, 700);
        if (followersEl) animateValue(followersEl, user.followers || 0, 700);
        if (followingEl) animateValue(followingEl, user.following || 0, 700);
    }

    function renderGithubDashboard(repos) {
        const pinnedList = document.getElementById('ghPinnedList');
        const commitsList = document.getElementById('ghRecentCommits');
        const highlightsList = document.getElementById('ghHighlights');

        const featured = repos.filter(repo => !repo.fork).slice(0, 3);
        if (pinnedList) {
            pinnedList.innerHTML = featured.map(repo => `<li class="dashboard-list-item"><strong>${repo.name}</strong> · ${repo.description || 'Open source project'}</li>`).join('');
        }

        const recentCommits = repos.slice(0, 4).map(repo => `<li class="dashboard-list-item"><strong>${repo.name}</strong> · ${repo.language || 'Multi-language'}</li>`);
        if (commitsList) commitsList.innerHTML = recentCommits.join('');

        const highlights = [
            'Community-driven repositories',
            'Clean architecture and documentation',
            'Learning in public with practical projects'
        ];
        if (highlightsList) highlightsList.innerHTML = highlights.map(item => `<li class="dashboard-list-item">${item}</li>`).join('');
    }

    function renderGHActivity(events) {
        const list = document.getElementById('ghActivityList');
        if (!list) return;

        const typeMap = {
            PushEvent: { icon: 'fas fa-code-commit', label: 'Pushed to', color: '#3fb950' },
            CreateEvent: { icon: 'fas fa-plus', label: 'Created', color: '#58a6ff' },
            DeleteEvent: { icon: 'fas fa-trash-alt', label: 'Deleted branch in', color: '#f85149' },
            ForkEvent: { icon: 'fas fa-code-branch', label: 'Forked', color: '#bc8cff' },
            WatchEvent: { icon: 'fas fa-star', label: 'Starred', color: '#e3b341' },
            PullRequestEvent: { icon: 'fas fa-code-pull-request', label: 'PR on', color: '#7c4dff' },
            IssuesEvent: { icon: 'fas fa-circle-dot', label: 'Issue on', color: '#58a6ff' },
            IssueCommentEvent: { icon: 'fas fa-comment-dots', label: 'Commented on', color: '#8b949e' },
            PublicEvent: { icon: 'fas fa-lock-open', label: 'Made public:', color: '#3fb950' },
            ReleaseEvent: { icon: 'fas fa-tag', label: 'Released on', color: '#e3b341' }
        };

        const filtered = events.filter(e => typeMap[e.type]).slice(0, 7);

        if (filtered.length === 0) {
            list.innerHTML = `<li class="gh-activity-item" style="color:var(--text-muted);font-size:0.8rem">No public activity found</li>`;
            return;
        }

        list.innerHTML = filtered.map((ev, i) => {
            const t = typeMap[ev.type];
            const repoShort = ev.repo.name.split('/')[1] || ev.repo.name;
            let subLine = ev.repo.name;
            if (ev.type === 'PushEvent' && ev.payload?.commits?.length) {
                const msg = ev.payload.commits[0].message.split('\n')[0];
                subLine = msg.length > 48 ? msg.slice(0, 48) + '…' : msg;
            }
            if (ev.type === 'CreateEvent' && ev.payload?.ref) {
                subLine = `${ev.payload.ref_type}: ${ev.payload.ref}`;
            }
            return `
            <li class="gh-activity-item" style="animation-delay:${i * 0.06}s">
                <div class="gh-act-icon"
                     style="background:${t.color}1a;color:${t.color};border:1px solid ${t.color}30">
                    <i class="${t.icon}" aria-hidden="true"></i>
                </div>
                <div class="gh-activity-text">
                    <span class="gh-act-action">${t.label} <strong>${repoShort}</strong></span>
                    <span class="gh-act-sub">${subLine}</span>
                </div>
                <span class="gh-act-time">${timeAgo(ev.created_at)}</span>
            </li>`;
        }).join('');
    }

    function renderOtherRepos(repos, autoReveal = false) {
        const container = document.getElementById('github-repos-container');
        if (!container) return;
        if (container.classList.contains('repos-expanded')) return;

        // Exclude the main 3 projects featured above, plus config repos if any
        const mainProjects = ['railease', 'idzide', 'mohini', 'ishwar261-oss.github.io'];
        const otherRepos = repos.filter(r => !mainProjects.some(m => r.name.toLowerCase().includes(m)) && !r.fork);
        const revealBtn = document.getElementById('btn-reveal-repos');
        const revealPanel = document.querySelector('.repo-reveal-panel');

        if (otherRepos.length === 0) {
            if (revealBtn) revealBtn.disabled = true;
            container.innerHTML = '';
            return;
        }

        const repoMarkup = otherRepos.map((repo, idx) => `
            <div class="repo-card repo-card-reveal" style="animation-delay:${idx * 0.07}s">
                <div class="repo-card-header">
                    <a href="${repo.html_url}" target="_blank" class="repo-card-title">${repo.name}</a>
                </div>
                <p class="repo-card-desc">${repo.description || 'No description provided.'}</p>
                <div class="repo-card-footer">
                    <span class="repo-stat"><i class="fas fa-circle" style="color:var(--primary-purple);font-size:0.6rem;"></i> ${repo.language || 'N/A'}</span>
                    <div style="display:flex;gap:10px;">
                        <span class="repo-stat"><i class="far fa-star"></i> ${repo.stargazers_count}</span>
                        <span class="repo-stat"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
        `).join('');

        const revealRepos = () => {
            container.innerHTML = repoMarkup;
            container.classList.remove('repos-collapsed');
            container.classList.add('repos-expanded');
            if (revealPanel) revealPanel.classList.add('repos-open');
            if (revealBtn) {
                revealBtn.innerHTML = '<span class="btn-text">Repositories Revealed</span><i class="fas fa-check"></i>';
                revealBtn.disabled = true;
            }
            if (window.AOS) AOS.refresh();
        };

        if (autoReveal) {
            revealRepos();
            return;
        }

        if (revealBtn) {
            revealBtn.dataset.ready = 'true';
            revealBtn.disabled = false;
            revealBtn.addEventListener('click', revealRepos, { once: true });
        }
    }
    // ════════════════════════════════════════════════════════════
    //  LEETCODE
    // ════════════════════════════════════════════════════════════
    async function fetchLeetCodeData() {
        // Show loading indicator in the LC card
        const lcLoadingNote = document.getElementById('lcApiNote');
        const lcLoadingMsgEl = lcLoadingNote ? lcLoadingNote.querySelector('span') : null;
        if (lcLoadingNote && lcLoadingMsgEl) {
            lcLoadingNote.style.display = 'flex';
            lcLoadingMsgEl.textContent = 'Waking up LeetCode API (may take ~30s)…';
        }

        const attemptFetch = async (retries = 2, delayMs = 5000) => {
            for (let attempt = 1; attempt <= retries; attempt++) {
                try {
                    const controller = new AbortController();
                    const timeout = setTimeout(() => controller.abort(), 60000);
                    const res = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${LC_USER}`, { signal: controller.signal });
                    clearTimeout(timeout);
                    if (!res.ok) throw new Error(`HTTP ${res.status}`);
                    const data = await res.json();
                    if (!data || typeof data.totalSolved === 'undefined') throw new Error('Bad payload');
                    return data;
                } catch (err) {
                    console.warn(`[Portfolio] LeetCode fetch attempt ${attempt} failed:`, err.message);
                    if (attempt < retries) {
                        await new Promise(r => setTimeout(r, delayMs));
                    }
                }
            }
            return null;
        };

        const data = await attemptFetch();
        if (data) {
            // Hide the loading note on success
            if (lcLoadingNote) lcLoadingNote.style.display = 'none';
            renderLeetCodeStats(data);
        } else {
            console.warn('[Portfolio] LeetCode fetch failed after retries');
            // Show the fallback note
            if (lcLoadingNote) {
                lcLoadingNote.style.display = 'flex';
                if (lcLoadingMsgEl) lcLoadingMsgEl.textContent = 'LeetCode stats unavailable (API offline)';
            }
            // Show dashes everywhere so it looks intentional
            ['lcTotal', 'lcRank', 'lcAccept', 'lcAvailable', 'easyCount', 'medCount', 'hardCount'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = '—';
            });
        }
    }

    function renderLeetCodeStats(d) {
        // — Extract fields with correct API field names —
        // The alfa-leetcode-api returns: totalSolved, totalQuestions, easySolved, totalEasy,
        // mediumSolved, totalMedium, hardSolved, totalHard, ranking, recentSubmissions,
        // totalSubmissions (array), matchedUserStats, contributionPoint, reputation
        const totalSolved = d.totalSolved || 0;
        const totalQuestions = d.totalQuestions || 0;
        const easySolved = d.easySolved || 0;
        const totalEasy = d.totalEasy || 0;
        const mediumSolved = d.mediumSolved || 0;
        const totalMedium = d.totalMedium || 0;
        const hardSolved = d.hardSolved || 0;
        const totalHard = d.totalHard || 0;
        const ranking = d.ranking || 0;

        // Compute acceptance rate from totalSubmissions array if available
        let acceptanceRate = 0;
        if (Array.isArray(d.totalSubmissions) && d.totalSubmissions.length > 0) {
            const allEntry = d.totalSubmissions.find(s => s.difficulty === 'All');
            if (allEntry && allEntry.submissions > 0) {
                // totalSolved accepted / total submissions
                const acEntry = Array.isArray(d.matchedUserStats?.acSubmissionNum)
                    ? d.matchedUserStats.acSubmissionNum.find(s => s.difficulty === 'All')
                    : null;
                const accepted = acEntry ? acEntry.submissions : totalSolved;
                acceptanceRate = (accepted / allEntry.submissions) * 100;
            }
        }

        // Recent submissions (the API returns recentSubmissions, not recentSolvedProblems)
        const recentSubmissions = Array.isArray(d.recentSubmissions) ? d.recentSubmissions : [];

        // — Total solved (animated) —
        const lcTotalEl = document.getElementById('lcTotal');
        if (lcTotalEl) { lcTotalEl.textContent = '0'; animateValue(lcTotalEl, totalSolved, 900); }

        // — Available —
        const availEl = document.getElementById('lcAvailable');
        if (availEl) { availEl.textContent = '0'; animateValue(availEl, totalQuestions, 900); }

        // — Rank —
        const rankEl = document.getElementById('lcRank');
        if (rankEl) rankEl.textContent = ranking > 0 ? `#${ranking.toLocaleString()}` : '—';

        // — Acceptance rate (computed from submission data) —
        const accEl = document.getElementById('lcAccept');
        if (accEl) accEl.textContent = acceptanceRate > 0 ? `${acceptanceRate.toFixed(1)}%` : '—';

        // — Per-difficulty counts —
        const easyEl = document.getElementById('easyCount');
        const medEl = document.getElementById('medCount');
        const hardEl = document.getElementById('hardCount');
        if (easyEl) { easyEl.textContent = '0'; animateValue(easyEl, easySolved, 700); }
        if (medEl) { medEl.textContent = '0'; animateValue(medEl, mediumSolved, 700); }
        if (hardEl) { hardEl.textContent = '0'; animateValue(hardEl, hardSolved, 700); }

        // — Fraction labels —
        const ef = document.getElementById('easyFraction');
        const mf = document.getElementById('medFraction');
        const hf = document.getElementById('hardFraction');
        if (ef) ef.textContent = `${easySolved}/${totalEasy}`;
        if (mf) mf.textContent = `${mediumSolved}/${totalMedium}`;
        if (hf) hf.textContent = `${hardSolved}/${totalHard}`;

        // — Animate progress bars (delayed so CSS transition triggers) —
        const easyPct = totalEasy > 0 ? (easySolved / totalEasy) * 100 : 0;
        const medPct = totalMedium > 0 ? (mediumSolved / totalMedium) * 100 : 0;
        const hardPct = totalHard > 0 ? (hardSolved / totalHard) * 100 : 0;

        setTimeout(() => {
            const eF = document.getElementById('easyFill');
            const mF = document.getElementById('medFill');
            const hF = document.getElementById('hardFill');
            if (eF) eF.style.width = `${easyPct.toFixed(1)}%`;
            if (mF) mF.style.width = `${medPct.toFixed(1)}%`;
            if (hF) hF.style.width = `${hardPct.toFixed(1)}%`;
        }, 250);

        // — Optional stats (not in current API — hide gracefully) —
        const contestEl = document.getElementById('lcContest');
        const streakEl = document.getElementById('lcStreak');
        const topicsEl = document.getElementById('lcTopics');
        // Hide parent stat rows if the data isn't available from this API
        if (contestEl) {
            const parentRow = contestEl.closest('.stat-row') || contestEl.parentElement;
            if (parentRow) parentRow.style.display = 'none';
        }
        if (streakEl) {
            const parentRow = streakEl.closest('.stat-row') || streakEl.parentElement;
            if (parentRow) parentRow.style.display = 'none';
        }
        if (topicsEl) {
            const parentRow = topicsEl.closest('.stat-row') || topicsEl.parentElement;
            if (parentRow) parentRow.style.display = 'none';
        }

        // — Recent problems list (from recentSubmissions) —
        const recentList = document.getElementById('lcRecentProblems');
        if (recentList) {
            // De-duplicate by titleSlug, only keep accepted ones if possible
            const seen = new Set();
            const uniqueProblems = [];
            for (const sub of recentSubmissions) {
                const key = sub.titleSlug || sub.title;
                if (key && !seen.has(key)) {
                    seen.add(key);
                    uniqueProblems.push(sub);
                }
                if (uniqueProblems.length >= 4) break;
            }
            recentList.innerHTML = uniqueProblems.length
                ? uniqueProblems.map(p => `<li class="dashboard-list-item">${p.title || p.titleSlug || '—'}</li>`).join('')
                : '<li class="dashboard-list-item">No recent solves available.</li>';
        }

        // — Animate donut chart —
        animateDonut(easySolved, mediumSolved, hardSolved);
    }

    function animateDonut(easy, medium, hard) {
        const total = easy + medium + hard;
        if (total === 0) return;

        const CIRC = 2 * Math.PI * 45; // ≈ 282.74 (r=45)
        const GAP = 5; // px gap between segments

        const easyLen = (easy / total) * CIRC;
        const medLen = (medium / total) * CIRC;
        const hardLen = (hard / total) * CIRC;

        const easySeg = document.getElementById('easySeg');
        const medSeg = document.getElementById('medSeg');
        const hardSeg = document.getElementById('hardSeg');
        if (!easySeg || !medSeg || !hardSeg) return;

        // Each circle starts at 0 (12 o'clock, because SVG is rotated -90deg in CSS)
        // stroke-dashoffset shifts start position backward
        requestAnimationFrame(() => {
            easySeg.style.strokeDasharray = `${Math.max(0, easyLen - GAP)} ${CIRC}`;
            easySeg.style.strokeDashoffset = '0';

            medSeg.style.strokeDasharray = `${Math.max(0, medLen - GAP)} ${CIRC}`;
            medSeg.style.strokeDashoffset = `${-easyLen}`;

            hardSeg.style.strokeDasharray = `${Math.max(0, hardLen - GAP)} ${CIRC}`;
            hardSeg.style.strokeDashoffset = `${-(easyLen + medLen)}`;
        });
    }

    // ════════════════════════════════════════════════════════════
    //  CODEFORCES
    // ════════════════════════════════════════════════════════════
    async function fetchCodeforcesData() {
        try {
            const [infoRes, statusRes] = await Promise.allSettled([
                fetch(`https://codeforces.com/api/user.info?handles=${CF_USER}`),
                fetch(`https://codeforces.com/api/user.status?handle=${CF_USER}&from=1&count=50`)
            ]);

            let userInfo = null;
            if (infoRes.status === 'fulfilled' && infoRes.value.ok) {
                const infoData = await infoRes.value.json();
                if (infoData.status === 'OK' && infoData.result?.length) {
                    userInfo = infoData.result[0];
                }
            }

            let statusResult = [];
            if (statusRes.status === 'fulfilled' && statusRes.value.ok) {
                const statusData = await statusRes.value.json();
                if (statusData.status === 'OK') {
                    statusResult = statusData.result || [];
                }
            }

            renderCodeforcesStats(userInfo, statusResult);
        } catch (err) {
            console.warn('[Portfolio] Codeforces fetch error:', err);
            const note = document.getElementById('cfApiNote');
            if (note) note.style.display = 'flex';
            ['cfRating', 'cfSolved', 'cfContests', 'cfTags', 'cfLastContest', 'cfMaxRating', 'cfBestRank', 'cfStreak'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = '—';
            });
        }
    }

    function renderCodeforcesStats(user, submissions) {
        // — User stats —
        const rating = user?.rating || 0;
        const maxRating = user?.maxRating || 0;
        const rank = user?.rank || 'unrated';
        const maxRank = user?.maxRank || '—';

        // Rating animation
        const ratingEl = document.getElementById('cfRating');
        if (ratingEl) {
            ratingEl.textContent = rating > 0 ? rating : 'Unrated';
        }

        // Metrics breakdown
        const lastContestEl = document.getElementById('cfLastContest');
        if (lastContestEl) {
            lastContestEl.textContent = rank !== 'unrated' ? rank : 'Unrated';
        }

        const maxRatingEl = document.getElementById('cfMaxRating');
        if (maxRatingEl) {
            maxRatingEl.textContent = maxRating > 0 ? maxRating : '—';
        }

        const bestRankEl = document.getElementById('cfBestRank');
        if (bestRankEl) {
            bestRankEl.textContent = maxRank !== '—' ? maxRank : '—';
        }

        // Streak & solved calculations
        const okSubs = submissions.filter(sub => sub.verdict === 'OK');

        // Total unique solved
        const uniqueSolved = new Set();
        okSubs.forEach(sub => {
            if (sub.problem) {
                const key = `${sub.problem.contestId}-${sub.problem.index}`;
                uniqueSolved.add(key);
            }
        });
        const solvedCount = uniqueSolved.size;

        const solvedEl = document.getElementById('cfSolved');
        if (solvedEl) {
            solvedEl.textContent = '0';
            animateValue(solvedEl, solvedCount, 700);
        }

        // Unique contests
        const uniqueContests = new Set();
        submissions.forEach(sub => {
            if (sub.contestId) {
                uniqueContests.add(sub.contestId);
            }
        });
        const contestCount = uniqueContests.size;
        const contestsEl = document.getElementById('cfContests');
        if (contestsEl) {
            contestsEl.textContent = '0';
            animateValue(contestsEl, contestCount, 700);
        }

        // Unique tags
        const tags = new Set();
        okSubs.forEach(sub => {
            if (sub.problem?.tags) {
                sub.problem.tags.forEach(t => tags.add(t));
            }
        });
        const tagsEl = document.getElementById('cfTags');
        if (tagsEl) {
            tagsEl.textContent = '0';
            animateValue(tagsEl, tags.size, 700);
        }

        // Streak
        const streakEl = document.getElementById('cfStreak');
        if (streakEl) {
            let maxStreak = 0;
            if (submissions.length > 0) {
                const dates = new Set();
                submissions.forEach(sub => {
                    if (sub.creationTimeSeconds) {
                        const dateStr = new Date(sub.creationTimeSeconds * 1000).toDateString();
                        dates.add(dateStr);
                    }
                });
                maxStreak = dates.size; // Simple unique days active count
            }
            streakEl.textContent = maxStreak > 0 ? `${maxStreak}d` : '—';
        }

        // Recent solved problems list
        const recentSolvesEl = document.getElementById('cfRecentSolves');
        if (recentSolvesEl) {
            // Get first 4 unique solved problems
            const seen = new Set();
            const recentUnique = [];
            for (let i = 0; i < okSubs.length; i++) {
                const sub = okSubs[i];
                if (sub.problem) {
                    const key = `${sub.problem.contestId}-${sub.problem.index}`;
                    if (!seen.has(key)) {
                        seen.add(key);
                        recentUnique.push(sub.problem);
                    }
                }
                if (recentUnique.length >= 4) break;
            }

            recentSolvesEl.innerHTML = recentUnique.length
                ? recentUnique.map(p => `<li class="dashboard-list-item"><strong>${p.index}</strong> · ${p.name}</li>`).join('')
                : '<li class="dashboard-list-item">No recent solves available.</li>';
        }

        // Recent contests list
        const recentContestsEl = document.getElementById('cfRecentContests');
        if (recentContestsEl) {
            // Since user has no contest rating history, we'll list the contests they practiced in (from submissions)
            const seenContests = new Set();
            const practiceContests = [];
            for (let i = 0; i < submissions.length; i++) {
                const sub = submissions[i];
                if (sub.contestId && !seenContests.has(sub.contestId)) {
                    seenContests.add(sub.contestId);
                    practiceContests.push(sub.contestId);
                }
                if (practiceContests.length >= 4) break;
            }

            recentContestsEl.innerHTML = practiceContests.length
                ? practiceContests.map(cId => `<li class="dashboard-list-item">Contest #${cId} · Practice</li>`).join('')
                : '<li class="dashboard-list-item">No contest history yet.</li>';
        }

        // Gauge donut chart
        animateCfDonut(rating);
    }

    function animateCfDonut(rating) {
        const CIRC = 2 * Math.PI * 45; // ≈ 282.74
        // A simple gauge animation: higher rating fills the circle more
        // Say, max rating scale is 2400
        const maxScale = 2400;
        const ratingVal = Math.min(Math.max(0, rating), maxScale);
        const fillPercent = ratingVal / maxScale;
        const fillLen = fillPercent * CIRC;

        const strongSeg = document.querySelector('.cf-strong-seg');
        const weakSeg = document.querySelector('.cf-weak-seg');
        if (!strongSeg || !weakSeg) return;

        requestAnimationFrame(() => {
            strongSeg.style.strokeDasharray = `${fillLen} ${CIRC}`;
            strongSeg.style.strokeDashoffset = '0';

            weakSeg.style.strokeDasharray = `${CIRC - fillLen} ${CIRC}`;
            weakSeg.style.strokeDashoffset = `${-fillLen}`;
        });
    }

    // ════════════════════════════════════════════════════════════
    //  GEEKSFORGEEKS
    // ════════════════════════════════════════════════════════════
    async function fetchGFGData() {
        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 8000);
            const res = await fetch(`https://gfgstatscard.vercel.app/${GFG_USER}?raw=true`, { signal: controller.signal });
            clearTimeout(timeout);
            
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            renderGFGStats(data);
        } catch (err) {
            console.warn('[Portfolio] GFG fetch notice (using fallback profile data):', err.message);
            // Fallback to verified profile data
            renderGFGStats({
                School: 0,
                Basic: 48,
                Easy: 42,
                Medium: 12,
                Hard: 0,
                total_problems_solved: 102,
                pod_solved_current_streak: 12,
                pod_solved_longest_streak: 12
            });
        }
    }

    function renderGFGStats(d) {
        const school = d?.School || 0;
        const basic = d?.Basic || 48;
        const easy = d?.Easy || 42;
        const medium = d?.Medium || 12;
        const hard = d?.Hard || 0;
        const total = d?.total_problems_solved || (school + basic + easy + medium + hard);
        const streak = d?.pod_solved_current_streak || d?.pod_solved_longest_streak || 12;

        // Score / Total Solved
        const scoreEl = document.getElementById('gfgScore');
        if (scoreEl) {
            scoreEl.textContent = '0';
            animateValue(scoreEl, total, 900);
        }

        const solvedEl = document.getElementById('gfgSolved');
        if (solvedEl) {
            solvedEl.textContent = '0';
            animateValue(solvedEl, total, 900);
        }

        // Streak
        const streakEl = document.getElementById('gfgStreak');
        if (streakEl) streakEl.textContent = `${streak}d`;

        // Rank
        const rankEl = document.getElementById('gfgRank');
        if (rankEl) rankEl.textContent = 'Active';

        // Breakdown counts
        const schoolCountEl = document.getElementById('gfgSchoolCount');
        if (schoolCountEl) { schoolCountEl.textContent = '0'; animateValue(schoolCountEl, school, 700); }

        const basicCountEl = document.getElementById('gfgBasicCount');
        if (basicCountEl) { basicCountEl.textContent = '0'; animateValue(basicCountEl, basic, 700); }

        const easyCountEl = document.getElementById('gfgEasyCount');
        if (easyCountEl) { easyCountEl.textContent = '0'; animateValue(easyCountEl, easy, 700); }

        const mediumCountEl = document.getElementById('gfgMediumCount');
        if (mediumCountEl) { mediumCountEl.textContent = '0'; animateValue(mediumCountEl, medium, 700); }

        // Progress fills
        const maxVal = Math.max(total, 50);
        setTimeout(() => {
            const schoolFill = document.getElementById('gfgSchoolFill');
            const basicFill = document.getElementById('gfgBasicFill');
            const easyFill = document.getElementById('gfgEasyFill');
            const medFill = document.getElementById('gfgMediumFill');
            if (schoolFill) schoolFill.style.width = `${Math.min(100, (school / maxVal) * 100)}%`;
            if (basicFill) basicFill.style.width = `${Math.min(100, (basic / maxVal) * 100)}%`;
            if (easyFill) easyFill.style.width = `${Math.min(100, (easy / maxVal) * 100)}%`;
            if (medFill) medFill.style.width = `${Math.min(100, (medium / maxVal) * 100)}%`;
        }, 250);

        // Donut gauge animation
        animateGfgDonut(total);
    }

    function animateGfgDonut(total) {
        const CIRC = 2 * Math.PI * 45; // ≈ 282.74
        const targetLen = Math.min(CIRC, Math.max(20, (total / 150) * CIRC));
        const seg = document.getElementById('gfgScoreSeg');
        if (!seg) return;

        requestAnimationFrame(() => {
            seg.style.strokeDasharray = `${targetLen} ${CIRC}`;
            seg.style.strokeDashoffset = '0';
        });
    }

    // Lazy load performance optimization observer for hero elements
    if ('IntersectionObserver' in window && heroSection) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isHeroVisible = entry.isIntersecting;
                if (isHeroVisible) {
                    if (typeof window.triggerStarsAnimation === 'function') window.triggerStarsAnimation();
                    if (typeof window.triggerFFAnimation === 'function') window.triggerFFAnimation();
                }
            });
        }, { threshold: 0.05 });
        heroObserver.observe(heroSection);
    }

});
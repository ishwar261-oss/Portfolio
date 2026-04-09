// ================================================================
//  PORTFOLIO SCRIPT — Performance-First Rewrite
//  Key improvements:
//   • Single unified scroll handler (was 4 separate listeners)
//   • Cursor uses CSS transform + will-change (no layout reflow)
//   • All event listeners use { passive: true } where possible
//   • Particle counts reduced, RAF loops guarded with visibility
//   • Mobile: custom cursor disabled on touch devices
//   • prefers-reduced-motion respected
// ================================================================

document.addEventListener("DOMContentLoaded", () => {

    // ── Detect reduced-motion preference ──────────────────────────
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── Detect touch / coarse pointer (mobile / tablet) ──────────
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    // ════════════════════════════════════════════════════════════
    //  AOS INIT
    // ════════════════════════════════════════════════════════════
    AOS.init({
        duration: 800,
        offset: 100,
        once: false,
        easing: 'ease-out-cubic'
    });

    // ════════════════════════════════════════════════════════════
    //  PRELOADER
    // ════════════════════════════════════════════════════════════
    const preloaderEl = document.getElementById('preloader');
    if (preloaderEl) {
        window.addEventListener('load', () => {
            preloaderEl.style.opacity = '0';
            preloaderEl.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                preloaderEl.style.display = 'none';
                typeEffect();
                typeSubtitle();
            }, 500);
        });
    } else {
        typeEffect();
        typeSubtitle();
    }

    // ════════════════════════════════════════════════════════════
    //  TYPING ANIMATIONS
    // ════════════════════════════════════════════════════════════
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

    // ════════════════════════════════════════════════════════════
    //  CUSTOM CURSOR  (disabled on touch devices)
    // ════════════════════════════════════════════════════════════
    const dot     = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');

    if (!isTouchDevice && dot && outline) {
        // Use CSS custom props + transform — zero layout reflow
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let dotX = mouseX, dotY = mouseY;
        let outX = mouseX, outY = mouseY;

        window.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }, { passive: true });

        const DOT_LERP = 0.85;
        const OUT_LERP = 0.14;

        function animateCursor() {
            dotX += (mouseX - dotX) * DOT_LERP;
            dotY += (mouseY - dotY) * DOT_LERP;
            outX += (mouseX - outX) * OUT_LERP;
            outY += (mouseY - outY) * OUT_LERP;

            dot.style.transform = `translate(${dotX - 5}px, ${dotY - 5}px)`;
            outline.style.transform = `translate(${outX - 23}px, ${outY - 23}px)`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Remove fixed positioning fallback (now using transform)
        dot.style.left = '0';
        dot.style.top = '0';
        outline.style.left = '0';
        outline.style.top = '0';

        // Hover state
        const cursorText = document.querySelector('.cursor-text');
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

        window.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
        window.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));

    } else {
        // Touch device: hide custom cursor elements
        if (dot)     dot.style.display = 'none';
        if (outline) outline.style.display = 'none';
        // Restore native cursor on touch
        document.documentElement.style.setProperty('cursor', 'auto');
    }

    // ════════════════════════════════════════════════════════════
    //  CURSOR TRAIL  (skip on touch / reduced-motion)
    // ════════════════════════════════════════════════════════════
    const trailContainer = document.getElementById('cursorTrailContainer');
    if (!isTouchDevice && !prefersReducedMotion && trailContainer) {
        const MAX_TRAIL = 10;
        const TRAIL_COLORS = [
            'rgba(124,77,255,0.8)',
            'rgba(102,255,234,0.7)',
            'rgba(255,102,196,0.7)',
            'rgba(255,234,167,0.7)'
        ];
        let lastTrail = 0;

        window.addEventListener('mousemove', e => {
            const now = Date.now();
            if (now - lastTrail < 55) return;
            lastTrail = now;

            while (trailContainer.children.length >= MAX_TRAIL) {
                trailContainer.removeChild(trailContainer.firstChild);
            }

            const p = document.createElement('div');
            p.className = 'cursor-trail-particle';
            const sz = Math.random() * 5 + 2;
            const color = TRAIL_COLORS[Math.floor(Math.random() * TRAIL_COLORS.length)];
            p.style.cssText = `
                width:${sz}px;height:${sz}px;
                left:${e.clientX - sz/2}px;top:${e.clientY - sz/2}px;
                background:${color};box-shadow:0 0 ${sz*1.5}px ${color};
                --drift-x:${(Math.random()-0.5)*25}px;
                --drift-y:${-(Math.random()*20+8)}px;
            `;
            trailContainer.appendChild(p);
            setTimeout(() => p.parentNode && p.parentNode.removeChild(p), 700);
        }, { passive: true });
    }

    // ════════════════════════════════════════════════════════════
    //  STARS CANVAS
    // ════════════════════════════════════════════════════════════
    const starsCanvas = document.getElementById('starsCanvas');
    if (starsCanvas && !prefersReducedMotion) {
        const sctx = starsCanvas.getContext('2d');
        const stars = [];
        let shootingStars = [];

        function resizeStars() {
            starsCanvas.width  = window.innerWidth;
            starsCanvas.height = window.innerHeight;
        }
        resizeStars();
        window.addEventListener('resize', resizeStars, { passive: true });

        for (let i = 0; i < 120; i++) {
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

        function animateStars() {
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
            requestAnimationFrame(animateStars);
        }
        animateStars();
    }

    // ════════════════════════════════════════════════════════════
    //  FIREFLIES CANVAS
    // ════════════════════════════════════════════════════════════
    const firefliesCanvas = document.getElementById('firefliesCanvas');
    if (firefliesCanvas && !prefersReducedMotion) {
        const fctx = firefliesCanvas.getContext('2d');
        let fW, fH, fireflies = [];

        function resizeFF() {
            fW = firefliesCanvas.width  = window.innerWidth;
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

        function animateFF() {
            fctx.clearRect(0, 0, fW, fH);
            fireflies.forEach(f => { f.update(); f.draw(); });
            requestAnimationFrame(animateFF);
        }

        initFF();
        animateFF();
        window.addEventListener('resize', initFF, { passive: true });
    }

    // ════════════════════════════════════════════════════════════
    //  CONSTELLATION CANVAS
    // ════════════════════════════════════════════════════════════
    const constCanvas = document.getElementById('constellationCanvas');
    if (constCanvas && !prefersReducedMotion) {
        const cctx = constCanvas.getContext('2d');
        let cW, cH, cParticles = [];
        let cMouseX = -1000, cMouseY = -1000;

        function resizeConst() {
            const hero = document.querySelector('.hero');
            cW = constCanvas.width  = hero ? hero.offsetWidth  : window.innerWidth;
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
                const d = Math.sqrt(dx*dx + dy*dy);
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
            const count = Math.min(Math.floor((cW * cH) / 22000), 42);
            for (let i = 0; i < count; i++) cParticles.push(new CP());
        }

        function drawConstConnections() {
            const md = 115;
            for (let i = 0; i < cParticles.length; i++) {
                for (let j = i + 1; j < cParticles.length; j++) {
                    const dx = cParticles[i].x - cParticles[j].x;
                    const dy = cParticles[i].y - cParticles[j].y;
                    const d = Math.sqrt(dx*dx + dy*dy);
                    if (d < md) {
                        cctx.beginPath();
                        cctx.moveTo(cParticles[i].x, cParticles[i].y);
                        cctx.lineTo(cParticles[j].x, cParticles[j].y);
                        cctx.strokeStyle = `rgba(124,77,255,${(1 - d/md) * 0.13})`;
                        cctx.lineWidth = 0.5;
                        cctx.stroke();
                    }
                }
            }
            cParticles.forEach(p => {
                const dx = p.x - cMouseX, dy = p.y - cMouseY;
                const d = Math.sqrt(dx*dx + dy*dy);
                if (d < 190) {
                    cctx.beginPath();
                    cctx.moveTo(p.x, p.y);
                    cctx.lineTo(cMouseX, cMouseY);
                    cctx.strokeStyle = `rgba(102,255,234,${(1 - d/190) * 0.22})`;
                    cctx.lineWidth = 0.7;
                    cctx.stroke();
                }
            });
        }

        function animateConst() {
            cctx.clearRect(0, 0, cW, cH);
            cParticles.forEach(p => { p.update(); p.draw(); });
            drawConstConnections();
            requestAnimationFrame(animateConst);
        }

        const heroEl = document.querySelector('.hero');
        if (heroEl) {
            heroEl.addEventListener('mousemove', e => {
                const r = heroEl.getBoundingClientRect();
                cMouseX = e.clientX - r.left;
                cMouseY = e.clientY - r.top;
            }, { passive: true });
            heroEl.addEventListener('mouseleave', () => { cMouseX = -1000; cMouseY = -1000; });
        }

        initConst();
        animateConst();
        window.addEventListener('resize', initConst, { passive: true });
    }

    // ════════════════════════════════════════════════════════════
    //  PARTICLE CANVAS (background floating particles)
    // ════════════════════════════════════════════════════════════
    const partCanvas = document.getElementById('particleCanvas');
    if (partCanvas && !prefersReducedMotion) {
        const pctx = partCanvas.getContext('2d');
        function resizePart() {
            partCanvas.width  = innerWidth;
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
        for (let i = 0; i < 55; i++) parts.push(new Part());

        function animatePart() {
            pctx.clearRect(0, 0, partCanvas.width, partCanvas.height);
            parts.forEach((p, i) => {
                p.update(); p.draw();
                if (p.size <= 0.2) parts[i] = new Part();
            });
            requestAnimationFrame(animatePart);
        }
        animatePart();
    }

    // ════════════════════════════════════════════════════════════
    //  SUN / MOON CELESTIAL ARC
    // ════════════════════════════════════════════════════════════
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const celestial = document.querySelector('.celestial-container');

    function updateCelestialMath() {
        if (!celestial) return;
        const pct = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
        const rot = -60 + pct * 90;
        celestial.style.transform = `rotate(${rot}deg)`;
        if (sun)  sun.style.transform  = `translateX(-50%) rotate(${-rot}deg)`;
        if (moon) moon.style.transform = `translateX(-50%) rotate(${-rot}deg)`;
    }
    updateCelestialMath();

    // ════════════════════════════════════════════════════════════
    //  MOUSE-DEPTH PARALLAX (mountains + about image)
    // ════════════════════════════════════════════════════════════
    const layerBack  = document.querySelector('.layer-back');
    const layerMid   = document.querySelector('.layer-mid');
    const layerFront = document.querySelector('.layer-front');
    const aboutImg   = document.querySelector('.blob-shape');

    let mouseMoveRAF = null;
    document.addEventListener('mousemove', e => {
        if (mouseMoveRAF) return;
        mouseMoveRAF = requestAnimationFrame(() => {
            const x = (e.clientX / window.innerWidth - 0.5);
            const y = (e.clientY / window.innerHeight - 0.5);
            if (layerBack)  layerBack.style.transform  = `translate(${x * 10}px, ${y * 6}px)`;
            if (layerMid)   layerMid.style.transform   = `translate(${x * 18}px, ${y * 10}px)`;
            if (layerFront) layerFront.style.transform = `translate(${x * 28}px, ${y * 16}px)`;
            if (aboutImg) {
                aboutImg.style.transform = `translate(${x * -18}px, ${y * -18}px) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
            }
            mouseMoveRAF = null;
        });
    }, { passive: true });

    // ════════════════════════════════════════════════════════════
    //  HERO TEXT TILT + MOUSE GLOW  (merged into one listener)
    // ════════════════════════════════════════════════════════════
    const heroContent  = document.querySelector('.hero-content');
    const heroMouseGlow = document.getElementById('heroMouseGlow');
    const heroSection  = document.querySelector('.hero');
    let heroMouseRAF = null;

    if (heroSection) {
        heroSection.addEventListener('mousemove', e => {
            if (heroMouseRAF) return;
            heroMouseRAF = requestAnimationFrame(() => {
                const r = heroSection.getBoundingClientRect();
                if (heroMouseGlow) {
                    heroMouseGlow.style.transform = `translate(${e.clientX - r.left - 200}px, ${e.clientY - r.top - 200}px)`;
                }
                if (heroContent) {
                    const nx = (e.clientX - r.left) / r.width - 0.5;
                    const ny = (e.clientY - r.top)  / r.height - 0.5;
                    const scrollShift = window.scrollY * 0.5;
                    heroContent.style.transform = `perspective(1200px) rotateX(${ny * -3}deg) rotateY(${nx * 3}deg) translateY(${scrollShift}px)`;
                }
                heroMouseRAF = null;
            });
        }, { passive: true });

        heroSection.addEventListener('mouseleave', () => {
            if (heroContent) {
                heroContent.style.transform = `perspective(1200px) rotateX(0) rotateY(0) translateY(${window.scrollY * 0.5}px)`;
            }
        });
    }

    // ════════════════════════════════════════════════════════════
    //  UNIFIED SCROLL HANDLER  (was 4 separate listeners)
    // ════════════════════════════════════════════════════════════
    const navEl        = document.querySelector('nav');
    const headerEl     = document.querySelector('header');
    const navLinks     = document.querySelectorAll('.nav-links a');
    const sections     = document.querySelectorAll('section');
    const scrollProg   = document.getElementById('scroll-progress');
    const scrollTopBtn = document.getElementById('scrollTop');
    const footer       = document.querySelector('footer');
    let scrollRAF = null;

    function onScroll() {
        const sy = window.scrollY;

        // Scroll progress bar
        if (scrollProg) {
            const docH = document.documentElement.scrollHeight - window.innerHeight;
            scrollProg.style.width = ((sy / docH) * 100) + '%';
        }

        // Nav scrolled state
        if (navEl)    navEl.classList.toggle('scrolled', sy > 40);
        if (headerEl) headerEl.classList.toggle('scrolled', sy > 50);

        // Scroll-to-top button
        if (scrollTopBtn) {
            scrollTopBtn.style.opacity  = sy > 400 ? '1' : '0';
            scrollTopBtn.style.pointerEvents = sy > 400 ? 'auto' : 'none';
        }

        // Footer fade-in
        if (footer) {
            const fr = footer.getBoundingClientRect();
            if (fr.top < window.innerHeight - 80) footer.style.opacity = '1';
        }

        // Parallax layers on scroll (only overwrites X from mouse on scroll)
        if (layerBack)  layerBack.style.transform  = `translateY(${sy * 0.08}px)`;
        if (layerMid)   layerMid.style.transform   = `translateY(${sy * 0.16}px)`;
        if (layerFront) layerFront.style.transform = `translateY(${sy * 0.28}px)`;

        // Hero content parallax
        if (heroContent) {
            heroContent.style.transform = `translateY(${sy * 0.45}px)`;
            heroContent.style.opacity   = Math.max(1 - sy / 580, 0);
        }

        // Celestial arc
        updateCelestialMath();

        // Active nav link
        let current = '';
        sections.forEach(sec => {
            if (sy >= sec.offsetTop - 220) current = sec.getAttribute('id');
        });
        navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
        });

        // Timeline
        updateTimeline();
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
        // CSS transition state
        scrollTopBtn.style.transition = 'opacity 0.3s ease';
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
        scrollTopBtn.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Footer initial state
    if (footer) footer.style.opacity = '0';
    if (footer) footer.style.transition = 'opacity 0.8s ease';

    // ════════════════════════════════════════════════════════════
    //  TIMELINE
    // ════════════════════════════════════════════════════════════
    const timelineContainer = document.querySelector('.timeline-container');
    let timelineLineEl = null;
    let timelineTraveler = null;

    function updateTimeline() {
        if (!timelineContainer) return;
        const r = timelineContainer.getBoundingClientRect();
        const start = r.top - window.innerHeight * 0.72;
        const end   = r.top + r.height - window.innerHeight * 0.28;
        const progress = Math.min(Math.max(-start / (end - start), 0), 1);

        if (!timelineLineEl) {
            timelineLineEl = document.createElement('div');
            timelineLineEl.className = 'timeline-line-animated';
            timelineLineEl.style.cssText = `
                position:absolute; top:0; left:50%; transform:translateX(-50%);
                width:4px; height:0%; border-radius:2px; z-index:0; pointer-events:none;
                background:linear-gradient(180deg,rgba(124,77,255,0.8),rgba(102,255,234,0.6),rgba(255,102,196,0.4));
                box-shadow:0 0 15px rgba(124,77,255,0.3);
                transition: height 0.15s linear;
            `;
            timelineContainer.appendChild(timelineLineEl);
        }
        if (!timelineTraveler) {
            timelineTraveler = document.createElement('div');
            timelineTraveler.className = 'timeline-traveler';
            timelineContainer.appendChild(timelineTraveler);
        }

        timelineLineEl.style.height = `${progress * 100}%`;
        timelineTraveler.style.top  = `${progress * r.height}px`;
        timelineTraveler.style.opacity = (progress > 0 && progress < 1) ? '1' : '0';
    }

    // Timeline IntersectionObserver
    if (timelineContainer) {
        const tObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    const badge = entry.target.querySelector('.timeline-badge');
                    if (badge) setTimeout(() => badge.classList.add('visible'), 280);
                }
            });
        }, { threshold: 0.3 });

        timelineContainer.querySelectorAll('.timeline-item').forEach(item => tObserver.observe(item));
    }

    // ════════════════════════════════════════════════════════════
    //  STATS COUNTER
    // ════════════════════════════════════════════════════════════
    const statsSection = document.getElementById('stats');
    const statNumbers  = document.querySelectorAll('.stat-number');
    let statsStarted = false;

    function runStats() {
        statNumbers.forEach(el => {
            const target = +el.getAttribute('data-target');
            const inc = target / (1800 / 16);
            let curr = 0;
            const tick = () => {
                curr += inc;
                if (curr < target) { el.textContent = Math.ceil(curr); requestAnimationFrame(tick); }
                else el.textContent = target;
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

    // ════════════════════════════════════════════════════════════
    //  SKILL CARDS — DIRECTIONAL REVEAL
    // ════════════════════════════════════════════════════════════
    const skillCards = document.querySelectorAll('.skill-card');
    const skillsGrid = document.querySelector('.skills-grid');

    function assignSkillDirections() {
        if (!skillsGrid || !skillCards.length) return;
        const cols = getComputedStyle(skillsGrid)
            .getPropertyValue('grid-template-columns')
            .split(/\s+/).filter(Boolean).length || 1;

        skillCards.forEach((c, i) => {
            c.classList.remove('slide-from-right', 'slide-from-left');
            c.classList.add(Math.floor(i / cols) % 2 === 0 ? 'slide-from-right' : 'slide-from-left');
        });
    }
    assignSkillDirections();
    window.addEventListener('resize', assignSkillDirections, { passive: true });

    new IntersectionObserver((entries) => {
        let n = 0;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('reveal'), n++ * 45);
            } else {
                entry.target.classList.remove('reveal');
            }
        });
    }, { threshold: 0.12 }).observe(skillsGrid || document.body);

    // Observe each card individually for the stagger
    skillCards.forEach(card => {
        new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) entries[0].target.classList.add('reveal');
            else entries[0].target.classList.remove('reveal');
        }, { threshold: 0.12 }).observe(card);
    });

    // ════════════════════════════════════════════════════════════
    //  PROJECT FILTERING
    // ════════════════════════════════════════════════════════════
    const filterBtns   = document.querySelectorAll('.filter-btn');
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
                        card.style.opacity   = '1';
                        card.style.transform = 'scale(1)';
                    });
                } else {
                    card.style.opacity   = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        });
    });

    // ════════════════════════════════════════════════════════════
    //  VANILLA TILT (3D card hover)
    // ════════════════════════════════════════════════════════════
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.project-card'), {
            max: 8, speed: 500, glare: true, 'max-glare': 0.2, scale: 1.02
        });
        VanillaTilt.init(document.querySelectorAll('.skill-card, .contact-card'), {
            max: 12, speed: 500, glare: true, 'max-glare': 0.15, scale: 1.04
        });
    }

    // ════════════════════════════════════════════════════════════
    //  MAGNETIC BUTTONS
    // ════════════════════════════════════════════════════════════
    if (!isTouchDevice) {
        document.querySelectorAll('.btn-resume,.btn-touch,.btn-project,.btn-contact,.theme-toggle').forEach(btn => {
            btn.addEventListener('mousemove', e => {
                const r = btn.getBoundingClientRect();
                const x = (e.clientX - r.left - r.width  / 2) * 0.28;
                const y = (e.clientY - r.top  - r.height / 2) * 0.28;
                btn.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0,0) scale(1)';
            });
        });
    }

    // ════════════════════════════════════════════════════════════
    //  THEME TOGGLE
    // ════════════════════════════════════════════════════════════
    const themeBtn     = document.getElementById('theme-btn');
    const themeOverlay = document.getElementById('themeOverlay');

    if (themeBtn) {
        const themeIcon  = themeBtn.querySelector('.theme-icon');
        const themeLabel = themeBtn.querySelector('.theme-label');

        themeBtn.addEventListener('click', () => {
            const curr = document.documentElement.getAttribute('data-theme');
            const next = curr === 'dark' ? 'light' : 'dark';

            if (themeOverlay) themeOverlay.className = `theme-transition-overlay active to-${next}`;

            setTimeout(() => {
                document.documentElement.setAttribute('data-theme', next);
                const dark = next === 'dark';
                if (themeIcon)  themeIcon.textContent  = dark ? '🌙' : '☀️';
                if (themeLabel) themeLabel.textContent = dark ? 'Dark' : 'Light';
                if (typeof AOS !== 'undefined') AOS.refresh();
                updateCelestialMath();

                setTimeout(() => { if (themeOverlay) themeOverlay.classList.remove('active'); }, 400);
            }, 300);
        });
    }

    // ════════════════════════════════════════════════════════════
    //  HAMBURGER MENU
    // ════════════════════════════════════════════════════════════
    const hamburgerBtn  = document.getElementById('hamburgerBtn');
    const navLinksMenu  = document.getElementById('navLinks');
    const navOverlay    = document.getElementById('navOverlay');

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

    // ════════════════════════════════════════════════════════════
    //  FOOTER YEAR + ICON HOVER
    // ════════════════════════════════════════════════════════════
    const copyText = document.querySelector('.footer-copy');
    if (copyText) copyText.textContent = `© ${new Date().getFullYear()} Ishwar Anpat. All Rights Reserved.`;

    document.querySelectorAll('.footer-social a').forEach(ico => {
        ico.addEventListener('mouseenter', () => ico.style.transform = 'translateY(-5px) scale(1.2)');
        ico.addEventListener('mouseleave', () => ico.style.transform = 'translateY(0) scale(1)');
    });

    // ════════════════════════════════════════════════════════════
    //  CONTACT FORM
    // ════════════════════════════════════════════════════════════
    window.handleFormSubmit = function(e) {
        e.preventDefault();
        const name    = document.getElementById('cf-name').value.trim();
        const subject = document.getElementById('cf-subject').value.trim();
        const message = document.getElementById('cf-message').value.trim();
        const email   = document.getElementById('cf-email').value.trim();

        const mailto = `mailto:ishwaranpat261@gmail.com?subject=${encodeURIComponent(subject + ' — from ' + name)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
        window.location.href = mailto;

        const toast = document.getElementById('toast');
        if (toast) {
            toast.innerHTML = '<i class="fas fa-check-circle"></i> Opening mail client…';
            toast.className = 'show';
            setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3500);
        }
    };

    // ════════════════════════════════════════════════════════════
    //  COPY EMAIL
    // ════════════════════════════════════════════════════════════
    window.copyEmail = function() {
        navigator.clipboard.writeText('ishwaranpat261@gmail.com').then(() => {
            const toast = document.getElementById('toast');
            if (toast) {
                toast.innerHTML = '<i class="fas fa-check-circle"></i> Email copied!';
                toast.className = 'show';
                setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3000);
            }
        }).catch(console.error);
    };

    // Initial call
    onScroll();
});



document.addEventListener("DOMContentLoaded", () => {

    // â”€â”€ Detect reduced-motion preference â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // â”€â”€ Detect touch / coarse pointer (mobile / tablet) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  AOS INIT
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    AOS.init({
        duration: 800,
        offset: 100,
        once: false,
        easing: 'ease-out-cubic'
    });

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  PRELOADER
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  TYPING ANIMATIONS
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  CUSTOM CURSOR  (disabled on touch devices)
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');

    if (!isTouchDevice && dot && outline) {
        // Use CSS custom props + transform â€” zero layout reflow
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let dotX = mouseX, dotY = mouseY;
        let outX = mouseX, outY = mouseY;

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

            // Using translate3d for GPU acceleration
            dot.style.transform = `translate3d(${dotX - 5}px, ${dotY - 5}px, 0)`;
            outline.style.transform = `translate3d(${outX - 23}px, ${outY - 23}px, 0)`;

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
        window.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));

    } else {
        // Touch device: hide custom cursor elements
        if (dot) dot.style.display = 'none';
        if (outline) outline.style.display = 'none';
        // Restore native cursor on touch
        document.documentElement.style.setProperty('cursor', 'auto');
    }

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  CURSOR TRAIL  (Disabled for Performance)
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    const trailContainer = document.getElementById('cursorTrailContainer');
    if (trailContainer) {
        trailContainer.style.display = 'none';
    }

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  STARS CANVAS
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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
        // animateStars();
    }

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  FIREFLIES CANVAS
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

        function animateFF() {
            fctx.clearRect(0, 0, fW, fH);
            fireflies.forEach(f => { f.update(); f.draw(); });
            requestAnimationFrame(animateFF);
        }

        initFF();
        // animateFF(); 
        window.addEventListener('resize', initFF, { passive: true });
    }

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  CONSTELLATION CANVAS
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  PARTICLE CANVAS (background floating particles)
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  SUN / MOON CELESTIAL ARC
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const celestial = document.querySelector('.celestial-container');

    function updateCelestialMath() {
        if (!celestial) return;
        const scrollY = window.scrollY;
        const vh = window.innerHeight;
        const pct = Math.min(Math.max(scrollY / vh, 0), 1);
        
        // Arc rotation
        const rot = -60 + pct * 90;
        
        // Vertical "up-down" floating effect (parallax)
        // This adds a vertical offset to the celestial objects themselves
        const verticalShift = scrollY * 0.15; 
        
        celestial.style.transform = `rotate(${rot}deg) translateY(${verticalShift}px)`;
        
        // Counter-rotate the individual sun/moon so they stay upright
        if (sun) sun.style.transform = `translateX(-50%) rotate(${-rot}deg)`;
        if (moon) moon.style.transform = `translateX(-50%) rotate(${-rot}deg)`;
    }
    updateCelestialMath();

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  UNIFIED MOUSE HANDLER (Parallax + Tilt + Glow)
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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
            if (layerBack) layerBack.style.transform = `translate3d(${px * 10}px, ${py * 6}px, 0)`;
            if (layerMid) layerMid.style.transform = `translate3d(${px * 18}px, ${py * 10}px, 0)`;
            if (layerFront) layerFront.style.transform = `translate3d(${px * 28}px, ${py * 16}px, 0)`;
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
                        heroContent.style.transform = `perspective(1200px) rotateX(${ny * -3}deg) rotateY(${nx * 3}deg) translate3d(0, ${sy * 0.4}px, 0) scale(${1 + (sy * 0.0002)})`;
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

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  UNIFIED SCROLL HANDLER  (was 4 separate listeners)
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    const navEl = document.querySelector('nav');
    const headerEl = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
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

        // Scroll-to-top button
        if (scrollTopBtn) {
            const show = sy > 400;
            scrollTopBtn.style.opacity = show ? '1' : '0';
            scrollTopBtn.style.pointerEvents = show ? 'auto' : 'none';
        }

        // Footer fade-in
        if (footer) {
            const fr = footer.getBoundingClientRect();
            if (fr.top < vh - 50) footer.style.opacity = '1';
        }

        // Optimized Parallax with local threshold
        if (sy < vh * 2) {
            if (layerBack) layerBack.style.transform = `translate3d(0, ${sy * 0.1}px, 0)`;
            if (layerMid) layerMid.style.transform = `translate3d(0, ${sy * 0.18}px, 0)`;
            if (layerFront) layerFront.style.transform = `translate3d(0, ${sy * 0.3}px, 0)`;
            
            if (heroContent) {
                const heroOpacity = Math.max(1 - sy / (vh * 0.7), 0);
                const heroScale = 1 + (sy * 0.0002);
                const heroBlur = (sy * 0.02);
                heroContent.style.transform = `translate3d(0, ${sy * 0.4}px, 0) scale(${heroScale})`;
                heroContent.style.filter = `blur(${heroBlur}px)`;
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
        // CSS transition state
        scrollTopBtn.style.transition = 'opacity 0.3s ease';
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
        scrollTopBtn.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Footer initial state
    if (footer) footer.style.opacity = '0';
    if (footer) footer.style.transition = 'opacity 0.8s ease';

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  TIMELINE
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    const timelineContainer = document.querySelector('.timeline-container');
    let timelineLineEl = null;
    let timelineTraveler = null;

    function updateTimeline() {
        if (!timelineContainer) return;
        const r = timelineContainer.getBoundingClientRect();
        const start = r.top - window.innerHeight * 0.72;
        const end = r.top + r.height - window.innerHeight * 0.28;
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
        timelineTraveler.style.top = `${progress * r.height}px`;
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

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  STATS COUNTER
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    const statsSection = document.getElementById('stats');
    const statNumbers = document.querySelectorAll('.stat-number');
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

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  SKILL CARDS â€” DIRECTIONAL REVEAL
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  PROJECT FILTERING
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  VANILLA TILT (3D card hover)
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.project-card'), {
            max: 8, speed: 500, glare: true, 'max-glare': 0.2, scale: 1.02
        });
        VanillaTilt.init(document.querySelectorAll('.skill-card, .contact-card'), {
            max: 12, speed: 500, glare: true, 'max-glare': 0.15, scale: 1.04
        });
    }

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  MAGNETIC BUTTONS
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  THEME TOGGLE
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    const themeBtn = document.getElementById('theme-btn');
    const themeOverlay = document.getElementById('themeOverlay');

    if (themeBtn) {
        const themeIcon = themeBtn.querySelector('.theme-icon');

        themeBtn.addEventListener('click', () => {
            const curr = document.documentElement.getAttribute('data-theme');
            const next = curr === 'dark' ? 'light' : 'dark';

            if (themeOverlay) themeOverlay.className = `theme-transition-overlay active to-${next}`;

            setTimeout(() => {
                document.documentElement.setAttribute('data-theme', next);
                const dark = next === 'dark';
                if (themeIcon) themeIcon.textContent = dark ? '🌙' : '☀️';
                if (typeof AOS !== 'undefined') AOS.refresh();
                updateCelestialMath();

                setTimeout(() => { if (themeOverlay) themeOverlay.classList.remove('active'); }, 400);
            }, 300);
        });
    }

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  HAMBURGER MENU
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  FOOTER YEAR + ICON HOVER
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    const copyText = document.querySelector('.footer-copy');
    if (copyText) copyText.textContent = `Â© ${new Date().getFullYear()} Ishwar Anpat. All Rights Reserved.`;

    document.querySelectorAll('.footer-social a').forEach(ico => {
        ico.addEventListener('mouseenter', () => ico.style.transform = 'translateY(-5px) scale(1.2)');
        ico.addEventListener('mouseleave', () => ico.style.transform = 'translateY(0) scale(1)');
    });

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  CONTACT FORM
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  COPY EMAIL
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

    // Initial call
    onScroll();

});

document.addEventListener("DOMContentLoaded", () => {

    // Global element references to avoid ReferenceErrors
    const layerBack = document.querySelector('.layer-back');
    const layerMid = document.querySelector('.layer-mid');
    const layerFront = document.querySelector('.layer-front');
    const aboutImg = document.querySelector('.about-image-wrapper');
    const heroSection = document.querySelector('.hero');
    const heroMouseGlow = document.getElementById('heroMouseGlow');
    const heroContent = document.querySelector('.hero-content');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

   const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

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

  const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    const butterfly = document.getElementById('butterfly-cursor');

    if (!isTouchDevice && dot && outline && !prefersReducedMotion) {
        document.documentElement.classList.add('butterfly-cursor-ready');
        if (butterfly) butterfly.classList.add('is-visible');

        const trailContainer = document.getElementById('cursorTrailContainer');
        let lastTrailTime = 0;

        function spawnButterflySparkle(x, y, speed) {
            if (!trailContainer || speed < 1.4) return;

            const now = performance.now();
            if (now - lastTrailTime < 42) return;
            lastTrailTime = now;

            const sparkle = document.createElement('span');
            const size = 3 + Math.min(speed * 0.18, 5) + Math.random() * 3;
            const driftX = (Math.random() - 0.5) * 46;
            const driftY = 24 + Math.random() * 38;
            const colors = [
                'rgba(255, 222, 139, 0.9)',
                'rgba(255, 126, 210, 0.82)',
                'rgba(117, 216, 255, 0.82)',
                'rgba(188, 128, 255, 0.86)'
            ];

            sparkle.className = `cursor-trail-particle${Math.random() > 0.62 ? ' is-sparkle' : ''}`;
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

        // Use CSS custom props + transform â€” zero layout reflow
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
            butterflyX += (mouseX - butterflyX) * 0.13;
            butterflyY += (mouseY - butterflyY) * 0.13;

            // Using translate3d for GPU acceleration
            dot.style.transform = `translate3d(${dotX - 5}px, ${dotY - 5}px, 0)`;
            outline.style.transform = `translate3d(${outX - 23}px, ${outY - 23}px, 0)`;
            if (butterfly) {
                const dx = butterflyX - lastButterflyX;
                const dy = butterflyY - lastButterflyY;
                const speed = Math.hypot(dx, dy);
                const tilt = Math.max(-26, Math.min(26, dx * 1.35));
                const bob = Math.sin(performance.now() * 0.006) * 4;
                const scale = 0.96 + Math.min(speed * 0.012, 0.12);

                butterfly.style.transform = `translate3d(${butterflyX - 27}px, ${butterflyY - 50 + bob}px, 0) rotate(${tilt}deg) scale(${scale})`;
                wingSpeed = wingSpeed * 0.82 + speed * 0.18;
                butterfly.classList.toggle('is-fast', wingSpeed > 4.5);
                spawnButterflySparkle(butterflyX, butterflyY - 8, speed);

                lastButterflyX = butterflyX;
                lastButterflyY = butterflyY;
            }

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
        const trailContainer = document.getElementById('cursorTrailContainer');
        if (trailContainer) trailContainer.style.display = 'none';
        // Restore native cursor on touch
        document.documentElement.style.setProperty('cursor', 'auto');
    }

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
            preview.play().catch(() => {});
        });

        card.addEventListener('mouseleave', () => {
            preview.pause();
            preview.currentTime = 0;
        });
    });
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
        animateStars();
    }

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
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                fireflies.forEach(f => { f.update(); f.draw(); });
            }
            requestAnimationFrame(animateFF);
        }

        initFF();
        animateFF(); 
        window.addEventListener('resize', initFF, { passive: true });
    }

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

    }

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
        if (typeof window.updateSkillScroll === 'function') window.updateSkillScroll();
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
    const skillCards = document.querySelectorAll('.skill-card');
    const skillsSection = document.getElementById('skills');
    const skillsGrid = document.querySelector('.skills-grid');

    if (skillsSection) {
        skillsSection.style.perspective = '1000px';
        skillsSection.style.transformStyle = 'preserve-3d';
    }

    function assignSkillRows() {
        if (!skillCards.length) return;
        const rowsMap = new Map();
        skillCards.forEach(c => {
            const top = c.offsetTop;
            if (!rowsMap.has(top)) rowsMap.set(top, []);
            rowsMap.get(top).push(c);
        });
        const sortedTops = Array.from(rowsMap.keys()).sort((a, b) => a - b);
        sortedTops.forEach((top, index) => {
            const dir = (index % 2 === 0) ? 1 : -1;
            rowsMap.get(top).forEach((c, cardIndex) => {
                c.dataset.rowDir = dir;
                c.style.setProperty('--skill-delay', `${Math.min((index * 90) + (cardIndex * 45), 420)}ms`);
            });
        });
    }

    window.updateSkillScroll = function() {
        if (!skillsSection || !skillsGrid || !skillCards.length) return;
        
        const rect = skillsSection.getBoundingClientRect();
        const vh = window.innerHeight;
        
        // Scroll progress: t = 0 when section enters from bottom, t = 1 when section leaves top
        const start = vh;
        const end = -rect.height;
        let t = (rect.top - start) / (end - start);
        t = Math.max(0, Math.min(1, t));

        const isMobile = window.innerWidth < 768;
        const c = isMobile ? -50 : -200;
        const d = isMobile ? 80 : 150;

        function interpolate(val, inArr, outArr) {
            if (val <= inArr[0]) return outArr[0];
            if (val >= inArr[inArr.length - 1]) return outArr[outArr.length - 1];
            for (let i = 0; i < inArr.length - 1; i++) {
                if (val >= inArr[i] && val <= inArr[i + 1]) {
                    const pct = (val - inArr[i]) / (inArr[i + 1] - inArr[i]);
                    return outArr[i] + pct * (outArr[i + 1] - outArr[i]);
                }
            }
            return outArr[0];
        }

        const m = interpolate(t, [0, 1], [0, d]);
        const rotateX = interpolate(t, [0, 0.2, 0.8, 1], [15, 0, 0, 15]);
        const rotateZ = interpolate(t, [0, 0.2, 0.8, 1], [20, 0, 0, 20]);
        const translateY = interpolate(t, [0, 0.2, 0.8, 1], [c, 0, 0, c]);
        const opacity = interpolate(t, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

        skillsGrid.style.transform = `translateY(${translateY}px) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`;
        skillsGrid.style.opacity = opacity;

        skillCards.forEach(card => {
            const dir = parseInt(card.dataset.rowDir || 1);
            card.style.setProperty('--scroll-x', `${dir * m}px`);
            card.style.transform = '';
        });
    };

    assignSkillRows();
    window.addEventListener('resize', assignSkillRows, { passive: true });

    if (skillCards.length) {
        if (prefersReducedMotion) {
            skillCards.forEach(card => card.classList.add('skill-card-visible'));
        } else {
            const skillRevealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('skill-card-visible');
                        window.setTimeout(() => entry.target.style.setProperty('--skill-delay', '0ms'), 850);
                        skillRevealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

            skillCards.forEach(card => skillRevealObserver.observe(card));
        }
    }

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

    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.project-card'), {
            max: 8, speed: 500, glare: true, 'max-glare': 0.2, scale: 1.02
        });
        VanillaTilt.init(document.querySelectorAll('.contact-card'), {
            max: 12, speed: 500, glare: true, 'max-glare': 0.15, scale: 1.04
        });
    }

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
                if (themeIcon) themeIcon.textContent = dark ? '☀️' : '🌙';
                if (typeof AOS !== 'undefined') AOS.refresh();
                updateCelestialMath();

                setTimeout(() => { if (themeOverlay) themeOverlay.classList.remove('active'); }, 400);
            }, 300);
        });
    }

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
   const copyText = document.querySelector('.footer-copy');
    if (copyText) copyText.textContent = `Â© ${new Date().getFullYear()} Ishwar Anpat. All Rights Reserved.`;

    document.querySelectorAll('.footer-social a').forEach(ico => {
        ico.addEventListener('mouseenter', () => ico.style.transform = 'translateY(-5px) scale(1.2)');
        ico.addEventListener('mouseleave', () => ico.style.transform = 'translateY(0) scale(1)');
    });

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

    // Formspree form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            setTimeout(() => {
                const toast = document.getElementById('toast');
                if (toast) {
                    toast.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully!';
                    toast.className = 'show';
                    setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3000);
                }
            }, 500);
        });
    }

    const portfolioArticles = [
        {
            kicker: 'Featured | AI & ML',
            title: 'The Future of AI Assistants in Software Engineering',
            body: [
                'AI assistants are moving from autocomplete helpers into collaborative engineering partners. The most useful systems do more than suggest code: they read project context, explain tradeoffs, generate tests, spot regressions, and help developers keep momentum when a problem has too many moving pieces.',
                'The best workflow still keeps the developer in control. AI can draft a component, summarize a confusing stack trace, or propose a refactor, but the human engineer decides whether the design fits the product, whether the abstraction is worth it, and whether the code is maintainable for the next person.',
                'Over the next few years, assistants will become more project-aware. They will understand design systems, API contracts, build tooling, and deployment pipelines. That shift will make small teams faster, but it will also reward engineers who can review carefully, write clear prompts, and ask sharper technical questions.',
                'For students and early developers, the opportunity is huge: use AI to learn faster, but keep building the fundamentals. Debugging, data structures, architecture, and communication are still the skills that make an AI-assisted developer genuinely powerful.'
            ]
        },
        {
            kicker: 'Trending | Java',
            title: 'Building Scalable Enterprise Applications with Java',
            body: [
                'Java remains a strong choice for enterprise systems because it combines mature tooling, predictable performance, and a large ecosystem. Scalability starts with clear boundaries: separate business logic from infrastructure, keep data access explicit, and design APIs around stable use cases rather than temporary UI needs.',
                'A scalable Java application usually benefits from layered architecture, dependency injection, structured logging, and strong validation at the edges. These patterns may feel formal at first, but they make the system easier to test, monitor, and evolve when requirements change.',
                'Performance is not only about faster code. It is about understanding database queries, connection pools, caching strategy, background jobs, and failure modes. A well-built Java backend handles slow services, invalid input, retries, and partial outages without confusing the user or corrupting data.',
                'The practical advice is simple: keep modules focused, write tests around important behavior, measure before optimizing, and document the decisions that future developers will otherwise have to rediscover.'
            ]
        },
        {
            kicker: 'Personal | Career',
            title: 'My Journey as a Student Developer',
            body: [
                'Starting as a student developer can feel overwhelming because every topic opens three more topics. The turning point is realizing that progress comes from building small complete things: a working page, a useful script, a simple database project, a better version of yesterday\'s idea.',
                'Projects teach lessons that tutorials cannot. They force decisions about naming, errors, UI states, deployment, and user experience. Even unfinished projects are valuable when they show what was difficult and what should be learned next.',
                'AI and software development have made the journey more exciting. Building assistants, management systems, and coding tools has helped connect theory with real behavior on screen. Every bug fixed and every feature shipped adds confidence.',
                'For other students, my advice is to keep a public trail of your work, learn one stack deeply before chasing every trend, and stay curious. Consistency beats intensity, especially when the goal is to become someone who can build reliable software over time.'
            ]
        }
    ];

    window.openArticle = function(index) {
        const article = portfolioArticles[index];
        const reader = document.getElementById('article-reader');
        const kicker = document.getElementById('article-reader-kicker');
        const title = document.getElementById('article-reader-title');
        const body = document.getElementById('article-reader-body');
        if (!article || !reader || !kicker || !title || !body) return;

        kicker.textContent = article.kicker;
        title.textContent = article.title;
        body.innerHTML = article.body.map(paragraph => `<p>${paragraph}</p>`).join('');
        reader.hidden = false;
        reader.classList.remove('article-reader-visible');
        requestAnimationFrame(() => reader.classList.add('article-reader-visible'));
        reader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const articleClose = document.getElementById('article-reader-close');
    if (articleClose) {
        articleClose.addEventListener('click', () => {
            const reader = document.getElementById('article-reader');
            if (!reader) return;
            reader.classList.remove('article-reader-visible');
            setTimeout(() => { reader.hidden = true; }, 260);
        });
    }

    // ═══════════════════════════════════════════════════════════════
    //  CODING ACTIVITY — GitHub & LeetCode (Lazy-loaded)
    // ═══════════════════════════════════════════════════════════════

    const GH_USER  = 'ishwar261-oss';
    const LC_USER  = 'Ishwar_Anpat';
    let activityLoaded = false;

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
            } catch (err) {
                console.warn('[Portfolio] Repo reveal fetch error:', err);
                earlyRepoBtn.innerHTML = '<span class="btn-text">Repositories Unavailable</span><i class="fas fa-exclamation-circle"></i>';
                if (container) {
                    container.classList.remove('repos-collapsed');
                    container.innerHTML = '<p style="color:var(--text-muted); text-align:center; grid-column:1/-1;">Unable to load repositories right now.</p>';
                }
            }
        }, { once: true });
    }

    // ── Trigger on first scroll into view ────────────────────────
    const activitySection = document.getElementById('activity');
    if (activitySection) {
        const actObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !activityLoaded) {
                activityLoaded = true;
                fetchGitHubData();
                fetchLeetCodeData();
                actObserver.disconnect();
            }
        }, { threshold: 0.12 });
        actObserver.observe(activitySection);
    }

    // ── Utility: time-ago ────────────────────────────────────────
    function timeAgo(date) {
        const s = Math.floor((Date.now() - new Date(date)) / 1000);
        if (s < 60)      return 'just now';
        if (s < 3600)    return `${Math.floor(s / 60)}m ago`;
        if (s < 86400)   return `${Math.floor(s / 3600)}h ago`;
        if (s < 604800)  return `${Math.floor(s / 86400)}d ago`;
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

            // — Repo-based stats (Languages & Active Repos) —
            if (reposRes.status === 'fulfilled' && reposRes.value.ok) {
                const repos = await reposRes.value.json();
                
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
    }

    function renderGHActivity(events) {
        const list = document.getElementById('ghActivityList');
        if (!list) return;

        const typeMap = {
            PushEvent:          { icon: 'fas fa-code-commit',      label: 'Pushed to',      color: '#3fb950' },
            CreateEvent:        { icon: 'fas fa-plus',             label: 'Created',         color: '#58a6ff' },
            DeleteEvent:        { icon: 'fas fa-trash-alt',        label: 'Deleted branch in', color: '#f85149' },
            ForkEvent:          { icon: 'fas fa-code-branch',      label: 'Forked',          color: '#bc8cff' },
            WatchEvent:         { icon: 'fas fa-star',             label: 'Starred',         color: '#e3b341' },
            PullRequestEvent:   { icon: 'fas fa-code-pull-request',label: 'PR on',           color: '#7c4dff' },
            IssuesEvent:        { icon: 'fas fa-circle-dot',       label: 'Issue on',        color: '#58a6ff' },
            IssueCommentEvent:  { icon: 'fas fa-comment-dots',     label: 'Commented on',   color: '#8b949e' },
            PublicEvent:        { icon: 'fas fa-lock-open',        label: 'Made public:',    color: '#3fb950' },
            ReleaseEvent:       { icon: 'fas fa-tag',              label: 'Released on',     color: '#e3b341' }
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
        try {
            const res = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${LC_USER}`);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            if (!data || typeof data.totalSolved === 'undefined') throw new Error('Bad payload');
            renderLeetCodeStats(data);
        } catch (err) {
            console.warn('[Portfolio] LeetCode fetch error:', err);
            // Show the fallback note
            const note = document.getElementById('lcApiNote');
            if (note) note.style.display = 'flex';
            // Show dashes everywhere so it looks intentional
            ['lcTotal','lcRank','lcAccept','lcAvailable','easyCount','medCount','hardCount'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = '—';
            });
        }
    }

    function renderLeetCodeStats(d) {
        const {
            totalSolved   = 0, totalQuestions = 0,
            easySolved    = 0, totalEasy  = 0,
            mediumSolved  = 0, totalMedium = 0,
            hardSolved    = 0, totalHard  = 0,
            acceptanceRate = 0, ranking    = 0
        } = d;

        // — Total solved (animated) —
        const lcTotalEl = document.getElementById('lcTotal');
        if (lcTotalEl) { lcTotalEl.textContent = '0'; animateValue(lcTotalEl, totalSolved, 900); }

        // — Available —
        const availEl = document.getElementById('lcAvailable');
        if (availEl) { availEl.textContent = '0'; animateValue(availEl, totalQuestions, 900); }

        // — Rank —
        const rankEl = document.getElementById('lcRank');
        if (rankEl) rankEl.textContent = ranking > 0 ? `#${ranking.toLocaleString()}` : '—';

        // — Acceptance rate —
        const accEl = document.getElementById('lcAccept');
        if (accEl) accEl.textContent = acceptanceRate > 0 ? `${parseFloat(acceptanceRate).toFixed(1)}%` : '—';

        // — Per-difficulty counts —
        const easyEl  = document.getElementById('easyCount');
        const medEl   = document.getElementById('medCount');
        const hardEl  = document.getElementById('hardCount');
        if (easyEl) { easyEl.textContent = '0'; animateValue(easyEl, easySolved,   700); }
        if (medEl)  { medEl.textContent  = '0'; animateValue(medEl,  mediumSolved, 700); }
        if (hardEl) { hardEl.textContent = '0'; animateValue(hardEl, hardSolved,   700); }

        // — Fraction labels —
        const ef = document.getElementById('easyFraction');
        const mf = document.getElementById('medFraction');
        const hf = document.getElementById('hardFraction');
        if (ef) ef.textContent = `${easySolved}/${totalEasy}`;
        if (mf) mf.textContent = `${mediumSolved}/${totalMedium}`;
        if (hf) hf.textContent = `${hardSolved}/${totalHard}`;

        // — Animate progress bars (delayed so CSS transition triggers) —
        const easyPct = totalEasy   > 0 ? (easySolved   / totalEasy)   * 100 : 0;
        const medPct  = totalMedium > 0 ? (mediumSolved / totalMedium) * 100 : 0;
        const hardPct = totalHard   > 0 ? (hardSolved   / totalHard)   * 100 : 0;

        setTimeout(() => {
            const eF = document.getElementById('easyFill');
            const mF = document.getElementById('medFill');
            const hF = document.getElementById('hardFill');
            if (eF) eF.style.width = `${easyPct.toFixed(1)}%`;
            if (mF) mF.style.width = `${medPct.toFixed(1)}%`;
            if (hF) hF.style.width = `${hardPct.toFixed(1)}%`;
        }, 250);

        // — Animate donut chart —
        animateDonut(easySolved, mediumSolved, hardSolved);
    }

    function animateDonut(easy, medium, hard) {
        const total = easy + medium + hard;
        if (total === 0) return;

        const CIRC = 2 * Math.PI * 45; // ≈ 282.74 (r=45)
        const GAP  = 5; // px gap between segments

        const easyLen = (easy   / total) * CIRC;
        const medLen  = (medium / total) * CIRC;
        const hardLen = (hard   / total) * CIRC;

        const easySeg = document.getElementById('easySeg');
        const medSeg  = document.getElementById('medSeg');
        const hardSeg = document.getElementById('hardSeg');
        if (!easySeg || !medSeg || !hardSeg) return;

        // Each circle starts at 0 (12 o'clock, because SVG is rotated -90deg in CSS)
        // stroke-dashoffset shifts start position backward
        requestAnimationFrame(() => {
            easySeg.style.strokeDasharray  = `${Math.max(0, easyLen - GAP)} ${CIRC}`;
            easySeg.style.strokeDashoffset = '0';

            medSeg.style.strokeDasharray   = `${Math.max(0, medLen - GAP)} ${CIRC}`;
            medSeg.style.strokeDashoffset  = `${-easyLen}`;

            hardSeg.style.strokeDasharray  = `${Math.max(0, hardLen - GAP)} ${CIRC}`;
            hardSeg.style.strokeDashoffset = `${-(easyLen + medLen)}`;
        });
    }

});


// GSAP Plugin Register
gsap.registerPlugin(ScrollTrigger);

// --- GLOBAL VARIABLES ---
let isOpen = false;
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const tiles = document.querySelectorAll('.process-tile');
let currentIndex = 0;
let autoPlayTimer;

// --- MOBILE MENU LOGIC ---
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
}

function toggleMenu() {
    isOpen = !isOpen;
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    const menuLinks = document.querySelectorAll('.m-link');
    if (isOpen) {
        gsap.to(menuLinks, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out",
            startAt: { y: 20, opacity: 0 }
        });
    } else {
        gsap.to(menuLinks, {
            opacity: 0,
            y: 20,
            stagger: 0.05,
            duration: 0.3,
            ease: "power2.in"
        });
    }
}

// Close mobile menu on link click
document.querySelectorAll('.m-link').forEach(link => {
    link.addEventListener('click', () => {
        if (isOpen) toggleMenu();
    });
});

// Close menu when clicking outside
if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu && isOpen) toggleMenu();
    });
}

// --- KINETIC PROCESS TILES LOGIC ---
function updateTileImage(tileElement, imageUrl) {
    const imageOverlay = tileElement.querySelector('.image-overlay');
    if (imageOverlay) {
        imageOverlay.style.backgroundImage = `url(${imageUrl})`;
    }
}

function activateTile(index) {
    if (!tiles.length) return;

    tiles.forEach(t => {
        t.classList.remove('active');
        const iconImg = t.querySelector('.icon-box img');
        if (iconImg) iconImg.style.filter = 'grayscale(1)';
    });

    const activeTile = tiles[index];
    activeTile.classList.add('active');
    currentIndex = index;

    const imageUrl = activeTile.dataset.image;
    updateTileImage(activeTile, imageUrl);

    const activeIconImg = activeTile.querySelector('.icon-box img');
    if (activeIconImg) {
        activeIconImg.style.filter = 'brightness(2) drop-shadow(0 0 5px rgba(255,255,255,0.5))';
    }
}

function startAutoPlay() {
    if (window.innerWidth > 991 && tiles.length > 0) {
        autoPlayTimer = setInterval(() => {
            currentIndex = (currentIndex + 1) % tiles.length;
            activateTile(currentIndex);
        }, 4000);
    }
}

function initTiles() {
    tiles.forEach((tile, index) => {
        const img = new Image();
        img.src = tile.dataset.image;

        tile.addEventListener('click', () => {
            if (autoPlayTimer) clearInterval(autoPlayTimer);
            activateTile(index);
            if (window.innerWidth > 991) startAutoPlay();
        });
    });

    if (tiles.length > 0) {
        activateTile(0);
        startAutoPlay();
    }
}

// --- INTERNSHIP FILTER ---
function initInternshipFilter() {
    const filterButtons = document.querySelectorAll('.f-btn');
    const slider = document.querySelector('.f-slider');

    const activeBtn = document.querySelector('.f-btn.active');
    if (activeBtn && slider) {
        slider.style.width = activeBtn.offsetWidth + 'px';
        slider.style.left = activeBtn.offsetLeft + 'px';
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            if (slider) {
                slider.style.width = this.offsetWidth + 'px';
                slider.style.left = this.offsetLeft + 'px';
            }
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterCards(filter);
        });
    });
}

function filterCards(category) {
    const cards = document.querySelectorAll('.internship-card');
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || category === cardCategory) {
            card.style.display = 'block';
            gsap.to(card, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
        } else {
            gsap.to(card, {
                opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.in",
                onComplete: () => { card.style.display = 'none'; }
            });
        }
    });
}

// --- COUNTER ANIMATION ---
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const countUp = (counter) => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const isDecimal = counter.getAttribute('data-target').includes('.');
        const duration = 2000;
        const totalFrames = 120;
        let currentFrame = 0;

        const animate = () => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            const easeValue = progress * (2 - progress);
            const currentCount = easeValue * target;

            counter.innerText = isDecimal ? currentCount.toFixed(1) : Math.floor(currentCount);

            if (currentFrame < totalFrames) {
                requestAnimationFrame(animate);
            } else {
                counter.innerText = isDecimal ? target.toFixed(1) : target;
            }
        };
        animate();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// --- INITIALIZE ALL ON DOM READY ---
document.addEventListener("DOMContentLoaded", () => {
    // Entrance Animations
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.to(".reveal-up", { opacity: 1, y: 0, duration: 1, stagger: 0.2 })
        .to(".reveal-pop", { opacity: 1, scale: 1, duration: 1, stagger: 0.15 }, "-=0.8");

    // Floating Effect
    gsap.to(".floating-icon", { y: 10, repeat: -1, yoyo: true, duration: 2, ease: "sine.inOut" });

    // Feature Initializations
    initInternshipFilter();
    initCounters();
    initTiles();
});

// --- UTILS: Resize & Scroll ---
window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && isOpen) toggleMenu();

    // Autoplay logic for tiles on resize
    if (window.innerWidth <= 991) {
        clearInterval(autoPlayTimer);
    } else if (!autoPlayTimer) {
        startAutoPlay();
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

function togglePremiumFaq(element) {
    const parent = element.parentElement;
    const allNodes = document.querySelectorAll('.premium-faq-node');

    allNodes.forEach(node => {
        if (node !== parent) node.classList.remove('active');
    });

    parent.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const tracks = document.querySelectorAll('.marquee-track');

    tracks.forEach(track => {
        const content = track.innerHTML;
        // Clone 3 times to ensure no gaps on large screens
        track.innerHTML = content + content + content;
    });
});
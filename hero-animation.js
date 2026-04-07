gsap.set([".hero-logo-img", ".hero-logo-nome .brand", ".hero-logo-nome .studio"], {
    y: -120,
    opacity: 0
});

gsap.set([".hero-subtitle", ".hero-subtitle2", ".hero-contact-btn"], {
    opacity: 0
});

const tl = gsap.timeline({ defaults: { ease: "bounce.out" } });

tl.to(".hero-logo-img", {
    y: 0,
    opacity: 1,
    duration: 1.2
})
.to(".hero-logo-nome .brand", {
    y: 0,
    opacity: 1,
    duration: 1
}, "-=0.9")
.to(".hero-logo-nome .studio", {
    y: 0,
    opacity: 1,
    duration: 1
}, "-=0.8")
.to(".hero-subtitle", {
    opacity: 1,
    duration: 0.8,
    ease: "power2.out"
}, "-=0.3")
.to(".hero-subtitle2", {
    opacity: 1,
    duration: 0.8,
    ease: "power2.out"
}, "-=0.4")
.to(".hero-contact-btn", {
    opacity: 1,
    duration: 0.8,
    ease: "power2.out"
}, "-=0.4");

// Floating bouncing logos
document.querySelectorAll('.hero-float-logo').forEach((logo, i) => {
    const hero = document.querySelector('.hero');
    const speed = 1.5 + i * 0.5;

    let x = i === 0 ? 40 : hero.offsetWidth - 180;
    let y = i === 0 ? 60 : hero.offsetHeight - 200;
    let dx = (1.2 + i * 0.3) * speed;
    let dy = (0.8 + i * 0.4) * speed;

    function animate() {
        const maxX = hero.offsetWidth - logo.offsetWidth;
        const maxY = hero.offsetHeight - logo.offsetHeight;

        x += dx;
        y += dy;

        if (x <= 0 || x >= maxX) {
            dx *= -1;
            x = Math.max(0, Math.min(x, maxX));
        }
        if (y <= 0 || y >= maxY) {
            dy *= -1;
            y = Math.max(0, Math.min(y, maxY));
        }

        logo.style.left = x + 'px';
        logo.style.top = y + 'px';

        requestAnimationFrame(animate);
    }

    animate();
});

// Navegador2 reveal effect - circle follows mouse
const wrapper = document.querySelector('.hero-navegador-wrapper');
const nav2 = document.querySelector('.hero-navegador2-img');

if (wrapper && nav2) {
    wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        nav2.style.clipPath = `circle(80px at ${x}px ${y}px)`;
    });

    wrapper.addEventListener('mouseleave', () => {
        nav2.style.clipPath = 'circle(0px at 50% 50%)';
    });
}

// Mobile reveal effect - circle follows mouse
const mobileWrapper = document.querySelector('.hero-mobile-wrapper');
const mobile2 = document.querySelector('.hero-mobile2-img');

if (mobileWrapper && mobile2) {
    mobileWrapper.addEventListener('mousemove', (e) => {
        const rect = mobileWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mobile2.style.clipPath = `circle(80px at ${x}px ${y}px)`;
    });

    mobileWrapper.addEventListener('mouseleave', () => {
        mobile2.style.clipPath = 'circle(0px at 50% 50%)';
    });
}

// Program2 reveal effect - circle follows mouse
const programWrapper = document.querySelector('.dev-program-wrapper');
const prog2 = document.querySelector('.dev-program2-img');

if (programWrapper && prog2) {
    programWrapper.addEventListener('mousemove', (e) => {
        const rect = programWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        prog2.style.clipPath = `circle(80px at ${x}px ${y}px)`;
    });

    programWrapper.addEventListener('mouseleave', () => {
        prog2.style.clipPath = 'circle(0px at 50% 50%)';
    });
}

// Scroll-driven hero video zoom-out animation
gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-video", {
    scale: 0.7,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
    }
});

gsap.to(".hero-overlay", {
    scale: 0.7,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});

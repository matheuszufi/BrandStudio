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

const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (!isMobile) {
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
}

// Scroll-driven etapas slide animations
const etapas = document.querySelectorAll('.etapa');

etapas.forEach((etapa, i) => {
    if (isMobile) {
        gsap.fromTo(etapa,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: etapa,
                    start: "top 95%",
                    end: "top 75%",
                    scrub: 1,
                }
            }
        );
    } else {
        const fromLeft = i % 2 === 0;
        const xStart = fromLeft ? -100 : 100;

        gsap.fromTo(etapa,
            { xPercent: xStart, opacity: 0 },
            {
                xPercent: 0,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: etapa,
                    start: "top 95%",
                    end: "top 60%",
                    scrub: 1.5,
                }
            }
        );
    }
});

// Scroll-driven desenvolvimento exit animation (scale down)
if (!isMobile) {
    gsap.to(".desenvolvimento", {
        scale: 0.7,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
            trigger: ".desenvolvimento",
            start: "bottom bottom",
            end: "bottom top",
            scrub: 1.5,
            pin: true,
        }
    });
}

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

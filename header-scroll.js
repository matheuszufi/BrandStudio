// Header começa invisível, aparece ao rolar para baixo com fade
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto';
    } else {
        header.style.opacity = '0';
        header.style.pointerEvents = 'none';
    }
});

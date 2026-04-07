// Header: conteúdo sempre visível, background aparece ao rolar
const header = document.querySelector('header');
const headerLogo = document.querySelector('.header-logo');

window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

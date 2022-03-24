const menu = document.getElementById('menu-group');
const mobileMenu = document.querySelector('.mobile-links');
const sections = document.querySelectorAll('.section')


menu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    mobileMenu.classList.toggle('d-none');
})

window.addEventListener('scroll', (e) => {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight
    const scrollHeight = window.scrollY
    console.log(scrollHeight)
    if ( scrollHeight <= '1') {
        header.classList.remove('scrolled');
    } else{ 
        header.classList.add('scrolled');
    }
})


ScrollReveal().reveal('.security-section', {delay:100});
ScrollReveal().reveal('.savings-section', {delay:100});
ScrollReveal().reveal('.piggybank', {delay:200});
ScrollReveal().reveal('.safelock', {delay:200});
ScrollReveal().reveal('.targetSavings', {delay:200});
ScrollReveal().reveal('.flexNaira', {delay:200});
ScrollReveal().reveal('.invest-section', {delay:100});
ScrollReveal().reveal('.SOTM-section', {delay:100});
ScrollReveal().reveal('.customers', {delay:100});
ScrollReveal().reveal('.features-section', {delay:100});
ScrollReveal().reveal('.footer-section', {delay:100});

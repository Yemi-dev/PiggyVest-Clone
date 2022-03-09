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
    if ( scrollHeight <= '1') {
        header.classList.remove('scrolled');
    } else{ 
        header.classList.add('scrolled');
    }
})


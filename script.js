const menuIcon = document.querySelector('.ri-menu-line');
const menuBar = document.querySelector('.menu');
menuIcon.addEventListener('click', () => {
    menuBar.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    menuBar.classList.remove('active');
    const navbar = document.querySelector('.header-section');
    if (scrollY > 20) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
})
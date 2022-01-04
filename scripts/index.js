const hamburger = document.querySelector('.hamburger')
const silder_nav = document.querySelector('.silder-nav')
const logo = document.querySelector('.slider-menu_logo')

const close = document.querySelector('.close-button')


hamburger.addEventListener('click', () => {
    silder_nav.style.zIndex = '5';
    logo.style.display = 'flex';
    logo.style.zIndex = '6';
    silder_nav.style.transform = 'scale(1)'
})

close.addEventListener('click', () => {
    silder_nav.style.zIndex = '-2';
    logo.style.display = 'none';
    logo.style.zIndex = '-2';
    silder_nav.style.transform = 'scale(0)'
})
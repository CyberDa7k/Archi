AOS.init({
    once: true

});
const menBtn = document.querySelector(".fa-solid");
const navbar = document.getElementById("navbar");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo-archi")
const menBtn2 = document.querySelector(".menu-button");
const body = document.querySelector("body")

const offset = 50;
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}
window.addEventListener("scroll", () => {
    if (pageYOffset > offset) {
        navbar.classList.add('navbar-active')
    } else {
        navbar.classList.remove('navbar-active')
    }

})
$('.owl-one').owlCarousel({
    margin: 30,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true,
    center: true,
    items: 1,
    duration: '3000',
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        480: { items: 1 }, // from zero to 480 screen width 4 items
        768: { items: 1 }, // from 480 screen widthto 768 6 items
        1024: {
            items: 1 // from 768 screen width to 1024 8 items
        }
    },
})

menBtn.addEventListener('click', () => {
    menu.classList.add('menu-open')
    logo.classList.add('logo-opacity')
    body.classList.add('body-owerflow')

});
menBtn2.addEventListener('click', () => {
    menu.classList.remove('menu-open')
    logo.classList.remove('logo-opacity')
    body.classList.remove('body-owerflow')
});

$('.owl-two').owlCarousel({
    dots: true,
    responsive: {
        100: { items: 1 }, // from zero to 480 screen width 4 items
        768: { items: 2 }, // from 480 screen widthto 768 6 items
        1024: {
            items: 4 // from 768 screen width to 1024 8 items
        }
    },
})
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', () => toggleMenu(desktopMenu))
menuHamIcon.addEventListener('click', () => toggleMenu(mobileMenu))

function toggleMenu(menu) {
    menu.classList.toggle('inactive')
}

// Código usado en el curso.
// function toggleDesktopMenu() {
//     desktopMenu.classList.toggle('inactive')
// }

// function toggleMobileMenu() {
//     mobileMenu.classList.toggle('inactive')
// }
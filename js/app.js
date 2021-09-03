const navbar = document.getElementById(`nav`);
const navToggler = document.getElementById(`nav-toggler`);

navToggler.addEventListener(`click`, () => {
    navbar.classList.toggle(`show`);
})
const navToggle = document.querySelector('.mobile-navigation-toggle');
const headerNav = document.querySelector('.header-nav');
const primaryHeader = document.querySelector('.primary-header');

navToggle.addEventListener("click", () =>
{
    headerNav.hasAttribute('data-visible') ? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);
    headerNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
})
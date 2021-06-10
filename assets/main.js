const mediaDesktopQuery = window.matchMedia('(min-width: 1024px)');
const mediaTabletQuery = window.matchMedia('(max-width: 1024px)');
const mediaPhoneQuery = window.matchMedia('(max-width: 768px)');

const scrollTrigger = 100;

const headerElement = document.getElementById("header");
const headerLogoElement = document.querySelector("#header .header-logo"); 
const navbarMenuElement = document.querySelector("#header .navbar-menu"); 

window.onscroll = function() {

    if ((window.scrollY > scrollTrigger || window.pageYOffset > scrollTrigger) && mediaDesktopQuery.matches) {
        headerElement.style.backgroundColor = "#FFFFFF";
        // headerElement.style.position = "sticky";
        headerElement.classList.add('p-sticky');
        headerElement.classList.remove('p-absolute');
        headerElement.style.padding = "0px 5%";
        headerElement.style.color = "#262626";

        headerLogoElement.style.borderRadius = "0px";

    } else if ((window.scrollY > scrollTrigger || window.pageYOffset > scrollTrigger) && mediaTabletQuery.matches) {
        headerElement.style.backgroundColor = "#FFFFFF";
        // headerElement.style.position = "sticky";
        headerElement.classList.add('p-sticky');
        headerElement.classList.remove('p-absolute');
        headerElement.style.padding = "0px 5%";
        headerElement.style.color = "#262626";

        headerLogoElement.style.borderRadius = "0px";

        navbarMenuElement.style.top = "78px";
        navbarMenuElement.style.color = "#FFFFFF";

    } else if ((window.scrollY <= scrollTrigger || window.pageYOffset <= scrollTrigger) && mediaTabletQuery.matches) {
        headerElement.style.backgroundColor = "transparent";
        // headerElement.style.position = "absolute";
        headerElement.classList.add('p-absolute');
        headerElement.classList.remove('p-sticky');
        headerElement.style.padding = "30px 5%";
        headerElement.style.color = "#FFFFFF";

        headerLogoElement.style.borderRadius = "5px";
        navbarMenuElement.style.top = "130px";
    } else {
        headerElement.style.backgroundColor = "transparent";
        // headerElement.style.position = "absolute";
        headerElement.classList.add('p-absolute');
        headerElement.classList.remove('p-sticky');
        headerElement.style.padding = "30px 5%";
        headerElement.style.color = "#FFFFFF";

        headerLogoElement.style.borderRadius = "5px";
    }
}
  
// Mobile Menu
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");

mobileMenuIcon.addEventListener("click", mobileMenu);

let showMenu = false;

function mobileMenu() {

    if (showMenu == false) {
        navbarMenuElement.style.left = "0";
        showMenu = true;

    } else {
        navbarMenuElement.style.left = "-100%";
        showMenu = false;
    }
}
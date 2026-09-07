const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-link");
const pageButtons = document.querySelectorAll("[data-page]");
const navbar = document.querySelector(".navbar");
const menuButton = document.getElementById("menuButton");


/* ========================================
   CHANGE TAB
======================================== */

function showPage(pageName) {

    pages.forEach((page) => {

        page.classList.remove("active-page");

    });


    const targetPage = document.getElementById(pageName);

    if (targetPage) {

        targetPage.classList.add("active-page");

    }


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.dataset.page === pageName) {

            link.classList.add("active");

        }

    });


    navbar.classList.remove("open");


    /*
        Update URL hash without reloading
    */

    history.replaceState(
        null,
        "",
        "#" + pageName
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ========================================
   NAV LINKS
======================================== */

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const pageName = link.dataset.page;

        showPage(pageName);

    });

});


/* ========================================
   BUTTONS
======================================== */

pageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const pageName = button.dataset.page;

        showPage(pageName);

    });

});


/* ========================================
   MOBILE MENU
======================================== */

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("open");

});


/* ========================================
   CURSOR GLOW
======================================== */

const glow = document.querySelector(".cursor-glow");

window.addEventListener("pointermove", (event) => {

    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";

});


/* ========================================
   OPEN PAGE FROM URL HASH
======================================== */

const startingPage =
    window.location.hash.replace("#", "");

if (
    startingPage &&
    document.getElementById(startingPage)
) {

    showPage(startingPage);

} else {

    showPage("home");

}


/* ========================================
   YEAR
======================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();
function toggleMenu() {
    document.getElementById("sideMenu")
        .classList.toggle("active");
}

function toggleSearch() {
    document.querySelector(".search-content")
        .classList.toggle("show");
}

function toggleLanguage() {
    document.querySelector(".language-content")
        .classList.toggle("show");
}

document.addEventListener("click", function(e){

    const menu = document.getElementById("sideMenu");

    if (
        !e.target.closest("#sideMenu") &&
        !e.target.closest(".menu-icon")
    ) {
        menu.classList.remove("active");
    }

    if (!e.target.closest(".language-dropdown")) {
        document.querySelector(".language-content")
            ?.classList.remove("show");
    }

    if (!e.target.closest(".search-box")) {
        document.querySelector(".search-content")
            ?.classList.remove("show");
    }
});

function toggleMenu() {
    document.getElementById("sideMenu")
        .classList.toggle("active");
}

function toggleSearch() {}

function toggleLanguage() {}

document.addEventListener("click", function(e){

    const menu = document.getElementById("sideMenu");

    if (
        !e.target.closest("#sideMenu") &&
        !e.target.closest(".icon-box")
    ) {
        menu.classList.remove("active");
    }

});

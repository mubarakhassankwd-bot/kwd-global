function toggleMenu() {
    document.querySelector(".dropdown-content")
        .classList.toggle("show");
}
function toggleSearch() {
    document.querySelector(".search-content")
        .classList.toggle("show");
}
function toggleLanguage() {
    document.querySelector(".language-content")
        .classList.toggle("show");
}
document.addEventListener("click", function(event) {

    if (!event.target.closest(".dropdown")) {
        document.querySelector(".dropdown-content")
            .classList.remove("show");
    }

    if (!event.target.closest(".language-dropdown")) {
        document.querySelector(".language-content")
            .classList.remove("show");
    }

    if (!event.target.closest(".search-box")) {
        document.querySelector(".search-content")
            .classList.remove("show");
    }

});

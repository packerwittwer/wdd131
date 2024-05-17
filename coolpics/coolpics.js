const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
    const menu = document.querySelector(".menu-list");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);
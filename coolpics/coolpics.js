// document.addEventListener("DOMContentLoaded", () => { // this will wait for the DOM to be ready before loading the script
// })


const menuButton = document.querySelector(".menu-button");
const menuList = document.querySelector(".menu-list");
let imageSource;

function toggleMenu() {
    menuList.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 400) { //I like it a little smaller so it switches with the menu button
        menuList.classList.remove("hide");
    } else {
        menuList.classList.add("hide");
    }
}

window.addEventListener('resize', handleResize);

function viewerTemplate(picture, altText) {
    return `<div class="viewer">
                <button class="close-viewer">X</button>
                <img src="${picture}" alt="${altText} ">
            </div>`
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;

	// get the src attribute from that element and 'split' it on the "-"
    imageSource =clickedElement.getAttribute("src").split("-");

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const largeImage = imageSource[0] + "-full.jpeg";

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    const viewer = document.createElement("div");
    viewer.classList.add("viewer");
    viewer.innerHTML = viewerTemplate(largeImage, clickedElement.getAttribute("alt"));
    document.body.insertAdjacentElement("afterbegin", viewer);

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    
    function closeViewer() {
        const closeButton = document.querySelector(".close-viewer");
        viewer.remove();
    }

}

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", viewHandler)
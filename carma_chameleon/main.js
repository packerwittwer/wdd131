import vehicles from "./vehicles.mjs"

const intButton = document.getElementById('inv-button')

intButton.addEventListener('click', function() {
    window.location.href = 'inventory.html'
})
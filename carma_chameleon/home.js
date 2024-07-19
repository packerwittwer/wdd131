import vehicles from "./vehicles.mjs"
import inventoryBoxTemplate from "./template.js"
// import filterVehicles from "./inventory.js"

const invButton = document.getElementById('inv-button')

const carSection = document.getElementById('inventory')

invButton.addEventListener('click', function() {
    window.location.href = 'inventory.html'
})

// search button stuff
let searchButton = document.getElementById('search-button')

searchButton.addEventListener('click', function(event) {
    event.preventDefault()
    let searchText = document.getElementById('search').value.toLowerCase();
    let filteredVehicles = filterVehicles(searchText);
    carSection.innerHTML = '';

    filteredVehicles.forEach(function(vehicle) {
        carSection.innerHTML += inventoryBoxTemplate(vehicle);
    });
})

function filterVehicles(query) {
    let filteredVehicles = vehicles.filter(vehicle =>
                            vehicle.year.includes(query) ||
                            vehicle.make.toLowerCase().includes(query) ||
                            vehicle.model.toLowerCase().includes(query) ||
                            vehicle.description.toLowerCase().includes(query));
    
    filteredVehicles.sort();
        
    return filteredVehicles;
}
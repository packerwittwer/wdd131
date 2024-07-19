import vehicles from "./vehicles.mjs"
import inventoryBoxTemplate from "./template.js"

const carSection = document.getElementById('inventory');
const rentalSection = document.getElementById('submission-box');
const rentalBox = document.getElementById('rental-and-payment');

document.addEventListener('DOMContentLoaded', function() {
    vehicles.forEach(vehicle => {
        carSection.innerHTML += inventoryBoxTemplate(vehicle);
    })
})


// search button stuff
let searchButton = document.getElementById('search-button')

searchButton.addEventListener('click', function(event) {
    event.preventDefault();
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

if (true) {
    console.log('It worked :)')
}



const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function() {
    let name = document.getElementById('rental-name').value;
    let email = document.getElementById('email').value;
    let carID = document.getElementById('id').value;
    let rentalLength = document.getElementById('rental-length').value;

    let rentalInfo = {
        name,
        email,
        carID,
        rentalLength
    };
    carSection.innerHTML = '';
    rentalBox.innerHTML = '';
    submissionMessage(rentalInfo);
})

function submissionMessage(rentalInfo) {
    rentalSection.innerHTML =  `Thank you ${rentalInfo.name}! You've rented the ${rentalInfo.carID} for ${rentalInfo.rentalLength} days. Confirmation will bet sent to you at ${rentalInfo.email}`
}
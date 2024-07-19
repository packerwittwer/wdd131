export default function inventoryBoxTemplate(vehicle) {
    return `<div class="inventory-box">
                <img src="${vehicle.image}" alt="${vehicle.image_alt}">
                <div class="car-info">
                    <p>Year: ${vehicle.year}</p>
                    <p>Make: ${vehicle.make}</p>
                    <p>Model: ${vehicle.model}</p>
                    <p>MPG: ${vehicle.mpg}</p>
                    <p>$${vehicle.cost_per_day}/Day</p>
                    <p class="description">Description: ${vehicle.description}</p>
                </div>
            </div>
            <br>`
}
import { submissionTemplate, participantTemplate } from "./templates.js";

let participantCount = 1;
var participantSection = document.querySelector('.participants')

let button = document.getElementById('add')
button.addEventListener('click', () => {
    participantCount = participantTemplate(participantCount)
});


const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); //prevent default submission behavior

    //create an array tha contains every fee on the page
    let feeInputs = document.querySelectorAll('input[name="fee"]');
    feeInputs = [...feeInputs];

    //get the total fee
    let totalFee = 0;
    feeInputs.forEach(fee => {
        totalFee += Number(fee.value);
    });

    //hide the form
    form.classList.add('hide');

    //get the adult name
    const adultNameElement = document.getElementById('adult_name');
    const adultName = adultNameElement.value;

    submissionTemplate({
        adultName,
        participantCount,
        totalFee
    });
})
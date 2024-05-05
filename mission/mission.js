// select the select element
const themeSelect = document.getElementById('theme');

// add event listener, listening for the change and calling the changeTheme function
themeSelect.addEventListener('change', changeTheme);

// changeTheme function. Takes an event as the parameter to trigger the function
function changeTheme(event) {
    const selectedTheme = event.target.value;
    // remove the current theme and add the currently selected theme
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(selectedTheme);

    const logo = document.querySelector('.logo');
    // if the value is dark, set the logo to white, otherwise set it to blue
    if (selectedTheme === 'dark') {
        logo.src = 'byui-logo_white.png'
    } else {
        logo.src = 'byui-logo_blue.webp'
    }
}
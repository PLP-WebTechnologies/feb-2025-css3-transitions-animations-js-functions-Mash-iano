//Store user preference
function setUserPreference(color) {
    localStorage.setItem('buttonColor', color); // Save color
}

//Get the user preference
function getUserPreference() {
    let color = localStorage.getItem('buttonColor');
    if (color) {
        document.querySelector("button").style.backgroundColor = color; // Apply color
    }
}

//Set event listener
document.querySelector("button").addEventListener("click", function() {
    let newColor = prompt("Enter your preferred button color:", "red");
    if (newColor) {
        setUserPreference(newColor); // Store the color
        document.querySelector("button").style.backgroundColor = newColor; // Change the button color
    }
});

//Retrieve and apply user preference
window.onload = function() {
    getUserPreference();
};

//Trigger animation on button click
document.querySelector("button").addEventListener("click", function() {
    let button = document.querySelector("button");

    //Reset animation
    button.style.animation = 'none';
    //Trigger reflow (necessary to restart animation)
    button.offsetHeight; // This forces a reflow, and the animation is restarted.
    //Apply animation
    button.style.animation = 'buttonAnimation 1s infinite';
});

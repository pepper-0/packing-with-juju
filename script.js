/* ALL ELEMENTS */
    // buttons and objects
const startButton = document.getElementById('start-button');

    // divs and bodies
const startContainer = document.getElementById("start-screen");
const homeContainer = document.getElementById("home-screen");

/* EVENT LISTENERS */
startButton.addEventListener('click', startGame);

/* FUNCTIONS */
function startGame() {
    startContainer.style.display = "none";
    homeContainer.style.display = "inline-block";
}
/* ALL ELEMENTS */
    // buttons and objects
const startButton = document.getElementById('start-button');
const computer = document.getElementById('');

const rainJacket = document.getElementById('rain-jacket');
const sweater = document.getElementById('sweater');
const dress = document.getElementById('dress');
const onesie = document.getElementById('onesie');
const spa = document.getElementById('spa');
const hikingBoots = document.getElementById('hiking-boots');
const sandals = document.getElementById('sandals');
const journal = document.getElementById('journal');
const camera = document.getElementById('camera');
const waterBottle = document.getElementById('water-bottle');
const headphones = document.getElementById('headphones');
const sunscreen = document.getElementById('sunscreen');
const toothbrushPaste = document.getElementById('toothbrush-paste');
const essentials = document.getElementById('essentials');
const sunglasses = document.getElementById('sunglasses');

    // divs and bodies
const startContainer = document.getElementById("start-screen");
const homeContainer = document.getElementById("home-screen");
const levelContainer = document.getElementById("level-screen");

const closetSection = document.getElementById('closet-section');
const deskSection = document.getElementById('desk-section');
const vanitySection = document.getElementById('vanity-section');

/* EVENT LISTENERS */

/* VARIABLES */
var currentLevel = -1;

/* FUNCTIONS */
function showHome() {
    console.log("Game started or back to home screen");
    startContainer.style.display = "none";
    homeContainer.style.display = "flex";
    levelContainer.style.display = "none"
}

function chooseLevel(levelNum) {
    /*
    0: hiking
    1: resort
    2: country
    */
   currentLevel = levelNum;
   if (levelNum === 0) {
        showLevel();
        playHiking();
   } else if (levelNum === 1) {
        showLevel();
        playResort();
   } else if (levelNum === 2) {
        showLevel();
        playCountry();
   }
}

function showLevel() {
    startContainer.style.display = "none";
    homeContainer.style.display = "none";
    levelContainer.style.display = "flex";
}

function playHiking() {
    console.log("playing hiking level");
    var backpackItems = {rainJacket, sweater, onesie, hikingBoots, toothbrushPaste, essentials};
    const backpackCapacity = 7;
    var backpackFill = 0;

    var toteItems = {journal, camera, waterBottle, headphones, sunscreen, sunglasses};
    const toteCapacity = 6;
    var toteFill = 0;
}

function playResort() {
    console.log("playing resort level");
    var luggageItems = {dress, spa, onesie, sandals, toothbrushPaste, essentials}
    const luggageCapacity = 6;
    var luggageFill = 0;

    var miniBagItems = {journal, sunscreen, sunglasses};
    const miniBagCapacity = 3;
    var miniBagFill = 0;
}

function playCountry() {
    console.log("playing country level");
    var backpackItems = {sweater, dress, onesie, sandals}
    const backpackCapacity = 4;
    var backpackFill = 0;

    var toteItems = {journal, camera, waterBottle, sunscreen, toothbrushPaste, essentials, sunglasses};
    toteCapacity = 7;
    var toteFill = 0;
}
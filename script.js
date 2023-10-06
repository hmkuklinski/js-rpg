let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"]; //want to start it as an array to later add elements

const button1 = document.querySelector("#button1"); // go to store
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

//initialize the buttons
button1.onclick = goStore; //calls the goStore function
button2.onclick = goCave;
button3.onclick = fightDragon;

/*
function functionName() {
   console.log("This is a basic function");
}
*/
function goTown () {
    button1.innerText = "Go to Store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore; 
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"store\".";

}

function goStore(){
    //changes the button's text 
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";

    //changes the onclick location for the buttons to new functions
    button1.onclick = buyHealth; 
    button2.onclick = buyWeapon;
    button3.onclick = goTown;

    text.innerText = "You enter the store"; //changes the text in the game window
}

function goCave() {
    console.log("Going to the cave");
}

function fightDragon() {
    console.log("Fighting the dragon");
}

function buyHealth() {

}

function buyWeapon () {

}


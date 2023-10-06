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

const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions" : [goStore, goCave, fightDragon], 
        text: "You are in the town square. You see a sign that says \"store\".";
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions" : [buyHealth, buyWeapon, goTown],
        text: "You enter the store";
    }
];

//initialize the buttons
button1.onclick = goStore; //calls the goStore function
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0]; 
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = "You are in the town square. You see a sign that says \"store\".";
}

function goTown () {
    update(locations[0]);
    //passes the locations array as parameter: 1st element in array (index 0)

}

function goStore(){
    update(locations[1]);
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


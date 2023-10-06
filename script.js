let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0; //corresponds to index in weapons array
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

const weapons = [
    {
        name: "stick",
        power: 5
    }, 
    {
        name: "dagger",
        power: 30
    },
    {
        name: "claw hammer",
        power: 50
    },
    {
        name: "sword",
        power: 100
    }
];

const monsters = [
    {
        name: "slime", 
        level: 2, 
        health: 15
    },
    {
        name: "fanged beast",
        level: 8,
        health: 50
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    }
];

const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions" : [goStore, goCave, fightDragon], 
        text: "You are in the town square. You see a sign that says \"store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions" : [buyHealth, buyWeapon, goTown],
        text: "You enter the store"
    }, 
    {
        name: "cave",
        "button text": ["Fight slime", "fight fanged beast", "go to town square"],
        "button functions" : [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters"
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster"
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
    text.innerText = location.text; //only works if the name is one word
}

function goTown () {
    update(locations[0]);
    //passes the locations array as parameter: 1st element in array (index 0)

}

function goStore(){
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

function buyHealth() {
    if (gold >= 10){
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    }
    else {
        text.InnerText= "You do not have enough gold to buy health. ";
    }
}

function buyWeapon () {
    if (currentWeapon < weapons.length-1){ 
        if (gold >= 30) {
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon.name];
            text.InnerText = "You now have a " + newWeapon + " .";
            inventory.push(newWeapon); //adds the name of the new weapon to the end of the inventory
            text.InnerText += "In your inventory you have " + inventory;
        }
        else {
            text.innerText = "You do not have enough gold to buy a weapon. ";
        }
    }
    else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon(){
    if (inventory.length > 1){
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + " .";
    }
    else {
        text.innerText = "Don't sell your only weapon!";
    }
}

function fightDragon() {
    fighting = 2;
    goFight();
}

function fightSlime() {
    fighting = 0;
    goFight();
}

function fightBeast() {
    fighting = 1;
    goFight();
}

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
}

function attack() {

}

function dodge(){

}
//Intro.
const readline = require("readline-sync");
const playerName = readline.question("Please enter your name: ");
console.log(`Welcome to Lin'rik ${playerName}! A fantasy world with wonders and dangers all around!`);

//Press start.
const start = readline.keyIn(`${playerName} please press 1 to start.`, {limit: '$<1>'});
let pressStart = false;
if (start == 1)
{
    console.log("You're standing on a road in between two towns. Bandits and monsters plague this area! Be careful out here!");
    pressStart = true;
}

//Set variables.
const enemies = ["bandit", "goblin", "kobold", "troll", "giant"];
const treasure = ["Sword", "Magic Talisman", "Coin Purse", "Trinket"];
let inventory = [];
let userHealth = 100;
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];

function game()
{
    while (pressStart == true && userHealth > 0)
    {
        //Randomized Variables.
        const attackPower = Math.floor(Math.random() * (30 + 15 - 3) + 15);
        const enemy = enemies[Math.floor(Math.random() * enemies.length)];
        let enemyHealth = Math.floor(Math.random() * 150);
        const enemyPower = Math.floor(Math.random() * (20 + 20 - 2) + 12);

        //Action Options.
        const perform = readline.keyIn("What would you like to do? \nPress 'W' to walk. \nPress 'P' to print stats. \nPress 'X' to exit the game.", {limit: '$<w, p, x>'});

        //Game Mechanics.
        if (perform == 'x')
        {
            return(userHealth = 0);
        }
        else if (perform == 'p')
        {
            console.log(`Name: ${playerName} \nHealth: ${userHealth} \nItems: ${inventory}`);
        }
        else if (perform == 'w')
        {
            let randomize = Math.random();
            if (randomize <= 0.25)
            {
                console.log("You are walking down the path...");
            }
            else if (randomize >= 0.26)
            {
                console.log(`Oh no! A ${enemy} just appeared!`);
                while (userHealth > 0 && enemyHealth > 0)
                {
                    const actions = readline.keyIn("What would you like to do? \nPress 'R' to run away. \nPress 'A' to attack.", {limit: '<r, a>'});
                    if (actions == 'r')
                    {
                        const run = Math.random();
                        if (run <= 0.5)
                        {
                            console.log(`You couldn't get away! ${enemy} attacks you for ${enemyPower} damage!`);
                        }
                        else if (run >= 0.51)
                        {
                            console.log("You got away safely!")
                            break;
                        }
                    }
                    else if (actions == 'a')
                    {
                        enemyHealth -= attackPower;
                        console.log(`You attacked the ${enemy} for ${attackPower} damage!`);
                        userHealth -= enemyPower;
                        console.log(`The ${enemy} attacked you for ${enemyPower} damage!`);
                        if (enemyHealth <= 0)
                        {
                            console.log(`You successfully killed the ${enemy}!`);
                            let dropLoot = Math.random();
                            if (dropLoot <= 0.25)
                            {
                                console.log(`You found a ${pickUp} on the dead ${enemy}!`);
                                inventory.push(pickUp);
                            }
                        }
                        if (userHealth <= 0)
                        {
                            console.log(`The ${enemy} has slain you! ${playerName} is dead!`);
                            break;
                        }
                    }
                }
            }
        }
    }
}

game();

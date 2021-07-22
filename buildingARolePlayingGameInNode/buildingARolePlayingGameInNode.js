//Intro.
const readline = require("readline-sync");
const playerName = readline.question("Please enter your name: ");
console.log(`Welcome to Lin'rik ${playerName}! A fantasy world with wonders and dangers all around!`);

//Press start.
const start = readline.keyIn(`${playerName} please press 1 to start.`, {limit: '$<1>'});
let pressStart = false;
if (start == 1)
{
    console.log("You're standing on a road between two towns. Bandits and monsters plague this area! Be careful out here!");
    pressStart = true;
}

//Set variables.
const enemies = ["bandit", "goblin", "kobold", "troll", "giant", "beholder", "zombie", "ogre"];
const treasure = ["Magic Talisman", "Coin Purse", "Trinket", "Lucky Charm", "Set of Dice"];
let inventory = [];
let userHealth = 100;
let hasHealed = false;
let killNum = 0;

function game()
{
    while (pressStart == true && userHealth > 0)
    {
        //Randomized Variables.
        let pickUp = treasure[Math.floor(Math.random() * treasure.length)];
        let enemyHealth = Math.floor(Math.random() * 200);
        const attackPower = Math.floor(Math.random() * (30 + 15 - 3) + 15);
        const enemy = enemies[Math.floor(Math.random() * enemies.length)];
        const enemyPower = Math.floor(Math.random() * (20 + 20 - 2) + 12);
        const heal = Math.floor(Math.random() * 70 + 1);

        //Action Options.
        const perform = readline.keyIn("What would you like to do? \nPress 'W' to walk. \nPress 'H' to heal. \nPress 'P' to print stats. \nPress 'X' to exit the game.", {limit: '$<w, h, p, x>'});

        //Game Mechanics.
        if (perform == 'x')
        {
            return(userHealth = 0);
        }
        else if (perform == 'p')
        {
            console.log(`Name: ${playerName} \nHealth: ${userHealth} \nKills: ${killNum} \nItems:${inventory}`);
        }
        else if (perform == 'h')
        {
            if (userHealth < 100 && hasHealed == false)
            {
                userHealth += heal;
                console.log(`You healed for ${heal} hit points!`);
                hasHealed = true;
                if (userHealth > 100)
                {
                    userHealth = 100;
                }
            }
            else if (userHealth < 100 && hasHealed == true)
            {
                console.log(`You have already healed! - Health: ${userHealth}`)
            }
            else if (userHealth >= 100)
            {
                console.log(`Your health is full! - Health: ${userHealth}`)
            }
        }
        else if (perform == 'w')
        {
            hasHealed = false;
            let randomize = Math.random();
            if (randomize >= 0.26)
            {
                console.log("You are walking down the path...");
            }
            else if (randomize <= 0.25)
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
                            console.log(`You couldn't get away! The ${enemy} attacks you for ${enemyPower} damage!`);
                            userHealth -= enemyPower;
                            if (userHealth <= 0)
                            {
                                console.log(`The ${enemy} has slain you! ${playerName} is dead!`);
                                break;
                            }
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
                            killNum += 1;
                            let dropLoot = Math.random();
                            if (dropLoot <= 0.25)
                            {
                                console.log(`You found a ${pickUp} on the dead ${enemy}!`);
                                inventory.push(" " + pickUp);
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

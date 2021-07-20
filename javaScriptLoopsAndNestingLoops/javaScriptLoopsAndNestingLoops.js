//Array for the assignment.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

//Requirement #1 - Old enough or not old enough.
function isOldEnough()
{
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)
    {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18)
        {
            console.log("not old enough");
        }
        else
        {
            console.log("old enough");
        }
    }
}

isOldEnough();

//Requirement #2 - Names w/ old enough or not old enough.
function isOldEnoughWithName()
{
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)
    {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18)
        {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is not old enough");
        }
        else
        {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is old enough");
        }
    }
}

isOldEnoughWithName();

//Requirement #3 - Gender and names w/ old enough or not old enough.
function isOldEnoughWithNameAndGender()
{
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)
    {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male")
        {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is not old enough. Do not let HIM in.");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female")
        {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is not old enough. Do not let HER in.");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male")
        {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is old enough. Let HIM in.");
        }
        else
        {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is old enough. Let HER in.");
        }
    }
}

isOldEnoughWithNameAndGender();

//Requirement #4: For loop iterating 0 - 100 and checking odd or even.
function oddOrEven()
{
    for (i = 0; i < 101; i++)
    {
        if (i % 2 == 0)
        {
            console.log(i + " " + "is even.");
        }
        else
        {
            console.log(i + " " + "is odd.");
        }
    }
}

oddOrEven();

//Extra Credit - Toggling the light.
var numberOfFlips = [2, 3, 2];
var light = 0;

function flipTheSwitch()
{
    for (var i = 0; i < numberOfFlips.length; i++)
    {
        light += numberOfFlips[i];
        if (light % 2 == 0)
        {
            console.log("The switch was flipped" + " " + numberOfFlips[i] + " " + "times. The light is OFF.");
        }
        else
        {
            console.log("The switch was flipped" + " " + numberOfFlips[i] + " " + "times. The light is ON.");
        }
    }
    console.log("The switch was flipped a total of" + " " + light + " " + "times.");
}

flipTheSwitch();

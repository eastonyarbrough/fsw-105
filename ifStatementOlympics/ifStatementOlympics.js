///Preliminary
//This is my if statement for showing greater than.

var a = 5;
var b = 3;

if (a > b)
{
    console.log(a + " " + "is greater than" + " " + b);
}

//This is my if statements and objects for determining the length of "cat" and value of the two pets.
//This first one is length of the cat.

var cat = "Pal";

var dog = "Duke";

if (cat.length == 3)
{
    console.log(cat.length + " " + "is the length of 'cat'");
}

//This is my code to check the variables of the two pets using the objects above.

if (cat == dog)
{
    console.log("The cat and dog" + " " + "are the same");
}
else
{
    console.log("The cat and dog" + " " + "are not the same");
}


///Bronze
//This is my code showing if I am able to attend the movie based on age.

var person = {
    firstName: "Easton",
    age: 24
};

if (person.age > 18)
{
    console.log(person.firstName + " " + "is allowed to go to the movie" + " " + "based on age");
}
else
{
    console.log(person.firstName + " " + "is NOT allowed to go to the movie" + " " + "based on age");
}

//This is my code showing if I am able to attend the movie based on my name.

if (person.firstName.charAt(0) == "B")
{
    console.log(person.firstName + " " + "is allowed to go to the movie" + " " + "based on name");
}
else
{
    console.log(person.firstName + " " + "is NOT allowed to go to the movie" + " " + "based on name");
}

//This is my code showing if I am able to attend the movie based on both previous values.

if (person.age > 18 && person.firstName.charAt(0) == "B")
{
    console.log(person.firstName + " " + "is allowed to go to the movie" + " " + "overall");
}
else
{
    console.log(person.firstName + " " + "is NOT allowed to go to the movie" + " " + "overall");
}


///Silver
//This is my code using strict and loose equality comparisons.

var one = "1"

if (1 === "1")
{
    console.log("Strict: they are equal");
}
else if (1 == "1")
{
    console.log("Loose: they are equal");
}
else
{
    console.log("They are" + " " + "not equal at all");
}

//This is my code checking number values

if (1 <= 2 && 2 == 4)
{
    console.log("Yes" + " " + "these conditions are met");
}
else
{
    console.log("No" + " " + "these conditions are not met");
}


///Gold
//This is my code showing the preliminary if statement as a ternary operator.

function checkPrelim(a) {
    return (a ? "greater than" : "less than");
}

if (a > b)
{
    console.log(a + " " + "is" + " " + checkPrelim(true) + " " + b);
}
else
{
    console.log(a + " " + "is" + " " + checkPrelim(false) + " " + b);
}

//This is my code showing the bronze if statement as a ternary operator.

function checkBronze(firstName) {
    return (firstName ? charAt(0) == "B" : charAt(0) !== "B");
}

if (person.firstName.charAt(0) !== "B")
{
    checkBronze = false,
    console.log("The person cannot attend the movie based on name");
}
else if (person.firstName.charAt(0) == "B")
{
    checkBronze = true,
    console.log("The person can attend the movie based on name");
}

//This is my code showing the silver if statement as a ternary operator.

function checkSilver(one) {
    return (one ? "Strict" : "Loose" );
}

if (one === 1)
{
    console.log(checkSilver(true) + ": they are equal");
}
else if (one == 1)
{
    console.log(checkSilver(false) + ": they are equal");
}
else
{
    console.log("They are" + " " + "not equal at all");
}

//This is my code checking to see if "dog" is a string.

if (typeof "dog" === "string")
{
    console.log("It is a" + " " + typeof "dog");
}
else
{
    console.log("It is not a string");
}

//This is my code checking to see if true is a boolean.

if (typeof true === 'boolean')
{
    console.log("It is a" + " " + typeof true);
}
else
{
    console.log("It is not a boolean");
}

//This is my code to check if variable "cat" is defined or not.

if (typeof cat === "undefined")
{
    console.log("'Cat' is undefined");
}
else
{
    console.log("'Cat' is defined");
}

//This is my code checking letters against numbers.

if ("s" > 12)
{
    console.log(true + " " + "'s' is greater than 12");
}
else
{
    console.log(false + " " + "'s' is NOT greater than 12");
}

if ("a" > 16)
{
    console.log(true + " " + "'a' is greater than 16");
}
else
{
    console.log(false + " " + "'a' is NOT greater than 16");
}

if ("z" > 20)
{
    console.log(true + " " + "'z' is greater than 20");
}
else
{
    console.log(false + " " + "'z' is NOT greater than 20");
}

//This is my ternary statement to check if a number is odd or even.

var myNum = 12

function checkOddOrEven(myNum) {
    return (myNum ? "even" : "odd");
}

if (myNum % 2 == 0)
{
    console.log("The number is" + " " + checkOddOrEven(true));
}
else
{
    console.log("The number is" + " " + checkOddOrEven(false));
}

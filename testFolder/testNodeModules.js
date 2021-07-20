///Functions for the module.
//Check if the number is even or odd.
function getEvenOrOdd(num)
{
    if (num % 2 == 0)
    {
        console.log("The number " + num + " is even");
    }
    else
    {
        console.log("The number " + num + " is odd");
    }
}

//Add the numbers together.
function addVar(n1, n2, n3)
{
    console.log("The sum of " + n1 + ", " + n2 + " and " + n3 + " is " + (n1 + n2 + n3));
}

module.exports = {getEvenOrOdd, addVar};
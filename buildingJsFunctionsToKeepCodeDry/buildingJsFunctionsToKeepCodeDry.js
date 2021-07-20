//Requirment #1: Function to return the sum of two parameters.
var firstNum = 25;
var secondNum = 36;

function returnSum(a, b)
{
    return(a + b);
}

console.log("The sum of" + " " + firstNum + " " + "and" + " " + secondNum + " " + "is:" + " " + returnSum(firstNum, secondNum));

// Requirement #2: Function to return the largest of three numbers.
var num1 = 10;
var num2 = 23;
var num3 = 8;

function returnLargest(a, b, c)
{
    return(Math.max(a, b, c));
}

console.log("The largest of " + num1 + ", " + num2 + " and " + num3 + " is:" + " " + returnLargest(num1, num2, num3));

//Requirement #3: Function that returns if a number is even or odd.
function returnEvenOrOdd(num)
{
    if (num % 2 == 0)
    {
        return("even");
    }
    else
    {
        return("odd");
    }
}

console.log(firstNum + " is" + " " + returnEvenOrOdd(firstNum));

//Requirement #4: Function that checks a string and adds/halves it to/from itself.
var pleaseInNorsk = "Vaer Sa Snill";

function longerString(string)
{
    if (string.length <= 20)
    {
        console.log(string + string);
    }
    else
    {
        console.log(string.slice(0, string.length / 2));
    }
}

longerString(pleaseInNorsk);

//Extra Credit: Sum of Fibonacci numbers returned by function.
///For reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
var fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
var n = 6;

function sumOfPartArray(howMany, array)
{
    for (var i = 0; i < howMany; i++)
    {
        console.log(array[i]);
    }
    section = array.slice(0, howMany)
    const equateSum = (a, b) => a + b;
    console.log("The sum of these numbers is: " + section.reduce(equateSum));
}

sumOfPartArray(n, fibonacci);

//Extra Credit: Returning the most occuring letter of a string.
///For reference: https://www.codegrepper.com/code-examples/javascript/finding+the+most+frequent+character+in+a+string+javascript
///For reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
var myString = "Hei, Jeg heter Easton. Meg laerer er Mr.Rajani"
//[H, e, i, , ,  , J, e, g,  , h, e, t, e, r]
function getMaxCharacter(string)
{
    let max = 0;
    let maxChar = '';
    string.split('').forEach(function(char)
    {
        if (string.split(char).length > max)
        {
           max = string.split(char).length;
           maxChar = char;
        }
    });
    return maxChar;
};

console.log(getMaxCharacter(myString) + " is the most occuring character.");

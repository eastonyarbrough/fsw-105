const readline = require("readline-sync");
let firstNum = readline.questionInt("Please enter the first number: ");
let secNum = readline.questionInt("Please enter the second number: ");
let calcOp = readline.question("Please enter your operation (add/div/mul/sub): ");

///Calculator options.
//Function for addition.
function addNum(num1, num2)
{
    return(num1 + num2);
}
//Function for multiplication.
function mulNum(num1, num2)
{
    return(num1 * num2);
}
//Function for division.
function divNum(num1, num2)
{
    return(num1 / num2);
}
//Function for subtraction.
function subNum(num1, num2)
{
    return(num1 - num2);
}

//Calculator function
function calc(inputNum1, inputNum2, inputOp)
{
    if (inputOp == "add")
    {
        console.log("The result is: " + addNum(inputNum1, inputNum2));
    }
    else if (inputOp == "sub")
    {
        console.log("The result is: " + subNum(inputNum1, inputNum2));
    }
    else  if (inputOp == "mul")
    {
        console.log("The result is: " + mulNum(inputNum1, inputNum2));
    }
    else  if (inputOp == "div")
    {
        console.log("The result is: " + divNum(inputNum1, inputNum2));
    }
    else
    {
        console.log("Invalid entry.");
    }
}

calc(firstNum, secNum, calcOp);

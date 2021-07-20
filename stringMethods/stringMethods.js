var projectStr = "Alle arbeid og nei leke lager Jack en kjeddlig gutt."

//Requirement #1: Function to return a string as both lower and uppercase.
function convertToLowAndUp(string)
{
    return(string.toUpperCase()) + " " + string.toLowerCase();
}

console.log(convertToLowAndUp(projectStr));

//Requirement #2: Function to take the length of a string and half it rounded down.
function numLengthHalf(string)
{
    return(Math.floor(string.length / 2));
}

console.log(numLengthHalf(projectStr));

//Requirement #3: Function that uses a previously coded function to return half of the string.
function returnHalfStr(string)
{
    return(string.slice(0, numLengthHalf(string)));
}

console.log(returnHalfStr(projectStr));

//Requirement #4: Function that capitalizes the first half of a string.
function capFirstHalf(string)
{
    return(string.toUpperCase().slice(0, numLengthHalf(string)) + string.toLowerCase().slice(numLengthHalf(string)));
}

console.log(capFirstHalf(projectStr));

//Optional Requirement: Function to capitalize the first letter of each word of a string.
//For Reference: https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
function capFirstLet(string)
{
    let strArray = string.split(" ");
    for (i = 0; i < strArray.length; i++)
    {
        strArray[i] = strArray[i][0].toUpperCase().concat(strArray[i].substr(1));
    }
    console.log(strArray.join(" "));
}

capFirstLet(projectStr);

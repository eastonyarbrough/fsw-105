//String to manipulate.
let myStr = "Hei, Meg heter Easton. Mr. Rajani er meg laerer."

//Function #1: Capitalize first letter of each word (.split / .slice / .toUpperCase / .toLowerCase / .concat).
function toCap(str)
{
    let strArray = str.split(' ');
    let result = strArray.map(function(word)
    {
        return(word[0].toUpperCase().concat(word.slice(1).toLowerCase()));
    });
    console.log(result.join(' '));
}

toCap(myStr);

//Function #2: Replace the name "Easton" with "Edderkop". Then return the index of what was changed. Then find the last index of "e". (.replace / .indexOf / .lastIndexOf)
function repWord(str)
{
    let newStr = str.replace("Easton", "Edderkop");
    console.log(newStr + " (The change occured at index: " + (newStr.indexOf("Edderkop") + ")" + " (The last index of 'e' is: " + (newStr.lastIndexOf("e")) + ")"));
}

repWord(myStr);

//Function #3: Find the capital letters in the string. (.match)
function findCaps(str)
{
    let newArr = str.split('');
    let result = newArr.map(function(letter)
    {
        if (letter == letter.match(/[A-Z]/g))
        {
            return(letter);
        }
    });
    console.log("The capital letters in the string are: " + result.join(''));
}

findCaps(myStr);

//Function #4: Return a substring of the middle 4 characters in the string. (.substr)
function returnMid(str)
{
    console.log("The middle substring is: " + "'" + str.substr((str.length / 2 - 2), 4) + "'")
}

returnMid(myStr);

/*
Required methods to use:
.concat()
.indexOf()
.lastIndexOf()
.match()
.replace()
.slice()
.split()
.toLowerCase()
.toUpperCase()
.substr()
*/

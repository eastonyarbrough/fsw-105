//Testing if you need a string object for white space in oder to add strings to one another fluidly.
var str1 = "My name is";
var str2 = "Easton";
var str3 = "Yarbrough";
var str4 = "Smitty";
var str5 = "Webbermanjenson";

console.log(str1 + " " + str2 + " " + str3);

//Testing converting booleans to and from strings.
var boo1 = false;
var boo2 = true;
var boo1Con = boo1.toString();
var boo2Con = boo2.toString();
var conBack1 = Boolean(false);
var conBack2 = Boolean(boo2Con);

console.log(str1 + " " + str2 + " " + boo2);
console.log(str1 + " " + str2 + " " + boo2.toString());
console.log(str1 + " " + str2 + " " + boo2Con);
console.log(str1 + " " + str2 + " " + conBack2);

console.log(str1 + " " + str4 + " " + str5 + " " + boo1);
console.log(str1 + " " + str4 + " " + str5 + " " + boo1.toString());
console.log(str1 + " " + str4 + " " + str5 + " " + boo1Con);
console.log(str1 + " " + str4 + " " + str5 + " " + conBack1);

//Testing .concat() and turning other non-strings into strings with .toString().
var fullMe = str1.concat(" " + str2 + " " + str3);

console.log(fullMe);

var arrayToTest = str1.concat(" " + [1, 2, 3, 4, 5, 6, 7, 8]);

console.log(arrayToTest);

var otherArray = [1,2,3,4,5];

console.log(otherArray.toString());

//Testing .indexOf()
var allWork = "Alle arbeid og nei leke lager Jack en kjeddelig gutt.";
var subString = "l";
var count = 0;
var index = allWork.indexOf(subString);

while (index !== -1)
{
    count++;
    index = allWork.indexOf(subString, index +1);
}

console.log("How many 'L' are in the Norwegian sentence: " + count);

console.log(allWork.toLocaleUpperCase().indexOf("LEKE"));

//Notes: -1 in this case means "no more instances of..." while +1 means "to the next instance of...".
//Notes: .indexOf() is case sensitive. You must convert string to lower or uppercase for case insensitive.
//Notes: You can convert to lower or uppercase by using .toLocaleLowerCase() or .toLocaleUpperCase() methods.

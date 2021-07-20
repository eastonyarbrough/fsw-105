///Basic test of array constructor.
let strArray = new Array("one", "two", "three", "four");

//To display entire array.
console.log(strArray);

//To display each index.
for (i = 0; i < strArray.length; i++)
{
    console.log("for loop display each: " + strArray[i]);
}
//or...
strArray.forEach(function(fetch)
{
    console.log("forEach loop display each: " + fetch);
});



///Testing .forEach loop and different methods to manipulate an array.
let comParts = ["GPU", "CPU", "Case", "Heatsink"];

//.push() adds to the end of the array.
comParts.push("RAM");

//.unshift() adds to the beginning of the array.
comParts.unshift("Motherboard");

//.splice() adds to a specified location within the array. *Syn for .splice(index to start, how many index to delete, what to replace with)*
comParts.splice(3, 0, "PSU");

//.forEach loop
comParts.forEach(function(part, index)
{
    console.log(part + " is stored in the array at index: " + index);
});

//.shift() isolates and removes the first index of an array and returns it.
console.log("Isolated: " + comParts.shift());

//.pop() isolates and removes the last index of an array and returns it.
console.log("Isolated: " + comParts.pop());

//The array now no longer has "Motherboard" and "RAM" because of .pop() and .shift() as shown here.
comParts.forEach(function(fetch)
{
    console.log("After .pop()/.shift(): " + fetch);
});



/*
Other methods to manipulate an array include...
.sort()
.indexOf()
.slice()
.reverse()
.join()
.includes()
.filter()
.fill()
.concat()
.every()
*/

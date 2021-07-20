///Section A
//Requirement #1: Return numbers only 5 and greater.
function fiveAndGreaterOnly(arr)
{
    let result = arr.filter(function(num)
    {
        if (num >= 5)
        {
            return(true);
        }
    });
    return(result);
}

console.log("--- Array Filter #1 ---");
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));  // Output: [6, 8]

//Requirement #2: Return only even numbers.
function evensOnly(arr)
{
    let result = arr.filter(function(num)
    {
        if (num % 2 == 0)
        {
            return(true);
        }
    });
    return(result);
}

console.log("--- Array Filter #2 ---");
console.log(evensOnly([3, 6, 8, 2]));  // Output: [6, 8, 2]

//Extra Credit: Make a filtered list of all people aged 17+
function ofAge(arr)
{
    let result = arr.filter(function(person)
    {
        if (person.age >= 17)
        {
            return(true);
        }
    });
    return(result);
}

console.log("--- Extra Credit for .filter() Method ---");
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]))
//Output: 
//[ { name: "Angelina Jolie", age: 80 },
//    { name: "Bob Ziroll", age: 100 } ]



///Section B
//Requirement #1: Make an array of numbers that are double the numbers in the original array.
function doubleNumbers(arr)
{
    let result = arr.map(function(num)
    {
        return(num * 2);
    });
    return(result);
}

console.log("---  Array Map #1 ---");
console.log(doubleNumbers([2, 5, 100]));  // Output: [4, 10, 200]

//Requirement #2: Take an array of numbers and return them as strings.
function stringItUp(arr)
{
    let result = arr.map(function(num)
    {
        return(num.toString());
    });
    return(result);
}

console.log("---  Array Map #2 ---");
console.log(stringItUp([2, 5, 100]));  // Output: ["2", "5", "100"]

//Requirement #3: Capitalize the first letter of each name in the array.
function capitalizeNames(arr)
{
    let result = arr.map(function(name)
    {
        return(name[0].toUpperCase().concat(name.slice(1).toLowerCase()));
    });
    return(result);    
}

console.log("---  Array Map #3 ---");
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
//Output: ["John", "Jacob", "Jingleheimer", "Schmidt"]

//Extra Credit #1: Make an array of strings of only the names.
function namesOnly(arr)
{
    let result = arr.map(function(person)
    {
        return(person.names.toString());
    });
    return(result);     
}

console.log("---  Array Map Extra Credit #1 ---");
console.log(namesOnly([
    {
        names: "Angelina Jolie",
        age: 80
    },
    {
        names: "Eric Jones",
        age: 2
    },
    {
        names: "Paris Hilton",
        age: 5
    },
    {
        names: "Kanye West",
        age: 16
    },
    {
        names: "Bob Ziroll",
        age: 100
    },
]));
//Output: 
// [ "Angelina Jolie", "Eric Jones", "Paris Hilton", "Kanye West", "Bob Ziroll" ]

//Extra Credit #2: Make an array of strings saying if each individual can go to the movie or not (17+).
function makeStrings(arr)
{
    let result = arr.map(function(person)
    {
        if (person.age >= 17)
        {
            return(person.names + " can go to The Matrix!");
        }
        else
        {
            return(person.names + " is under age!");
        }
    });
    return(result);
}

console.log("---  Array Map Extra Credit #2 ---");
console.log(makeStrings([
    {
        names: "Angelina Jolie",
        age: 80
    },
    {
        names: "Eric Jones",
        age: 2
    },
    {
        names: "Paris Hilton",
        age: 5
    },
    {
        names: "Kanye West",
        age: 16
    },
    {
        names: "Bob Ziroll",
        age: 100
    },
]));
//Output: 
// [ "Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!"
// "Kanye West is under age!!"
// "Bob Ziroll can go to The Matrix" ]



///Section C
//Requirement #1: Turn an array of numbers into a total of all the numbers.
function total(arr)
{
    let result = arr.reduce(function(num1, num2)
    {
        return(num1 + num2)
    });
    return(result); 
}

console.log("---  Array Reduce #1 ---");
console.log(total([1, 2, 3]));  // Output: 6

//Requirement #2: Turn an array of numbers into a long string of those numbers together.
function stringConcat(arr)
{
    let result = arr.reduce(function(num1, num2)
    {
        return(num1.toString() + num2.toString());
    });
    return(result);
}

console.log("---  Array Reduce #2 ---")
console.log(stringConcat([1, 2, 3]));   // Output: "123"

//Requirement #3: Turn an array of voter objects into a count of how many people voted (.reduce() not required.)
function totalVoters(arr)
{
    count = 0;
    arr.filter(function(voter)
    {
        if (voter.voted == true)
        {
            return(count += 1);
        }
    });
    return(count);
}

var voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary' , age: 31, voted: false},
    {name: 'Becky' , age: 43, voted: false},
    {name: 'Joey' , age: 41, voted: true},
    {name: 'Jeff' , age: 30, voted: true},
    {name: 'Zack' , age: 19, voted: false},
];

console.log("---  Array Reduce #3 ---")
console.log( totalVoters(voters) );  // Output: 7

//Extra Credit #1: Given an array of all wish list items return total cost of all items.
function shoppingSpree(arr)
{
    let result = arr.reduce(function(item1, item2)
    {
        return{price: item1.price + item2.price};
    });
    return(result);
}

var wishlist = [
    { title: "Telsa Model S", price: 90000},
    { title: "4 carat diamond ring", price: 45000},
    { title: "Fancy hacky Sack", price: 5},
    { title: "Gold fidget spinner", price: 2000},
    { title: "A second Tesla Model S", price: 90000},
];

console.log("---  Array Reduce Extra Credit #1 ---");
console.log( shoppingSpree(wishlist) );  // Output: 227005

//Extra Credit #2: Given an array of arrays flatten them into a single array.
function flatten(arr)
{
    let result = arr.reduce(function(array1, array2)
    {
        return(array1.concat(array2));
    });
    return(result);
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log("---  Array Reduce Extra Credit #2 ---");
console.log(flatten(arrays));  // Output: ["1", "2", "3", true, 4, 5, 6];



///Section D
//Requirement #1: Sort an array from smallest number to the largest.
function leastToGreatest(arr)
{
    let result = arr.sort(function(num1, num2)
    {
        return(num1 - num2);
    });
    return(result);
}

console.log("---  Array Sort #1 ---");
console.log( leastToGreatest([1, 3, 5, 2, 90, 20]) );  //Output: [1, 2, 3, 5, 20, 90]

//Requirement #2: Sort an array from largest number to the smallest.
function  greatestToLeast(arr)
{
    let result = arr.sort(function(num1, num2)
    {
        return(num2 - num1);
    });
    return(result);    
}

console.log("---  Array Sort #2 ---")
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));  // Output: [90, 20, 5, 3, 2, 1]

//Requirement #3: Sort an array from shortest string to longest.
function lengthSort(arr)
{
    let result = arr.sort(function(str1, str2)
    {
        return(str1.length - str2.length);
    });
    return(result);
}

console.log("---  Array Sort #3 ---")
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));  // Output: ["by", "dog", "wolf", "eaten", "family"]

//Extra Credit: Sort an array of strings into alphabetical order.
function alphabetical(arr)
{
    let result = arr.sort()
    return(result);
}

console.log("---  Array Sort Extra Credt ---");
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));  // Output: ["by", "dog", "eaten", "family", "wolf"]

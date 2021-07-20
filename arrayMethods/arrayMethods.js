var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Master function
function masFunc(arr1, arr2)
{
    //Requirement #1: Remove the last item from the vegetable array.
    arr2.pop();
    console.log("vegetables: " + arr2);

    //Requirement #2: Remove the first item from the fruit array.
    arr1.shift();
    console.log("fruit: " + arr1);

    //Requirement #3: Find the index of orange.
    console.log(arr1.indexOf("orange"));

    //Requirement #4: Add the index of orange to the end of the fruit array.
    arr1.push(arr1.indexOf("orange"));
    console.log("fruit: " + arr1);

    //Requirement #5: Use .length to find the length of the vegetable array.
    console.log("vegetables: " + arr2.length);

    //Requirement #6: Add the length of the vegetable array to the end of the vegetable array.
    arr2.push(arr2.length);
    console.log("vegetables: " + arr2);

    //Requirement #7: Put the two arrays into one array called "food" using fruit first.
    let food = arr1.concat(arr2);
    console.log("food: " + food);

    //Requirement #8: Remove two elements from the new array, starting at index 4, with only one method.
    food.splice(4, 2);
    console.log("food: " + food);

    //Requirement #9: Reverse the new array.
    food.reverse();
    console.log("food: " + food);
    
    //Requirement #10: Convert new array into a string.
    console.log(food.toString());
}

masFunc(fruit, vegetables);

///Instructor provided example of .prototype in JavaScript.
//Provided test constructor.
function person(name, job, yearOfBirth)
{ 
    this.name = name; 
    this.job = job; 
    this.yearOfBirth = yearOfBirth; 
}

//The provided method (function) that we are creating and adding to person object's .prototype property.
person.prototype.calculateAge = function()
{ 
    console.log('The current age is: ' + (2021 - this.yearOfBirth)); 
}

//Defining variables (not as provided / did not function as provided).
let person1 = new person("Easton", "Driver", 1996);
let person2 = new person("Alley", "Drafter", 1998);

//Calling the .prototype method (function) from the person object.
person1.calculateAge();
person2.calculateAge();



///My own attempt at using .prototype to test.
//Constructor to create objects for use with .prototype.
function car(make, model, year, mileage, price)
{
    this.make = make;
    this.model = model;
    this.year = year;
    this.milage = mileage;
    this.price = price;
};

//Method 1 (function) to use as .prototype.
car.prototype.calcAgeOfCar = function()
{
    console.log("The " + this.make + " " + this.model + " is " + (2021 - this.year) + " years old.");
}

//Method 2 (function) to use as .prototype.
car.prototype.calcPricePerMon = function()
{
    console.log("It would cost $" + (Math.floor(this.price / 60)) + " per month for the " + this.make + " " + this.model + " over 5 years.");
}

//Defining variables for the constructor.
let car1 = new car("Chevrolet", "Equinox", 2015, 52000, 13000);
let car2 = new car("Hyundai", "Veloster", 2017, 40000, 20000);

//Calling the object from the constructor and the new .prototype.
car1.calcAgeOfCar();
car2.calcAgeOfCar();
car1.calcPricePerMon();
car2.calcPricePerMon();

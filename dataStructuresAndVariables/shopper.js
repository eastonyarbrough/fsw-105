var shopper = {
    firstname: "Edmund",
    lastname: "Reresby",
    age: 56,
    creditcard: true,
    grocerycart: ["milk", " eggs", " bread"],
    displayInfo: function() {
        console.log(`Name: ${shopper.firstname}` + " " + `${shopper.lastname}`)
    }
}

shopper.displayInfo();

console.log(`Age: ${shopper.age}`);

console.log(`Purchased: ${shopper.grocerycart}` + " " + "with credit: " + `${shopper.creditcard}`);
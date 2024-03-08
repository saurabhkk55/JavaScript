// >>>> Scope of the prototype property in JavaScript, how it affects objects <<<<<

// Define an array named myHeros containing the names of heroes.
let myHeros = ["thor", "spiderman"];

// Define an object named heroPower containing properties for hero names and their respective powers.
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    // Define a method named getSpiderPower within the heroPower object.
    // This method logs Spider-Man's power.
    getSpiderPower: function(){
        console.log(`Spider-Man's power is ${this.spiderman}`);
    }
}

// Log a message to indicate that a new property is being added to the Object prototype.
Object.prototype.saurah = function () {
    console.log(`Saurabh is present in all objects`);
}

// Call the saurah method on the heroPower object.
heroPower.saurah();

// Call the saurah method on the myHeros array.
myHeros.saurah();

// Log a message to indicate that a new property is being added to the Array prototype.
Array.prototype.saurabhArr = function(){
    console.log(`I am an array`);
}

// Call the saurabhArr method on the myHeros array.
myHeros.saurabhArr();

// Note: heroPower.saurabhArr() would result in an error.
// This is because adding a property to a specific object's prototype
// does not make it available to other objects at the same level.

// Provide some learning points:
// 1. The prototype property in JavaScript allows objects to inherit properties and methods from other objects.
// 2. Modifying the prototype of built-in objects like Object and Array can affect all instances of those objects.
// 3. Properties and methods added to the Object prototype are accessible to all objects in JavaScript, as all objects inherit from Object.
// 4. Properties and methods added to the Array prototype are accessible to all arrays in JavaScript.
// 5. Changes to the prototype can affect the behavior of existing objects and instances.
// 6. However, modifying built-in prototypes can lead to unexpected behavior and should be done with caution.

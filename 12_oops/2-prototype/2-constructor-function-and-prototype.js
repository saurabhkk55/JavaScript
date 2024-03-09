// >>>>> Purpose and functionality of the constructor function createUser, its prototype, and the methods defined on the prototype. <<<<<

// Define a constructor function named createUser.
// This function takes two parameters: userName and price.
// It assigns these parameters to properties of the object being created.
function createUser(userName, price) {
    this.userName = userName; // Assign userName to the userName property of the object.
    this.price = price; // Assign price to the price property of the object.
}

// Log the prototype property of the createUser function.
// This prototype property holds methods that can be shared among all instances created by the createUser constructor.
console.log(createUser.prototype);

// Define a method named saurabhIncrement on the prototype of createUser.
// This method multiplies the price property of an instance by 10.
createUser.prototype.saurabhIncrement = function() {
    this.price = this.price * 10; // Multiply the price by 10.
}

// Define a method named printUserInfo on the prototype of createUser.
// This method logs the user's name and price.
createUser.prototype.printUserInfo = function() {
    console.log(`User: ${this.userName} and Price: ${this.price}`); // Log user's name and price.
}

// Create two instances of the createUser object: user1 and user2.
const user1 = new createUser("Saurabh", 10); // Create user1 with name "Saurabh" and price 10.
const user2 = new createUser("Jacky", 5); // Create user2 with name "Jacky" and price 5.

// Log the userName property of user1.
console.log(`User 1's name: ${user1.userName}`);
// Log the price property of user1 before calling the saurabhIncrement method.
console.log(`User 1's price before increment: ${user1.price}`);
// Call the saurabhIncrement method on user1 to increase its price.
user1.saurabhIncrement();
// Log the price property of user1 after calling the saurabhIncrement method.
console.log(`User 1's price after increment: ${user1.price}`);
// Call the printUserInfo method on user1 to log its information.
user1.printUserInfo();

// Provide some learning points:
// 1. Constructor functions like createUser are used to create multiple instances of objects with shared properties and methods.
// 2. The prototype property of a constructor function holds methods that are shared among all instances created by that constructor.
// 3. Methods defined on the prototype are shared by all instances, leading to memory efficiency.
// 4. Instances created by the constructor can have their own unique properties while still sharing methods defined on the prototype.
// 5. By modifying properties or calling methods on instances, you can manipulate their state and behavior.

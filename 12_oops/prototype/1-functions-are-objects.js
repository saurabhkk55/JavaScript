// >>>>> concepts of functions being objects in JavaScript, the prototype property of functions, and how properties can be added to function objects. <<<<<

// In JavaScript, functions are indeed objects. 
// This is because in JavaScript, functions are first-class citizens, meaning they can be passed around and manipulated just like any other data type.
function addTwo(a, b) {
    return a+b;
}

const ans = addTwo(2, 3);
console.log(`The answer is: ${ans}`); // Log the result of addTwo function call.

// Log the addTwo function itself. Since functions are objects in JavaScript, they can be logged and manipulated like any other object.
console.log("The addTwo function:", addTwo);

// Log the prototype property of the addTwo function. Functions in JavaScript have a prototype property,
// which can be used to add properties and methods that will be inherited by instances created with that function as a constructor.
console.log("The prototype property of addTwo:", addTwo.prototype);

// Add a property named 'saurabh' to the addTwo function object and log its value.
addTwo.saurabh = 26;  
console.log("The value of 'saurabh' property added to addTwo function:", addTwo.saurabh);

// Log the prototype property of the addTwo function again.
// Note that adding properties directly to the function object (addTwo) does not affect its prototype.
console.log("The prototype property of addTwo after adding 'saurabh':", addTwo.prototype);

// Update the 'saurabh' property of the addTwo function object and log its new value.
// As before, adding properties directly to the function object doesn't affect its prototype.
addTwo.saurabh = 60;
console.log("The updated value of 'saurabh' property in addTwo function:", addTwo.saurabh);

// Provide some learning points:
// 1. In JavaScript, functions are objects, which means they can be treated as data.
// 2. Functions in JavaScript are first-class citizens, allowing them to be passed around and manipulated just like any other data type.
// 3. Functions have properties and methods like any other object in JavaScript.
// 4. The prototype property of a function is used to add properties and methods that will be inherited by instances created with that function as a constructor using new keyword.
// 5. Adding properties directly to a function object does not affect its prototype chain or inheritance.

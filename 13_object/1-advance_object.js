// Getting the property descriptor of Math.PI
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log("Property Descriptor of Math.PI:", descriptor);

// Logging the value of Math.PI
console.log("Value of Math.PI:", Math.PI);

// Attempting to change the value of Math.PI (which should not be allowed because Math.PI is read-only)
Math.PI = 5; 

// Logging the value of Math.PI again to check if it has changed (it should not have changed)
console.log("Value of Math.PI after assignment attempt:", Math.PI);

// Defining an object named `chai` with properties like `name`, `price`, `isAvailable`, and a method `orderChai`
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
};

// Logging the property descriptor of `name` property in `chai` object
console.log("Property Descriptor of 'name' in 'chai':", Object.getOwnPropertyDescriptor(chai, "name"));

// Iterating through each key-value pair of `chai` object using `Object.entries()`
for (let [key, value] of Object.entries(chai)) {
    // Checking if the value is not a function
    if (typeof value !== 'function') {
        // Logging each key-value pair where the value is not a function
        console.log(`${key} : ${value}`);
    }
}

// Modifying the property descriptor of `name` property in `chai` object
Object.defineProperty(chai, 'name', {
    // Making the property non-enumerable
    enumerable: false,
    // Other property descriptor attributes like writable, configurable, etc., are not set here so they retain their default values
});

// Logging the updated property descriptor of `name` property in `chai` object
console.log("Updated Property Descriptor of 'name' in 'chai':", Object.getOwnPropertyDescriptor(chai, "name"));

// Iterating through each key-value pair of `chai` object again after modifying the property descriptor
for (let [key, value] of Object.entries(chai)) {
    // Checking if the value is not a function
    if (typeof value !== 'function') {
        // Logging each key-value pair where the value is not a function
        console.log(`${key} : ${value}`);
    }
}

/*
Output:

Property Descriptor of Math.PI: {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
}
Value of Math.PI: 3.141592653589793
Value of Math.PI after assignment attempt: 3.141592653589793
Property Descriptor of 'name' in 'chai': {
    value: 'ginger chai',
    writable: true,
    enumerable: true,
    configurable: true
}
name : ginger chai
price : 250
isAvailable : true
Updated Property Descriptor of 'name' in 'chai': {
    value: 'ginger chai',
    writable: true,
    enumerable: false,
    configurable: true
}
price : 250
isAvailable : true
*/

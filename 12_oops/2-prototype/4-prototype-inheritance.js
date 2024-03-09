// >>>>> Concept of prototype with inheritance using the provided code examples <<<<<

// Define objects representing different roles and their properties.
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

// Define an object representing a TA (Teaching Assistant) with additional properties and a prototype chain.
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Set the prototype of TASupport to TeachingSupport
}

// Log the Teacher object to see its properties and its prototype chain.
console.log("Teacher Object:", Teacher);
// Log the TASupport object to see its properties inherited from TeachingSupport and its prototype chain.
console.log("TASupport Object:", TASupport);

// Modern syntax to set the prototype of TeachingSupport to Teacher.
Object.setPrototypeOf(TeachingSupport, Teacher);
// Log the TeachingSupport object to see its properties inherited from Teacher and its prototype chain.
console.log("TeachingSupport Object:", TeachingSupport);

// Define a method to calculate the true length of a string by removing whitespace from both ends.
String.prototype.trueLength = function(){
    console.log(`String: "${this}"`);
    console.log(`True length is: ${this.trim().length}`);
}

// Use the trueLength method on different strings to demonstrate prototype inheritance.
"ChaiAurCode".trueLength(); // Call trueLength method on "ChaiAurCode"
"hitesh".trueLength(); // Call trueLength method on "hitesh"
"iceTea       ".trueLength(); // Call trueLength method on "iceTea       "

// Provide some learning points:
// 1. In JavaScript, objects can inherit properties and methods from other objects through the prototype chain.
// 2. The prototype chain allows objects to delegate property and method lookup to their prototypes.
// 3. Objects can have a prototype, which is another object that serves as a fallback for property and method lookup.
// 4. Modifying the prototype of an object affects all instances of that object, as well as any objects that inherit from it.
// 5. JavaScript provides ways to set and access prototypes, such as using __proto__ or Object.setPrototypeOf().
// 6. Adding methods to built-in prototypes, like String.prototype.trueLength, allows them to be used by all instances of that type.

// Original function
function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

const person1 = {
    name: 'John'
};

const person2 = {
    name: 'Jane'
};

// Create a new function with 'this' set to person1
const greetPerson1 = greet.bind(person1);
// Create a new function with 'this' set to person2
const greetPerson2 = greet.bind(person2);

// Now when you call the new functions, they'll use the respective names
greetPerson1(); // Output: Hello, my name is John
greetPerson2(); // Output: Hello, my name is Jane

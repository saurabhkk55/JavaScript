// Function Declarations ///////////////////////////////////////////////////////////////////////////

// 1. Simple function declaration
// Syntax: function functionName(parameters) { }
// Usage: Define a function that greets a person by name.
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!

// 2. Function with multiple parameters
// Syntax: function functionName(param1, param2, ...) { }
// Usage: Define a function that adds two numbers together.
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

// 3. Function with default parameter value
// Syntax: function functionName(param = defaultValue) { }
// Usage: Define a function that greets a person with a default name if none is provided.
function greetDefault(name = "Anonymous") {
    return "Hello, " + name + "!";
}
console.log(greetDefault()); // Output: Hello, Anonymous!

// Function Expressions ///////////////////////////////////////////////////////////////////////////

// 4. Anonymous function expression
// Syntax: const variableName = function(parameters) { }
// Usage: Define a function that multiplies two numbers.
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(3, 4)); // Output: 12

// 5. Named function expression
// Syntax: const variableName = function functionName(parameters) { }
// Usage: Define a factorial function recursively using a named function expression.
const factorial = function fact(n) {
    return n === 0 ? 1 : n * fact(n - 1);
};
console.log(factorial(5)); // Output: 120

// Arrow Functions ///////////////////////////////////////////////////////////////////////////

// 6. Arrow function with one parameter
// Syntax: const functionName = parameter => { }
// Usage: Define a function that calculates the square of a number.
const square = (num) => {
    return num * num;
};
console.log(square(4)); // Output: 16

// 7. Arrow function with implicit return
// Syntax: const functionName = parameter => expression;
// Usage: Define a function that calculates the cube of a number with implicit return.
// Function which is only of 1 line and return keyword we don't use here.
// If () then no return keyword is reqd. If {} only the return keyword is reqd.
const cube = num => num * num * num; // const cube = num => (num * num * num)
console.log(cube(3)); // Output: 27

// 8. Arrow function with no parameters
// Syntax: const functionName = () => { }
// Usage: Define a function that simply returns a greeting.
const sayHello = () => "Hello!";
console.log(sayHello()); // Output: Hello!

// Immediately Invoked Function Expressions (IIFE) ////////////////////////////////////////////////

// 9. IIFE with function expression
// Syntax: (function() { })()
// Usage: Execute a function immediately after its definition.
// Syntax: ()() here first () is to define the function and () is to exeute the function
(function() {
    console.log("IIFE executed");
})();

// 10. IIFE with arrow function
// Syntax: (() => { })()
// Usage: Execute an arrow function immediately after its definition.
(() => {
    console.log("IIFE with arrow function executed");
})();

((name) => {
    console.log("IIFE with arrow function executed", name);
})("saurabh");

// 11. Function with Rest Parameters
// Syntax: function functionName(...parameters) { }
// Usage: Define a function that sums an arbitrary number of arguments.
function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// 12. Function with Spread Operator
// Syntax: function functionName(...parameters) { }
// Usage: Define a function that concatenates an arbitrary number of strings.
function concatenateStrings(...strings) {
    return strings.join(" ");
}
console.log(concatenateStrings("Hello", "world")); // Output: Hello world

// 13. Recursive Function
// Syntax: function functionName(parameters) { }
// Usage: Define a function that calculates Fibonacci sequence recursively.
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // Output: 8

// Higher-Order Functions ///////////////////////////////////////////////////////////////////////////

// 14. Function that takes another function as an argument
// Syntax: function functionName(functionArgument, operation) { }
// Usage: Define a function that applies a given operation to each element of an array.
function operateOnArray(array, operation) {
    return array.map(operation);
}

// Example arrays
const numbers = [1, 2, 3, 4, 5];
const names = ["Alice", "Bob", "Charlie"];

// Example operations
function double(x) {
    return x * 2;
}

function capitalize(name) {
    return name.toUpperCase();
}

// Example usage of higher-order function
const doubledNumbers = operateOnArray(numbers, double);
const upperCaseNames = operateOnArray(names, capitalize);

// Output results
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(upperCaseNames); // Output: ["ALICE", "BOB", "CHARLIE"]

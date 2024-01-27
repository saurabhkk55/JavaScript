// PART - 1

// Printing "Hello World!" and "Learning JS!" to the console
console.log("Hello World!");
console.log("Learning JS!");

// Primitive Types in JavaScript: Number, String, Boolean, Undefined, Null, BigInt, Symbol
// 1. Number: Represents numeric data.
const myNumber = 42;

// 2. String: Represents textual data.
const myString = "Hello, World!";

// 3. Boolean: Represents logical values, true or false.
const isTrue = true;

// 4. Undefined: Represents an uninitialized value.
let myUndefinedVariable;

// 5. Null: Represents the intentional absence of any object value.
const myNullVariable = null;

// 6. BigInt: Represents whole numbers larger than 2^53 - 1 or less than -(2^53 - 1).
const myBigInt = 9007199254740991n; // const myBigInt= BigInt(9007199254740991);

// 7. Symbol: Represents unique identifiers.
const mySymbol = Symbol('foo');

// Logging the variables with their types and values
console.log("Number:", myNumber, typeof myNumber); // Output: Number: 42 number
console.log("String:", myString, typeof myString); // Output: String: Hello, World! string
console.log("Boolean:", isTrue, typeof isTrue); // Output: Boolean: true boolean
console.log("Undefined:", myUndefinedVariable, typeof myUndefinedVariable); // Output: Undefined: undefined undefined
console.log("Null:", myNullVariable, typeof myNullVariable); // Output: Null: null object
console.log("BigInt:", myBigInt, typeof myBigInt); // Output: BigInt: 9007199254740991 bigint
console.log("Symbol:", mySymbol, typeof mySymbol); // Output: Symbol: Symbol(foo) symbol

// PART - 2

/*
'var' has function-level scope, meaning it's accessible throughout the function. var can be re-declared and re-initialized.
'let' has block-level scope, making it a safer alternative to 'var'. let can't be re-declared but can be re-initialized.
'const' variables must be assigned a value during declaration and cannot be left uninitialized. const can't be re-declared and re-initialized both.
Attempting to reassign a 'const' variable will result in an error.
*/

// 'var' declaration
var varVariable = "I am a var variable";
console.log("Before re-declaration:", varVariable); // Output: Before re-declaration: I am a var variable

// Re-declaring and re-initializing 'var' variable
var varVariable = "I am another var variable";
console.log("After re-declaration:", varVariable); // Output: After re-declaration: I am another var variable

// 'let' declaration
let letVariable = "I am a let variable";

// Attempting to re-declare 'let' variable will result in an error
// let letVariable = "I am another let variable"; // SyntaxError: Identifier 'letVariable' has already been declared

// Re-initializing 'let' variable
letVariable = "I am another let variable";
console.log("After re-initialization:", letVariable); // Output: After re-initialization: I am another let variable

// 'const' declaration
const constVariable = "I am a const variable";

// Attempting to re-declare 'const' variable will result in an error
// const constVariable = "I am another const variable"; // SyntaxError: Identifier 'constVariable' has already been declared

// Attempting to re-initialize 'const' variable will result in an error
// constVariable = "I am another const variable"; // TypeError: Assignment to constant variable.

// Printing the values of 'const' variable
console.log("Value of const variable:", constVariable); // Output: Value of const variable: I am a const variable

// PART - 3

// Defining a constant object 'studentInfo'
const studentInfo = {
    Name: "Ram",      // Name of the student
    age: 10,          // Age of the student
    cgpa: 8.2,        // CGPA of the student
    isPass: true,     // Whether the student has passed or not
};

// Logging the 'studentInfo' object and its type
console.log(studentInfo); // Output: { Name: 'Ram', age: 10, cgpa: 8.2, isPass: true }
console.log(typeof studentInfo); // Output: object

// Accessing properties of the 'studentInfo' object
console.log(studentInfo.cgpa); // Output: 8.2
console.log(studentInfo["cgpa"]); // Output: 8.2

// Updating a key of the 'studentInfo' object
// Const variables can be updated, but const objects can have their keys updated.
// Updating a key of an object does not modify the object's const status.
// However, attempting to update all keys of a const object will result in an error.
studentInfo["age"]++; // Incrementing the age of the student by 1
console.log(studentInfo["age"]); // Output: 11
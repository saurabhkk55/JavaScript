// Arithmetic Operators in JavaScript:
// These operators perform mathematical operations on numeric values.
console.log("Arithmetic Operators in JavaScript:\n\n")
// Addition (+) Operator:
const additionResult = 10 + 5; // Adding two numbers
console.log("Addition Result:", additionResult); // Output: Addition Result: 15

// Subtraction (-) Operator:
const subtractionResult = 10 - 5; // Subtracting two numbers
console.log("Subtraction Result:", subtractionResult); // Output: Subtraction Result: 5

// Multiplication (*) Operator:
const multiplicationResult = 10 * 5; // Multiplying two numbers
console.log("Multiplication Result:", multiplicationResult); // Output: Multiplication Result: 50

// Division (/) Operator:
const divisionResult = 10 / 5; // Dividing two numbers
console.log("Division Result:", divisionResult); // Output: Division Result: 2

// Modulus (%) Operator:
const modulusResult = 10 % 3; // Finding the remainder of division
console.log("Modulus Result:", modulusResult); // Output: Modulus Result: 1 (10 divided by 3 gives a remainder of 1)

// Exponentiation (**) Operator:
const exponentiationResult = 2 ** 3; // 2 raised to the power of 3
console.log("Exponentiation Result:", exponentiationResult); // Output: Exponentiation Result: 8

// Increment (++) Operator:
let incrementNumber = 5;
incrementNumber++; // Incrementing the value by 1
console.log("Incremented Number:", incrementNumber); // Output: Incremented Number: 6

// Decrement (--) Operator:
let decrementNumber = 5;
decrementNumber--; // Decrementing the value by 1
console.log("Decremented Number:", decrementNumber); // Output: Decremented Number: 4

// PART - 2

// Assignment Operators in JavaScript:
// These operators are used to assign values to variables.
console.log("\nAssignment Operators in JavaScript:\n\n")

// Assignment (=) Operator:
let x = 5; // Assigning the value 5 to variable x
console.log("Value of x:", x); // Output: Value of x: 5

// Addition Assignment (+=) Operator:
let y = 10;
y += 5; // Equivalent to: y = y + 5
console.log("Value of y after addition assignment:", y); // Output: Value of y after addition assignment: 15

// Subtraction Assignment (-=) Operator:
let z = 20;
z -= 5; // Equivalent to: z = z - 5
console.log("Value of z after subtraction assignment:", z); // Output: Value of z after subtraction assignment: 15

// Multiplication Assignment (*=) Operator:
let a = 2;
a *= 3; // Equivalent to: a = a * 3
console.log("Value of a after multiplication assignment:", a); // Output: Value of a after multiplication assignment: 6

// Division Assignment (/=) Operator:
let b = 20;
b /= 5; // Equivalent to: b = b / 5
console.log("Value of b after division assignment:", b); // Output: Value of b after division assignment: 4

// Modulus Assignment (%=) Operator:
let c = 10;
c %= 3; // Equivalent to: c = c % 3
console.log("Value of c after modulus assignment:", c); // Output: Value of c after modulus assignment: 1

// Exponentiation Assignment (**=) Operator:
let d = 2;
d **= 3; // Equivalent to: d = d ** 3
console.log("Value of d after exponentiation assignment:", d); // Output: Value of d after exponentiation assignment: 8


// PART - 3

// Comparison Operators in JavaScript:
// These operators are used to compare two values and return a Boolean result.
console.log("\nComparison Operators in JavaScript:\n\n")

// Equal to (==) Operator:
console.log("5 == 5:", 5 == 5); // Output: 5 == 5: true
console.log("5 == '5':", 5 == '5'); // Output: 5 == '5': true

// Not Equal to (!=) Operator:
console.log("5 != 3:", 5 != 3); // Output: 5 != 3: true
console.log("5 != '5':", 5 != '5'); // Output: 5 != '5': false

// Strict Equal to (===) Operator:
console.log("5 === 5:", 5 === 5); // Output: 5 === 5: true
console.log("5 === '5':", 5 === '5'); // Output: 5 === '5': false

// Strict Not Equal to (!==) Operator:
console.log("5 !== 3:", 5 !== 3); // Output: 5 !== 3: true
console.log("5 !== '5':", 5 !== '5'); // Output: 5 !== '5': true

// Greater than (>) Operator:
console.log("5 > 3:", 5 > 3); // Output: 5 > 3: true

// Less than (<) Operator:
console.log("5 < 3:", 5 < 3); // Output: 5 < 3: false

// Greater than or Equal to (>=) Operator:
console.log("5 >= 5:", 5 >= 5); // Output: 5 >= 5: true

// Less than or Equal to (<=) Operator:
console.log("5 <= 3:", 5 <= 3); // Output: 5 <= 3: false

// PART - 4

console.log("\nLogical Operators in JavaScript:\n\n")
// Logical Operators in JavaScript:
// These operators are used to perform logical operations on Boolean values.

// Logical AND (&&) Operator:
// Returns true if both operands are true, otherwise returns false.
console.log("true && true:", true && true); // Output: true && true: true
console.log("true && false:", true && false); // Output: true && false: false

// Logical OR (||) Operator:
// Returns true if at least one of the operands is true, otherwise returns false.
console.log("true || false:", true || false); // Output: true || false: true
console.log("false || false:", false || false); // Output: false || false: false

// Logical NOT (!) Operator:
// Returns true if the operand is false, otherwise returns false.
console.log("!true:", !true); // Output: !true: false
console.log("!false:", !false); // Output: !false: true
console.log("!(5 > 7):", !(5 > 7)); // Output: !false: true

// Combining Logical Operators:
// Logical operators can be combined to form complex conditions.
const x1 = 5;
const y1 = 10;
const z1 = 15;
console.log("(x1 < y1) && (y1 < z1):", (x1 < y1) && (y1 < z1)); // Output: (x1 < y1) && (y1 < z1): true

// Short-Circuiting:
// JavaScript uses short-circuiting to improve performance.
// In the logical AND (&&) operator, if the first operand is false, the second operand is not evaluated.
// In the logical OR (||) operator, if the first operand is true, the second operand is not evaluated.
// This behavior prevents unnecessary evaluation of expressions.
console.log("false && (someFunction()):", false && (someFunction())); // Output: false (someFunction() will not be called)
console.log("true || (someFunction()):", true || (someFunction())); // Output: true (someFunction() will not be called)

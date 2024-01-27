// Conditional Statements in JavaScript:
// These statements are used to execute different blocks of code based on specified conditions.
console.log("Conditional Statements in JavaScript:\n\n")

// If Statement:
// Executes a block of code if a specified condition is true.
const x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}

// If-Else Statement:
// Executes one block of code if a specified condition is true and another block if the condition is false.
const y = 3;
if (y > 5) {
    console.log("y is greater than 5");
} else {
    console.log("y is not greater than 5");
}

// Else-If Statement:
// Used to specify multiple conditions.
const z = 7;
if (z > 10) {
    console.log("z is greater than 10");
} else if (z > 5) {
    console.log("z is greater than 5 but less than or equal to 10");
} else {
    console.log("z is less than or equal to 5");
}

// Switch Statement:
// Evaluates an expression and executes a block of code depending on the matching case.
const grade = 'B';
switch (grade) {
    case 'A':
        console.log("Excellent!");
        break;
    case 'B':
        console.log("Good job!");
        break;
    case 'C':
        console.log("You passed.");
        break;
    default:
        console.log("Invalid grade");
}

// PART - 2

// Ternary Operator (?) in JavaScript:
// Also known as the conditional operator, it is a concise way to write simple If-Else conditional statements.
console.log("\nTernary Operator (?) in JavaScript:\n\n");

// Syntax:
// condition ? expression_1 : expression_2

// If the condition is true, expression_1 is executed. If false, expression_2 is executed.

// Example 1:
const age = 25;
const message1 = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message1); // Output: You are an adult

// Example 2:
const temperature = 15;
const weather = temperature > 20 ? "Warm" : "Cold";
console.log(weather); // Output: Cold


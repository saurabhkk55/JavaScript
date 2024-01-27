console.log("Loops in JavaScript:\n\n");
// Loops in JavaScript:
// Loops are used to execute a block of code repeatedly until a specified condition is met.

// For Loop:
// Executes a block of code a specified number of times.
console.log("For Loop:\n\n");
for (let i = 0; i < 5; i++) {
    console.log("Iteration", i + 1);
}
// Output:
// Iteration 1
// Iteration 2
// Iteration 3
// Iteration 4
// Iteration 5

// While Loop:
// Executes a block of code as long as a specified condition is true.
console.log("\nWhile Loop:\n\n");
let j = 0;
while (j < 5) {
    console.log("Iteration", j + 1);
    j++;
}
// Output:
// Iteration 1
// Iteration 2
// Iteration 3
// Iteration 4
// Iteration 5

// Do-While Loop:
// Similar to a while loop, but the condition is evaluated after executing the block of code.
console.log("\nDo-While Loop:\n\n");
let k = 0;
do {
    console.log("Iteration", k + 1);
    k++;
} while (k < 5);
// Output:
// Iteration 1
// Iteration 2
// Iteration 3
// Iteration 4
// Iteration 5

// For-of Loop:
// Iterates over iterable objects (such as arrays, strings, maps, sets, etc.) and provides access to each element.
console.log("\nFor-of Loop:\n\n");
const array = [1, 2, 3, 4, 5]; // const array = "saurabh";
for (const element of array) {
    console.log("Element:", element);
}
// Output:
// Element: 1
// Element: 2
// Element: 3
// Element: 4
// Element: 5

// For-in Loop:
// Iterates over the properties of an object.
console.log("\nFor-in Loop:\n\n");
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (const key in person) {
    console.log("Key:", key, "& Value:", person[key]);
}
// Output:
// Key: name & Value: John
// Key: age & Value: 30
// Key: city & Value: New York

// Infinite Loop:
// A loop that continues indefinitely without a stopping condition.
console.log("\nInfinite Loop:\n\n");
let count = 0;
while (true) {
    console.log("Count:", count);
    count++;
    if (count === 5) {
        break; // Breaking out of the infinite loop after 5 iterations
    }
}
// Output:
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4

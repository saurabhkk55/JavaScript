// Example - 1
console.log("Hello");

setTimeout(() => {
    console.log("World##########################");
}, 1000); // Output "Hello" immediately, then "World" after 1000ms (1 second)

for (let i=0; i<100000; i++) {
    console.log(`Galaxy-${i}`);
}
// Output:
// Hello
// Galaxy-0
// Galaxy-1
// ...
// Galaxy-99999
// World####

// // Example - 2
// console.log("Hello");

// setTimeout(() => {
//     console.log("World");
// }, 1000); // Output "Hello" immediately, then "World" after 1000ms (1 second)

// console.log("Galaxy");

// Output:
// Hello
// Galaxy
// World
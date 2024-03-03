// debugger;
const a = "one";
function afn(){
    console.log(a);
}
afn()
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
        // debugger;
        const randomNumber = 0.2 // Math.random();
        if (randomNumber < 0.5) {
            resolve(randomNumber);
            for (let i=0; i<3; i++) {
                console.log(`hi-${i}`);
            }
        } else {
            reject("Failed to generate a random number.");
        }
    }, 1000);
});

console.log("TWO");
// Consuming the promise
myPromise
.then((result) => {
    console.log("Random number generated:", result);
})
.catch((error) => {
    console.error("Error:", error);
});
console.log("three");

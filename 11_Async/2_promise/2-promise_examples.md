Different ways to use promises in JavaScript:

### 1. Creating and Consuming a Basic Promise:

```javascript
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            resolve(randomNumber);
        } else {
            reject("Failed to generate a random number.");
        }
    }, 1000);
});

// Consuming the promise
myPromise
    .then((result) => {
        console.log("Random number generated:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

Output-1:

```
hi
Random number generated: 0.016814475992492195
```

Output-2:

```
Error: Failed to generate a random number.
```
### 2. Chaining Promises:

```javascript
// First asynchronous operation
const firstOperation = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5);
    }, 1000);
});

// Second asynchronous operation that depends on the result of the first one
const secondOperation = (result) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result * 2);
        }, 1000);
    });
};

// Chaining promises
firstOperation
    .then(secondOperation)
    .then((finalResult) => {
        console.log("Final Result:", finalResult);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

### 3. Using Promise.all():

```javascript
// Simulating asynchronous operations
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1500);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 1000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 2000);
});

// Using Promise.all() to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

### 4. Using Promise.race():

```javascript
// Simulating asynchronous operations with different delays
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 finished first");
    }, 2000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 finished first");
    }, 1000);
});

// Using Promise.race() to get the result of the first promise that resolves
Promise.race([promise1, promise2])
    .then((result) => {
        console.log("First promise finished:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

These examples demonstrate various ways to use promises in JavaScript, including basic creation and consumption, chaining promises together, using `Promise.all()` to wait for multiple promises to resolve, and using `Promise.race()` to get the result of the first promise that resolves.
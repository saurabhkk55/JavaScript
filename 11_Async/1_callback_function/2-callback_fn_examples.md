## `Different ways to use callback functions in JavaScript`

### 1. Basic Callback Usage:
```javascript
// Example 1: Basic Callback Usage
function greet(name, callback) {
    console.log('Hello, ' + name + '!');
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

// sayGoodbye function is a callback function here because it is passed as an argument to the greet function.
// This means that after the execution of the greet function, the sayGoodbye function will be called.
greet('Alice', sayGoodbye);
```

#### Output

```
Hello, Alice!
Goodbye!
```

### 2. Asynchronous Operations with Callbacks:
```javascript
// Example 2: Asynchronous Operation with Callbacks (setTimeout)
function fetchData(callback) {
    // setTimeout is used to simulate an asynchronous operation.
    // It waits for 2000 milliseconds (2 seconds) before executing the provided function.
    setTimeout(function() {
        // After the timeout, generate some sample data.
        const data = 'This is some data fetched asynchronously.';
        // Invoke the callback function provided as an argument, passing the fetched data to it.
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log('Data received:', data);
}

// Calling the fetchData function with processData as the callback function.
// This means that when fetchData completes fetching data, it will invoke processData with the fetched data.
fetchData(processData);
```

#### Output

```
Data received: This is some data fetched asynchronously.
```

### 3. Error Handling with Callbacks:
```javascript
// Example 3: Error Handling with Callbacks (Error-First Callbacks)
function readFile(path, callback) {
    // Simulating file reading
    if (path === 'valid_path') {
        const data = 'File contents';
        callback(null, data); // First parameter is for error, null if no error
    } else {
        const error = new Error('Invalid file path');
        callback(error, null);
    }
}

function handleFileRead(error, data) {
    if (error) {
        console.error('Error reading file:', error.message);
    } else {
        console.log('File contents:', data);
    }
}

// Reading file asynchronously
readFile('valid_path', handleFileRead);
```

#### Output

```
File contents: File contents
```

### 4. Callbacks in Event Handling:
```javascript
// Example 4: Callbacks in Event Handling
document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button clicked!');
});
```

### 5. Callbacks with Array Methods:
```javascript
// Example 5: Callbacks with Array Methods (forEach)
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number * 2);
});
```

#### Output

```
2
4
6
8
10
```

These examples demonstrate various ways to use callback functions in JavaScript, including basic usage, asynchronous operations, error handling, event handling, and with array methods. Each example includes working code that you can run in a JavaScript environment like a browser console or Node.js.
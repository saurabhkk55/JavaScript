# `Lexical scoping`

- **Lexical scoping** determines variable accessibility based on where variables and blocks of scope are authored in the code.
- Variables declared within a function are accessible within that function and any nested functions (inner functions) due to lexical scoping.
- Functions retain access to variables declared in their outer scopes even after the outer function has finished executing.
- Attempting to access a variable outside of its defined scope will result in a `ReferenceError`.

```javascript
// Lexical scoping in JavaScript refers to how the scope of variables is determined by the placement of variables and functions in the code. 
// In lexical scoping, the scope of a variable is defined by its location within the code when it is written.
// Variables declared outside of any function are in the global scope, while variables declared inside a function are in the local scope of that function.

function outer() {
    // Define a variable 'username' within the scope of 'outer' function
    let username = "hitesh";

    // Inner function 'inner' accessing the 'username' variable from the outer scope
    function inner() {
        let secret = "my123";
        console.log("Inner Function - Accessed Username:", username); // Log: Accessing 'username' from the inner function
    }

    // Inner function 'innerTwo' also accessing the 'username' variable from the outer scope
    function innerTwo() {
        console.log("Another Inner Function - Accessed Username:", username); // Log: Username accessed from another inner function
        // Accessing 'secret' here would result in a ReferenceError because it's not within the scope of 'innerTwo'
        // console.log(secret);
    }

    // Calling inner functions
    inner();
    innerTwo();

    console.log("Outer Function - Accessed Username:", username); // Log: 'username' accessed from the outer function scope
}

// Calling the 'outer' function
outer();

// Attempting to access 'username' here would result in a ReferenceError because it's local to the 'outer' function scope.
// console.log("TOO OUTER", username); // ReferenceError: 'username' is not defined
```

### Output:

```js
Inner Function - Username: hitesh
Another Inner Function - Username: hitesh
Outer  Function - Username: hitesh
```

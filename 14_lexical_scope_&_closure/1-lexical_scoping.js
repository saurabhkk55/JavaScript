function outer() {
    // Define a variable 'username' within the scope of 'outer' function
    let username = "hitesh";

    // console.log("Outer Function - secret", secret);  // This line will cause a ReferenceError

    // Inner function 'inner' accessing the 'username' variable from the outer scope
    function inner() {
        let secret = "my123";
        console.log("Inner Function - Username:", username); // Log: Accessing 'username' from the inner function
    }

    // Inner function 'innerTwo' also accessing the 'username' variable from the outer scope
    function innerTwo() {
        console.log("Another Inner Function - Username:", username); // Log: Username accessed from another inner function
        // Accessing 'secret' here would result in a ReferenceError because it's not within the scope of 'innerTwo'
        // console.log(secret);
    }

    // Calling inner functions
    inner();
    innerTwo();

    console.log("Outer Function - Username:", username);
}

// Calling the 'outer' function
outer();

// Attempting to access 'username' here would result in a ReferenceError because it's local to the 'outer' function scope.
// console.log("TOO OUTER", username); // ReferenceError: 'username' is not defined

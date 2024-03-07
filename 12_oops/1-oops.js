// Defining an object using object literal notation
const user = {
    username: "canary",             // Property: username of the user
    loginCount: 8,                  // Property: number of logins for the user
    signedIn: true,                 // Property: indicates whether the user is signed in or not
    // Method: retrieves and displays user details
    getUserDetails: function(){     
        console.log(`Username: ${this.username}`);  // Utilizing 'this' to refer to the current object
    }
}

console.log(user.username)           // Accessing username property of the user object
console.log(user.getUserDetails());  // Calling getUserDetails method of the user object
console.log(this);                   // 'this' here refers to the global object (in non-strict mode), usually the window object in browsers

//////////////////////////////////////////////////////

// INFORMATION:
// When using the 'new' keyword:
// - An empty object (instance) is created.
// - The constructor function is called, initiated by the 'new' keyword.
// - The provided arguments are injected into the parameters of the object using 'this' keyword.

// Defining a constructor function to create user objects
function User(username, loginCount, isLoggedIn){
    // 'this' refers to the newly created object instance (or current context)
    // Arguments are injected into object properties using 'this' keyword
    this.username = username;         // Property: Initializing username property
    this.loginCount = loginCount;     // Property: Initializing loginCount property
    this.isLoggedIn = isLoggedIn;     // Property: Initializing isLoggedIn property
    
    // Method: displays a greeting message for the user
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // The function implicitly returns the created object.
    // When you use 'new User()', you get back a newly created object instance.
    // This is how the User function is utilized to customize the object with provided arguments and then return it.
    return this;
}

// Creating instances of User using 'new' keyword
// 'new' keyword allows us to create multiple instance from a single object (object literal)
// - 'new' creates an empty object.
// Constructor function call happens due to the 'new' keyword
// Arguments are injected into the constructor parameters
const userOne = new User("john", 12, true);    // Creating a new user instance
const userTwo = new User("latina", 11, false);  // Creating another user instance
console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);

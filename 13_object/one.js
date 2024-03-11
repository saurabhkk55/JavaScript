// Singleton pattern
// Using Object.create to create an object

// **Object Literal Example is shared below**

// Defining a symbol for a unique key
const uniqueKey = Symbol("unique key");

// Creating a JsUser object
const JsUser = {
    name: "Saurabh",
    "full name": "Saurabh Kumar Kardam", // Accessing property with spaces requires bracket notation
    [uniqueKey]: "mykey1", // Using a symbol as a property key
    age: 18,
    location: "Jaipur",
    email: "saurabh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log("Email (using dot notation):", JsUser.email);
console.log("Email (using bracket notation):", JsUser["email"]);
console.log("Full Name:", JsUser["full name"]);
console.log("Using Symbol:", JsUser[uniqueKey]);
console.log("User Object:", JsUser);

JsUser.email = "saurabh@chatgpt.com";

// Freezing the Jsuser object to prevent further modifications
// Object.freeze(JsUser);

JsUser.email = "saurabh@microsoft.com";
console.log("After Freezing:", JsUser);

JsUser.greeting = function greet() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}
JsUser.greetingThree = function greetingThree() {
    console.log(`Hello JS user, ${this["full name"]}`);
}

console.log("\nGreeting Method 1:", JsUser.greeting());
console.log("User Object:", JsUser);

console.log("\nGreeting Method 2:", JsUser.greetingTwo());
console.log("User Object:", JsUser);

console.log("\nGreeting Method 3:", JsUser.greetingThree());
console.log("User Object:", JsUser);

// Uses the rest operator (...) to accept any number of arguments
function calculateCartPrice(...items){
    // Returns the array of prices
    return items;
}

// Testing the function with three items
console.log(calculateCartPrice(10, 20, 30)); // Outputs: [10, 20, 30]

console.log("\n>>>>> --- <<<<<\n");

// User object with properties firstName, lastName, and age
const user = {
    firstName: "Saurabh",
    lastName: "Kardam",
    age: 18
};

// Function to display user information
function userInfo(userObject){
    // Returns a welcome message with the user's full name and age
    return `Welcome ${userObject.firstName} ${userObject["lastName"]}. Your age is ${userObject['age']}`;
}

// Getting user info for the user object
let displayUserInfo = userInfo(user);
console.log(`${displayUserInfo}`); // Outputs: "Welcome Saurabh Kardam. Your age is 18"

// Getting user info for a new user object
displayUserInfo = userInfo({
    firstName: "Microsoft",
    lastName: "Pvt. Ltd",
    age: 1664
});
console.log(`${displayUserInfo}`); // Outputs: "Welcome Microsoft Pvt. Ltd. Your age is 1664"

console.log("\n>>>>> --- <<<<<\n");

// Array of numbers
const myArr = [10, 20, 30, 40, 50];

// Function to get the second element of an array
function getSecondElement(arr){
    // Returns a string with the second element of the array
    return `2nd element of the given array is ${arr[1]}`;
}

// Testing the function with the array of numbers
console.log(`${getSecondElement(myArr)}`); // Outputs: "2nd element of the given array is 20"

// Testing the function with an array of letters
console.log(`${getSecondElement(["a", "b", "c", "d"])}`); // Outputs: "2nd element of the given array is b"

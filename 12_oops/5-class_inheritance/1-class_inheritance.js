// Define a base class User with a constructor to initialize username and a method logMe to log the username.
class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`User: ${this.username}`);
    }
}

// Teacher class extends User, adding email and password properties, and a method addCourse.
class Teacher extends User{
    constructor(username, email, password){
        // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        // `super()` keyword is used to call the constructor of the parent class (super class named "User")
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`Course added by Teacher: ${this.username}`);
    }
}

// Create an instance of Teacher with username 'chai', email 'chai@teacher.com', and password '123'.
const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.logMe(); // Output: User: chai
chai.addCourse(); // Output: Course added by Teacher chai

// Create an instance of User with username 'masalaChai'.
const masalaChai = new User("masalaChai");
masalaChai.logMe(); // Output: User: masalaChai
// masalaChai.addCourse(); // This will throw an error as addCourse is not a method of the User class.

// Check inheritance relationships using instanceof operator.
console.log(Teacher instanceof User); // Output: false - Teacher is not an instance of User
console.log(chai instanceof Teacher); // Output: true - chai is an instance of Teacher
console.log(chai instanceof User); // Output: true - chai is also an instance of User

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Equivalent prototype-based code

// // User Constructor Function
// function User(username) {
//     this.username = username;
// }

// // Method to log user
// User.prototype.logMe = function() {
//     console.log(`User: ${this.username}`);
// };

// // Teacher Constructor Function extending User
// function Teacher(username, email, password) {
//     User.call(this, username);
//     this.email = email;
//     this.password = password;
// }

// // Setting up the prototype chain
// // By assigning Object.create(User.prototype) to Teacher.prototype, we're effectively making Teacher.prototype inherit from User.prototype. 
// // This means that any properties or methods added to User.prototype will be accessible to instances of both the User and Teacher constructor functions.
// Teacher.prototype = Object.create(User.prototype);
// Teacher.prototype.constructor = Teacher;

// // Method to add course
// Teacher.prototype.addCourse = function() {
//     console.log(`Course added by Teacher: ${this.username}`);
// };

// // Creating instances
// const chai = new Teacher("chai", "chai@teacher.com", "123");
// chai.logMe(); // Output: User: chai
// chai.addCourse(); // Output: Course added by Teacher chai

// const masalaChai = new User("masalaChai");
// masalaChai.logMe(); // Output: User: masalaChai
// // masalaChai.addCourse(); // This will throw an error as addCourse is not a method of the User class.

// console.log(Teacher instanceof User); // false
// console.log(chai instanceof Teacher); // true
// console.log(chai instanceof User); // true

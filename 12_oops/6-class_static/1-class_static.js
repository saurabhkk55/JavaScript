class User {
    constructor(username){
        this.username = username;
    }

    // Instance method to log the username
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // Static method to generate a fixed ID
    static createId(){
        return `123`;
    }
}

// Creating a new instance of User class
const hitesh = new User("hitesh");

hitesh.logMe(); // Output: Username: hitesh

// Attempting to call createId() on the instance (will result in an error)
// console.log(hitesh.createId()); // This would throw an error since createId() is a static method

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

// Creating a new instance of Teacher class
const iphone = new Teacher("iphone", "i@phone.com");

iphone.logMe(); // Output: Username: iphone
console.log(`Email: ${iphone.email}`); // Output: Email: i@phone.com

// Attempting to call createId() on the teacher instance (will result in an error)
// console.log(iphone.createId()); // This would throw an error since createId() is a static method

// Instead, we call createId() directly on the User class
console.log(User.createId()); // Output: 123

// Learning Points:
// 1. Static Method: When a method is declared as `static` within a class, it means that it belongs to the class itself, not to instances of the class. It can be called directly on the class itself, rather than on an instance of the class.
// 2. Usage: In this example, `createId()` is defined as a static method within the `User` class. This method generates and returns a fixed ID value (`123`).
// 3. Accessing Static Methods: Static methods can be accessed using the class name, e.g., `User.createId()`.
// 4. Instance Methods: `logMe()` is an instance method which logs the username of the instance. It is called on the instances of the class (`hitesh.logMe()` and `iphone.logMe()`).
// 5. Inheritance: In JavaScript, when a class extends another class, it inherits the properties and methods defined in the parent class, including instance methods and properties. 
                // However, static methods are not inherited by child classes. 
                // In the provided code, the Teacher class extends the User class, 
                // so instances of Teacher will have access to the logMe() method because it's an instance method of the User class. 
                // However, Teacher instances won't have access to the createId() static method unless explicitly calling it on the User class itself (User.createId()).

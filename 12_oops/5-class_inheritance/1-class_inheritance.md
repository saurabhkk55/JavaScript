# `Inheritance in classes`

```javascript
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
// chai.logMe(); // Output: User: chai
chai.addCourse(); // Output: Course added by Teacher chai

// Create an instance of User with username 'masalaChai'.
const masalaChai = new User("masalaChai");
masalaChai.logMe(); // Output: User: masalaChai
// masalaChai.addCourse(); // This will throw an error as addCourse is not a method of the User class.

// Check inheritance relationships using instanceof operator.
console.log(Teacher instanceof User); // Output: false - Teacher is not an instance of User
console.log(chai instanceof Teacher); // Output: true - chai is an instance of Teacher
console.log(chai instanceof User); // Output: true - chai is also an instance of User
```

Inheritance in classes allows for the creation of a hierarchy where `child classes` (like Teacher) inherit `properties` and `methods` from `parent classes` (like User). This promotes code reusability and helps in organizing code logically. When an instance of a child class is created, it can access both its own methods/properties and those inherited from the parent class. The `super()` keyword is used to call the constructor of the parent class. 
> Remember that instances of a child class are also instances of the parent class due to inheritance.

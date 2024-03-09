# `ES6 class` vs. `Prototype-based Inheritance`

# `ES6 Class`

In ES6, the `class` keyword was introduced as a syntactic sugar over JavaScript's existing prototype-based inheritance. The `class` syntax does not introduce a new object-oriented inheritance model to JavaScript. It just makes the syntax more similar to the classes in other object-oriented programming languages like Java or Python.

Here's your ES6 class code:

```javascript
// ES6
class User {
    constructor(username, email, password){
        // The constructor method is a special method for creating and initializing an object created with a class.
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        // Instance method
        const encryptedPassword = `${this.password}abc`;
        console.log(`Encrypted password for ${this.username} is: ${encryptedPassword}`);
        return encryptedPassword;
    }
    
    changeUsername(){
        // Instance method
        const changedUsername = `${this.username.toUpperCase()}`;
        console.log(`Changed username for ${this.email} is: ${changedUsername}`);
        return changedUsername;
    }
}

const chai = new User("chai", "chai@gmail.com", "123");

chai.encryptPassword();
chai.changeUsername();
```
### ES6 Class
- **User Class**: Defines a class named `User` using the `class` syntax.
- **Constructor**: Initializes the `User` object with `username`, `email`, and `password`.
- **Instance Methods**: `encryptPassword()` and `changeUsername()` are defined within the class to perform specific actions on `User` instances.
- **Object Instantiation**: An instance of `User` named `chai` is created, and its methods are called.

# Equivalent `Prototype-based inheritance Code`

Before ES6, we used functions and prototypes to create classes. Here's how you can write equivalent code for the above ES6 class using JavaScript's `prototype-based inheritance`:

```javascript
// Equivalent prototype-based code
function User(username, email, password){
    // Constructor function
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    // Instance method
    const encryptedPassword = `${this.password}abc`;
    console.log(`Encrypted password for ${this.username} is: ${encryptedPassword}`);
    return encryptedPassword;
}

User.prototype.changeUsername = function(){
    // Instance method
    const changedUsername = `${this.username.toUpperCase()}`;
    console.log(`Changed username for ${this.email} is: ${changedUsername}`);
    return changedUsername;
}

const tea = new User("tea", "tea@gmail.com", "123");

tea.encryptPassword();
tea.changeUsername();
```
### Equivalent Prototype-based Code
- **User Constructor Function**: Defines a constructor function `User` which acts similarly to the class constructor.
- **Prototype Methods**: `encryptPassword()` and `changeUsername()` are added to the `User` prototype, allowing all instances of `User` to access these methods.
- **Object Instantiation**: An instance of `User` named `tea` is created, and its methods are called.

In this prototype-based code, we define the `User` function as a constructor. The `encryptPassword` and `changeUsername` methods are then added to the `User` prototype. This allows all instances of `User` to have access to these methods.

Remember, even though the syntax is different, both the ES6 class and the prototype-based code are doing the same thing under the hood. They both create a new `User` object and attach methods to the prototype of the `User` object.

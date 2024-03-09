// // ES6
// class User {
//     constructor(username, email, password){
//         // The constructor method is a special method for creating and initializing an object created with a class.
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         // Instance method
//         const encryptedPassword = `${this.password}abc`;
//         console.log(`Encrypted password for ${this.username} is: ${encryptedPassword}`);
//         return encryptedPassword;
//     }
    
//     changeUsername(){
//         // Instance method
//         const changedUsername = `${this.username.toUpperCase()}`;
//         console.log(`Changed username for ${this.email} is: ${changedUsername}`);
//         return changedUsername;
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123");

// chai.encryptPassword();
// chai.changeUsername();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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

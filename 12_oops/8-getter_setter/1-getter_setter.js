// Define a User object
const User = {
    // Initialize instance variables
    _email: "h@hitesh.ai", // '',
    _password: "abc", // '',

    // Getter method for email
    get email() {
        return this._email.toUpperCase();
    },

    // Setter method for email
    set email(value) {
        this._email = value;
    },

    // Getter method for password
    get password() {
        return `${this._password}hitesh`;
    },

    // Setter method for password
    set password(value) {
        this._password = value;
    }
};

// Create a new User instance
const user1 = Object.create(User);
// user1.email = "h@hitesh.ai";
// user1.password = "abc";

// Log the modified password using getter method
console.log("Modified password:", user1.password);

// Log the modified email using getter method
console.log("Modified email:", user1._email);

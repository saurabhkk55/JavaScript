// Creating a tinderUser object using object literal syntax
const tinderUser = {
    id: "123abc",
    name: "Sammy",
    isLoggedIn: false
};

// Logging the tinderUser object and its properties
console.log("Tinder User Object:", tinderUser);
console.log("Keys of Tinder User Object:", Object.keys(tinderUser));
console.log("Values of Tinder User Object:", Object.values(tinderUser));
console.log("Entries of Tinder User Object:", Object.entries(tinderUser));
console.log("Does Tinder User Object have 'isLoggedIn' property?", tinderUser.hasOwnProperty('isLoggedIn'));

console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n");

// Creating a regularUser object with nested properties
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

// Accessing nested property values using dot notation
console.log("First name of regular user:", regularUser.fullname.userfullname.firstname);
// Accessing nested property values using bracket notation
console.log("First name of regular user:", regularUser["fullname"]["userfullname"]["firstname"]);

console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n");

// Creating objects obj1, obj2, and obj4
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// Merging obj1 and obj2 into obj3 using object literal syntax
let obj3 = { ...obj1, ...obj2 };
console.log("Merged objects using object spread syntax:", obj3);

// Merging obj1, obj2, and obj4 into obj3 using Object.assign()
obj3 = Object.assign({}, obj1, obj2, obj4);
console.log("Merged objects using Object.assign():", obj3);

// Merging obj1, obj2, and obj4 into obj1 using Object.assign()
Object.assign(obj1, obj2, obj4);
console.log("Updated obj1 after merging using Object.assign():", obj1);

console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n");

// Array of user objects with unique ids and email addresses
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
];

// Logging the email address of the user at index 1
console.log("Email of user at index 1:", users[1].email);


// Course object containing details about a JavaScript course
const course = {
    coursename: "js in hindi",   // Name of the course
    price: "999",                // Price of the course
    courseInstructor: "hitesh"   // Instructor of the course
}

// Destructuring assignment to extract the course instructor property with alias 'instructor'
const {courseInstructor: instructor} = course;

// Destructuring assignment to extract the price property
const {price} = course;

// Logging the instructor of the course
console.log("Course Instructor:", instructor);

// Logging the price of the course
console.log("Course Price:", price);

console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n");

// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]

/* Output:
Tinder User Object: { id: '123abc', name: 'Sammy', isLoggedIn: false }
Keys of Tinder User Object: [ 'id', 'name', 'isLoggedIn' ]
Values of Tinder User Object: [ '123abc', 'Sammy', false ]
Entries of Tinder User Object: [ [ 'id', '123abc' ], [ 'name', 'Sammy'
 ], [ 'isLoggedIn', false ] ]
Does Tinder User Object have 'isLoggedIn' property? true

>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<        

First name of regular user: hitesh
First name of regular user: hitesh

>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<        

Merged objects using object spread syntax: { '1': 'a', '2': 'b', '3': 
'a', '4': 'b' }
Merged objects using Object.assign(): { '1': 'a', '2': 'b', '3': 'a', 
'4': 'b', '5': 'a', '6': 'b' }
Updated obj1 after merging using Object.assign(): { '1': 'a', '2': 'b'
, '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<        

Email of user at index 1: b@gmail.com
Course Instructor: hitesh
Course Price: 999

>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 
*/
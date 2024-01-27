// Declaring and Initializing a String:
const str = "Hello, World!"; // This is a string literal.

// Length of a String:
// The length property of a string returns the number of characters in the string.
const lengthOfString = str.length;
console.log("Length of the string:", lengthOfString); // Output: Length of the string: 13

// Accessing Elements of a String:
// Individual characters in a string can be accessed using square brackets and index notation.
const firstCharacter = str[0]; // Accessing the first character (index 0) of the string
console.log("First character of the string:", firstCharacter); // Output: First character of the string: H

// String Template Literal:
// Template literals provide an easy way to embed expressions and multi-line strings in JavaScript.
const firstName = "John";
const age = 30;
const occupation = "developer";

// Without using template literals:
const greeting = "Hello, my name is " + firstName + ", I am " + age + " years old, and I work as a " + occupation + ".";
console.log("Type of greeting:", typeof greeting); // Output: Type of greeting: string

// Using template literals:
const greetingTemplateLiteral = `Hello, my name is ${firstName}, I am ${age} years old, and I work as a ${occupation}.`; // This is a string template.
console.log("Type of greetingTemplateLiteral:", typeof greetingTemplateLiteral); // Output: Type of greetingTemplateLiteral: string

console.log("Greeting without template literals:", greeting);
console.log("Greeting with template literals:", greetingTemplateLiteral);

// Benefit of Using String Template Literal:
// 1. Easier to read and write, especially for longer strings or when including variables.
// 2. Allows for easy interpolation of variables and expressions within the string.
// 3. Supports multi-line strings without the need for escape characters like '\n'.

// Example of multi-line string using template literals:
const multiLineString = `This is a multi-line string.
It allows for easy formatting and readability.
No need for escape characters like '\\n'.`;

console.log("Multi-line string:", multiLineString); // Output: Multi-line string: This is a multi-line string.\nIt allows for easy formatting and readability.\nNo need for escape characters like '\\n'.

// PART -2 

// String Methods in JavaScript:
// String methods allow manipulation and processing of string data.
console.log("\nString Methods in JavaScript:\n\n")
// In JS, strings are immutable data types, meaning that once a string is created, its value cannot be changed. 
// This means you cannot directly modify a specific character or substring within a string.
// However, you can create a new string with the desired modifications using various string methods. 
// These methods return a new string rather than modifying the original one.

// Example String:
const anotherStr = "Hello, World!";

// 1. toUpperCase():
// Converts the string to uppercase and returns it as a new string.
console.log("toUpperCase():", anotherStr.toUpperCase()); // Output: HELLO, WORLD!
console.log("Original String:", str); // Original String: Hello, World!

// 2. toLowerCase():
// Converts the string to lowercase and returns it as a new string.
console.log("toLowerCase():", anotherStr.toLowerCase()); // Output: hello, world!
console.log("Original String:", str); // Original String: Hello, World!

// 3. indexOf():
// Returns the index of the first occurrence of a specified substring within the string.
console.log("indexOf('World'):", anotherStr.indexOf('World')); // Output: indexOf('World'): 7
console.log("Original String:", str); // Original String: Hello, World!

// 4. slice():
// Extracts a section of the string and returns it as a new string.
console.log("slice(7):", anotherStr.slice(7)); // Output: slice(7): World!
console.log("Original String:", str); // Original String: Hello, World!

// 5. replace():
// Replaces a specified substring with another substring and returns it as a new string.
console.log("replace('World', 'Universe'):", anotherStr.replace('World', 'Universe')); // Output: replace('World', 'Universe'): Hello, Universe!
console.log("Original String:", str); // Original String: Hello, World!

// 6. split():
// Splits a string into an array of substrings based on a specified separator.
console.log("split(', '):", anotherStr.split(', ')); // Output: split(', '): [ 'Hello', 'World!' ]
console.log("Original String:", str); // Original String: Hello, World!

// 7. substring():
// Returns a substring as a new string between two specified indices.
console.log("substring(7, 12):", anotherStr.substring(7, 12)); // Output: substring(7, 12): World
console.log("Original String:", str); // Original String: Hello, World!

// 8. charAt():
// Returns the character at a specified index (position) in the string and returns it as a new string.
const idx = 7;
console.log(`charAt(${idx}):`, str.charAt(idx)); // Output: charAt(7): W
console.log("Original String:", str); // Original String: Hello, World!

// 9. trim():
// Removes whitespace from both ends of the string and returns it as a new string.
const stringWithWhitespace = "   Hello, World!   ";
console.log("trim():", stringWithWhitespace.trim()); // Output: trim(): Hello, World!
console.log("Original String:", stringWithWhitespace); // Original String:   Hello, World!   

// 10. concat():
// Concatenates two or more strings and returns a new string and returns it as a new string.
const first_Name = "John";
const last_Name = "Doe";
console.log("concat():", first_Name.concat(' ', last_Name)); // Output: concat(): John Doe
console.log(`Original String: ${first_Name} & ${last_Name}`); // Original String: John & Doe

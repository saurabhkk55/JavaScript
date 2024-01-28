// What are arrays?
// Arrays are fundamental data structures that efficiently organize a collection of elements under a single name.
// They excel at storing multiple values of the same data type in a contiguous memory block, enabling direct access to elements via their numerical indices.

// Key characteristics:
// Fixed-size: Arrays have a predetermined size, set upon creation.
// Indexed elements: Each element is identified by a unique numerical index, starting from 0.
// Typically stored in heap memory: This allows for flexibility in size and potential growth.
// Mutable: Array elements can be modified after creation, making them adaptable to changing data.

// Additional insights:
// Primitive types: While arrays themselves are considered non-primitive data structures, they can store primitive data types (int, float, boolean, etc.) within their elements.
// Mutability vs. copying: Heap memory allocation doesn't inherently create copies of variables. Mutability refers to the ability to change the contents of an existing variable, distinct from creating a new variable with a different memory location.

// Syntax of an array:
// var arrayName = [element1, element2, ..., elementN];

// Declare and initialize an array:
var myArray = [1, 2, 3, 4, 5]; // an array of integers

// Access elements of an array:
// Elements in an array are accessed using their index, starting from 0.
// Syntax: arrayName[index]
var firstElement = myArray[0]; // accessing the first element
var thirdElement = myArray[2]; // accessing the third element

// Example: Modifying an element
console.log("Original array:", myArray);
myArray[0] = 10; // modifying the first element
console.log("Modified array:", myArray);

// Print all elements of an array:
// You can iterate over the array using loops or use array methods like forEach().
// Method 1: Using a for loop
console.log("Printing all elements using a for loop:");
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Method 2: Using forEach() method
console.log("Printing all elements using forEach():");
myArray.forEach(function(element) {
    console.log(element);
});

// Method 3: Using join() method to print all elements as a single string
console.log("Printing all elements as a single string:");
console.log(myArray.join(", ")); // Join elements with a comma and space

// PART - 2

// Array Methods in JavaScript
console.log("Array Methods in JavaScript");

// Define an array
var myArray = [1, 2, 3, 4, 5];

// Method 1: push()
// Adds one or more elements to the end of an array and returns the new length of the array.
console.log("Original array:", myArray);
myArray.push(6);
console.log("After push(6):", myArray);

// Method 2: pop()
// Removes the last element from an array and returns that element.
console.log("Popped element:", myArray.pop());
console.log("After pop():", myArray);

// Method 3: shift()
// Removes the first element from an array and returns that element.
console.log("Shifted element:", myArray.shift());
console.log("After shift():", myArray);

// Method 4: unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.
myArray.unshift(0);
console.log("After unshift(0):", myArray);

// Method 5: concat()
// Returns a new array that concatenates the original array with other arrays and/or values.
var newArray = myArray.concat([6, 7, 8]);
console.log("Concatenated array:", newArray);

// Method 6: slice()
// Returns a shallow copy of a portion of an array into a new array.
var slicedArray = newArray.slice(2, 5); // start from index 2 (inclusive) to index 5 (exclusive)
console.log("Sliced array:", slicedArray);

// Method 7: splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
var splicedArray = newArray.splice(2, 3, 'a', 'b', 'c'); // start from index 2, remove 3 elements, and insert 'a', 'b', 'c'
console.log("Spliced array:", newArray);

// Method 8: indexOf()
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
var index = newArray.indexOf('b');
console.log("Index of 'b':", index);

// Method 9: includes()
// Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
var isIncluded = newArray.includes(5);
console.log("Includes 5:", isIncluded);

// Method 10: forEach()
// Executes a provided function once for each array element.
console.log("Printing elements using forEach():");
newArray.forEach(function(element) {
    console.log(element);
});

// Method 11: map()
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
var mappedArray = newArray.map(function(element) {
  return element * 2; // doubling each element
});
console.log("Mapped array (doubled):", mappedArray);

// Method 12: filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
var filteredArray = newArray.filter(function(element) {
  return element % 2 === 0; // filtering even numbers
});
console.log("Filtered array (even numbers):", filteredArray);

// Method 13: reduce()
// Executes a reducer function on each element of the array, resulting in a single output value.
var sum = newArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // initial value of accumulator is 0
console.log("Sum of array elements:", sum);

// Method 14: toString()
// Converts the array to a string by concatenating all its elements separated by commas.
console.log("Array as string:", newArray.toString());
const str = newArray.toString();
console.log("type of str:", typeof str);

console.log("\n>>> Slice method <<<");

// Original array
let myArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(`\nOriginal array: ${myArr}`);  // Original array: 10,20,30,40,50,60,70,80,90,100

// Using slice method to extract a portion of the array
let mySlice = myArr.slice(3, 6);                
console.log(`Slice result: ${mySlice}`);                      // Slice result: 40,50,60
console.log(`Original array remains unchanged: ${myArr}`);    // Original array remains unchanged: 10,20,30,40,50,60,70,80,90,100 (slice doesn't modify the original array)
// Learning point: slice: does not affect the original array, original array will remain as it is.

console.log("\n>>> Splice method <<<");

// original array
myArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(`\nOriginal array: ${myArr}`);  // Original array: 10,20,30,40,50,60,70,80,90,100

// Using splice method to remove elements from the array
let mySplice = myArr.splice(3, 6);
console.log(`Splice result (removed elements): ${mySplice}`);   // Splice result (removed elements): 40,50,60,70,80,90
console.log(`Original array modified by splice: ${myArr}`);     // Original array modified by splice: 10,20,30,100 (splice modifies the original array)
// Learning point: splice: affects the original array

// Original array
myArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(`\nOriginal array: ${myArr}`);  // Original array: 10,20,30,40,50,60,70,80,90,100

// Using splice method to remove and insert elements into the array
mySplice = myArr.splice(3, 6, "a", "b", "c", "d", "e", "f");    
console.log(`Splice result (removed elements): ${mySplice}`);   // Splice result (removed elements): 40,50,60,70,80,90 
console.log(`Original array modified by splice: ${myArr}`);     // Original array modified by splice: 10,20,30,a,b,c,d,e,f,100
// Learning point: splice: affects the original array

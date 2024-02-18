console.log("\n>>> Push method <<<");

// Using push method to add one array into another

let firstArray = [10, 20, 30];
let secondArray = [40, 50, 60, 70];

firstArray.push(secondArray);
console.log("\nFirst Array after pushing second array into it:", firstArray);
console.log(`First Array: ${firstArray}`);
console.log(`First Array length: ${firstArray.length}`);
console.log(`First Array type: ${typeof firstArray}`);

console.log("\n>>> Concat method <<<");

// Using concat method and spread operator to concatenate arrays

firstArray = [10, 20, 30];
secondArray = [40, 50, 60, 70];

let combinedArray = firstArray.concat(secondArray);
console.log("\nCombined Array using concat:", combinedArray);

combinedArray = [...firstArray, ...secondArray];
console.log("\nCombined Array using spread operator(...):", combinedArray);

// Note: Both concat and spread can be used for concatenation, but spread operator is preferred by many developers

console.log("\n>>> Flat method <<<");

firstArray = [10, 20, 30];
secondArray = [40, 50, 60, 70, [80, 90, 100]];

// Flattening nested arrays before concatenating

let flattenedArray = firstArray.concat(secondArray);
console.log("\nFlattened Array using concat:", flattenedArray);

const flattenedSecondArray = secondArray.flat(Infinity);
console.log("\nFlattened Second Array using flat method:", flattenedSecondArray);

flattenedArray = [...firstArray, ...secondArray.flat(Infinity)];
console.log("\nFlattened Array using spread operator(...):", flattenedArray);

console.log("\n>>> Concatenating Multiple Arrays <<<");

const Array1 = [1, 2, 3, 4, 5];
const Array2 = [5, 6, 7, 8, 9, 10];
const Array3 = [0, 0, 0];
const Array4 = [1, 3, 9, 19];

// Concatenating multiple arrays using concat method
const concatAll = Array1.concat(Array2, Array3, Array4);
console.log(concatAll);

/* Output:
>>> Push method <<<

First Array after pushing second array into it: [ 10, 20, 30, [ 40, 50, 60, 70 ] ]
First Array: 10,20,30,40,50,60,70
First Array length: 4
First Array type: object

>>> Concat method <<<

Combined Array using concat: [
    10, 20, 30, 40,
    50, 60, 70
]

Combined Array using spread operator(...): [
    10, 20, 30, 40,
    50, 60, 70
]

>>> Flat method <<<

Flattened Array using concat: [ 10, 20, 30, 40, 50, 60, 70, [ 80, 90, 100 ] ]

Flattened Second Array using flat method: [
    40, 50,  60, 70,
    80, 90, 100
]

Flattened Array using spread operator(...): [
    10, 20, 30, 40,  50,
    60, 70, 80, 90, 100
]

>>> Concatenating Multiple Arrays <<<
[
    1, 2, 3,  4, 5, 5, 6,
    7, 8, 9, 10, 0, 0, 0,
    1, 3, 9, 19
]
*/
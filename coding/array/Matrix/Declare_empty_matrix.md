# Creating an Empty Matrix in JavaScript

## Using a Function

You can create an empty matrix of size 4 by 4 in JavaScript using nested arrays. Here's how you can do it:

```javascript
// Create a function to initialize an empty matrix of given size
function createEmptyMatrix(rows, cols) {
    var matrix = [];
    for (var i = 0; i < rows; i++) {
        matrix.push(new Array(cols).fill(0));
    }
    return matrix;
}

// Create an empty 4x4 matrix
var emptyMatrix = createEmptyMatrix(4, 4);

// Print the empty matrix (optional)
console.log(emptyMatrix);
```

This will output:

```
[
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
```

You can modify the values in this matrix as needed for your application.

## Using Nested Loops

You can also create an empty matrix of size 4 by 4 without using a function. Here's another way to do it using nested loops:

```javascript
// Initialize an empty matrix
var emptyMatrix = [];

// Loop through each row
for (var i = 0; i < 4; i++) {
    // Initialize an empty row
    var row = [];
    // Loop through each column
    for (var j = 0; j < 4; j++) {
        // Add 0 to each element of the row
        row.push(0);
    }
    // Add the row to the matrix
    emptyMatrix.push(row);
}

// Print the empty matrix (optional)
console.log(emptyMatrix);
```

This will also give you an empty 4x4 matrix:

```
[
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
```

Both methods achieve the same result, so you can choose whichever one you find more convenient for your code.

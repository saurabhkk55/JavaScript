class Solution {
    set_to_zeroes (matrix, rows, columns) {
        console.log("Original Matrix:")
        for (let x=0;x<rows;x++) {
            for (let y=0; y<columns;y++) {
                process.stdout.write(`${matrix[x][y]}  `);
            }
            console.log();
        }

        function setEntireRow (x) {
            for (let row=0; row<rows; row++) {
                matrix[x][row] = -1;
            }
        }

        function setEntireColumn (y) {
            for (let col=0; col<columns; col++) {
                matrix[col][y] = -1;
            }
        }

        // O[(n*m)*(n+m)]
        for (let x=0;x<4;x++) {
            for (let y=0; y<4;y++) {
                if (matrix[x][y] === 0) {
                    setEntireRow(x);
                    setEntireColumn(y);
                }
            }
        }

        // O[(n*m)]
        for (let x=0;x<4;x++) {
            for (let y=0; y<4;y++) {
                if (matrix[x][y] === -1) {
                    matrix[x][y] = 0
                }
            }
        }

        return matrix
    }
}

// Initialize a 4x4 matrix with all elements set to zero
let matrix = [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1]
];
rows_count = 4;
columns_count = 4;
let obj = new Solution();
let set_to_zeroes_matrix = obj.set_to_zeroes(matrix, rows_count, columns_count);

console.log("Matrix set to zeroes:")
for (let x=0; x<rows_count; x++) {
    for (let y=0; y<columns_count; y++) {
        process.stdout.write(`${set_to_zeroes_matrix[x][y]}  `);
    }
    console.log();
}

// TC: O[(n*m)*(n+m)+(n*m)] if (n==m) { TC: O(2n^3+n^2) }
// SC: N/A

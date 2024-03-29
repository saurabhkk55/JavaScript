class Solution {
    set_to_zeroes (mat, rows, columns) {
        let col0 = 1;

        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < columns; y++) {
                if (mat[x][y] === 0) {
                    mat[x][0] = 0;
                    if (y === 0) {
                        col0 = 0;
                    } else {
                        mat[0][y] = 0;
                    }
                }
            }
        }
        
        for (let x = 1; x < rows; x++) {
            for (let y = 1; y < columns; y++) {
                if ((mat[x][y] != 0) && (mat[x][0] === 0 || mat[0][y] === 0)) {
                    mat[x][y] = 0;
                }
            }
        }
        
        // Always set column first
        if (mat[0][0] === 0) {
            for (let i = 1; i < rows; i++) {
                mat[0][i] = 0;
            }
        }
        
        // Set row after column
        if (col0 === 0) {
            for (let i = 0; i < columns; i++) {
                mat[i][0] = 0;
            }
        }
        
        // console.log(`col0: ${col0}`);
        return mat;
    }
}

// Initialize a 4x4 matrix with all elements set to zero

let matrix = [
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1]
];

rows_count = matrix.length;
// console.log(`rows_count: ${rows_count}`);
columns_count = matrix[0].length;
// console.log(`columns_count: ${columns_count}`);
let obj = new Solution();
let set_to_zeroes_matrix = obj.set_to_zeroes(matrix, rows_count, columns_count);

for (let x = 0; x < rows_count; x++) {
    for (let y = 0; y < columns_count; y++) {
        process.stdout.write(`${set_to_zeroes_matrix[x][y]}  `);
    }
    console.log();
}

// TC: O[(n*m)+(n*m)+n+m] which is equivalent to O[2(n*m)+n+m] .However, if n === m then TC: O(2n^2+2n)
// SC: N/A no extra space is used.

// TEST CASES:

// let matrix = [
//     [1, 1, 1, 0],
//     [1, 0, 0, 1],
//     [1, 1, 0, 1],
//     [1, 1, 1, 1]
// ];

// let matrix = [
//     [1, 1, 1, 1],
//     [1, 0, 0, 1],
//     [1, 1, 0, 1],
//     [1, 1, 1, 1]
// ];

// let matrix = [
//     [1, 1, 1, 0],
//     [1, 0, 0, 1],
//     [1, 1, 0, 1],
//     [0, 1, 1, 1]
// ];
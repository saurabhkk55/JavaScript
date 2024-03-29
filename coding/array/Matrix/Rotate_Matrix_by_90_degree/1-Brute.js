class Solution {
    rotateMatrix (mat, n) {
        // SC: O(n*n)
        // empty 2d matrix of rows * colums
        let ans_matrix = [];
        for (let i = 0; i < n; i++) {
            ans_matrix.push(new Array(n).fill(0));
        }

        // O(n*n)
        for (let x = 0; x < n; x++) {
            for (let y = 0; y < n; y++) {
                ans_matrix[y][(n-1)-x] = mat[x][y];
            }
        }
        return ans_matrix;
    }
}

// NOTE:
// - A matrix should be of n*n size not n*m.

// Initialize a 4x4 matrix with all elements set to zero
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
matrix_size = matrix.length;

let obj = new Solution();
let rotated_Matrix = obj.rotateMatrix(matrix, matrix_size);

console.log("Matrix set to zeroes:")
for (let x=0; x<matrix_size; x++) {
    for (let y=0; y<matrix_size; y++) {
        process.stdout.write(`${rotated_Matrix[x][y]}  `);
    }
    console.log();
}

// TC: O[(n*n)] => O(n+n^2)
// SC: O(n*n) => O(n^2) because of ans_matrix

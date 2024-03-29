class Solution {
    rotateMatrix (mat, n) {
        // Transpose the matrix: Swap rows with columns. TC: O(n/2 * n/2)
        let temp;
        for (let x = 0; x < n-1; x++) {
            for (let y = x+1; y < n; y++) {
                // Swap elements
                temp = mat[x][y];
                mat[x][y] = mat[y][x];
                mat[y][x] = temp;
            }
        }

        // console.log("mat-0",mat[0])
        // console.log("mat-0-3",mat[0][3])

        // Reverse each row of the matrix. TC: O(n * n/2)
        for (let x = 0; x < n; x++) {
            let left_ptr = 0, right_ptr = n-1; 
            while (left_ptr <= right_ptr) {
                // Swap elements
                // [mat[x][left_ptr], mat[x][right_ptr]] = [mat[x][right_ptr], mat[x][left_ptr]];
                // OR
                temp = mat[x][right_ptr];
                mat[x][right_ptr] = mat[x][left_ptr];
                mat[x][left_ptr] = temp;

                left_ptr++;
                right_ptr--;
            }
        }
        return mat;
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

// Time Complexity: O(n/2 * n/2) + O(n * n/2)
// Space Complexity: O(1) - no extra space is used apart from the input and output matrices

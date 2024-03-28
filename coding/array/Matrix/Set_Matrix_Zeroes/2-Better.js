class Solution {
    set_to_zeroes (matrix, rows, columns) {
        let row_arr = new Array(rows).fill(0), col_arr = new Array(columns).fill(0);

        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < columns; y++) {
                if (matrix[x][y] === 0) {
                    row_arr[x] = 1;
                    col_arr[y] = 1
                }
            }
        }
        
        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < columns; y++) {
                if (row_arr[x] == 1 || col_arr[y] == 1) {
                    matrix[x][y] = 0;
                }
            }
        }
        
        return matrix;
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

for (let x = 0; x < rows_count; x++) {
    for (let y = 0; y < columns_count; y++) {
        process.stdout.write(`${set_to_zeroes_matrix[x][y]}  `);
    }
    console.log();
}

// TC: O[(n*m)+(n*m)] which is equivalent to O[2(n*m)] .However, if n === m then TC: O(2n^2)
// SC: O(n+m) .However, if n === m then SC: O(2n)

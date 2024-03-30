class Solution 
{
    //Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(matrix, r, c)
    {
        let x, ans = [];
        let left = 0, right = c-1;
        let top = 0, bottom = r-1;
        
        while ((left <= right) && (top <= bottom)) {
            for (x=left; x<=right; x++) {
                ans.push(matrix[top][x]);
            }
            top++;

            for (x=top; x<=bottom; x++) {
                ans.push(matrix[x][right]);
            }
            right--;

            if (top <= bottom) {
                for (x=right; x>=left; x--) {
                    ans.push(matrix[bottom][x]);
                }
                bottom--;
            }

            if (left <= right) {
                for (x=bottom; x>=top; x--) {
                    ans.push(matrix[x][left]);
                }
                left++;
            }
        }
        return ans;
    }
}

// Initialize a 4x4 matrix with all elements set to zero
let matrix = [
    [1,   2,    3,    4,   5,  6],
    [20,  21,  22,   23,  24,  7],
    [19,  32,  33,   34,  25,  8],
    [18,  31,  36,   35,  26,  9],
	[17,  30,  29,   28,  27,  10],
	[16,  15,  14,   13,  12,  11],
];

// let matrix = [
//     [1,   2,    3,    4,   5,  6],
// ];

// let matrix = [
//     [1,   2,  3, 4],
//     [10, 11, 12, 5],
//     [9,   8,  7, 6],
// ];

// let matrix = [
//     [1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5],
// ];

// let matrix = [
//     [1],
// ];

// let matrix = [
//     [1, 2],
// ];

// let matrix = [
//     [1, 2],
//     [4, 3],
// ];

// let matrix = [
//     [1,   2,    3,    4,   5,  6],
//     [12, 11,   10,    9,   8,  7],
// ];

// let matrix = [
//     [1, 2,  3,   4],
//     [5, 6,  7,   8],
//     [9, 10, 11, 12]
// ];

rows_count = matrix.length;
columns_count = matrix[0].length;

let obj = new Solution();
// let spiral_matrix = obj.spiralMatrix(matrix, rows_count, columns_count);
const ans = obj.spirallyTraverse(matrix, rows_count, columns_count);

console.log(`ans: ${ans}`);

// TC: O(n*m) if (n==m) TC: O(n^2) 
// SC: O(n*m) if (n==m) SC: O(n^2) because of "ans" matrix

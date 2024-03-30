class Solution 
{
    //Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(matrix, r, c)
    {
        // code here
        let left = 0, right = c-1;
        let top = 0, bottom = r-1;
        let x, ans = [];
        
        while ((left <= right) && (top <= bottom)) {
            console.log("--->");
            for (x=left; x<=right; x++) {
                ans.push(matrix[top][x]);
            }
            top++;

            console.log("---> vertically pointng downwards");
            for (x=top; x<=bottom; x++) {
                ans.push(matrix[x][right]);
            }
            right--;

            if (top <= bottom) {
                console.log("<---");
                for (x=right; x>=left; x--) {
                    ans.push(matrix[bottom][x]);
                }
                bottom--;
            }

            if (left <= right) {
                console.log("<--- vertically pointng upwards");
                for (x=bottom; x>=top; x--) {
                    ans.push(matrix[x][left]);
                }
                left++;
            }
        }
        // console.log("ans", ans)
        return ans;
    }
}

// let matrix = [
//     [1, 2,  3,   4],
//     [5, 6,  7,   8],
//     [9, 10, 11, 12]
// ];

// let matrix = [
//     [22, 3, 21, 2]
// ];

let matrix = [
    [13, 32, 8],
    [37, 14,  26], 
    [29, 16, 45 ],
    [32, 23, 29 ]
];
rows_count = matrix.length;
columns_count = matrix[0].length;

let obj = new Solution();
// let spiral_matrix = obj.spiralMatrix(matrix, rows_count, columns_count);
const ans = obj.spirallyTraverse(matrix, rows_count, columns_count);

console.log(`ans: ${ans}`);

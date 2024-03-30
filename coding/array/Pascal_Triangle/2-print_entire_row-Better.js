// Print all the elements of a given row in the pascal triangle.

class Solution {
    printRow (row_num) {
        function nCr (n, r) {
            let ans = 1;
            for (let x=1; x<r; x++) {
                ans =  ans * (n-x);
                ans = ans / x;
            }
            console.log(ans);
        }

        for (let x=1; x<=row_num; x++) {
            nCr(row_num, x);
        }
    }
};

// Here is the given row
let row_num = 6;

let obj = new Solution();
obj.printRow(row_num);

// TC: O(n*r) here n is equal to "rum_num"
// SC: O(1) no space used

// Useful point:
// Each row has rowTH elements. For ex: rwo 1 has 1 elemenet, row 2 has 2 elements, llly row 6 has 6 elements.

// General Info
// This is how a Pascal triangle looks like:
// let pascal_triangle = [
// 	[1],                        row 1                    
// 	[1, 1],                     row 2
// 	[1, 2, 1],                  row 3    
// 	[1, 3, 3, 1],               row 4        
// 	[1, 4, 6, 4, 1],            row 5            
// 	[1, 5, 10, 10, 5, 1]        row 6                
// ];

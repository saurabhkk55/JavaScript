// Find element at the given row and column in the pascal triangle.

class Solution {
    nCr (n, r) {
        let ans = 1;
        for (let x=1; x<r; x++) {
            ans =  ans * (n-x);
            ans = ans / x;
        }
        return ans;
    }
};

// Here are the given row and column
let row = 6, col = 6;


let obj = new Solution();
const ans = obj.nCr(row, col);

console.log(`Element at row ${row} & column ${col}: ${ans}`);

// TC: O(r)
// SC: O(1) no space used

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

// Here row is 6 and column is 3, so we want to find the element at the 6th row and 3rd column in Pascal's Triangle.
// The element can be calculated using the mathematical formula for combinations (n choose r), which is denoted as nCr.
// In Pascal's Triangle, the element at row 'n' and column 'r' corresponds to the value of (n-1)C(r-1).
// For example, at row 6 and column 3, we compute (6-1)C(3-1) which equals 5C2.
// The formula for nCr is (n! / (r! * (n-r)!)), where '!' denotes factorial.
// So, 5C2 = (5*4) / (2*1) = 20 / 2 = 10. Therefore, the element at the 6th row and 3rd column is 10.

// Note: Explanation of nCr calculation
// nCr = (n!) / (r! * (n-r)!)
// For example, 5C2 = (5*4*3!) / ((2*1) * (3!)) = 5*4/1*2
// The trick here is to resolve the numerator (upper side) up to r count; here r is 2, so 5*4 in the numerator
// And in the denominator (lower side), do r! only
// This trick allow us to solve this problem "find element at given row and column" in optimal way
// Another example: 10C3 = 10*9*8/1*2*3

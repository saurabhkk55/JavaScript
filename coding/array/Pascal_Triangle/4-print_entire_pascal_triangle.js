// Print the pascal triangle of size n (pascal triangle that contains n number of rows).

function print_row (row_num) {
    let row_list = [];
    let res = 1;

    row_list.push(res);

    for (let x=1; x<row_num; x++) {
        res = res * (row_num-x);
        res = res / x;
        row_list.push(res);
    }
    return row_list;
}

class Solution {
    printPascalTriangle (n) {
    let ans = [], row_num;

        for (let x=1; x<=n; x++)
        {
            row_num = x;
            ans.push(print_row(row_num));
        }

        console.log("Pascal Triangle",ans);
    }
};

// Here is the given row
let n = 10;

let obj = new Solution();
obj.printPascalTriangle(n);

// TC: O(n*row_num)
// SC: O(1) as no space used to return the ans

// Useful point:
// Each row has rowTH elements. For ex: rwo 1 has 1 elemenet, row 2 has 2 elements, llly row 6 has 6 elements.

let arr1 = [89, 24, 75, 11, 23];  // [1, 2, 3, 4, 5, 6]; // [1, 2, 2, 3, 4, 4];
let arr2 = [89, 2, 4];            // [3, 4, 5, 6, 7];    // [1, 1, 2, 2, 4, 4];

let n = arr1.length;
let m = arr2.length;

function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

class Solution {
    //Function to return a list containing the union of the two arrays. 
    findUnion(arr1, arr2, n, m)
    {
        //your code here
        let union_set = new Set();
        
        for (let i=0; i<n; i++) {
            union_set.add(arr1[i]);
        }
        for (let i=0; i<m; i++) {
            union_set.add(arr2[i]);
        }
        
        let union_arr = Array.from(union_set);
        union_arr.sort((a, b) => a - b);
        return union_arr;
    }
}

let obj = new Solution();
let res = obj.findUnion(arr1, arr2, n, m);
printArray(res, res.length);

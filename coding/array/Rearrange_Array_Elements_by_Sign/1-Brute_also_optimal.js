class Solution {
    rearrangeArrayElements (arr, n) {
        let pos_arr = [], neg_arr = [];
        let x;
        for (x=0; x<n; x++) {
            if (arr[x] > 0) {
                pos_arr.push(arr[x]);
            } else {
                neg_arr.push(arr[x]);
            }
        }

        let len = Math.min(pos_arr.length, neg_arr.length);
        for (x=0; x<len; x++) {
            arr[2*x] = pos_arr[x];
            arr[2*x+1] = neg_arr[x];
        }

        let idx = 2*len;
        for (x=len; x<pos_arr.length; x++) {
            arr[idx] = pos_arr[x];
            idx++;
        }
        return arr;
    }
}

// Note: 
// - The length of the array should be even.
// - The array may or may not contain an equal number of positive and negative integers (n/2 numbers of each).
// - This Brute-Force approach will become the optimal approach if an array does not contain an equal number of positive and negative integers (n/2 numbers of each).

let arr = [1, 2, -4, -5, 3, 6], n = arr.length;
// let arr = [3, 1, -2, -5, 2, -4], n = arr.length;
let obj = new Solution();
let answer = obj.rearrangeArrayElements(arr, n);
console.log("Re-arranged array:", answer);

// Time Complexity: O(2n)
// Space Complexity: O(n)

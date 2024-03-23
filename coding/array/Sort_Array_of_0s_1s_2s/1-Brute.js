class Solution {
    sort012 (arr, n) {
        arr.sort((a, b) => a - b);
        return arr;
    }
}
let arr = [0, 2, 1, 2, 0], n = arr.length;
let obj = new Solution();
console.log(obj.sort012(arr, n));

// TC: O(nlogn) need surity
// SC: O(1) no extra space is used.

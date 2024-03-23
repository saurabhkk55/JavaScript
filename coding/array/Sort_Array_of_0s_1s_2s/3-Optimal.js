class Solution {
    sort012 (arr, n) {
        let low=0, mid=0, high=N-1;
        
        while (mid <= high) {
            if (arr[mid] == 1) {
                mid++;
            } else if (arr[mid] == 0) {
                [arr[mid], arr[low]] = [arr[low], arr[mid]];
                mid++;
                low++;
            } else {
                [arr[mid], arr[high]] = [arr[high], arr[mid]];
                high--;
            }
        }
    }
}
let arr = [0, 2, 1, 2, 0], n = arr.length;
let obj = new Solution();
console.log(obj.sort012(arr, n));

// TC: O(n)
// SC: O(1) no extra space is used.

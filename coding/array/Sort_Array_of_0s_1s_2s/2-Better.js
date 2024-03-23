class Solution {
    sort012 (arr, n) {
        let zero_counter=0, one_counter=0, two_counter=0;
        for (let i=0; i<n; i++) {
            if (arr[i] == 0) {
                zero_counter++;
            } else if (arr[i] == 1) {
                one_counter++;
            } else {
                two_counter++;
            }
        }
        for (i=0; i<zero_counter; i++) {
            arr[i] = 0;
        }
        for (i=zero_counter; i<one_counter; i++) {
            arr[i] = 1;
        }
        for (i=one_counter; i<n; i++) {
            arr[i] = 2;
        }
    }
}
let arr = [0, 2, 1, 2, 0], n = arr.length;
let obj = new Solution();
console.log(obj.sort012(arr, n));

// TC: O(2n)
// SC: O(1) no extra space is used.

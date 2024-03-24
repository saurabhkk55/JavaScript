class Solution {
    rearrangeArrayElements (arr, n) {
        let ans = new Array(n);
        let pos_idx = 0, neg_idx = 1;
        for (let x=0; x<ans.length; x++) {
            if(arr[x]>=0) {
                ans[pos_idx] = arr[x];
                pos_idx = pos_idx + 2;
            } else {
                ans[neg_idx] = arr[x];
                neg_idx = neg_idx + 2;
            }
        }
        return ans;
    }
}

// Note: 
// - The length of the array should be even
// - The array must contain an equal number (n/2 numbers) of positive and negative integers
// - Optimal approach only if array contains equal number (n/2 numbers) of positive and negative integers.
let arr = [3, 1, -2, -5, 2, -4], n = arr.length;
let obj = new Solution();
let answer = obj.rearrangeArrayElements(arr, n);
console.log("Re-arranged array:", answer);

// Time Complexity: O(n)
// Space Complexity: O(n)

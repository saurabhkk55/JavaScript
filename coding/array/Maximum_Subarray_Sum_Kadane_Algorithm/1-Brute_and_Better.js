class Solution {
    maximumSubArraySum (arr, n) {
        let sum = 0, maxSum = -Infinity, ansStart, ansEnd, ans = [];
        for (let x=0; x<n; x++) {
            sum = arr[x];
            for (let y=x+1; y<n; y++) {
                sum = sum + arr[y];
                if (sum > maxSum) {
                    maxSum = sum;
                    ansStart = x;
                    ansEnd = y;
                }
            }
        }

        for (let i=ansStart; i<=ansEnd; i++){
            ans.push(arr[i]);
        }
        
        console.log(`Maximum Sub-array sum: ${maxSum}`);
        console.log("Sub-array with Maximum sum:", ans);
    }
}
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4], n = arr.length;
let obj = new Solution();
obj.maximumSubArraySum(arr, n);

// TC: O(n^2)
// SC: O(1)

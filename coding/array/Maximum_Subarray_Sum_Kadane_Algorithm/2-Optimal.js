class Solution {
    maximumSubArraySum (arr, n) {
        let sum = 0, maxSum = -Infinity, start, ansStart, ansEnd, ans = [];
        for (let x=0; x<n; x++) {
            if (sum == 0) {
                start = x;
            }

            sum = sum + arr[x];
            
            if (sum > maxSum) {
                maxSum = sum;
                ansStart = start;
                ansEnd = x;
            }
            
            if (sum < 0) {
                sum = 0;
            }
        }

        for (let i=ansStart; i<=ansEnd; i++){
            ans.push(arr[i]);
        }

        console.log(`Maximum Sub-array sum: ${maxSum}`);
        console.log("Sub-array with Maximum sum:", ans);
    }
}

let arr = [-2, -1, 5, -4], n = arr.length;
let obj = new Solution();
obj.maximumSubArraySum(arr, n);

// TC: O(2n)
// SC: O(1)

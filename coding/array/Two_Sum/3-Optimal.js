// Optimal approach:
// - Use this Optimal approach only if array is already sorted in the ascending order.

class Solution {
    twoSum (nums, target) {
        let my_map = new Map(), i = 0, rem;
        let left = 0, right = nums.length - 1, sum = 0;

        while (left < right) {
            sum = nums[left] + nums[right];

            if (sum == target) {
                return [left, right];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
}

let nums = [2,7,11,15], target = 9;
let obj = new Solution();
let twoSumArr = obj.twoSum(nums, target);
console.log("Two sum array:",twoSumArr);

// Time Complexity: O(n)
// Space Complexity: O(1) - No extra space utilized apart from the input array. If considering the input array, space complexity would be O(n).
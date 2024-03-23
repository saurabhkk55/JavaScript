class Solution {
    twoSum (nums, target) {
        for (let x=0; x<nums.length; x++) {
            for (let y=0; y<nums.length; y++) {
                if (nums[x]+nums[y] == target) {
                    return [x, y];
                }
            }
        }
    }
}

let nums = [2,7,11,15], target = 9;
let obj = new Solution();
let twoSumArr = obj.twoSum(nums, target);
console.log("Two sum array:",twoSumArr);

// Time Complexity: O(n^2)
// Space Complexity: O(1)

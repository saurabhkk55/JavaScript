class Solution {
    twoSum (nums, target) {
        let my_map = new Map(), i = 0, rem;
        while (i < nums.length) {
            rem = target - nums[i];
            if (my_map.has(rem)) {
                return [my_map.get(rem), i];
            } else {
                my_map.set(nums[i], i);
            }
            i++;
        }
    }
}

let nums = [2,7,11,15], target = 9;
let obj = new Solution();
let twoSumArr = obj.twoSum(nums, target);
console.log("Two sum array:",twoSumArr);

// Time Complexity: O(nlogn) - need surity.
// Space Complexity: O(n) - Utilizes additional space for the hashmap to store numbers and their indices.
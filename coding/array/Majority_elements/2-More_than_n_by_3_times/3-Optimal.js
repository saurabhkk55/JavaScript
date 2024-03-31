// Note: There can't be more than 2 numbers in any given array which are greater than n/3.

class Solution {
    findNums (arr, n) {
        let element_1 = -Infinity, count_1 = 0;
        let element_2 = -Infinity, count_2 = 0;

        for (let x = 0; x < n; x++) {
            if (count_1 == 0 && arr[x] != element_2) {
                element_1 = arr[x];
                count_1 = 1;
            } else if (count_2 == 0 && arr[x] != element_1) {
                element_2 = arr[x];
                count_2 = 1;
            } else if (arr[x] == element_1) {
                count_1++;
            } else if (arr[x] == element_2) {
                count_2++;
            } else {
                count_1--;
                count_2--;
            }
        }

        count_1 = 0, count_2 = 0;
        for (let x=0; x<n; x++) {
            if (arr[x] == element_1) {
                count_1++;
            }
            if (arr[x] == element_2) {
                count_2++;
            }
        }

        let ans = [];
        if (count_1 > parseInt(n/3)) {
            ans.push(element_1)
        }
        if (count_2 > parseInt(n/3)) {
            ans.push(element_2)
        }
        ans.sort((a, b) => a - b);
        return ans; // If ans contains less than 2 elements, and also no need to do sorting.
    }
};

// const arr = [1, 2, 1, 3, 3, 1, 2, 2], size = arr.length;
// const arr = [3, 2, 1, 3, 1, 1, 2, 2], size = arr.length;
// const arr = [1, 1, 1, 3, 3, 2, 2, 2], size = arr.length;
// const arr = [1, 1, 1, 1, 2, 2, 2, 3], size = arr.length;
// const arr = [1, 1, 1, 1, 2], size = arr.length;
// const arr = [1, 2, 3, 4], size = arr.length;
const arr = [1,2], size = arr.length;

const obj = new Solution();
const ans = obj.findNums(arr, size);
console.log("Elements occur more than n/3:",ans);

// Time Complexity: O(2n) - The sorting operation is excluded from the time complexity as it only involves at most 2 elements, which is considered constant time (O(1)).
// Space Complexity: O(1) - No space is used.

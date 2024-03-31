// Note: There can't be more than 2 numbers in any given array which are greater than n/3.

class Solution {
    findNums (arr, n) {
        let x, y, count;
        let ans = [];

        for (x = 0; x < n; x++) {
            count = 0;
            for (y = x; y < n; y++) {
                if (arr[x] == arr[y]) {
                    count++;
                }
            }
            if (count > parseInt(n/3)) {
                if (ans.length == 0 || ans[ans.length-1] != arr[x]) {
                    ans.push(arr[x]);
                    if (ans.length == 2) {
                        break;
                    }
                }
            }
        }
        ans.sort((a, b) => a - b);
        console.log(ans);
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
obj.findNums(arr, size);

// Time Complexity: O(n^2) - Due to the nested loop iterating over the array.
// Space Complexity: O(1) - Despite the constant space for maintaining two variables, the overall space complexity remains constant because it does not scale with the size of the input array.

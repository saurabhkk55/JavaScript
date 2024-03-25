class Solution {
    nextPermutation (arr, n) {
        let x, idx = -1;

        for (x=n-2; x>=0; x--) {
            if (arr[x] < arr[x+1]) {
                idx = x;
                break;
            }
        }

        for (x = n-1; x>idx; x--) {
            if (arr[x] > arr[idx]) {
                [arr[x], arr[idx]] = [arr[idx], arr[x]];
                break;
            }
        }

        let left_ptr;
        if (idx == -1) {
            left_ptr = 0;
        } else {
            left_ptr = idx + 1;
        }
        let right_ptr = n-1, temp;

        while (left_ptr < right_ptr) {
            temp = arr[right_ptr];
            arr[right_ptr] = arr[left_ptr];
            arr[left_ptr] = temp;
            left_ptr++;
            right_ptr--;
        }
        return arr;
    }
}

// let arr = [2, 1, 5, 4, 3, 0, 0];
// let arr = [5, 4, 3, 2, 1];
// let arr = [1,2,3];
// let arr = [2,3,1]
// let arr = [3,2,1];
let arr = [3,1,2];
let n = arr.length;
let obj = new Solution();
let answer = obj.nextPermutation(arr, n);
console.log(`Next Permutation: [${answer}]`);

// Time Complexity: O(3n)
// Space Complexity: O(1) as not using extra space or O(n) as we modifying the existing array.

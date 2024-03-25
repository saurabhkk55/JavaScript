class Solution {
    longest_consecutive_sequence (arr, n) {
        let x, y, counter = 0, maxCounter = 0, elementToFind;
        let atIdx, ans = [];

        for (x=0; x<n; x++) {
            counter = 0;
            elementToFind = arr[x];

            while (arr.indexOf(elementToFind) != -1) {
                counter++;
                elementToFind++;
            }

            if (counter > maxCounter) {
                maxCounter = counter;
                atIdx = x;
            }
        }

        for (x=0; x<maxCounter; x++) {
            ans.push((arr[atIdx])+x);
        }

        return [maxCounter, ans];
    }
}

// let arr = [16,17,4,3,5,2];
// let arr = [2, 1, 5, 4, 3, 0, 0];
// let arr = [5, 4, 3, 2, 1];
// let arr = [1,2,3];
// let arr = [2,3,1]
// let arr = [3,2,1];
// let arr = [102, 4, 100, 1, 101, 3, 2, 1, 1, 103, 104];
// let arr = [100];
// let arr = [100, 100];
// let arr = [100, 101];
// let arr = [101, 100];
// let arr = [100, 80];
// let arr = [102, 4, 100, 1, 101, 3, 2, 1, 1];
n = arr.length;
let obj = new Solution();
let longest_consecutive_sequence = obj.longest_consecutive_sequence(arr, n);
console.log(`Length of longest consecutive sequence: ${longest_consecutive_sequence[0]}`);
console.log(`Elements included in the longest consecutive sequence: ${longest_consecutive_sequence[1]}`);

// TC : O(n^2) if to find length only
// Space Complexity: O(1) if to find length only, nor using extra space neither modifying existing array
// TC : O(n^2)+O(n) = O(n+n^2) to find both length and consecutive sequence.
// Space Complexity: O(n) to find consecutive sequence.

// Array.prototype.indexOf() method to find the index of a specific element in an array
// If the element is found in the array, indexOf() returns the index of the first occurrence of the element. If the element is not found, it returns -1.

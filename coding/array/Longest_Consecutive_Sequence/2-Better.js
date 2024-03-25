class Solution {
    longest_consecutive_sequence (arr, n) {
        arr.sort((a, b) => a - b);  // 1, 1, 1, 2, 3, 4, 100, 101, 102
        console.log(`sorted arr: [${arr}]`);

        let x, counter = 1, maxCounter = 1, start = 0, end, ans = [], ans_start = 0, ans_end = 0;
        for (x=1; x<n; x++) {
            if (arr[x-1]+1 == arr[x]) {
                counter++;
                end = x;
            } else {
                counter = 1;
                start = x;
            }

            if (counter > maxCounter) {
                maxCounter = counter;
                ans_start = start;
                ans_end = end;
            }

        }
        console.log("ans_start:",ans_start);
        console.log("ans_end:",ans_end);
        for (x=ans_start; x<=ans_end; x++) {
            ans.push(arr[x]);
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
let arr = [102, 4, 100, 1, 101, 3, 2, 1, 1];
// let arr = [100];
// let arr = [100, 100];
// let arr = [100, 101];
// let arr = [101, 100];
// let arr = [100, 80];
n = arr.length;
let obj = new Solution();
let longest_consecutive_sequence = obj.longest_consecutive_sequence(arr, n);
console.log(`Length of longest consecutive sequence: ${longest_consecutive_sequence[0]}`);
console.log(`Elements included in the longest consecutive sequence: ${longest_consecutive_sequence[1]}`);

// TC : O(nlogn)+O(n) = O(n+nlogn) if to find length only
// Space Complexity: O(1) if to find length only, nor using extra space neither modifying existing array
// TC : O(nlogn)+O(n)+O(n) = O(2n) to find both length and consecutive sequence.
// Space Complexity: O(n) to find consecutive sequence.

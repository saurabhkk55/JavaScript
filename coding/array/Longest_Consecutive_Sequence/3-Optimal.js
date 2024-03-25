class Solution {
    //Function to return length of longest subsequence of consecutive integers.
    findLongestConseqSubseq(arr, N){
        // code here
        
        let my_set = new Set(), x, counter = 0, maxCounter = 0;
        
        for (x=0; x<N; x++) {
            my_set.add(arr[x]);
        }

        for (let item of my_set) {
            if (!my_set.has(item-1)) {
                while (my_set.has(item)) {
                    counter++;
                    item++;
                }
            }
            maxCounter = Math.max(maxCounter, counter);
            counter = 0;
        }
        return maxCounter;
    }
}

// let arr = [102, 4, 100, 1, 101, 3, 2, 1, 1];
// let arr = [102, 4, 100, 1, 101, 3, 2, 1, 1, 103, 104];
// let arr = [2,6,1,9,4,5,3];
// let arr = [100];
// let arr = [100, 100];
// let arr = [100, 101];
// let arr = [101, 100];
let arr = [100, 80];
n = arr.length;
let obj = new Solution();
let longest_consecutive_sequence = obj.findLongestConseqSubseq(arr, n);
console.log(`Length of longest consecutive sequence: ${longest_consecutive_sequence}`);

// TC : O(n)+(O(n)+O(n)) = O(3n)
// Space Complexity: O(n) as using set data structure

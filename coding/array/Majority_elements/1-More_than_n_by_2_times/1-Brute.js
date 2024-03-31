class Solution {
    majorityElement(a, size)
    {
        for (let x=0; x<size; x++) {
            let counter = 0;
            for (let y=0; y<size; y++) {
                if (a[x] == a[y]) {
                    counter++;
                }
            }
            if(counter > parseInt(size/2)) {
                return a[x];
            }
        }
        return -1;
    }
}

let arr = [3, 1, 3, 3, 2], n = arr.length;
let obj = new Solution();
console.log(obj.majorityElement(arr, n));

// TC: O(n^2)
// SC: O(1)
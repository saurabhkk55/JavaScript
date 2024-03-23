class Solution {
    majorityElement(a, size)
    {
        let my_map = new Map();
        for (let x=0; x<size; x++) {
            if (my_map.has(a[x])) {
                my_map.set(a[x], (my_map.get(a[x])+1));
            } else {
                my_map.set(a[x], 1);
            }
        }

        for (let [key, value] of my_map) {
            // console.log(key, value);
            if (value > parseInt(size/2)) {
                return key;
            }
        }

        return -1;
    }
}

let arr = [3, 1, 3, 3, 2], n = arr.length;
let obj = new Solution();
console.log(obj.majorityElement(arr, n));

// TC: O(nlogn)+O(n)
// SC: O(n)

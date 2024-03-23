class Solution {
    majorityElement(a, size)
    {
        //your code here
        let ans = a[0], counter=0, max=0;
        for (let i=0; i<size; i++) {
            if (counter==0 && i < size-1) {
                ans = a[i+1];
            }
            if (a[i] == ans) {
                counter++;
            } else {
                counter--;
            }
        }

        counter = 0
        for (let i=0; i<size; i++) {
            if(a[i] == ans) {
                counter++
            }
            
        }

        if (counter > parseInt(size/2)) {
            return ans;
        }

        return -1;
    }
}

let arr = [3, 1, 3, 3, 2], n = arr.length;
let obj = new Solution();
console.log(obj.majorityElement(arr, n));

// TC: O(2n)
// SC: O(1)
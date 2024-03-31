class Solution {
    majorityElement(a, size)
    {
        //your code here
        let element, counter = 0, currentElement, x;
        
        for (x = 0; x < size; x++) {
            currentElement = a[x];
            if (counter == 0) {
                element = currentElement;
                counter = 1;
            } else if (currentElement == element) {
                counter++;
            } else {
                counter--;
            }
        }
        
        counter = 0;
        for (x = 0; x < size; x++) {
            currentElement = a[x];
            if (currentElement == element) {
                counter++
            }
        }
        
        if (counter > parseInt(size/2)) {
            return element;
        }
        return -1;
    }
}

let arr = [3, 1, 3, 3, 2], n = arr.length;
let obj = new Solution();
console.log(obj.majorityElement(arr, n));

// TC: O(2n)
// SC: O(1)
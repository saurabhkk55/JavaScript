class Solution {
    //Function to rotate an array by d elements in counter-clockwise direction. 
    rotateArr(arr, d, n){
        // code here
        d = d%n;
        let temp;
        // let x, y;
        function reverseSubArray(x, y) {
            while (x < y) {
                temp = arr[x];
                arr[x] = arr [y-1];
                arr[y-1] = temp;
                x++;
                y--;
            }
        }
        
        reverseSubArray(0, d);
        reverseSubArray(d, n);
        reverseSubArray(0, n);

        return arr;
    }
}

let arr = [2,4,6,8,10,12,14,16,18,20]; // [1, 2, 3, 4, 5];
size_of_arr = arr.length;
rotate_by_d = 3;
let obj = new Solution();
rotated_arr = obj.rotateArr(arr, rotate_by_d, size_of_arr);
console.log(`Rotated array by ${rotate_by_d} places: ${rotated_arr}`);

// TC = (0+d)+(n-d)+(0+n) = 2n
// SC = O(1);

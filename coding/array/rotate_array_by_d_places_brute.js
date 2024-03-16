class Solution {
    //Function to rotate an array by d elements in counter-clockwise direction. 
    rotateArr(arr, d, n){
        // code here
        d = d%n;
        
        let a = [];
        for (let i=0; i<d; i++) {
            a[i] = arr[i];
        }
        
        for (let i=d; i<n; i++) {
            arr[i-d] = arr[i];
        }
        
        for (let i=n-d; i<n; i++) {
            arr[i] = a[i-(n-d)];
        }
        
        return arr;
    }    
}

let arr = [1, 2, 3, 4, 5]; // [2,4,6,8,10,12,14,16,18,20]; //
size_of_arr = arr.length;
rotate_by_d = 2;
let obj = new Solution();
rotated_arr = obj.rotateArr(arr, rotate_by_d, size_of_arr);
console.log(`Rotated array by ${rotate_by_d} places: ${rotated_arr}`);

// TC = (0+d)+(n-d)+(n-(n-d)) = 0+d+n-d+n-n+d = n+d
// SC = O(d) because of array 'a' size 

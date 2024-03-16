class Solution {
    pushZerosToEnd(arr,n){
        //code here
        let k=0;
        
        for (let i=0; i<n; i++) {
            if (arr[i] != 0) {
                arr[k] = arr[i];
                k++;
            }
        }
        
        for (let i=k; i<n; i++) {
            arr[i] = 0;
        }
        
        return arr;
    }
}

let arr = [0, 0, 0, 4]; // [3, 5, 0, 0, 4]; // [1, 2, 3, 4, 5]; // [2,4,6,8,10,12,14,16,18,20]; //
size_of_arr = arr.length;
let obj = new Solution();
zeroes_at_the_end_arr = obj.pushZerosToEnd(arr, size_of_arr);
console.log(`Answer array: ${zeroes_at_the_end_arr}`);

// TC = (n) + (n-k) = 2n-k
// SC = 0(1) // no extra space is used

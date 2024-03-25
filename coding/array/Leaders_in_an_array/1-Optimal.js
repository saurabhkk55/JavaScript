class Solution {
    //Function to find the leaders in the array.
    leaders(arr, n){
        // code here
        let x, ans = [];
        ans.push(arr[n-1]);
        for (x=n-2; x>=0; x--) {
            if (arr[x] >= ans[ans.length-1]) {
                ans.push(arr[x]);
            }
        }
        
        let left_ptr=0, right_ptr=ans.length-1, temp;
        while (left_ptr < right_ptr) {
            temp = ans[right_ptr];
            ans[right_ptr] = ans[left_ptr];
            ans[left_ptr] = temp;
            left_ptr++;
            right_ptr--;
        }
        return ans;
    }
}

let arr = [16,17,4,3,5,2];
// let arr = [2, 1, 5, 4, 3, 0, 0];
// let arr = [5, 4, 3, 2, 1];
// let arr = [1,2,3];
// let arr = [2,3,1]
// let arr = [3,2,1];
n = arr.length;
let obj = new Solution();
leaders_arr = obj.leaders(arr, n);
console.log(`Leaders in an array: [${leaders_arr}]`);

// TC : O(n) for finding leaders + O(nlogn) for sorting = O(n+nlogn)
// Space Complexity: O(1) as not using extra space or O(n) as we modifying the existing array.

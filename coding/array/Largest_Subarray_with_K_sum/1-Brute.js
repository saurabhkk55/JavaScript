// let arr = [15, -2, 2, -8, 1, 7, 10, 23], k = 0; // Output: Max length: 5
// let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3], k = 6; // Output: Max length: 4
// let arr = [2, 0, 0, 3], k = 2; // Output: Max length: 3
let arr = [-13, 0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6], k=15; // Output: Max length: 5
let n = arr.length;

let sum = 0, max = -1;

for (let x=0; x<n; x++) {
    for (let y=x; y<n; y++) {
        sum = sum + arr[y];
        if (sum == k) {
            max = Math.max(max, (y-x));
        }
    }
    sum = 0;
}

console.log(`Max length: ${max+1}`);

// TC: O(n^2)
// SC: O(1)

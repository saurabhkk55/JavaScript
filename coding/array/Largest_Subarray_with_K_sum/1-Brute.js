let arr = [15, -2, 2, -8, 1, 7, 10, 23], k = 0;
// let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3], k = 4; 
// let arr = [2, 0, 0, 3], k = 2; 
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

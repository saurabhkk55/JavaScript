let a = [1, 2, 3, 4, 5, 6]; // [89, 24, 75, 11, 23]; // [1, 2, 2, 3, 4, 4];
let b = [3, 4, 5, 6, 7];    // [89, 2, 4];           // [1, 1, 2, 2, 4, 4];

let n = a.length;
let m = b.length;

let a_idx = 0, b_idx = 0;
let ans = [];

let intersection_set = new Set();

while (a_idx < n) {
    intersection_set.add(a[a_idx]);
    a_idx++;
}

while (b_idx < m) {
    if (intersection_set.has(b[b_idx])) {
        if ((ans.length == 0) || (ans[ans.length-1] != b[b_idx])) {
            ans.push(b[b_idx]);
        }
    }
    b_idx++;
}

console.log(`Intersection array: ${ans}`);
console.log(`Length of the intersection array: ${ans.length}`)

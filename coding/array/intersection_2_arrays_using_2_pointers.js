let a = [89, 24, 75, 11, 23]; // [1, 2, 3, 4, 5, 6]; // [1, 2, 2, 3, 4, 4];
let b = [89, 2, 4];           // [3, 4, 5, 6, 7];    // [1, 1, 2, 2, 4, 4];

let n = a.length;
let m = b.length;

let a_idx = 0, b_idx = 0;
let ans = [];

a.sort((a, b) => a-b);
b.sort((a, b) => a-b);

while (a_idx < n && b_idx < m) {
	if (a[a_idx] < b[b_idx]) {
		a_idx++;
	} else if (b[b_idx] < a[a_idx]) {
		b_idx++;
	} else {
		if ((ans.length == 0) || (ans[ans.length-1] != a[a_idx])) {
			ans.push(a[a_idx]);
		}
		a_idx++;
		b_idx++;
	}
}
console.log(`Intersection array: ${ans}`);
console.log(`Length of the intersection array: ${ans.length}`)

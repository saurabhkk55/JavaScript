// let arr = [15, -2, 2, -8, 1, 7, 10, 23], k = 0;
// let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3], k = 4;
// let arr = [-13, 0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6], k=15;
// let arr = [2, 0, 0, 3], k = 2; 
// let arr = [7,4,-17,-13,-15,1,16,7,16,-15,-7,-7,-18,19,11,-13,10,-16], k = 30;
let arr = [-13, 0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6], k=15; // Output: Max length: 5

let n = arr.length;

let sumIndexMap = new Map();
let sum = 0, maxLen = 0, prefix_sum = 0;

for (let i=0; i<n; i++) {
	sum += arr[i];
	
	if (sum == k) {
		maxLen = i+1;
	}
	prefix_sum = sum - k;
	if (sumIndexMap.has(prefix_sum)) {
		maxLen = Math.max(maxLen, (i - sumIndexMap.get(prefix_sum)));
	}
	if (!sumIndexMap.has(sum)) {
		sumIndexMap.set(sum, i);
	}
}

console.log(`max length: ${maxLen}`);

// TC: O(nlogn)
// SC: O(n)
// let arr = [15, -2, 2, -8, 1, 7, 10, 23], k = 0;
let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3], k = 4; 
// let arr = [2, 0, 0, 3], k = 2; 
let n = arr.length;

let sumIndexMap = new Map();
let sum = 0, maxLen = 0, prefix_sum = 0;

for (let i=0; i<n; i++) {
	sum += arr[i];
	
	if (sum === k) {
		maxLen = i+1;
	}
	prefix_sum = sum - k
	if (sumIndexMap.has(prefix_sum)) {
		maxLen = Math.max(maxLen, i-sumIndexMap.get(prefix_sum));
	} else {
		sumIndexMap.set(sum, i);
	}
}

console.log(`max length: ${maxLen}`);
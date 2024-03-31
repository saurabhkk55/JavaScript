class Solution {
    findNums(arr, n) {
        const threshold = parseInt(n / 3); // Threshold for the count of elements
        
        const frequencyMap = new Map(); // Map to store frequency of each element
        
        const ans = []; // Array to store the result
        
        for (let i = 0; i < n; i++) {
            const currentElement = arr[i];
            
            // Update frequency map
            if (frequencyMap.has(currentElement)) {
                frequencyMap.set(currentElement, frequencyMap.get(currentElement)+1);
            } else {
                frequencyMap.set(currentElement, 1);
            }
            
            // Check if the current element occurs more than n/3 times
            if (frequencyMap.get(currentElement) > threshold) {
                // Add the element to the result array if it's not already present
                if (ans.length == 0 || ans[ans.length-1] != currentElement) {
                    ans.push(currentElement);
                    
                    // If we found 2 elements that satisfy the condition, sort and return
                    if (ans.length === 2) {
                        return ans.sort((a, b) => a - b);
                    }
                }
            }
        }
        
        return ans; // Return the result array
    }
}

// const arr = [1, 2, 1, 3, 3, 1, 2, 2], size = arr.length;
// const arr = [3, 2, 1, 3, 1, 1, 2, 2], size = arr.length;
// const arr = [1, 1, 1, 3, 3, 2, 2, 2], size = arr.length;
// const arr = [1, 1, 1, 1, 2, 2, 2, 3], size = arr.length;
const arr = [1, 1, 1, 1, 2], size = arr.length;
// const arr = [1, 2, 3, 4], size = arr.length;
// const arr = [1, 2], size = arr.length;

const obj = new Solution();
const ans = obj.findNums(arr, size);
console.log("Elements occur more than n/3:", ans);

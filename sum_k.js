// optimal: will work wth array having positive and (postive and zero) and will not work array having negative elements.

// let a = [2, 0, 0, 3], k = 2;
let a= [1, 2, 3, 1, 1, 1, 1, 4, 2, 3], k = 6;
let size = a.length;
let len = 0, max = -1, x = 0, y = 0, sum = 0;

for (x=0; x<size; x++) {
    sum = sum + a[x];
    
    while ((y <= x) && (sum > k)) {
        sum = sum - a[y];
        y++;
    }
    
    if (sum == k) {
        len = x - y;
        if (len > max) {
            max = len;
        }
    }
}

console.log(max+1);

// TC: O(n+n) = O(2n)
// SC: O(1)

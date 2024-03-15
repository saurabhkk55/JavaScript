let a1 = [1, 2, 3, 4, 5]; // [2, 2, 3, 4, 5] // 
let a2 = [1, 2, 3, 6, 7]; // [1, 1, 2, 3, 4] // 
let a1_len = a1.length, a2_len = a2.length;
let a1_idx=0, a2_idx=0;
let ans = [];

while (a1_idx < a1_len && a2_idx < a2_len) {
    if ((a1[a1_idx] < a2[a2_idx]) || (a1[a1_idx] == a2[a2_idx])) {
        if ((ans.length == 0) || (ans[ans.length-1] != a1[a1_idx])) {
            ans.push(a1[a1_idx]);
        }
        a1_idx++;
    } else {
        if ((ans.length == 0) || (ans[ans.length-1] != a2[a2_idx])) {
            ans.push(a2[a2_idx]);
        }
        a2_idx++;
    }
}

while (a1_idx < a1_len) {
    if (ans[ans.length-1] != a1[a1_idx]) {
        ans.push(a1[a1_idx]);
        a1_idx++;
    }
}

while (a2_idx < a2_len) {
    if (ans[ans.length-1] != a2[a2_idx]) {
        ans.push(a2[a2_idx]);
        a2_idx++;
    }
}

console.log(`ANS: ${ans}`);

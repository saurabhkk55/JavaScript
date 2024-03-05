// Plain Function Call (Synchronous):
function addTwo(x, y){
    return (x+y);
}

const ans_1 = addTwo(2, 3);
console.log(`SUM: ${ans_1}`);
/////////////////////////////////////////

// Callback Function (Asynchronous):
function addTwo(x, y){
    // return (x+y);
    setTimeout(() => {
        const ans = x+y;
        console.log(`SUM: ${ans}`);
    },2000);
}

const ans_2 = addTwo(2, 3);
console.log(`SUM: ${ans_2}`);
/////////////////////////////////////////

// Promise Function (Asynchronous):
function addTwo(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ans = x + y;
            console.log(`SUM: ${ans}`);
            resolve(ans);
        }, 2000);
    });
}

async function asyncAddTwo() {
    const result = await addTwo(2, 3);
    console.log(`Result: ${result}`);
}

asyncAddTwo();
/////////////////////////////////////////

// Chained Promises (Asynchronous):
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ans = 3 + 4;
        console.log(`SUM: ${ans}`);
        resolve(ans);
    }, 2000);
});

const p2 = (val) => new Promise((res, rej) => {
    setTimeout(() => {
        const ans = val * 10;
        console.log(`Mul: ${ans}`);
        res(ans);
    }, 5000);
})

function p3 (uppar, niche) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const div = uppar/niche;
            console.log(`Div: ${div}`);
            res(div);
        }, 4000);
    })
}

function p4 (a, b, c){
    const p4 = new Promise((pos, neg) => { // const x = new Promise((pos, neg) => {
        setTimeout (() => {
            const sub = a - b -c;
            console.log(`Sub: ${sub}`);
            pos(sub);
        }, 5000);
    });
    return p4; // return x;
}

async function asyncAddTwo() {
    const p1_result = await p1;
    console.log(`p1_result: ${p1_result}`);
    
    const p2_result = await p2(p1_result);
    console.log(`p2_result: ${p2_result}`);

    const p3_result = await p3(p2_result, p1_result);
    console.log(`p3_result: ${p3_result}`);
    
    const p4_result = await p4(p1_result, p2_result, p3_result);
    console.log(`p4_result: ${p4_result}`);
}

asyncAddTwo();

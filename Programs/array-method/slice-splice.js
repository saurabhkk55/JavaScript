console.log("\n>>> Slice method <<<");

let myArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(`\nmyArr: ${myArr}`);               // [10, 20, 30, 40,  50, 60, 70, 80, 90, 100]

let mySlice = myArr.slice(3, 6);                // start from index 3 (inclusive) to index 6 (exclusive)
console.log(`\nmySlice: ${mySlice}`);           // mySlice: 40,50,60
console.log(`myArr: ${myArr}`);                 // myArr: 10,20,30,40,50,60,70,80,90,100
console.log(`myArr type: ${typeof myArr}`);     // myArr type: object

console.log("\n>>> Splice method <<<");

console.log(`\nmyArr: ${myArr}`);               // [10, 20, 30, 40,  50, 60, 70, 80, 90, 100]

let mySplice = myArr.splice(3, 6);
console.log(`\nmySplice: ${mySplice}`);         // mySplice: 40,50,60,70,80,90
console.log(`myArr: ${myArr}`);                 // myArr: 10,20,30,100
console.log(`myArr type: ${typeof myArr}`);     // myArr type: object

myArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(`\nmyArr: ${myArr}`);               // [10, 20, 30, 40,  50, 60, 70, 80, 90, 100]

mySplice = myArr.splice(3, 6, "a", "b", "c", "d", "e", "f");    // start from index 2, remove 3 elements, and insert "a", "b", "c", "d", "e", "f"
console.log(`\nmySplice: ${mySplice}`);         // mySplice: 40,50,60,70,80,90 
console.log(`myArr: ${myArr}`);                 // myArr: 10,20,30,a,b,c,d,e,f,100
console.log(`myArr type: ${typeof myArr}`);     // myArr type: object

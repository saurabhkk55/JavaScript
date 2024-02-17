let num1 = parseInt(prompt("Enter 1st number"));
let num2 = parseInt(prompt("Enter 2nd number"));
console.log(`Before swapping\nnum1 = ${num1} and num2 = ${num2}`);

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log(`After swapping\nnum1 = ${num1} and num2 = ${num2}`);

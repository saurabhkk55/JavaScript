const num = parseInt(prompt("Enter a number"));
let i, endDigit, reversedNum = 0;

for (i=num; i>0; i=parseInt(i/10)){
    endDigit = i%10;
    reversedNum = reversedNum*10 + endDigit;
}
console.log(`Reversed number: ${reversedNum}`);

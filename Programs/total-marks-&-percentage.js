const hindi = prompt("Your hindi marks out of 100");
const english = prompt("Your english marks out of 100");
const maths = prompt("Your maths marks out of 100");
const physics = prompt("Your physics marks out of 100");
const biology = prompt("Your biology marks out of 100");

const totalMarks = parseInt(hindi) + parseInt(english) + parseInt(maths) + parseInt(physics) + parseInt(biology);

console.log(`Total marks: ${totalMarks}/500`);
console.log(`Total percentage: ${totalMarks * (100/500)}%`);

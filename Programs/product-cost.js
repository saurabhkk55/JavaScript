const quatities = prompt("How many items do you want to buy?");
const unitPrice = prompt("What is the price of a single item?");

console.log(`Total cost: ${quatities * unitPrice}`);

const priceAfterDiscount = (quatities * unitPrice) - ((quatities * unitPrice) * (10/100));
console.log(`Total cost after 10% discount: ${priceAfterDiscount}`);

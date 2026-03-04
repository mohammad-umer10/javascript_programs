// Return the average of numbers in an array.

let numbers = [10, 20, 30, 40];

let sum = numbers.reduce((total, num) => total + num, 0);
let average = sum / numbers.length;

console.log(average);
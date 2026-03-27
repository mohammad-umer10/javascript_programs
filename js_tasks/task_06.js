// let numbers = [1,2,3,2,4,5,4,6];
// Remove duplicates and output:
// [1,2,3,4,5,6]

let numbers = [1,2,3,2,4,5,4,6];

let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
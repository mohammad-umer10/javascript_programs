// let numbers = [12, 45, 7, 23, 89, 34];
// Create functions to:
// 1.	Find largest number
// 2.	Find smallest number
// 3.	Find sum of numbers
// 4.	Find average

let numbers = [12, 45, 7, 23, 89, 34];

function findLargest(arr) {
  return Math.max(...arr);
}

function findSmallest(arr) {
  return Math.min(...arr);
}

function findSum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

function findAverage(arr) {
  return findSum(arr) / arr.length;
}

console.log("Largest:", findLargest(numbers));
console.log("Smallest:", findSmallest(numbers));
console.log("Sum:", findSum(numbers));
console.log("Average:", findAverage(numbers));


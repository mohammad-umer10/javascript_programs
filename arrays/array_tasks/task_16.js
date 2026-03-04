// Count negative numbers in a numeric array.

let numbers = [5, -2, 10, -8, 0, -1];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        count++;
    }
}

console.log(count);
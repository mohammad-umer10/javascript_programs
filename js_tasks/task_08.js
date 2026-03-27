// •	Takes two dates
// •	Calculates difference in days
// Example:
// Input:
// 2026-01-01
// 2026-01-10

// Output:
// 9 days


let date1 = new Date("2026-01-01");
let date2 = new Date("2026-01-10");

let diffInMs = date2 - date1;

let differenceInDays = diffInMs / (1000 * 60 * 60 * 24); 

console.log(differenceInDays + " days");
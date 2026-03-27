// Create a program that:
// •	Stores student name and marks of 3 subjects
// •	Calculates total and average
// •	Displays grade using conditions

let studentName = "Ali";
let subject1 = 85;
let subject2 = 90;
let subject3 = 80;

let total = subject1 + subject2 + subject3;
let average = total / studentName.length;

let grade;

if (average >= 90) {
  grade = "A";
} 
else if (average >= 75) {
  grade = "B";
} 
else if (average >= 60) {
  grade = "C";
} 
else if (average >= 40) {
  grade = "D";
} 
else {
  grade = "Fail";
}

console.log("Student:", studentName);
console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);


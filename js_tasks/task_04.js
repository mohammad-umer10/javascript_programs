// let student = {
//   name: "Ahmed",
//   age: 20,
//   subjects: ["Math", "Physics", "CS"]
// }
// Tasks:
// 1.	Add a new subject
// 2.	Remove a subject
// 3.	Print all subjects using loop

let student = {
  name: "Ahmed",
  age: 20,
  subjects: ["Math", "Physics", "CS"]
};

student.subjects.push("English");
console.log(student.subjects);

student.subjects.pop();
console.log(student.subjects);

for (let subject of student.subjects) {
  console.log(subject);
}

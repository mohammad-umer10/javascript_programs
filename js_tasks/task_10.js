// Create a system that can:
// 1.	Add student
// 2.	Delete student
// 3.	Search student
// 4.	Display all students
// Each student should contain:
// name
// age
// course
// marks
// Bonus:
// •	Sort students by marks

let students = [];

function addStudent(name, age, course, marks) {
  let student = { name, age, course, marks }
  students.push(student);
  console.log("Student added:", student);
}
addStudent("Ali", 20, "Math", 85);
addStudent("Ahmed", 22, "Physics", 92);
addStudent("hamza", 22, "chymistry", 92);

function deleteStudent(index) {
  let removed = students.splice(index, 1);
  console.log("Deleted:", removed[0]);
}
deleteStudent(1);

function searchStudent(name) {
  let student = students.find(students => students.name === name);
  console.log("Search Result:", student || "student not found");
}
searchStudent("hamza");

function displayStudents() {  
  console.log("All Students:");
  students.forEach((student, item) => {
    console.log(item, student);
  });
}
displayStudents();

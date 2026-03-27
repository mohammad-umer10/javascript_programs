// Student Management System (Console Based)
// Build a Student Management System using JavaScript that allows managing students and their marks.

// Create a function:
// addStudent(name, age, course, marks, email)
// Requirements:
// •	ID should auto increment
// •	Email must be validated using RegExp
// •	Store date using Date object
let students = [];
let idCounter = 1;

function addStudent(name, age, course, marks, email) {
    if (!validateEmail(email)) {
        return;
    } 
    let student = {
        id: idCounter++,
        name,
        age,
        course,
        marks,
        email,
        created_at: new Date()
    };
    students.push(student);
}

// Create function:
// showStudents()
// Output example:
// ID: 1
// Name: Ali
// Course: JS
// Average Marks: 81
function showStudents() {
    students.forEach(function(student) {
        let id = student.id;
        let name = student.name;
        let course = student.course;
        let marks = student.marks;

        let avg = averageMarks(marks);

        console.log(`
          ID: ${id}
          Name: ${name}
          Course: ${course}
          Average Marks: ${avg}
          Grade: ${calculateGrade(marks)}
        `);
    });
}

// Create function:
// calculateGrade(marks)
// Rules:
// Average	Grade
// 90+	A
// 75–89	B
// 60–74	C
// 40–59	D
// <40	Fail
function averageMarks(marks) {
    let total = 0;
        for (let i = 0; i < marks.length; i++) {
            total = total + marks[i];
        }
    return total / marks.length;
}
function calculateGrade(marks) {
    let avg = averageMarks(marks);
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 60) return "C";
    if (avg >= 40) return "D";
    return "Fail";
}

// Create function:
// findStudentByName(name)
// Should return the student object.
function findStudentByName(value) {
    let student = students.find(student => {
        return (
            student.name.toLowerCase() === String(value).toLowerCase() ||
            student.id == value
        );
    });
    if (!student) {
        console.log("Student Not Found");
        return;
    }
    console.log(student);
    return student;
}

// Create function:
// deleteStudent(id)
// Remove the student from array.
function deleteStudent(id) {
    let before = students.length;
    students = students.filter(student => student.id !== id);
    if (students.length < before) {
        console.log("Student Deleted");
    } else {
        console.log("Student Not Found");
    }
}

// Extract all courses students are enrolled in.
// Output example:
// JS
function uniqueCourses() {
    let courseSet = new Set();
    students.forEach(student => courseSet.add(student.course));
    console.log("Courses:");
    courseSet.forEach(course => console.log(course));
}

// Create a Map storing:
// studentId → studentName
// Functions:
// addToDirectory(student)
// getStudentNameById(id)
let directory = new Map();
function addToDirectory(student) {
    directory.set(student.id, student.name);
}
function getStudentNameById(id) {
    console.log(directory.get(id) || "Not Found");
}

// Create function:
// topStudent()
// Return the student with highest average marks.
function topStudent() {
    if (students.length === 0) return;
    let top = students[0];
    students.forEach(student => {
        if (averageMarks(student.marks) > averageMarks(top.marks)) {
            top = student;
        }
    });
    console.log("Top Student:", top.name);
}

// When displaying students use destructuring:
// const {name, age, course} = student;
function countStudentsPerCourse() {
    let count = {};
    students.forEach(student => {
        const { course } = student;
        count[course] = (count[course] || 0) + 1;
    });
    console.log(count);
}

// Students must validate email before adding:
// Valid example:
// abc@gmail.com
// test123@yahoo.com
// Invalid:
// abc.com
// @test.com
// Check if email is valid AND unique in students array
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if (!regex.test(email)) {
        console.log("Invalid Email");
        return false;
    }
    if (students.some(student => student.email === email)) {
        console.log("Email already exists");
        return false;
    }
    return true;
}

addStudent("Ali",20,"JavaScript",[80, 90, 75, 45, 67, 45],"ali@gmail.com");
addStudent("Sara",22,"Html",[85, 88, 92, 45, 30, 50],"sara@gmail.com");
addStudent("Ahmed",23,"css",[95, 90, 93, 92, 87, 55],"ahmed@gmail.com");
 
showStudents();

findStudentByName("Ali");

deleteStudent(1);

topStudent();

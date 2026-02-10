function gradeChecker(grade) {
    if (grade >= 90) {
        return "A1";
    } else if (grade >= 80) {
        return "A";
    } else if (grade >= 70) {
        return "B";
    } else if (grade >= 60) {
        return "C";
    } else if (grade >= 50) {
        return "D";
    } else {
        return "Fail";
    }
}

let myGrade = gradeChecker(85);
console.log(myGrade);

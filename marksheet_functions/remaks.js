function gradeChecker(grade) {
    if (grade >= 90) {
        return "Excellent";
    } else if (grade >= 80) {
        return "Very Good";
    } else if (grade >= 70) {
        return "Good";
    } else if (grade >= 60) {
        return "Average";
    } else if (grade >= 50) {
        return "Below Average";
    } else {
        return "Fail";
    }
}

let myGrade = gradeChecker(85);
console.log(myGrade);

function inverseRightPyramid(rows) {
  
  for (let i = rows; i >= 1; i--) {
    let result = "";
    for (let k = 1; k <= i; k++) {
      result += " * ";
    }
    console.log(result);
  }
} 
inverseRightPyramid(5);
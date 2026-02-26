function inverseCenterPyramid(rows) {

  for (let i = rows; i >= 1; i--) {
    let result = "";
    for (let j = rows; j >= i; j--) {
      result += " ";
    }
    for (let k = 1; k <= i; k++) {
      result += " * ";
    }
    console.log(result);
  }
}

inverseCenterPyramid(5);
function rightPyramid(rows) {

  for (let i = 1; i <= rows; i++) {
    let result = "";
    for (let j = rows; j >= i; j--) {
      result += "";
    }
    for (let k = 1; k <= i; k++) {
      result += " * ";
    }
    console.log(result);
  }
}

rightPyramid(5);


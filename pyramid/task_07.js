// right pyramid
function rightPyramid(rows, symbol) {

  for (let i = 1; i <= rows; i++) {
    let result = "";
    for (let j = rows; j >= i; j--) {
      result += "";
    }
    for (let k = 1; k <= i; k++) {
      result += " " + symbol;
    }
    console.log(result);
  }
}

// rightPyramid(5, "#");

// left pyramid
function leftPyramid(rows, symbol) {

  for (let i = 1; i <= rows; i++) {
    let result = "";
    for (let j = rows; j >= i; j--) {
      result += " ";
    }
    for (let k = 1; k <= i; k++) {
      result += symbol;
    }
    console.log(result);
  }
}

// leftPyramid(5, "$");

// center pyramid
function centerPyramid(rows, symbol) {

  for (let i = 1; i <= rows; i++) {
    let result = "";
    for (let j = rows; j >= i; j--) {
      result += " ";
    }
    for (let k = 1; k <= i; k++) {
      result += symbol + " ";
    }
    console.log(result);
  }
}

// centerPyramid(5, "%");

// inverse Right pyramid
function inverseRightPyramid(rows, symbol) {
  
  for (let i = rows; i >= 1; i--) {
    let result = "";
    for (let k = 1; k <= i; k++) {
      result += " " + symbol;
    }
    console.log(result);
  }
} 
// inverseRightPyramid(5, "#");

// inverse Left pyramid
function inverseLeftPyramid(rows, symbol) {

  for (let i = rows; i >= 1; i--) {
    let result = "";
    for (let j = rows; j >= i; j--) {
      result += "   ";
    }
    for (let k = 1; k <= i; k++) {
      result += " " + symbol + " ";
    }
    console.log(result);
  }
}

// inverseLeftPyramid(5, "$");

// inverse Center pyramid
function inverseCenterPyramid(rows, symbol) {

  for (let i = rows; i >= 1; i--) {
    let result = "";
    for (let j = rows; j >= i; j--) {
      result += " ";
    }
    for (let k = 1; k <= i; k++) {
      result += symbol + " ";
    }
    console.log(result);
  }
}

// inverseCenterPyramid(5, "%");

export{
  rightPyramid,
  leftPyramid,
  centerPyramid,
  inverseRightPyramid,
  inverseLeftPyramid,
  inverseCenterPyramid,
};


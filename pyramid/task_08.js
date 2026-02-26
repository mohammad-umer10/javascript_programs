import{
    rightPyramid,
    leftPyramid,
    centerPyramid,
    inverseRightPyramid,
    inverseLeftPyramid,
    inverseCenterPyramid,
} from "./task_07.js"

// function calling in if else
function callPyramid(rows, symbol, type) {
  if (type === "rightPyramid") {
    rightPyramid(rows, symbol);
  }
  else if (type === "leftPyramid") {
    leftPyramid(rows, symbol);
  }
  else if (type === "centerPyramid") {
    centerPyramid(rows, symbol);
  }
  else if (type === "inverseRightPyramid") {
    inverseRightPyramid(rows, symbol);
  }
  else if (type === "inverseLeftPyramid") {
    inverseLeftPyramid(rows, symbol);
  }
  else if (type === "inverseCenterPyramid") {
    inverseCenterPyramid(rows, symbol);
  }
}

callPyramid(5, "$", "inverseCenterPyramid");
import{
    rightPyramid,
    leftPyramid,
    centerPyramid,
    inverseRightPyramid,
    inverseLeftPyramid,
    inverseCenterPyramid,
} from "./task_07.js"

// function calling in switch case
function callPyramid(rows, symbol, type) {
  switch (type) {
    case "rightPyramid":
      rightPyramid(rows, symbol);
      break;
    case "leftPyramid":
      leftPyramid(rows, symbol);
      break;
    case "centerPyramid":
      centerPyramid(rows, symbol);
      break;
    case "inverseRightPyramid":
      inverseRightPyramid(rows, symbol);
      break;
    case "inverseLeftPyramid":
      inverseLeftPyramid(rows, symbol);
      break;
    case "inverseCenterPyramid":
      inverseCenterPyramid(rows, symbol);
    break;
    default:
      console.log("Invalid pyramid type");
  }
}

callPyramid(5, "#", "inverseRightPyramid");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter operator (+, -, *, /, <, >): ", function (op) {
  rl.question("Enter first number: ", function (a) {
    rl.question("Enter second number: ", function (b) {

      let operand1 = Number(a);
      let operand2 = Number(b);

      switch (op) {
        case "+":
          console.log(operand1 + operand2);
          break;

        case "-":
          console.log(operand1 - operand2);
          break;

        case "*":
          console.log(operand1 * operand2);
          break;

        case "/":
          console.log(operand1 / operand2);
          break;

        case "<":
          console.log(operand1 < operand2);
          break;

        case ">":
          console.log(operand1 > operand2);
          break;

        default:
          console.log("Invalid operator");
      }

      rl.close();
    });
  });
});

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter operator: ", (op) => {
  rl.question("Enter first number: ", (a) => {
    rl.question("Enter second number: ", (b) => {

      let operand1 = Number(a);
      let operand2 = Number(b);

      if (op === "+") {
        console.log(operand1 + operand2);
      }
      else if (op === "-") {
        console.log(operand1 - operand2);
      }
      else if (op === "*") {
        console.log(operand1 * operand2);
      }
      else if (op === "/") {
        console.log(operand1 / operand2);
      }
      else if (op === "<") {
        console.log(operand1 < operand2);
      }
      else if (op === ">") {
        console.log(operand1 > operand2);
      }
      else {
        console.log("Invalid operator");
      }

      rl.close();
    });
  });
});

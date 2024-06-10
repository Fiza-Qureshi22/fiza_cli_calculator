#! /usr/bin/env node
// CLI-CALCULATOR
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "SecondNumber" },
    { message: "select one of the operators to perform operation",
        type: "list", name: "operator",
        choices: ["Addition", "Subtraction", "Multiplaction", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplaction") {
    console.log(answer.firstNumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.SecondNumber);
}
else {
    console.log("plz select valid operator");
}
;

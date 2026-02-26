import chalk from "chalk";

console.log(chalk.green("Success"));
console.log(chalk.red("Error"));
console.log(chalk.yellow("Warning"));


console.log(chalk.bold("Bold text"));
console.log(chalk.underline("Underline"));
console.log(chalk.dim("Dim text"));


console.log(chalk.bold.red("Critical Error"));
console.log(chalk.bgBlue.white(" INFO "));


// Use Chalk with stdout & stderr (IMPORTANT)
// Enterprise Level
process.stderr.write(chalk.red("Error occurred\n"));
process.stdout.write(chalk.green("Operation successful\n"));

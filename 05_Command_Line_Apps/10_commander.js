// guess.js
import { Command } from "commander";

const program = new Command();
const ANSWER = 7;

program
  .option("-g, --guess <number>", "your guessed number")
  .action((options) => {
    const guess = Number(options.guess);

    if (isNaN(guess)) {
      console.error("❌ Please provide a number using --guess");
      process.exit(1);
    }

    if (guess === ANSWER) {
      console.log("🎉 Correct guess!");
    } else {
      console.log("❌ Wrong guess");
    }
  });

program.parse();

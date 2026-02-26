(async () => {
  const inquirer = (await import("inquirer")).default;

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your username:"
    }
  ]);

  console.log("Hello", answers.username);
})();

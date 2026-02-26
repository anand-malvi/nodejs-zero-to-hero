const prompts = require("prompts");

(async () => {
  const response = await prompts([
    {
      type: "text",
      name: "projectName",
      message: "Project name"
    },
    {
      type: "select",
      name: "env",
      message: "Select environment",
      choices: [
        { title: "Development", value: "dev" },
        { title: "Production", value: "prod" }
      ]
    },
    {
      type: "confirm",
      name: "installDeps",
      message: "Install dependencies?",
      initial: true
    }
  ]);

  console.log("Config:", response);
})();

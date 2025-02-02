#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");
const { program } = require("commander");

program
  .version("1.0.1")
  .description("CLI to set up a basic Express project")
  .argument("<project-name>", "name of the project")
  .action((projectName) => {
    const projectPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
      console.error(`Project directory ${projectName} already exists.`);
      process.exit(1);
    }

    fs.mkdirSync(projectPath);
    const templatePath = path.join(__dirname, "templete");

    fs.copySync(templatePath, projectPath);

    execSync("npm install", { stdio: "inherit", cwd: projectPath });

    console.log(`Basic Express project setup complete in ${projectName}`);
    console.log(`To get started, run: \n\ncd ${projectName} && npm i`);
  });

program.parse(process.argv);
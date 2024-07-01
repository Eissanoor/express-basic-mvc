# Express Basic mvc

[![npm version](https://badge.fury.io/js/express-basic-mvc.svg)](https://badge.fury.io/js/express-basic-mvc)

Express Basic mvc is a command-line interface (CLI) tool that simplifies the process of setting up a basic Express.js project with a structured folder layout, essential packages, documentation.

## Features

- **Quick Setup**: Initialize a new Express project with one command.
- **MVC Folder Structure**: Organized folders for controllers, models, and routes.
- **Basic Packages**: Includes essential npm packages pre-configured.
- **Customizable**: Easily extend or modify the generated project structure.

## Installation

Install the CLI tool globally to use it from anywhere:

```bash
npm install -g express-basic-mvc

express-basic-mvc <project-name>
```

Alternatively, you can use npx to run the tool without installing it globally:

```bash
npx express-basic-mvc <project-name>
```

## Project Folder Structure

```bash
my-mvc-app/
├── controllers/
│   ├── userController.js
├── models/
│   ├── userModel.js
├── views/
│   ├── userView.ejs
├── routes/
│   ├── userRoutes.js
├── public/
│   ├── css/
│   │   ├── styles.css
│   ├── js/
│       ├── script.js
├── app.js
├── package.json
├── README.md
```
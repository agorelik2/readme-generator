var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub user name?",
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your user email?",
  },
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "licenseType",
    message: "What type of license do you need?",
  },
  {
    type: "input",
    name: "installComm",
    message: "What command should you run to install dependencies?",
  },
  {
    type: "input",
    name: "runTestComm",
    message: "What command should be used to run tests?",
  },
  {
    type: "input",
    name: "useRepo",
    message: "What user needs to know about using the repo?",
  },
  {
    type: "input",
    name: "contrRepo",
    message: "What user needs to know about contributing to the repo?",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
    console.log(answers.projectDescription);
    var readmeReturn = generateMarkdown(answers);
  });
}

// function call to initialize program
init();

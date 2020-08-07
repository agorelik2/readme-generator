var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
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
  // ,
  // {
  //     type:"input",
  //     name: 'projectName',
  //     message: 'What is the name of your project?'
  // },
  // {
  //     type:"input",
  //     name: 'projectName',
  //     message: 'What is the name of your project?'
  // },
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

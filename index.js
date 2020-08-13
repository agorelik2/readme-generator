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
    name: "projectName",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Please enter a short description of your project",
  },
  {
    type: "input",
    name: "tableofContents",
    message: "Please enter the table of contents",
  },
  {
    type: "input",
    name: "licenseType",
    message:
      "What type of license do you need? Choices include ISC, MIT, Apache License 2.0, GNU GPLv2, GNU GPLv3",
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
    name: "usage",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
  },
  {
    type: "input",
    name: "useRepo",
    message: "What user needs to know about using the repo?",
  },
  {
    type: "input",
    name: "contributors",
    message: "List contributors and link their GitHub profiles",
  },
  {
    type: "input",
    name: "questions",
    message: "Please enter any questions or comments",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  var fileName = "README.md";
  fs.writeFile(fileName, data, "utf-8", function (err) {
    if (err) throw err;
    console.log("Success!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
    //console.log(answers.projectDescription);
    var readmeReturn = generateMarkdown(answers);
    var fileName = "README.md";
    return writeToFile(fileName, readmeReturn);
  });
}

// function call to initialize program
init();

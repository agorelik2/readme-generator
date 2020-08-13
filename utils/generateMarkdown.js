let index = require("../index.js");

// function to generate markdown for README
function generateMarkdown(data) {
  return `

  
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/${data.licenseType})
  
# Username: 
${data.userName}

# Title:
${data.projectName}

# Description:
${data.projectDescription}

#Table of Contents
${data.tableofContents}

# Installation: 
${data.installComm}

# Usage: 
${data.usage}

# License: 
${data.licenseType}

# Testing: 
${data.runTestComm}

# Repo: 
${data.useRepo}

# Contributors: 
${data.contributors}

# Questions: 
${data.questions}

`;
}

// module.exports is an object we use to store variables or methods
module.exports = generateMarkdown;

let index = require("../index.js");

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
  
# Username: 
${data.userName}

# Email:
${data.userEmail}

# Title:
${data.projectName}

# Description:
${data.projectDescription}

# License: 
${data.licenseType}

# Installation: 
${data.installComm}

# Testing: 
${data.runTestComm}

# Usage: 
${data.usage}

# Repo: 
${data.useRepo}

# Contributors: 
${data.contributors}

`;
}

// module.exports is an object we use to store variables or methods
module.exports = generateMarkdown;

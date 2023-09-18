const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  renderLicenseBadge()
  renderLicenseLink()
  renderLicenseSection()

  // Using the information from above and
  // template literals create the ReadME License section



  return `
  # ${response.title}

  ## Description
  This is my project
  ${response.description}

  ## Installation
  Here's how to install it
  ${response.installation}

  ## Usage
  Here's how to use it
  ${response.usage}

  ## Technologies Used
  Here's what I used to build it
  ${response.techUsed}

  ## Credits 
  This is who helped me
  ${response.credits}

  ## License
  This project is licensed under the ${response.license} (./License)

`;
}

// console.log(generateMarkdown())

module.exports = generateMarkdown;

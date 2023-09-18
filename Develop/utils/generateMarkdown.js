let licenseBadge;
let licenseLink;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {              // Uses a switch to determine which License badge to return
  switch(license) {
    case 'None':
      return ' ';

    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    case 'BSD 2-Clause "New" or "Revised" License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';

    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';

    case 'Creative Commons Zero v1.0 Universal':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';

    case 'Eclipse Public License 2.0':
      return '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/license/epl-2-0/)';

    case 'GNU Affero General Public License v3.0':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      
    case 'GNU General Public License v2.0':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';

    case 'GNU Lesser General Public License 2.1':
      return '[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1)';

    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {                               // Uses a switch to determine which License link to return
  switch(license) {
    case 'None':
      return ' '

    case 'Apache License 2.0':
      return 'https://choosealicense.com/licenses/apache-2.0/';

    case 'GNU General Public License v3.0':
      return 'https://choosealicense.com/licenses/gpl-3.0/';

    case 'MIT License':
      return 'https://choosealicense.com/licenses/mit/';

    case 'BSD 2-Clause "New" or "Revised" License':
      return 'https://opensource.org/license/bsdpluspatent/';

    case 'Boost Software License 1.0':
      return 'https://choosealicense.com/licenses/bsl-1.0/';

    case 'Creative Commons Zero v1.0 Universal':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';

    case 'Eclipse Public License 2.0':
      return 'https://opensource.org/license/epl-2-0/';

    case 'GNU Affero General Public License v3.0':
      return 'https://choosealicense.com/licenses/agpl-3.0/';

    case 'GNU General Public License v2.0':
      return 'https://opensource.org/license/gpl-2-0/';

    case 'GNU Lesser General Public License 2.1':
      return 'https://opensource.org/license/lgpl-2-1/';

    case 'Mozilla Public License 2.0':
      return 'https://choosealicense.com/licenses/mpl-2.0/';

    case 'The Unlicense':
      return 'https://choosealicense.com/licenses/unlicense/';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {                    // Passes the license type returned from user and calls the renderLicenseBadge and renderLicenseLink functions
  licenseBadge = renderLicenseBadge(license)
  licenseLink = renderLicenseLink(license)

  licenseBadge
  licenseLink
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  renderLicenseSection(response.license);

  return `
  # ${response.title}
  ${licenseBadge}

  ## Description
  ${response.description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Tests](#Tests)
  - [Technologies Used](#Technologies-Used)
  - [Contributing](#Contributing)
  - [Questions](#Questions)
  - [License](#License)

  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ## Tests
  ${response.tests}

  ## Technologies Used
  ${response.techUsed}

  ## Contributing 
  ${response.credits}

  ## Questions
  Let's Make Something Great Together   
  See My Work: [${response.github}](${response.github})   
  Reach Out: [${response.email}](mailto:${response.email})   


  ## License 
  This project is licensed under the [${response.license}](${licenseLink})
`;
}

module.exports = generateMarkdown;        // Exports the generateMarkdown function

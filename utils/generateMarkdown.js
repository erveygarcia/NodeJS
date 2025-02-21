// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None") return " ";
  const badges = {
    MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    "GPL-3.0": '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    "Apache-2.0": '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    "BSD-3-Clause": '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
  };
  return badges [license] || " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license==="None") return " ";
  const links = {
    MIT: '[MIT License](https://opensource.org/licenses/MIT)',
    "GPL-3.0": '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)',
    "Apache-2.0": '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)',
    "BSD-3-Clause": '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)',
  };
  return links[license] || " ";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") return " ";
  return `## License\nThis project is licensed under the ${renderLicenseLink(license)} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents

  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributing]("contributing)
  -[Tests](#tests)
  -[Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  GitHub [${data.github}](https://github.com/${data.github})  
  If you have any questions, please contact me at ${data.email}.
`;
}

export default generateMarkdown;

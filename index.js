// TODO: Include packages needed for this application

import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
 {
    type: "input",
    name: "title",
    message: "What is the title of your project",
},
{
    type: "input",
    name: "description",
    message: "Provide a short description of your project",
},
{
    type: "input",
    name:"installation",
    message:"Enter installation instructions",
},
{
    type: "input",
    name: "usage",
    message: "How do you use this project",
},
{
    type: "list",
    name:"license",
    message:"Choose a license for your project:",
    choices: ["MIT", "GPL-3.0", "Apache-2.0", "BSD-3-Clause", "None"],
},
{
    type: "input",
    name: "contributing",
    message: "How can others contribue to this project?",
},
{
    type: "input",
    name: "tests",
    message: "How can this project be tested?",
},
{
    type: "input",
    name: "github",
    message: "Enter your GitHub username",
},
{
    type: "input",
    name: "email",
    message: "Enter your email address",
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err? console.error(err) : console.log("README.md generated!")
);
        
    }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown (answers);
        writeToFile ("README.md", markdownContent);
    });

}

// Function call to initialize app
init();

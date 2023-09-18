// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
let userInput 

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Are there any installation instructions? If so please enter them:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter any instructions and or examples for use:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Are there any collaborators? If yes, please enter everyone and their corresponding GitHub link:'
    },
    {
        type: 'input',
        name: 'techUsed',
        message: 'Did you use any third-party assets? If so please list the creators with links to their primary web presence:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license did you use?'
    }
];

// TODO: Create a function to write README file
function writeFile(userInput) {
    myReadME = generateMarkdown(userInput);

    fs.writeFile('ReadME.md', myReadME, (err) => {
        err ? console.log(err) : console.log('success!')
    });
}

// TODO: Create a function to initialize app
function init() {
    let filePrompts = inquirer.prompt(questions)
    
    filePrompts.then((prompts) => writeFile(prompts));

}

// Function call to initialize app
init();

















// EXTRA README QUESTIONS 

// 'Enter a description of your project: What was your motivation? Why did you build this project? ',
// 'Enter a description of your project: What problem does this project solve? ',
// 'Enter a description of your project: What did you learn? ',
// 'Enter a description of your project: What challenges if any, did you face? ',
// 'Enter a description of your project: What makes your project stand out? ',
// 'Enter a description of your project: What features do you plan to implement in the future? ',
// 'Did you follow any tutorials? If so please include the links here: '

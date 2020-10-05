// set file system to write the files and get user responses using Inquirer
const fs = require('fs')
const inquirer = require('inquirer')

// require constructor functions
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


// page template to render
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./page-generator');

// array to store user responses
const team = [];

// initialize prompt to build Manager details
function managerPrompt() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name:',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('Your name is required.');
            return false;
          }
        },
      },
      {
        type: 'list',
        name: 'role',
        message: 'You are required to select Manager as your role:',
        choices: ['Manager'],
      },
      {
        type: 'input',
        name: 'employeeId',
        message: "Please enter your employee ID number:",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Your employee ID is required.");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your email address:",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log('Your email address is required.');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number:',
        validate: (IDInput) => {
          if (IDInput) {
            return true;
          } else {
            console.log('Your office number is required');
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const newManager = new Manager(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.role,
        answers.officeNumber
      );
      team.push(newManager);
      buildTeam();
    });
}

// initialize employee role
const buildTeam = () => {
  console.log(`
  --- Add new employee ---

  `);
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: "What is this employee's role:",
        choices: ['Engineer', 'Intern'],
      },
    ])
    .then((rolePick) => {
      if (rolePick.role === 'Engineer') {
        addEngineer(rolePick);
      }
      if (rolePick.role === 'Intern') {
        addIntern(rolePick);
      }
    });
};

// build Engineer details
const addEngineer = (rolePick) => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Please enter an employee's name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("The employee's name is required.");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter their employee ID number:',
        validate: (IDInput) => {
          if (IDInput) {
            return true;
          } else {
            console.log("The employee's ID number is required.");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter the employee's email address:",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("The employee's email address is required.");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: "Please enter the Engineer's GitHub username:",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("The Engineer's GitHub username is required.");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const newEngineer = new Engineer(
        answers.name,
        answers.employeeId,
        answers.email,
        rolePick.role,
        answers.githubUsername
      );
      console.log(`
        ---- Added Employee Result ----   
           `, newEngineer);
      team.push(newEngineer);
      addNewEmployee();
    });
};

// build Intern details
const addIntern = (rolePick) => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Please enter an employee's name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("The employee's name is required.");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter their employee ID number:',
        validate: (IDInput) => {
          if (IDInput) {
            return true;
          } else {
            console.log("The employee's ID number is required.");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter the employee's email address",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("The employee's email address is required.");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'school',
        message: "Please enter Intern's school name:",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("The Intern's school name is required.");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const newIntern = new Intern(
        answers.name,
        answers.employeeId,
        answers.email,
        rolePick.role,
        answers.school
      );
      console.log(`
      ---- Added Employee Result ----     
           `, newIntern);
      team.push(newIntern);
      addNewEmployee();
    });
};

// prompt user to determine the next step: add more employees or write and render the page
const addNewEmployee = () => {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another team employee:',
        default: false,
      },
    ])
    .then((response) => {
      if (response.confirmAddEmployee) {
        buildTeam(team);
      }
      if (!response.confirmAddEmployee) {
        console.log(`
        ---- Team List ----   
           `, team);
        let pageHTML = generatePage(team);
        writeFile(pageHTML)
          .then((writeFileResponse) => {
            console.log(writeFileResponse);
            return copyFile();
          })
          .then((copyFileResponse) => {
            console.log(copyFileResponse);
          });
      }
    });
};

managerPrompt();
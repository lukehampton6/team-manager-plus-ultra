const inquirer = require('inquirer');

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the managers name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID?',
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter their ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?',
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter their email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their office number?',
            validate: (officeInput) => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter their office number.');
                    return false;
                }
            }
        }
    ])
}

const employeePrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What type of employee would you like to add?',
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter their name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID?',
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter their ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?',
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter their email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school are they enrolled at?',
            when: (input) => input.role === 'Intern',
            validate: (schoolInput) => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter their school.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their Github username?',
            when: (input) => input.role === 'Engineer',
            validate: (gitInput) => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('Please enter their Github username.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
}
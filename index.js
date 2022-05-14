import inquirer from 'inquirer';
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const employeeQues = (employeeData) => {
    employeeData = {
        manager: [],
        engineer: [],
        intern: [],
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employees name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log(`Please enter your name.`);
                    return false;
                }
            }
        },
    ]).then()
}
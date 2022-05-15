const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/page-template');
const fs = require('fs');



const employeePrompt = employeeData => {
    employeeData = 
        {
            manager:[],
            engineer:[],
            intern:[]
        };
    console.log(employeeData.manager);
    console.log(`
    ---------------------------------

    Enter your manager's information

    ---------------------------------
    `)
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the employees role?',
            choices:['Manager', 'Engineer', 'Intern'],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log(`You must select at least one roll.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employees name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log(`Please enter the employees name.`);
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the employees id number? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log(`Please enter the employees id number.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employees email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log(`Please enter the employees email.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the employees Office Number? (Required)',
            when: ({role}) => {
                if (role === 'Manager') {
                    return true;
                }
                else {
                    return false
                }
            },
            validate: numInput => {
                if (numInput) {
                    return true;
                }
                else {
                    console.log(`Please enter the employees office number.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the engineer\'s github username',
            when: ({role}) => {
                if (role === "Engineer") {
                    return true;
                }
                else {
                    return false
                }
            },
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log(`Please enter the Engineer\' github username.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of the Intern\'s school? (Required)',
            when: ({role}) => {
                if (role === 'Intern') {
                    return true;
                }
                else {
                    return false
                }
            },
            validate: numInput => {
                if (numInput) {
                    return true;
                }
                else {
                    console.log(`Please enter the employees office number.`);
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another Employee?',
            default: false
        }
    ]).then(employeeInfo => {
        if (employeeInfo.role === 'Manager') {
            employeeData.manager.push(employeeInfo);
        } else if (employeeInfo.role === 'Engineer') {
            employeeData.engineer.push(employeeInfo);
        } else if (employeeInfo.role === 'Intern') {
            employeeData.engineer.push(employeeInfo);
        }
        if (employeeInfo.confirmAddEmployee) {
            return employeePrompt(employeeData);
        }
        else {
            return employeeData;
        }

    });
};

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
            }
      
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
              ok: true,
              message: 'File created!'
            });
          });
    });
}

employeePrompt()
    .then(employeeData => {
        return generatePage(employeeData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse)
    })
    .catch(err => {
        console.log(err);
    });
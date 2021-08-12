const inquirer = require("inquirer");
const employeeArray = [];
const generatePage = require("./src/page-template.js");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
var flag = 0


const managerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the managers name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the managers name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is their employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter their ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is their email?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter their email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter their office number.");
            return false;
          }
        },
      },
    ])
    .then((managerInfo) => {
      const addManager = new Manager(
        managerInfo.name,
        managerInfo.id,
        managerInfo.email,
        managerInfo.officeNumber
      );
      employeeArray.push(addManager);
      console.log(employeeArray);
    });
};


const employeePrompt = async () => {
    if (flag === 1) {
        return
    }
  return await inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What type of employee would you like to add?",
        choices: ["Intern", "Engineer"],
      },
      {
        type: "input",
        name: "name",
        message: "What is their name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter their name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is their employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter their ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is their email?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter their email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What school are they enrolled at?",
        when: (input) => input.role === "Intern",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter their school.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is their Github username?",
        when: (input) => input.role === "Engineer",
        validate: (gitInput) => {
          if (gitInput) {
            return true;
          } else {
            console.log("Please enter their Github username.");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add another employee?",
        default: false,
      },
    ])
    .then((employeeInfo) => {
      if (employeeInfo.school) {
        const addIntern = new Intern(
            employeeInfo.name,
            employeeInfo.id,
            employeeInfo.email,
            employeeInfo.school
          );
          employeeArray.push(addIntern);
          console.log(employeeArray);
      } else if (employeeInfo.github) {
        const addEngineer = new Engineer(
            employeeInfo.name,
            employeeInfo.id,
            employeeInfo.email,
            employeeInfo.github
          );
          employeeArray.push(addEngineer);
          console.log(employeeArray);
      }

      if (employeeInfo.addEmployee) {
        return employeePrompt(employeeArray);
      }
      else {
        console.log(employeeArray);
        return employeeArray;
      }

    });
};

managerPrompt()
  .then(employeePrompt)


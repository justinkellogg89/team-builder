//Local requirements
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./assets/questions");
//Dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//Pre-defined outputh path
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = [];

//Prompts user to input manager information first, pushes to employees array, then prompts user for additional input
inquirer.prompt(questions.manager).then(manager => {
  employees.push(
    new Manager(manager.name, manager.id, manager.email, manager.officeNumber)
  );
  promptEmployee();
});
//Function that asks user what type of employee they would like to add
function promptEmployee() {
  inquirer
    .prompt({
      type: "list",
      message: "What kind of employee would you like to add?",
      name: "empType",
      choices: ["Engineer", "Intern", "Done"]
    })
//Response from the above function; if employee is an engineer, asks engineer questions then re-prompts employee
    .then(function(response) {
      if (response.empType === "Engineer") {
        inquirer.prompt(questions.engineer).then(engineer => {
          employees.push(
            new Engineer(
              engineer.name,
              engineer.id,
              engineer.email,
              engineer.officeNumber
            )
          );
          promptEmployee();
        });
//Response from the above function; if employee is an intern, asks intern questions then re-prompts employee
      } else if (response.empType === "Intern") {
        inquirer.prompt(questions.intern).then(intern => {
          employees.push(
            new Intern(intern.name, intern.id, intern.email, intern.school)
          );
          promptEmployee();
        });
//If user clicks done, stores employee array in html constant
      } else {
        const html = render(employees);
//Writs html constant to pre-defined output path
        fs.writeFile(outputPath, html, () => {});
      }
    });
}
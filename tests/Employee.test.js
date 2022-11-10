const inquirer = require(`inquirer`);

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    inquirer.prompt([
      {
        type: `input`,
        name: `name`,
        message: `What is the team member's name?`,
        validator: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the team member's name`);
            return false;
          }
        },
      },
    ]);
  }
  getId() {
    inquirer.prompt([
      {
        type: `input`,
        name: `id`,
        message: `What is the team member's id?`,
        validator: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the team member's id`);
            return false;
          }
        },
      },
    ]);
  }
  getEmail() {
    inquirer.prompt([
      {
        type: `input`,
        name: `email`,
        message: `What is the team member's email?`,
        validator: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the team member's email`);
            return false;
          }
        },
      },
    ]);
  }
  getRole() {
    inquirer.prompt([
      {
        type: `checkbox`,
        name: `role`,
        message: `What is the team member's role?`,
        choices: [`Manager`, `Engineer`, `Intern`],
        validator: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the team member's role`);
            return false;
          }
        },
      },
    ]);
  }
}

module.exports = Employee;

const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const createHtml = require(`./src/createHtml`);
const team = [];

function createManager() {
  return inquirer
    .prompt([
      {
        type: `input`,
        name: `name`,
        message: `What is the name of the team's manager?`,
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the name of the team's manager!`);
            return false;
          }
        },
      },
      {
        type: `input`,
        name: `id`,
        message: `What is the id of the team's manager?`,
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the id of the team's manager!`);
            return false;
          }
        },
      },
      {
        type: `input`,
        name: `email`,
        message: `What is the email of the team's manager?`,
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the email of the team's manager!`);
            return false;
          }
        },
      },
      {
        type: `input`,
        name: `officeNumber`,
        message: `What is the office number of the team's manager?`,
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(
              `Please enter the office number of the team's manager!`
            );
            return false;
          }
        },
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      console.log(data);
      team.push(manager);
      createTeam();
    });
}

function createTeam() {
  return inquirer
    .prompt([
      {
        type: `checkbox`,
        name: `menu`,
        message: `Select the role you'd like to add to your team (Select with Space, Submit with Enter)`,
        choices: [`engineer`, `intern`, `finish creating team`],
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(
              `Please enter the office number of the team's manager!`
            );
            return false;
          }
        },
      },
    ])
    .then((userInput) => {
      console.log(`Role Selected: ${userInput.menu[0]}`);
      if (userInput.menu[0] === `engineer`) {
        createEngineer();
      } else if (userInput.menu[0] === `intern`) {
        createIntern();
      } else {
        finishTeam();
      }
    });
}

function createEngineer() {
  console.log(
    `Please answer the following questions regarding the Engineer being added`
  );
  return inquirer
    .prompt([
      {
        type: `input`,
        name: `name`,
        message: `What is the engineer's name?`,
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the name of the engineer`);
            return false;
          }
        },
      },
      {
        type: `input`,
        name: `id`,
        message: `What is the engineer's ID?`,
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the ID of the engineer`);
            return false;
          }
        },
      },
      {
        type: `input`,
        name: `email`,
        message: `What is the engineer's email?`,
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the email of the engineer`);
            return false;
          }
        },
      },
      {
        type: `input`,
        name: `github`,
        message: `What is the engineer's github?`,
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the github of the engineer`);
            return false;
          }
        },
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      console.log(data);
      team.push(engineer);
      createTeam();
    });
}

function finishTeam() {
  fs.writeFile(
    __dirname + `/dist/index.html`,
    createHtml(team),
    function (err) {
      if (err) throw err;
      console.log(`Success!! HTML page has been created!`);
    }
  );
}

function createIntern() {
  console.log(
    `Please answer the following questions regarding the Intern being added`
  );
  return inquirer
    .prompt([
      {
        type: `input`,
        name: `name`,
        message: `What is the intern's name?`,
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the name of the intern`);
            return false;
          }
        },
      },
      {
        type: `input`,
        name: `id`,
        message: `What is the intern's ID?`,
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the ID of the intern`);
            return false;
          }
        },
      },
      {
        type: `input`,
        name: `email`,
        message: `What is the intern's email?`,
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the email of the intern`);
            return false;
          }
        },
      },
      {
        type: `input`,
        name: `school`,
        message: `What is the intern's school?`,
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter the school of the intern`);
            return false;
          }
        },
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      console.log(data);
      team.push(intern);
      createTeam();
    });
}

createManager();

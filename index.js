const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const createHtml = require(`./src/createHtml`);
const team = [];

// Functions are numbered according to their order
// 1. Creates a manager object using the Manager class and the data obtained from the user input
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
      // The manager object is pushed into the team array and the createTeam() function is called
      console.log(data);
      team.push(manager);
      createTeam();
    });
}

// 2. This is where the user gets to populate the team array with as many enineers and/or interns as needed
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
      // Based on the selection made by the user it will either call th createEngineer() function or the createIntern() function, if neither engineer or intern are selected then it calls the finishTeam() function
      console.log(`Role Selected: ${userInput.menu}`);
      if (userInput.menu[0] === `engineer`) {
        createEngineer();
      } else if (userInput.menu[0] === `intern`) {
        createIntern();
      } else {
        finishTeam();
      }
    });
}

// 3.a Here we create an engineer object that gets the data from the user input, and gets pushed into the team array, similar to the createManager() function
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
      // createTeam() is called again to go back and keep on populating the team array
      console.log(data);
      team.push(engineer);
      createTeam();
    });
}

// 3.b Here we create an intern object which is pushed into the team array and calls the createTeam() function to keep on creating more objects
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

// 3.c Once done, we create the html file inside the dist folder by calling the createHtml() function which holds the structure of the html page and gets populated by the data obtained in the team array of objects
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
createManager();

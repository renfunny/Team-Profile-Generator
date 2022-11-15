const inquirer = require(`inquirer`);

// This will be the parent class to the engineer, intern and manager classes. Thse clases will extend from the parent class accordingly
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return `Employee`;
  }
}

module.exports = Employee;

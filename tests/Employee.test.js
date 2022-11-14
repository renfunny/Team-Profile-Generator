const Employee = require(`../lib/Employee`);
const sampleEmployee = new Employee(`John`, 1, `john01@gmail.com`);

describe(`Employee`, () => {
  it(`Should create an object that contains the name, id, and email properties`, () => {
    const expectedResult = {
      name: `John`,
      id: 1,
      email: `john01@gmail.com`,
    };
    expect(expectedResult).toEqual(sampleEmployee);
  });
});

describe(`getName()`, () => {
  it(`Should retrieve the name value found in the Employee object`, () => {
    expect(sampleEmployee.getName()).toEqual(`John`);
  });
});

describe(`getId()`, () => {
  it(`Should retrieve the id value found in the Employee object`, () => {
    expect(sampleEmployee.getId()).toEqual(1);
  });
});

describe(`getEmail()`, () => {
  it(`Should retrieve the name value found in the Employee object`, () => {
    expect(sampleEmployee.getEmail()).toEqual(`john01@gmail.com`);
  });
});

describe(`getRole()`, () => {
  it(`Should retrieve the role value found in the Employee object`, () => {
    expect(sampleEmployee.getRole()).toEqual(`Employee`);
  });
});

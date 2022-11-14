const Manager = require(`../lib/Manager`);
const sampleManager = new Manager(`John`, 1, `john01@gmail.com`, 123);

describe(`Manager`, () => {
  it(`Should create an object that contains the name, id, email, and office number properties`, () => {
    const expectedResult = {
      name: `John`,
      id: 1,
      email: `john01@gmail.com`,
      officeNumber: 123,
    };
    expect(expectedResult).toEqual(sampleManager);
  });
});

describe(`getName()`, () => {
  it(`Should retrieve the name value found in the Manager object`, () => {
    expect(sampleManager.getName()).toEqual(`John`);
  });
});

describe(`getId()`, () => {
  it(`Should retrieve the id value found in the Manager object`, () => {
    expect(sampleManager.getId()).toEqual(1);
  });
});

describe(`getEmail()`, () => {
  it(`Should retrieve the name value found in the Manager object`, () => {
    expect(sampleManager.getEmail()).toEqual(`john01@gmail.com`);
  });
});

describe(`getOfficeNumber()`, () => {
  it(`Should retrieve the officeNumber value found in the Manager object`, () => {
    expect(sampleManager.getOfficeNumber()).toEqual(123);
  });
});

describe(`getRole()`, () => {
  it(`Should retrieve the role value found in the Manager object`, () => {
    expect(sampleManager.getRole()).toEqual(`Manager`);
  });
});

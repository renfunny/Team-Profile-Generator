const Engineer = require(`../lib/Engineer`);
const sampleEngineer = new Engineer(`John`, 1, `john01@gmail.com`, `johnhub`);

describe(`Engineer`, () => {
  it(`Should create an object that contains the name, id, email, and github properties`, () => {
    const expectedResult = {
      name: `John`,
      id: 1,
      email: `john01@gmail.com`,
      github: `johnhub`,
    };
    expect(expectedResult).toEqual(sampleEngineer);
  });
});

describe(`getName()`, () => {
  it(`Should retrieve the name value found in the Engineer object`, () => {
    expect(sampleEngineer.getName()).toEqual(`John`);
  });
});

describe(`getId()`, () => {
  it(`Should retrieve the id value found in the Engineer object`, () => {
    expect(sampleEngineer.getId()).toEqual(1);
  });
});

describe(`getEmail()`, () => {
  it(`Should retrieve the name value found in the Engineer object`, () => {
    expect(sampleEngineer.getEmail()).toEqual(`john01@gmail.com`);
  });
});

describe(`getGithub()`, () => {
  it(`Should retrieve the Github value found in the Engineer object`, () => {
    expect(sampleEngineer.getGithub()).toEqual(`johnhub`);
  });
});

describe(`getRole()`, () => {
  it(`Should retrieve the role value found in the Engineer object`, () => {
    expect(sampleEngineer.getRole()).toEqual(`Engineer`);
  });
});

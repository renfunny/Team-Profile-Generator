const Intern = require(`../lib/Intern`);
const sampleIntern = new Intern(`John`, 1, `john01@gmail.com`, `UofT`);

describe(`Intern`, () => {
  it(`Should create an object that contains the name, id, email, and school properties`, () => {
    const expectedResult = {
      name: `John`,
      id: 1,
      email: `john01@gmail.com`,
      school: `UofT`,
    };
    expect(expectedResult).toEqual(sampleIntern);
  });
});

describe(`getName()`, () => {
  it(`Should retrieve the name value found in the Intern object`, () => {
    expect(sampleIntern.getName()).toEqual(`John`);
  });
});

describe(`getId()`, () => {
  it(`Should retrieve the id value found in the Intern object`, () => {
    expect(sampleIntern.getId()).toEqual(1);
  });
});

describe(`getEmail()`, () => {
  it(`Should retrieve the name value found in the Intern object`, () => {
    expect(sampleIntern.getEmail()).toEqual(`john01@gmail.com`);
  });
});

describe(`getSchool()`, () => {
  it(`Should retrieve the Github value found in the Intern object`, () => {
    expect(sampleIntern.getSchool()).toEqual(`UofT`);
  });
});

describe(`getRole()`, () => {
  it(`Should retrieve the role value found in the Intern object`, () => {
    expect(sampleIntern.getRole()).toEqual(`Intern`);
  });
});

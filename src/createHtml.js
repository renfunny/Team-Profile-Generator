function createHtml(team) {
  const memberCards = [];
  function createManagerCard(manager) {
    let managerCard = `
    <div
          class="card text-bg-light mb-3"
          style="min-width: 18rem; max-width: 19rem; margin: 3rem"
        >
          <div class="card-header">
            ${manager.name} <br />
            ${manager.getRole()}
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${
                manager.email
              }">${manager.email}</a></li>
              <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>
`;
    memberCards.push(managerCard);
  }
  function createEngineerCard(engineer) {
    let engineerCard = `
    <div
    class="card text-bg-light mb-3"
    style="min-width: 18rem; margin: 3rem"
  >
    <div class="card-header">
      ${engineer.name} <br />
      ${engineer.getRole()}
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${
      engineer.email
    }</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
      </ul>
    </div>
  </div>`;
    memberCards.push(engineerCard);
  }
  function createInternCard(intern) {
    let internCard = `
    <div
    class="card text-bg-light mb-3"
    style="min-width: 18rem; margin: 3rem"
  >
    <div class="card-header">
      ${intern.name} <br />
      ${intern.getRole()}
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${
      intern.email
    }</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>
    `;
    memberCards.push(internCard);
  }
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === `Manager`) {
      createManagerCard(team[i]);
    }
    if (team[i].getRole() === `Engineer`) {
      createEngineerCard(team[i]);
    }
    if (team[i].getRole() === `Intern`) {
      createInternCard(team[i]);
    }
  }
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="../src/style.css" />
    </head>
    <body>
      <header>
        <nav class="navbar navbar-dark bg-dark" style="margin-bottom: 3rem">
          <div class="container-fluid justify-content-center">
            <span class="navbar-brand mb-0 h1">My Team</span>
          </div>
        </nav>
      </header>
      <main>
        <div class="wrapper">
         ${memberCards.join(``)}
        </div>
      </main>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>`;
}

module.exports = createHtml;

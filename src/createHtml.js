function createHtml(team) {
  // Here we create individual cards that will be added to the html body, each card will be stored in the memberCards array
  const memberCards = [];
  function createManagerCard(manager) {
    let managerCard = `
    <div
          class="card text-bg-light mb-3"
          style="min-width: 18rem; max-width: 19rem; margin: 3rem"
        >
          <div class="card-header" style="font-size: 1.5rem;">
          <strong>
            ${manager.getName()} <br />
            ${manager.getRole()} ☕
            </strong>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>ID:</strong> ${manager.getId()}</li>
              <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item"><strong>Office number:</strong> ${manager.getOfficeNumber()}</li>
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
    <div class="card-header" style="font-size: 1.5rem;">
    <strong>
      ${engineer.getName()} <br />
      ${engineer.getRole()} 💻
      </strong>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>ID:</strong> ${engineer.getId()}</li>
        <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item"><strong>GitHub:</strong> <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
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
    <div class="card-header" style="font-size: 1.5rem;">
    <strong>
      ${intern.getName()} <br />
      ${intern.getRole()} 📚
      </strong>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>ID:</strong> ${intern.getId()}</li>
        <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item"><strong>School:</strong> ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>
    `;
    memberCards.push(internCard);
  }
  // here we loop through the team array of objects and get the role of each memeber, then we use that to create a card for each member which is stored in the memberCards array
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
  // here we return the html and we add all the cards in the memberCards array by joining them together
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

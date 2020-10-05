const generateCards = (teamArray) => {
  //this array will store all the cards that will be generated
  let employeeCards = [];

  //loop through the array and conditional create a card for each employee type
  for (let i = 0; i < teamArray.length; i++) {
    employeeRole = teamArray[i].role;

    //splitting the employee card up into card templates that a the same so that I can dynamically add the icons and the office, github and school
    let cardTemplate1 = `
      <div class="row">
      <div class="card col border-dark" style="width: 18rem">
      <div class="card-body card-header text-white bg-dark">
      <h5 class="card-title">${teamArray[i].name}</h5>
      `;

    let cardTemplate2 = `
     </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID: ${teamArray[i].employeeId}</li>
      <li class="list-group-item">
      Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a>
      </li>
    `;

    let cardTemplate3 = `
      </ul>
      </div>
      </div>
  `;
    //conditionally generate the html for 'Manager', 'Engineer' and 'Intern'
    if (employeeRole === "Manager") {
      employeeCards.push(`
        ${cardTemplate1}
        <h6 class="card-subtitle mb-2 text-white fas fa-mug-hot">
        ${teamArray[i].role}
        </h6>
        ${cardTemplate2}
        <li class="list-group-item">Office Number: ${teamArray[i].officeNumber} </li>
        ${cardTemplate3}
        `);
    } else if (employeeRole === "Engineer") {
      employeeCards.push(`
        ${cardTemplate1}
        <h6 class="card-subtitle mb-2 text-white fas fa-glasses">
        ${teamArray[i].role}
        </h6>
        ${cardTemplate2}
        <li class="list-group-item">Github: <a href = 'https://www.github.com/${teamArray[i].github}' target= '_blank'> ${teamArray[i].github}</a> </li>
        ${cardTemplate3}
          
        `);
    } else if (employeeRole === "Intern") {
      employeeCards.push(`
        ${cardTemplate1}
        <h6 class="card-subtitle mb-2 text-white fas fa-user-graduate">
        ${teamArray[i].role}
        </h6>
        ${cardTemplate2}
        <li class="list-group-item">School: ${teamArray[i].school} </li>
        ${cardTemplate3}
        `);
    }
  }

  return employeeCards;
};

//creates the final html that will be created
const generatePage = (teamArray) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team List</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="bg-dark">
      <h1>My Team</h1>
    </header>
    <main class="container">
      ${generateCards(teamArray)}
    </main>
  </body>
</html>`;
};

module.exports = generatePage;
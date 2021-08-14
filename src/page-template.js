const managerCard = function(manager) {
    return `<div class="card">
    <div class="header">
    <h1>${manager.name}</h1>
    <h2>${manager.getRole()}</h2>
    </div>
    <p><span>Employee ID: </span>${manager.id}</p>
    <p><span>Email: </span><a href="mailto:${manager.email}">${manager.email}</a></p>
    <p><span>Office Number: </span>${manager.officeNumber}</p>
    </div>
    `
}

const internCard = function(intern) {
    return `<div class="card">
    <div class="header">
    <h1>${intern.name}</h1>
    <h2>${intern.getRole()}</h2>
    </div>
    <p><span>Employee ID: </span>${intern.id}</p>
    <p><span>Email: </span><a href="mailto:${intern.email}">${intern.email}</a></p>
    <p><span>School: </span>${intern.school}</p>
    </div>
    `
}

const engineerCard = function(engineer) {
    return `<div class="card">
    <div class="header">
    <h1>${engineer.name}</h1>
    <h2>${engineer.getRole()}</h2>
    </div>
    <p><span>Employee ID: </span>${engineer.id}</p>
    <p><span>Email: </span><a href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p><span>Github Username: </span><a href="https://${engineer.github}">${engineer.github}</a></p>
    </div>
    `
}

const generatePage = (employeeArray) => {
    const employeeCardArray = [];

    for (let i=0; i<employeeArray.length; i++) {
        const currentEmployee = employeeArray[i];
        const employeeRole = currentEmployee.getRole();

        if (employeeRole === 'Manager') {
            const newManager = managerCard(currentEmployee);
            employeeCardArray.push(newManager);
        }

        if (employeeRole === 'Intern') {
            const newIntern = internCard(currentEmployee);
            employeeCardArray.push(newIntern);
        }

        if (employeeRole === 'Engineer') {
            const newEngineer = engineerCard(currentEmployee);
            employeeCardArray.push(newEngineer);
        }
    }

    const joinedArray = employeeCardArray.join('')

    const invokeHTML = generateHTML(joinedArray);
    return invokeHTML;
}

const generateHTML = (employeeCardArray) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Employees</title>
</head>
<body>
    <div class="main">
        ${employeeCardArray}
    </div>
</body>
</html>`
}

module.exports = generatePage;


const generateManagerCard = managers => {
    return `
    ${managers.map(({role, name, id, email, officeNumber}) => {
        return `
        <div class="card col-3 m-3">
            <h2 class="card-header bg-warning">${name}</h2>
            <h3></h3>
            <div class="card-body">
                <h3 class="card-title">
                    ${role}
                </h3>
                <p class="card-text">
                    Id: ${id}
                </p>
                <p class="card-text">
                    Email: <a href="mailto:${email}">${email}</a>
                <p>
                <p class="card-text">
                    Office Number: ${officeNumber}
                <p>
                
            </div>
        </div>
        `
    })}
    `
};

const generateEngineerCard = engineers => {
    if(!engineers) {
        return ``;
    }
    else {
        return `
        ${engineers.map(({role, name, id, email, github}) => {
            return `
            <div class="card col-3 m-3">
                <h2 class="card-header bg-warning">${name}</h2>
                <h3></h3>
                <div class="card-body">
                    <h3 class="card-title">
                        ${role}
                    </h3>
                    <p class="card-text">
                        Id: ${id}
                    </p>
                    <p class="card-text">
                        Email: <a href="mailto:${email}">${email}</a>
                    <p>
                    <p class="card-text">
                        Github: <a href="https://github.com/${github}" target=_blank>${github}</a>
                    <p>
                </div>
            </div>
            `
        })}
        `
    }
}
const generateInternCard = interns => {
    if(!interns) {
        return ``;
    }
    else {
        return `
        ${interns.map(({role, name, id, email, school}) => {
            return `
            <div class="card col-3 m-3">
                <h2 class="card-header bg-warning">${name}</h2>
                <h3></h3>
                <div class="card-body">
                    <h3 class="card-title">
                        ${role}
                    </h3>
                    <p class="card-text">
                        Id: ${id}
                    </p>
                    <p class="card-text">
                        Email: <a href="mailto:${email}">${email}</a>
                    <p>
                    <p class="card-text">
                        School: ${school}
                    <p>
                </div>
            </div>
            `
        })}
        `
    }
}


module.exports = employeeData => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="display-2 text-center mb-4 p-5 bg-warning">
        My Team
    </header>
    <section>
        <div id="employee-cards" class="container">
            <div class="row">
            ${generateManagerCard(employeeData.manager)}
            ${generateEngineerCard(employeeData.engineer)}
            ${generateInternCard(employeeData.intern)}
            </div>
        </div>
    </section>
</body>  
  `
};
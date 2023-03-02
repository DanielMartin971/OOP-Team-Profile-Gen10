const genHeader = function () {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"/>
        <title>Employee Roster</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid text-center bg-info ">
            <div class="container">
                <h1 class="display-6 text-light">My Team</h1>
                <h1 class="display-6 text-light"><i class="fas fa-users"></i></h1>
            </div>
        </div>
        <!-- Start of Cards -->
        <div class = "container ">
            <div class="col-md-12">
                <div class="row" id = "sortable">`
};

// Returns manager's card with user's input

const genManager = function (data) {
    return `<div class="card m-2">
    <div class="card-header bg-info text-light">
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-briefcase"></i> Manager</h2>
    </div>
    <div class= "card-body">
            <div class="list-group">
                <p class="list-group-item list-group-item-action list-group-item-dark">ID: <span>${data.id}</span></p>
                <p class="list-group-item list-group-item-action list-group-item-dark">Email: <span><a target="_blank" rel="noopener noreferrer" href="mailto:${data.email}">${data.email}</a></span></p>
                <p class="list-group-item list-group-item-action list-group-item-dark">Office Number: <span>${data.officeNumber}</span></p>
            </div>
    </div>
</div>`
};

// Return engineer's card with user's input

const genEngineer = function (data) {
    return `<div class="card m-2">
    <div class="card-header bg-info text-light">
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-wrench"></i> Engineer</h2>
    </div>
    <div class= "card-body">
            <div class="list-group">
                <p class="list-group-item list-group-item-action list-group-item-dark">ID: <span>${data.id}</span></p>
                <p class="list-group-item list-group-item-action list-group-item-dark">Email: <span><a target="_blank" rel="noopener noreferrer" href="mailto:${data.email}">${data.email}</a></span></p>
                <a href = https://github.com/${data.github} target="_blank"><button class="list-group-item list-group-item-action list-group-item-dark">GitHub: ${data.github}</button></a>
            </div>
    </div>
</div>`
};

// Return intern's card with user's input

const genIntern = function (data) {
    return `<div class="card m-2">
    <div class="card-header bg-info text-light">
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fa-solid fa-user-tie"></i> Intern</h2>
    </div>
    <div class= "card-body">
            <div class="list-group">
                <p class="list-group-item list-group-item-action list-group-item-dark">ID: <span>${data.id}</span></p>
                <p class="list-group-item list-group-item-action list-group-item-dark">Email: <span><a target="_blank" rel="noopener noreferrer" href="mailto:${data.email}">${data.email}</a></span></p>
                <p class="list-group-item list-group-item-action list-group-item-dark">School: <span>${data.school}</span></p>
            </div>
    </div>
</div>`
};

// Return footer of HTML file

const genFooter = function() {
    return `</div>
    </div>
</div> 
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
  $(function () {
    $('#sortable').sortable();
    $('#sortable').disableSelection();
  });
</script> 
</body>
</html>`
};

module.exports = {
    manager: genManager,
    engineer: genEngineer,
    intern: genIntern,
    header: genHeader,
    footer: genFooter,
}
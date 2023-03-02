// Added in all needed packages and classes into the index
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generateHTML = require("./lib/generateHTML.js");
const fs = require("fs");

// This will be used for generating the HTML page with all the employees' info
const team = [generateHTML.header(), generateHTML.footer()];

// This function uses inquirer to get manager info
function managerStart() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your manager's name?"
        },
        {
            type: 'number',
            name: 'id',
            message: "What is your manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email?"
        },
        {
            type: 'number',
            name: 'officeNum',
            message: "What is your manager's office number?"
        },
    ])
}

// This function uses inquirer to get employee info, adding in another member, intern, or closing out and having the product
// finish 
function teamProfile(){
    inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "Would you like to add another member?",
        choices: ["Engineer", "Intern", "Exit and Open"]
      }
    ]).then((data)=> {
      if (data.role === "Engineer"){
        return inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
          },
          {
            type: "number",
            name: "id",
            message: "What is your engineer's ID?"
          },
          {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
          },
          {
            type: "input",
            name: "github",
            message: "What is your engineer's GitHub?"
          }
        ]).then((data)=>{
          let engineer = new Engineer(data.name, data.id, data.email,data.github);
          team.splice(team.length-1 , 0, engineer.getHTML());
          teamProfile();
        })
      }
      if (data.role === "Intern"){
        return inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
          },
          {
            type: "number",
            name: "id",
            message: "What is your intern's ID?"
          },
          {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
          },
          {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
          }
        ]).then((data)=>{
          let intern = new Intern(data.name, data.id, data.email,data.school);
          team.splice(team.length-1, 0, intern.getHTML());
          teamProfile();
        })
      }
  
      return printHTML(team);
    });
  }

// This function just makes a HTML page after getting all necessary data
function printHTML(members){
    fs.writeFile('team.html', members.toString(), (err) => {
        if(err) {
            throw err;
        }
        console.log("Calculating...");
    });

    // Timeout is just a little bonus for being fancy and producing the HTML after a second of waiting
    setTimeout(() => {
        console.log("Roster has been made");
    }, '1000');
  }

// This calls the function starting up inquirer, going through the loop after typing in 'node index.js' when using terminal
managerStart()
  .then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNum);
    team.splice(team.length-1, 0, manager.getHTML());
    teamProfile();
  })
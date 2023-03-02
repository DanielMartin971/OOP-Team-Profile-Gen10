const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generateHTML = require("./lib/generateHTML.js");
const fs = require("fs");

const team = [generateHTML.header(), generateHTML.footer()];

function managerStart() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email?"
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "What is your manager's office number?"
        },
    ])
}

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
            type: "input",
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
            type: "input",
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

  function printHTML(members){
    fs.writeFile('team.html', members.toString(), (err) => {
        if(err) {
            throw err;
        }
        console.log("Calculating...");
    });

    setTimeout(() => {
        console.log("Roster has been made");
    }, '1000');
  }

  managerStart()
  .then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNum);
    team.splice(team.length-1, 0, manager.getHTML());
    teamProfile();
  })
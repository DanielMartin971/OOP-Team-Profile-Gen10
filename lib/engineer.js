// We bring in employee to make a super class
const Employee = require("./employee");
const genHTML = require('./generateHTML');

// We extend employee so we dont have to type everything out all over again
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }

    getRole() {
        return "Engineer"
    }

    getGitHub() {
        return this.github;
    }

    getHTML() {
        return genHTML.engineer(this);
    }
}

module.exports = Engineer;
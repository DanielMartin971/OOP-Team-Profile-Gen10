const Employee = require("./employee");
const genHTML = require('./generateHTML');

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
const Employee = require('./employee');
const genHTML = require('./generateHTML');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }

    getHTML() {
        return genHTML.intern(this);
    }
}

module.exports = Intern;
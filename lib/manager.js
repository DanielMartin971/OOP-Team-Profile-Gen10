const Employee = require('./employee');
const genHTML = require('./generateHTML');

class Manager extends Employee {
    constructor(name, id, email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getHTML() {
        return genHTML.manager(this);
    }
}

module.exports = Manager;
// This is the guy for everyone else to base off of, a class that needs; name, role, id, email of every employee
class Employee {
    constructor(name, role, id, email = "Employee"){
        this.name = name; 
        this.role = role;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }
    
    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
}

// It also gets exported to be used on other pages :)
module.exports = Employee;
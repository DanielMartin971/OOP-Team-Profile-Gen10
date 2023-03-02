const Employee = require('../lib/Employee');

// This test just tests the employee's part of things making sure it works
describe('Employee test', () => {
    it('Employee class creates corresponding name', () => {
        const employee = new Employee('bob', '1', '@email.com');
        expect(employee.getName()).toEqual('bob');
    });
    it('Employee class creates corresponding id', () => {
        const employee = new Employee('bob', '2', '@email.com');
        expect(employee.getId()).toEqual('2');
    });
    it('Employee class creates corresponding email', () => {
        const employee = new Employee('bob', '3', '@email.com');
        expect(employee.getEmail()).toEqual('@email.com');
    });
});
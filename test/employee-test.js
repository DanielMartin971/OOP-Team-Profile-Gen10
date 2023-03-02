const Employee = require('../lib/Employee');

describe('Employee test', () => {
    it('Employee class creates corresponding name', () => {
        const employee = new Employee('', '11', '@gmail.com');
        expect(employee.getName()).toEqual('');
    });
    it('Employee class creates corresponding id', () => {
        const employee = new Employee('', '11', '@gmail.com');
        expect(employee.getId()).toEqual('11');
    });
    it('Employee class creates corresponding email', () => {
        const employee = new Employee('', '11', '@gmail.com');
        expect(employee.getEmail()).toEqual('@gmail.com');
    });
});
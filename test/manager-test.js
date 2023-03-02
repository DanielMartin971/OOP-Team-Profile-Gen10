const Manager = require('../lib/manager');

// This test just tests the manager's part of things making sure it works
describe('Manager test', () => {
    it('Manager class creates name', () => {
        const manager = new Manager('bob', '1', '@email.com', '2');
        expect(manager.getName()).toEqual('bob');
    });

    it('Manager class creates ID successfully', () => {
        const manager = new Manager('bob', '2', '@email.com', '3');
        expect(manager.getID()).toEqual('2');
    });

    it('Manager class creates Email succcessfully', () => {
        const manager = new Manager('bob', '3', '@email.com', '4');
        expect(manager.getEmail()).toEqual('@email.com');
    });

    it('Manager class creates School successfully', () => {
        const manager = new Manager('bob', '4', '@email.com', '5');
        expect(manager.getOfficeNum()).toEqual('5');
    });
});
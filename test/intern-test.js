const Intern = require('../lib/intern');

// This test just tests the intern's part of things making sure it works
describe('Intern test', () => {
    it('Intern class creates name', () => {
        const intern = new Intern('bob', '1', '@email.com', 'School');
        expect(intern.getName()).toEqual('bob');
    });

    it('Inter class creates ID successfully', () => {
        const intern = new Intern('bob', '2', '@email.com', 'School');
        expect(intern.getID()).toEqual('2');
    });

    it('Intern class creates Email succcessfully', () => {
        const intern = new Intern('bob', '3', '@email.com', 'School');
        expect(intern.getEmail()).toEqual('@email.com');
    });

    it('Intern class creates School successfully', () => {
        const intern = new Intern('bob', '4', '@email.com', 'School');
        expect(intern.getSchool()).toEqual('School');
    });
});
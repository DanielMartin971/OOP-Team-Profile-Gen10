const Engineer = require('../lib/engineer');

// This test just tests the engineer's part of things making sure it works
describe('Engineer test', () => {
    it('Engineer class creates corresponding name', () => {
        const engineer = new Engineer('bob', '1', '@email.com', '');
        expect(engineer.getName()).toEqual('bob');
    });

    it('Engineer class creates corresponding id', () => {
        const engineer = new Engineer('bob', '2', '@email.com', '');
        expect(engineer.getId()).toEqual('2');
    });

    it('Engineer class creates corresponding email', () => {
        const engineer = new Engineer('bob', '3', '@email.com', '');
        expect(engineer.getEmail()).toEqual('@email.com');
    });

    it('The GitHub entered is a string', () => {
        const engineer = new Engineer('bob', '4', '@email.com', '');
        expect(engineer.getGithub()).toEqual('');
    });
});
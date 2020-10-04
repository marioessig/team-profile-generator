const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const engineer = new Intern('Sue Doe',1234,'sue@doe.com','Ivy League Haxors','Intern');

    expect(engineer.school).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Intern');
});
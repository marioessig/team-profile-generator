const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Sue Doe',1234,'sue@doe.com',1234567890,'Manager');

    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toBe('Manager');
});
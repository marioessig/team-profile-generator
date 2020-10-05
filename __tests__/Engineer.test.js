const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Jane Doe',5432,'jane@doe.com','|337 H4xo2','Engineer');

    expect(engineer.githubUsername).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');
});
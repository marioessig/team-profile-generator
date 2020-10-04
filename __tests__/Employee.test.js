const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('John Doe',9876,'john@doe.com','Employee');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.employeeId).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
    expect(employee.role).toEqual(expect.any(String));
});
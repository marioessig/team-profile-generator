const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('John Doe',9876,'john@doe.com',1234567890,'|337 H4xo2');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.employeeId).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
    expect(employee.officeNumber).toEqual(expect.any(Number));
});
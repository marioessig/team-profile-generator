const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, employeeId, email, officeNumber, role) {
        super(name, employeeId, email)
        this.officeNumber = officeNumber;
        this.role = role;
    };

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;
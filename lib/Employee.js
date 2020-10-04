class Employee {
    constructor(name, employeeId, email, officeNumber, position) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
        this.officeNumber = officeNumber;
        this.position = position;
    }

getName() {
    return this.name
    }

getEmployeeId() {
    return this.employeeId
    }

getEmail() {
    return this.email
    }

getOfficeNumber() {
    return this.officeNumber
    }
};

module.exports = Employee;
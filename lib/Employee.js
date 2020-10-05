class Employee {
    constructor(name, employeeId, email) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
        this.role = 'Employee'
    };

    getName() {
        return this.name
        }

    getEmployeeId() {
        return this.employeeId
        }

    getEmail() {
        return this.email
        }

    getRole() {
        return this.role
    }
}

module.exports = Employee;
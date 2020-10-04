const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, employeeId, email, school, role) {
        super(name, employeeId, email)
        this.school = school;
        this.role = role;
    };

    getSchool() {
        return this.school
        }

    getRole() {
        return this.role
    }
}

module.exports = Intern;
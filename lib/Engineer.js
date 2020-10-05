const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employeeId, email, githubUsername, role) {
        super(name, employeeId, email)
        this.githubUsername = githubUsername;
        this.role = role;
    };

    getName() {
        return this.githubUsername
        }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;
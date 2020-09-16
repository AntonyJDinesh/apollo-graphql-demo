const { DataSource } = require('apollo-datasource');

class EmployeeDs extends DataSource {
    constructor() {
        super();

        this.employees = [
            {
                id: 1,
                name: 'Martin',
                age: 29,
                gender: 'M',
                yoj: 2009,
                deptId: 1
            },
            {
                id: 2,
                name: 'Karthika',
                age: 24,
                gender: 'F',
                yoj: 2014,
                deptId: 2
            },
        ];
    }


    initialize(config) {
        this.context = config.context;
    }

    async findAllEmployees() {
        return this.employees;
    }
}

module.exports = EmployeeDs;
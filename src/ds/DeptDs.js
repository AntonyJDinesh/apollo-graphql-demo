const { DataSource } = require('apollo-datasource');

class DeptDs extends DataSource {
    constructor() {
        super();

        this.depts = [
            {
                id: 1,
                name: 'TCIO',
            },
            {
                id: 2,
                name: 'CIB',

            },
        ];
    }


    initialize(config) {
        this.context = config.context;
    }

    async findDeptById(id) {
        console.log("findDeptById" + id);
        for (let i = 0; i < this.depts.length; i++) {
            if(this.depts[i].id == id) {
                return this.depts[i];
            }
        }
    }
}

module.exports = DeptDs;
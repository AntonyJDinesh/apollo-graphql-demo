const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        employees(gender: String = "A", yoj: Int = 0): [Employee]
        depts: [Dept]
    }

    type Employee {
        id: ID
        name: String
        age: Int
        gender: String
        yoj: Int
        deptId: Int
        dept: Dept
    }

    type Dept {
        id: ID
        name: String
    }
`;

module.exports = typeDefs;
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const EmployeeDs = require('./ds/EmployeeDs');
const DeptDs = require('./ds/DeptDs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ employeeDs: new EmployeeDs(), deptDs: new DeptDs() })
});

server.listen().then(({ url }) => {  console.log(`🚀 Server ready at ${url}`);});
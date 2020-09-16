module.exports = {
  Query: {
    employees: (_, __, { dataSources }) =>
      dataSources.employeeDs.findAllEmployees(),
  },
  Employee: {
    dept: (employee, _, { dataSources }) =>
        dataSources.deptDs.findDeptById(employee.deptId),
  }
};
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employees) {
      let count = 0;
      for (const [key, value] of Object.entries(employees)) { // eslint-disable-line no-unused-vars
        count += 1;
      }
      return count;
    },
  };
}

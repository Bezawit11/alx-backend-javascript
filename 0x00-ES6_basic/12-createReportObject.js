export default function createReportObject(employeesList) {
	return {
		allEmployees: employeesList,
		getNumberOfDepartments(employees) {
		var count = 0;
		for(const [key, value] of Object.entries(employees)){
			count += 1;
		}
		return count;
		}
	};
}

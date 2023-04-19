export default function createEmployeesObject(departmentName, employees) {
	let o = {}
	var dep = departmentName;
	o[dep] = employees;
	return o;
}

export default function createEmployeesObject(departmentName, employees) {
  const o;
  var dep = departmentName;
  o[dep] = employees;
  return o;
}

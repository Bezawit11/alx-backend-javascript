export default function createEmployeesObject(departmentName, employees) {
  var o = {};
  const dep = departmentName;
  o[dep] = employees;
  return o;
}

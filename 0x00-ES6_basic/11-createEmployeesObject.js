export default function createEmployeesObject(departmentName, employees) {
  var o = {}
  var dep = departmentName;
  o[dep] = employees;
  return o;
}

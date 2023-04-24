export default function createEmployeesObject(departmentName, employees) {
  const o = {};
  const dep = departmentName;
  o[dep] = employees;
  return o;
}

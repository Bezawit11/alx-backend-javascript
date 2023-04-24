export default function createEmployeesObject(departmentName, employees) {
  var dep = departmentName;
  const o = {dep: employees};
  return o;
}

export default function createIteratorObject(report) {
  const a = Object.values(report.allEmployees);
  const b = [].concat(...a);
  return b;
}

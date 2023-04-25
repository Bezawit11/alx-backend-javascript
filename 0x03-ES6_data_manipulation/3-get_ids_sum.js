export default function getStudentIdsSum(arr) {
  const sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue.id, 0);
  return sum;
}

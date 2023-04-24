export default function getStudentIdsSum(arr) {
  const sum =  arr.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.id;
  } , 0);
  return sum;
}

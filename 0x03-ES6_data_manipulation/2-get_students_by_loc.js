export default function getStudentsByLocation(arr, city) {
  return arr.filter((s) => s.location === city);
}

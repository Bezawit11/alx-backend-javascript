export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    const ids = arr.map((a) => a.id);
    return ids;
  }
  return [];
}

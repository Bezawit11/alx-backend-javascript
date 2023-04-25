export default function updateStudentGradeByCity(arr, city, newGrades) {
  const loc = arr.filter((s) => s.location === city);
  const g = loc.map((a) => { // eslint-disable-line array-callback-return
    for (const i of newGrades) {
      if (i.studentId === a.id) {
        a.grade = i.grade; // eslint-disable-line no-param-reassign
      }
    }
  });
  return g;
}

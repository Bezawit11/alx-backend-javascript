export default function updateStudentGradeByCity(arr, city, newGrades) {
  const loc =  arr.filter((s) => s.location === city);
  const g = loc.map(function(a) {
    for (let i of newGrades) {
      if (i.studentId === a.id) {
        a.grade = i.grade;
      }
    }
  })
  return g;
}

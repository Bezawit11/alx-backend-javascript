interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: boolean]: any;
  }

interface Directors extends Teacher {
  numberOfReports: number;
  }

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
  }

let printTeacher: printTeacherFunction;

printTeacher = function (f: string. l: string): string {
  let newf = f.slice(0, 1);
  return `${newf}. ${l}`;
  };

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  }

class StudentClass implements StudentClassInterface {
  
}

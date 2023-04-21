export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(newName) {
    if (typeof(name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    this._length = newLength;
  }

  get length() {
    return this._length;
  }

  set students(newStudent) {
    this._students = newStudent;
  }

  get students() {
    return this._students;
  }
}

export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'string':
        return this._location;
      case 'number':
        return this._size;
      default:
        break;
    }
  return `invalid`;
  }
}

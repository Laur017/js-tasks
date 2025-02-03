export class Person {
  constructor(str) {
    this.setFullName(str);
  }

  getFirstName() {
    return this.first;
  }
  getLastName() {
    return this.last;
  }
  getFullName() {
    return this.fullName;
  }
  setFirstName(first) {
    this.first = first;
    this._updateFullName();
  }
  setLastName(last) {
    this.last = last;
    this._updateFullName();
  }
  setFullName(firstAndLast) {
    [this.first, this.last] = firstAndLast.split(' ');
    this.fullName = firstAndLast;
  }

  _updateFullName() {
    this.fullName = `${this.first} ${this.last}`;
  }
}

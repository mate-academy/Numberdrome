'use strict';

class Numberdrome {
  constructor() {
    this.num = [];
  }

  addNumber(n) {
    this.num.push(n);
  }

  removeNumber(n) {
    this.num.splice(this.num.indexOf(n), 1);
  }

  sum() {
    return this.num.reduce(((a, b) => a + b), 0)
  }

  product() {
    return this.num.reduce(((a, b) => a * b), 1);
  }

  min() {
    if (this.num.length === 0) {
      throw new Error('no numbers');
    }
    return Math.min(...this.num);
  }

  max() {
    if (this.num.length === 0) {
      throw new Error('no numbers');
    }
    return Math.max(...this.num);
  }
}


/* eslint-disable max-len */
'use strict';

class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    this.list.push(n);
  }

  removeNumber(number) {
    this.list = this.list.filter(num => num !== number);

    return this.list;
  }

  sum() {
    return this.list.reduce((a, b) => a + b, 0);
  }

  product() {
    return this.list.reduce((a, b) => a * b);
  }

  min() {
    return Math.min(...this.list);
  }

  max() {
    return Math.max(...this.list);
  }
}

module.exports = {
  Numberdrome,
};

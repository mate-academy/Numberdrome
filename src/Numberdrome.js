'use strict';
// Create the Numberdrome class with the following methods:

// - constructor(): initialization with the empty list of numbers;
// addNumber(n): adds n to the list of numbers;
// removeNumber(n): removes all occurencies of n from the list of numbers;
// sum(): returns the sum of all the numbers in the list
// (0 if there are no numbers in the list);
// product(): returns the product of all the numbers in the list
// (1 if there are no numbers in the list);
// min(): returns the least number from the list or throws
// an error if there are no numbers;
// max(): returns the largest number from the list or throws
// an error if there are no numbers.

class Numberdrome {
  // write code here
  constructor() {
    this.numbers = [];
  }

  addNumber(num) {
    this.numbers.push(num);
  }

  removeNumber(num) {
    this.numbers = this.numbers.filter(number => (number !== num));
  }

  sum() {
    return this.numbers.reduce((accSum, num) => accSum + num, 0);
  }

  product() {
    return this.numbers.reduce((accMul, num) => accMul * num, 1);
  }

  min() {
    if (!this.numbers.length) {
      throw new Error('there are no numbers');
    }

    return Math.min(...this.numbers);
  }

  max() {
    if (!this.numbers.length) {
      throw new Error('there are no numbers');
    }

    return Math.max(...this.numbers);
  }
}

module.exports = {
  Numberdrome,
};

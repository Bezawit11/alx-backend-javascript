const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("Test calculateNumber function", () => {
  it("add two integer numbers", () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it("add one integer and one floating number", () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });
  it("add two floating numbers", () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  it("add two floating numbers", () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it("add two floating numbers", () => {
    assert.strictEqual(calculateNumber('SUM', 1.49, 3.49), 4);
  });
  it("subtract two integer numbers", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
  });
  it("subtract two floating numbers", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.49, 1.49), 2);
  });
  it("subtract one integer and one floating number", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it("divide two integer numbers", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it("divide 0 by one integer", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 0, 1.4), 0);
  });
  it('negative number and number rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
  });
  it('0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
  });
});

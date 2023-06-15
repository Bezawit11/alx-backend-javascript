const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("Test calculateNumber function", () => {
  it("add two integer numbers", () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it("add one integer and one floating number", () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it("add two floating numbers", () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it("add two floating numbers", () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it("add two floating numbers", () => {
    assert.strictEqual(calculateNumber(1.49, 3.49), 4);
  });
});

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("Test calculateNumber function", () => {
  it("add two numbers", () => {
    assert.strictEqual(calculateNumber(2, 2), 4);
  });
});

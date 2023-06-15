const assert = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe("Test calculateNumber function", () => {
  it("add two integer numbers", () => {
    assert.expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it("add one integer and one floating number", () => {
    assert.expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it("add two floating numbers", () => {
    assert.expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  it("add two floating numbers", () => {
    assert.expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it("add two floating numbers", () => {
    assert.expect(calculateNumber('SUM', 1.49, 3.49)).to.equal(4);
  });
  it("subtract two integer numbers", () => {
    assert.expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
  });
  it("subtract two floating numbers", () => {
    assert.expect(calculateNumber('SUBTRACT', 3.49, 1.49)).to.equal(2);
  });
  it("subtract one integer and one floating number", () => {
    assert.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it("divide two integer numbers", () => {
    assert.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it("divide 0 by one integer", () => {
    assert.expect(calculateNumber('DIVIDE', 0, 1.4)).to.equal(0);
  });
  it("divide 0 by one integer", () => {
    assert.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('positive number and number rounded up to 0', () => {
      assert.expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal(Error);
  });
  it('negative number and 0', () => {
      assert.expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal(Error);
  });
});

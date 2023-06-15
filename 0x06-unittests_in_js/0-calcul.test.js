const assert = require('assert');
const calculateNumber = require('./0-calcul');
var calNum = new calculateNumber();
describe("Test utils class", function () {
  it("add two numbers", function () {
    assert.equal(calNum(2, 2), 4);
  });
});

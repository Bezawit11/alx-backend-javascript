const sinon = require("sinon");
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.test');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const a_spy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect( a_spy.called ).to.be.true;
    expect(a_spy.calculateNumber.callCount).to.equal(1);
  });
};

const sinon = require("sinon");
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.test');
var a_spy = sinon.spy(Utils.calculateNumber('SUM', 100, 20));
var b_spy = sinon.spy(sendPaymentRequestToApi(100, 20));
expect( a_spy ).to.equal( b_spy );

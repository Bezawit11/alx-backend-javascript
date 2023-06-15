const  = require('./Utils');
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  return Utils.calculateNumber('SUM', totalAmount, totalShipping);
};

module.exports = sendPaymentRequestToApi;

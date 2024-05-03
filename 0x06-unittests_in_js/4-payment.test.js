const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
        const bigBrother = sinon.spy(Utils)
        const stb = sinon.stub(Utils, 'calculateNumber')

        std.return(10)
        sendPaymentRequestToApi(100, 20);
        expect(std.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
        expect(std.calculateNumber.callCount).to.be.equal(1);
        expect(bigBrother.log.calledWith('SUM', 100, 20)).to.be.true;
        expect(bigBrother.log.callCount).to.be.equal(1);
        std.calculateNumber.restore();
        bigBrother.log.restore();
    })
});
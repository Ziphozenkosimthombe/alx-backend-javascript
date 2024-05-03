const {expect} = require('chai');
const request = require('request');

describe('GET /', () => {
    it('should return 200', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            done();
        });
    });
    it('should return Welcome to the payment system', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});
const {expect} = require('chai');
const request = require('request');


describe('GET /', () => {
    it('should return a 200 status code', (done) => {
        request.get('http://localhost:7865', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it('should return the expected response', (done) => {
        request.get('http://localhost:7865', (err, res, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
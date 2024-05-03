const {expect} = require('chai');
const request = require('request');


describe('GET /', () => {
    it('should return a 200 status code', (done) => {
        request.get('http://localhost:7865', (_err, res, _body) => {
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });
    it('should return the expected response', (done) => {
        request.get('http://localhost:7865', (_err, _res, body) => {
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});
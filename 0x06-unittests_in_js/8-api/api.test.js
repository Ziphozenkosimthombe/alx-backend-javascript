const request = require('request');
const { expect } = require('chai');

<<<<<<< HEAD
describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
=======
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
>>>>>>> 1a60b02e9f04c3a4dc1e1ce8d4cc1e091c7045fb

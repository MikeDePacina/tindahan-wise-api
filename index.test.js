const request = require('supertest');
const app = require('./index.js');


describe('GET /', () => {
  it('should return HTTP 200 "Hello World"', async () => {
    const res = await request(app).get('/');  // simulate GET request
    expect(res.statusCode).toBe(200);        // assert status code is 200 
  });
});
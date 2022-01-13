const request = require('supertest');
const { app } = require('../../dist/src/index.js');

describe('Test the root path', () => {
  test('It should respond to the GET method with JSON', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

describe(`JSON returned should be 'Hello!'`, () => {
  test('It should respond to the GET method', (done) => {
    request(app)
      .get('/')
      .expect({ message: 'Hello!' })
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('Ichigo route should return JSON', () => {
  test('It should respond to the /characters/:character route', (done) => {
    request(app)
      .get('/characters/Ichigo')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('Ichigo route should return Ichigo Kurosaki in title', () => {
  test('Title should be Ichigo', (done) => {
    request(app)
      .get('/characters/Ichigo')
      .expect((res) => {
        expect(res.body.title).toBe('Ichigo Kurosaki');
      })
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

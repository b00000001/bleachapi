const request = require('supertest');
const { app } = require('../../dist/src/index.js');

const names = [
  'Yoruichi',
  'Coyote',
  'Retsu',
  'Ichigo',
  'Ulquiorra',
  'Rukia',
  'Yhwach',
  'Uryu',
  'Karin',
  'Soul_King',
  'Kenpachi',
  'Chad',
  'Kisuke',
  'Orihime',
  'Aizen',
  'Grimmjow',
  'Nnoitra',
  'Szayel',
  'Baraggan',
  'Harribel',
  'Hitsugaya',
  'Nell',
  'Renji',
  'Yamamoto',
  'Unohana'
];

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

describe('Character route should return character name in the title', () => {
  test.each(names)('Title should be character name', () => {
    request(app)
      .get(`/characters/${names}`)
      .expect((res) => {
        expect(res.body.title).toContain(names);
      })
      .end((err, done) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('Character route should return JSON', () => {
  test.each(names)(
    'It should respond to the /characters/:character route',
    () => {
      request(app)
        .get(`/characters/${names}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, done) => {
          if (err) return done(err);
          done();
        });
    }
  );
});

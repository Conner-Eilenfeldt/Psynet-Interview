'use strict';

const Question = require('./models/question.model');
const Answer = require('./models/answer.model');

const request = require('supertest');
const app = require('./index');

/**
 * Tests getting all of the questions from the DB.
 */
describe('/GET Questions', () => {
  it('it should get a list of questions', (done) => {
    request(app)
      .get('/questions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
})

/**
 * Tests saving all of a user's answers in the DB.
 */
describe('/POST Answers', () => {
  it('it should result in array of DB insert results ', (done) => {
    let payload = {
      username: 'Billy',
      answers: {
        1: 'Blue',
        2: 'Dog',
        3: 'B',
        4: 'C'
      }
    };

    request(app)
      .post('/answers')
      .set('Content-type', 'application/json')
      .send(payload)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
})

describe('Terminate server', () => {
  it('', (done) => {
    process.exit(0);
  });
});
'use strict';

const Question = require('./models/question.model');

const app = require('./index');

describe('/GET Questions', () => {
  it('it should a list of questions', (done) => {
    request(app)
      .get('/questions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
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
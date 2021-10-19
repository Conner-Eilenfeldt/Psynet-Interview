const Question = require('./models/question.model');
const Answer = require('./models/answer.model');

module.exports.findAllQuestions = async (req, res) => {
  try {
    const questions = await Question.getAll();

    return res.status(200).send(questions);
  } catch (err) {
    console.error(err);

    const wasNotFound = err.kind === 'not_found';
    const status = wasNotFound ? 404 : 500;
    const message = wasNotFound ? 'Company not found.' : err.message || 'Error whilte retrieving all companies.';

    return res.status(status).send({ message });
  }
}

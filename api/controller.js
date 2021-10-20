const Question = require('./models/question.model');
const Answer = require('./models/answer.model');

/** List all quesions
 * @returns { object } A JSON object that contains all of the questions.
 */
module.exports.findAllQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();

    return res.status(200).send(questions);
    
  } catch (err) {
    console.error(err);

    const wasNotFound = err.kind === 'not_found';
    const status = wasNotFound ? 404 : 500;
    const message = wasNotFound ? 'Questions not found.' : err.message || 'Error while retrieving all questions.';

    return res.status(status).send({ message });
  }
}

/** Save user answer
 * @param { object } newUserAnswer - A JSON object with the properties associated with a user answer.
 * @returns { object } A JSON object of the DB insert result.
 */
 module.exports.saveAnswer = async (req, res) => {
  try {
    const result = await Answer.createUserAnswer(req.body);

    return res.status(200).send(result);

  } catch (err) {
    console.error(err);

    const wasNotSaved = err.kind === 'not_saved';
    const status = wasNotSaved ? 404 : 500;
    const message = wasNotSaved ? 'Answer not found.' : err.message || 'Error while saving answer.';

    return res.status(status).send({ message });
  }
}

/** Answer all questions
 * @param { object } req.body - A JSON object with all a user's answers.
 *        in the format of {
 *                           totalQuestions: '<numberOfQuestions>',
 *                           username: '<username>',
 *                           answers: {
 *                                      <questionId>: '<text>',
 *                                      <questionId>: '<text>',
 *                                      ...
 *                           }
 *                          }
 * @returns { object[] } A JSON objects array of each DB insert result.
 */
 module.exports.answerQuestions = async (req, res) => {
  try {
    var result = [];

    for (const key in req.body.answers) {
      let newUserAnswer = {
        username: req.body.username,
        questionId: key,
        text: req.body.answers[key]
      }

      result[key-1] = await Answer.createUserAnswer(newUserAnswer);
    }

    return res.status(200).send(result);

  } catch (err) {
    console.error(err);

    const wasNotSaved = err.kind === 'not_saved';
    const status = wasNotSaved ? 404 : 500;
    const message = wasNotSaved ? 'Answer not found.' : err.message || 'Error while saving answer.';

    return res.status(status).send({ message });
  }
}

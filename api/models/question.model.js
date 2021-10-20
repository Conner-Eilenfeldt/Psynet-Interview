const { getConnection } = require('./utils/database');

const Question = function (question) {
  this.id = question.id;
  this.text = question.type;
  this.text = question.text;
  this.text = question.OptionA;
  this.text = question.OptionB;
  this.text = question.OptionC;
  this.text = question.OptionD;
}

/** List all quesions
 * @returns { object } A JSON object that contains all of the questions.
 */
Question.findAll = async () => {
  let conn;
  try {
    // establish a connection to MariaDB
    conn = await getConnection();

    // create a new query
    var query = "SELECT * FROM questions";

    // execute the query and set the result to a new variable
    var rows = await conn.query(query);

    // return the results
    return rows;

  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (conn) await conn.end();
  }
}

module.exports = Question;

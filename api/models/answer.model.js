const { getConnection } = require('./utils/database');

const Answer = function (answer) {
  this.username = answer.username;
  this.questionId = answer.questionId;
  this.text = answer.text;
}

/** Save user answer
 * @param { object } newUserAnswer - A JSON object with the properties associated with a user answer.
 * @returns { object } A JSON objcect of the database insert id number.
 */
Answer.createUserAnswer = async (newUserAnswer) => {
  let conn;
  try {
    // establish a connection to MariaDB
    conn = await getConnection();

    // create a new query
    var query = `INSERT INTO user_answers(username, questionId, text) value (?,?,?);`;

    // execute the query and set the result to a new variable
    const result = await conn.query(query, [
      newUserAnswer.username,
      newUserAnswer.questionId,
      newUserAnswer.text
    ]);

    // return the results
    return result;
    
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (conn) await conn.end();
  }
}

module.exports = Answer;

const { getConnection } = require('./utils/database');

const Question = function (question) {
}

/** List all quesions
 * @param
 * @returns 
 */
Question.findAll = async () => {

  let conn;
  try {
    // establish a connection to MariaDB
    conn = await getConnection();

    // create a new query
    var query = ``;

    // execute the query and set the result to a new variable
    var rows = await conn.query(query);

    // return the results
    return rows;

  } catch (err) {
    console.error(err);
    if (conn) await conn.end();
    throw err;
  } finally {
    if (conn) await conn.end();
  }
}

module.exports = Question;


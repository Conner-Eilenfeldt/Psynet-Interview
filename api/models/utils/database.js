const mariadb = require('mariadb');

let pool = null;

// expose the ability to create new connections
module.exports = {
  getConnection: function () {

    if (!pool) {
      pool = mariadb.createPool({
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_DB,
        user: process.env.DATABASE_USER,
        port: process.env.DATABASE_PORT,
        password: process.env.DATABASE_PASSWORD,
        pool: 10,
        connectionLimit: 3
      });
    }

    return new Promise(function (resolve, reject) {
      pool.getConnection().then(function (connection) {
        resolve(connection);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
}
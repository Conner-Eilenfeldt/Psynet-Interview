const express = require("express");
const Controller = require("./controller");

const router = express.Router();

/** List all quesions
 * @returns { object } A JSON object that contains all of the questions.
 */
 router.get("/questions", Controller.findAllQuestions);

 /** Answer all questions
 * @returns { object[] } A JSON objects array of each DB insert result.
  */
 router.post("/answers", Controller.answerQuestions);

module.exports = router;

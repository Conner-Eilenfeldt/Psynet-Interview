const express = require("express");
const Controller = require("./controller");


const router = express.Router();

/** List all quesions
 * @param
 * @returns 
 */
router.get("/question", Controller.findAllQuestions);

/** Answering a question
 * @param
 * @returns 
 */
// router.post("/question", Controller.);

module.exports = router;

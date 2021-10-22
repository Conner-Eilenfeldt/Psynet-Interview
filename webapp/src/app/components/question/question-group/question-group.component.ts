import { Component, OnInit } from '@angular/core';
import { Answer } from '../../../models/answer.model';
import { UserAnswer } from '../../../models/user-answer.model';
import { Question } from '../../../models/question.model';
import { QuestionGroup } from '../../../models/question-group.model';
import { AnswerService } from '../../../services/answer.service';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-question-group',
  templateUrl: './question-group.component.html',
  styleUrls: ['./question-group.component.scss']
})
export class QuestionGroupComponent implements OnInit {
  answers: Answer[] = [];
  questions: QuestionGroup = { };
  username: string = '';
  newUserAnswer: UserAnswer = { };

  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService
  ) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.findAll().subscribe(questions => {
      this.questions = questions;
      console.log(this.questions)
    })
  }
  
  getUsername(username: string) {
    this.username = username;
    console.log(this.username)
  }

  getAnswer(answer: Answer) {
    this.answers.push(answer);
  }

  saveAnswers() {
    this.newUserAnswer.username = this.username;
    this.newUserAnswer.answers = this.answers;
    this.answerService.createUserAnswer(this.newUserAnswer);
  }
}

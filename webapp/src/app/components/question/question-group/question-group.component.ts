import { Component, OnInit } from '@angular/core';
import { Answer } from '../../../models/answer.model';
import { UserAnswer } from '../../../models/user-answer.model';
import { Question } from '../../../models/question.model';
import { AnswerService } from '../../../services/answer.service';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-question-group',
  templateUrl: './question-group.component.html',
  styleUrls: ['./question-group.component.scss']
})
export class QuestionGroupComponent implements OnInit {
  questions: Question[] = [];
  newUserAnswer: UserAnswer = { };
  answers: Answer[] = [];
  username: string = '';

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
    })
  }

  getUsername(username: string) {
    this.username = username;
  }

  getAnswer(answer: Answer) {
    let update = false;

    for (let current of this.answers) {
      if (answer.questionId == current.questionId) {
        let index = this.answers.indexOf(current);
        this.answers[index] = answer;
        update = true;
      }
    }

    if (!update)
      this.answers.push(answer);
  }

  saveAnswers() {
    this.newUserAnswer.username = this.username;
    this.newUserAnswer.answers = this.answers;
    this.answerService.createUserAnswer(this.newUserAnswer).subscribe();
  }
}

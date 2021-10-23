import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from '../../../models/answer.model';
import { Question } from '../../../models/question.model';

@Component({
  selector: 'app-question-multiple-choice',
  templateUrl: './question-multiple-choice.component.html',
  styleUrls: ['./question-multiple-choice.component.scss']
})
export class QuestionMultipleChoiceComponent implements OnInit {

  @Input() index: number = 0;
  @Input() question: Question = { };
  @Output() event = new EventEmitter<Answer>();
  answer: Answer = { };

  constructor(

  ) { }

  ngOnInit(): void {

  }

  answerQuestion(text: string) {
    this.answer.questionId = this.question.id;
    this.answer.text = text;
    this.event.emit(this.answer);
  }
}

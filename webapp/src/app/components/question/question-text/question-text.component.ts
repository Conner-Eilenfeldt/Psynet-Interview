import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from '../../../models/answer.model';
import { Question } from '../../../models/question.model';

@Component({
  selector: 'app-question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.scss']
})
export class QuestionTextComponent implements OnInit {
  @Input() index: number = 0;
  @Input() question: Question = { };
  @Output() event = new EventEmitter<Answer>();
  answer: Answer = { };

  constructor(

  ) { }

  ngOnInit(): void {

  }

  answerQuestion() {
    this.event.emit(this.answer);
  }
}

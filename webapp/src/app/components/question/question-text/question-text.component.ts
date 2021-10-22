import { Component, OnInit, Input, Output } from '@angular/core';
import { Answer } from '../../../models/answer.model';
import { UserAnswer } from '../../../models/user-answer.model';
import { Question } from '../../../models/question.model';
import { QuestionGroup } from '../../../models/question-group.model';
import { AnswerService } from '../../../services/answer.service';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.scss']
})
export class QuestionTextComponent implements OnInit {
  @Input() question: Question = { };
  @Output() answer: Answer = { };

  constructor(

  ) { }

  ngOnInit(): void {

  }

  getAnswer(id: number, text: string) {
    this.answer.questionId = id;
    this.answer.text = text;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question.model';
import { QuestionGroup } from '../models/question-group.model';

const BACKEND_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http
      .get<QuestionGroup>(BACKEND_URL + '/questions');
  }
}

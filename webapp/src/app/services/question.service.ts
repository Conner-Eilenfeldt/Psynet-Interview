import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question.model';

const BACKEND_URL = ''

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http
      .get<Question[]>(BACKEND_URL + '/question');
  }
}

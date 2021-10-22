import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAnswer } from '../models/user-answer.model';

const BACKEND_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  createUserAnswer(newUserAnswer: UserAnswer) {
    return this.http
      .post(BACKEND_URL + '/answers', newUserAnswer);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // ex2
  getPost(): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/posts/1');
  }

  // ex3
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/comments');
  }
}

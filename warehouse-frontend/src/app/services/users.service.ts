import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, publishLast, refCount, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersApi: string = environment.usersApi;

  private usersSubject = new BehaviorSubject<User[]>([]);

  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.initializeUsers()
  }

  initializeUsers() {
    this.http.get<User[]>(this.usersApi).subscribe(users => this.usersSubject.next(users))
  }

}



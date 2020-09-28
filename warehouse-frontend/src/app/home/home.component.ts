import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users$:Observable<User[]>
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users$=this.usersService.users$
  }
}

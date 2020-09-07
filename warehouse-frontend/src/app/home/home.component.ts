import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users
  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((response) => {
      this.users = Object.values(response)
    }
    )
  }
}

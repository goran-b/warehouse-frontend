import { Component, OnInit } from '@angular/core';
import { RecentPurchasesService } from '../services/recent-purchases.service';
import { ActivatedRoute } from '@angular/router';
import { RecentPurchases } from '../models/recentPurchases.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-recent-purchases',
  templateUrl: './user-recent-purchases.component.html',
  styleUrls: ['./user-recent-purchases.component.scss']
})
export class UserRecentPurchasesComponent implements OnInit{
 
  public purchases$:Observable<RecentPurchases[]>
  public user$: Observable<User>;

  public msg: string

  constructor(private route: ActivatedRoute) {
   
  }

  ngOnInit(){
    this.user$=this.route.data.pipe(map(data => data['userPurchases'][0]),tap(console.log));
    this.purchases$=this.route.data.pipe(map(data => data['userPurchases'][1]));
  }
}

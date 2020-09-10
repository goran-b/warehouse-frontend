import { Component, OnInit } from '@angular/core';
import { RecentPurchasesService } from '../services/recent-purchases.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-recent-purchases',
  templateUrl: './user-recent-purchases.component.html',
  styleUrls: ['./user-recent-purchases.component.scss']
})
export class UserRecentPurchasesComponent {
  private sub: any;
  public purchases
  public username: string
  public msg: string

  constructor(private service: RecentPurchasesService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.username = params['id'];
      this.service.getRecentPurchases(this.username).subscribe(
        (response) => {
          this.purchases = Object.values(response)
        }, err => {
          console.log('HTTP Error', err)
          this.msg=err.error.detail
        }
      )
    })
  }
}

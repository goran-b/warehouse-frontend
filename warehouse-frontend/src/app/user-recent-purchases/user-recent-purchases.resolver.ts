import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { RecentPurchasesService } from '../services/recent-purchases.service';
import { RecentPurchases } from '../models/recentPurchases.model';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { User } from '../models/user.model';


@Injectable({
    providedIn: 'root'
  })
export class UserRecentPurchaseResolver implements Resolve<[User, RecentPurchases[]]> {

    constructor(private recentPurchasesService: RecentPurchasesService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<[User, RecentPurchases[]]> {

        return this.recentPurchasesService.getRecentPurchases(route.params['id'])
        .pipe(
            map(purchases =>{return <any>[route.params['id'], purchases]})
        )
       

    }
}


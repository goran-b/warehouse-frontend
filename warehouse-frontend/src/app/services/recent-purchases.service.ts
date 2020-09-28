import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { RecentPurchases } from '../models/recentPurchases.model';

@Injectable({
  providedIn: 'root'
})
export class RecentPurchasesService {

  private recentPurchasesApi: string = environment.recentPurchasesApi;
 
  private subject = new BehaviorSubject<RecentPurchases[]>([]);

  constructor(private http: HttpClient) { }


  getRecentPurchases(username:string): Observable<RecentPurchases[]> {
    return this.http.get<RecentPurchases[]>(`${this.recentPurchasesApi}${username}`).pipe(
      map((purchases) => purchases))
  }
}

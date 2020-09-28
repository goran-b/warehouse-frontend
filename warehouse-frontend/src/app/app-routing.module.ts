import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRecentPurchasesComponent } from './user-recent-purchases/user-recent-purchases.component';
import { UserRecentPurchaseResolver } from './user-recent-purchases/user-recent-purchases.resolver';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'userpurchases/:id',
    component: UserRecentPurchasesComponent, 
    resolve: {
      userPurchases: UserRecentPurchaseResolver
    }
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

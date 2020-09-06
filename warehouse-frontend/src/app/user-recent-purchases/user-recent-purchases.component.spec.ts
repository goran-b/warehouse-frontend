import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecentPurchasesComponent } from './user-recent-purchases.component';

describe('UserRecentPurchasesComponent', () => {
  let component: UserRecentPurchasesComponent;
  let fixture: ComponentFixture<UserRecentPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecentPurchasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecentPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RecentPurchasesService } from './recent-purchases.service';

describe('RecentPurchasesService', () => {
  let service: RecentPurchasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentPurchasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

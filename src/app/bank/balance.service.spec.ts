import { TestBed } from '@angular/core/testing';

import { BalanceService } from './balance.service';
import { Account} from './../account';

describe('BalanceService', () => {
  let service: BalanceService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(BalanceService);
  });

  it('should be created', () => {
    const service: BalanceService = TestBed.get(BalanceService);
    expect(service).toBeTruthy();

  });

  it ('should have function that returns the balance', ()=> {
    service.getBalance != undefined;
    expect(service.getBalance).toBeDefined();
  })

   it('should return correct balance', () => {
     let account: Account = {
       customerName: 'jon',
       balance: 100
     };
     let actual = service.getBalance(account)
     let expected = 100
     expect(actual).toBe(expected);
   });

});

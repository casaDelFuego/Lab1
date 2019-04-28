import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';

describe('AccountService', () => {
  let service: AccountService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(AccountService);
  });

  it('should be created', () => {
    const service: AccountService = TestBed.get(AccountService);
    expect(service).toBeTruthy();
  });


  it ('should have 0 or positive balance', () => {
    let balance = 100;
    let actual = service.isBalancePositive(balance);
    expect(actual).toBe(true);
  });

   it ('should have a name of a customer', ()=> {
     let name = "random dude";
     let actual = service.isNameValid(name);
     expect(actual).toBe(true);
   });

   

});

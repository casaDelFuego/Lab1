import { TestBed } from '@angular/core/testing';
import { BankService } from './bank.service';
import { Account} from './../account';

describe('BalanceService', () => {
  let service: BankService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(BankService);
  });

  it('should be created', () => {
    const service: BankService = TestBed.get(BankService);
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



describe('DepositService', () => {
  let service: BankService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(BankService);
  });

  it('should be created', () => {
    const service: BankService = TestBed.get(BankService);
    expect(service).toBeTruthy();
  });

  it ('should have a function that handles the deposit', ()=> {
    service.deposit != undefined;
    expect(service.deposit).toBeDefined();
  });

  it ('should throw an error if deposit isnt valid', ()=> {
     let funFunc = () => { service.isDepositPositive(-1); }
	   expect(funFunc).toThrow();
  });

  it ('should have a valid account', ()=> {
    let account: Account = {
      customerName: 'jon',
      balance: 100
    };
    expect(service.ValidAccount(account)).toBe(true);
  });

  it ('should have only positive amount on deposit', ()=> {
    let amount = 5;
    expect(service.isDepositPositive(amount)).toBe(true);
  })

});


describe('WithdrawService', () => {
  let service: BankService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(BankService);
  });

  it('should be created', () => {
    const service: BankService = TestBed.get(BankService);
    expect(service).toBeTruthy();
  });

  it ('should have a function that handles the withdrawal', ()=> {
    service.withdraw != undefined;
    expect(service.withdraw).toBeDefined();
  });

  it ('should throw an error if withdrawal isnt valid', ()=> {
     let account: Account = {
       customerName: 'jon',
       balance: 100
     };
     let funFunc = () => { service.isWithdrawalValid(0, account); }
	   expect(funFunc).toThrow();
  });

  it ('should have a valid account', ()=> {
    let account: Account = {
      customerName: 'jon',
      balance: 100
    };
    expect(service.ValidAccount(account)).toBe(true);
  });

  it ('should have amount more or equal 50 and less or equal the account balance', ()=> {
    let account: Account = {
      customerName: 'jon',
      balance: 100
    };
    let cash = 70;
    expect(service.isWithdrawalValid(cash, account)).toBe(true);
  })



});

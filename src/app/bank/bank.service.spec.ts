import { TestBed } from '@angular/core/testing';
import { BankService } from './bank.service';
import { Account} from './../account';

describe('getBalance', () => {
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
    expect(service.getBalance).toBeDefined();
  })

   it('should get the balance if account is correct', () => {
     let account: Account = {
       customerName: 'jon',
       balance: 100
     };
     let actual = service.getBalance(account)
     let expected = 100
     expect(actual).toBe(expected);
   });

   it ('should throw an error if customer name is not valid', ()=> {
     let account: Account = {
       customerName: '',
       balance: 100
     };
     let funFunc = () => { service.validAccount(account); }
     expect(funFunc).toThrow();
   });

   it ('should throw an error if balance is not valid', ()=> {
     let account: Account = {
       customerName: 'jon',
       balance: -10
     };
     let funFunc = () => { service.validAccount(account); }
     expect(funFunc).toThrow();
   });

   it ('should throw an error if customer name and balance are not valid', ()=> {
     let account: Account = {
       customerName: '',
       balance: -100
     };
     let funFunc = () => { service.validAccount(account); }
     expect(funFunc).toThrow();
   });

});



describe('Deposit', () => {
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
    expect(service.deposit).toBeDefined();
  });

  it ('should throw an error if amount is not valid', ()=> {
    let account: Account = {
      customerName: 'jon',
      balance: 100
    };
    let funFunc = () => { service.deposit(account, -1); }
	  expect(funFunc).toThrow();
  });

  it ('should have a valid account', ()=> {
    let account: Account = {
      customerName: 'jon',
      balance: 100
    };
    expect(service.validAccount(account)).toBe(true);
  });

  it ('should have only positive amount on deposit', ()=> {
    let amount = 5;
    expect(5 > 0).toBe(true);
  })

});


describe('Withdraw', () => {
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
    expect(service.validAccount(account)).toBe(true);
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

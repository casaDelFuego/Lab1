import { TestBed } from '@angular/core/testing';
import { BankService } from './bank.service';
import { Account} from './../account';

describe('validAccount', () => {
  let service: BankService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(BankService);
  });

  it('should have a function that checks if account is valid', ()=> {
    expect(service.validAccount).toBeDefined();
  });

  it('should return true if customer name and balance are valid', () => {
    let account: Account = {
      customerName: 'jon',
      balance: 100
    };
    let actual = service.validAccount(account);
    expect(actual).toBe(true);

  });

  it('should return false if customer name is not a string', ()=> {
    let account: Account = {
      customerName: null,
      balance: 100
    };
    let actual = service.validAccount(account);
    expect(actual).toBe(false);
  });

  it('should return false if balance is negative', ()=> {
    let account: Account = {
      customerName: 'jon',
      balance: -200
    };
    let actual = service.validAccount(account);
    expect(actual).toBe(false);
  });

})

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
     let funFunc = () => { service.getBalance(account); }
     spyOn(service, 'validAccount');

     expect(funFunc).toThrow();
     expect(service.validAccount).toHaveBeenCalled();
     // spionera på validAccount för att kontrollera att den har anropats
   });

   it ('should throw an error if balance is not valid', ()=> {
     let account: Account = {
       customerName: 'jon',
       balance: -10
     };
     let funFunc = () => { service.getBalance(account); }
     spyOn(service, 'validAccount');

     expect(funFunc).toThrow();
     expect(service.validAccount).toHaveBeenCalled();
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

  it ('should throw error if negative amount', ()=> {
    let account: Account = {
      customerName: 'jon',
      balance: 100
    };
    let funFunc = () => { service.deposit(account, -100); }
    expect(funFunc).toThrow();
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

  it ('should throw an error if trying to withdraw 0', ()=> {
     let account: Account = {
       customerName: 'jon',
       balance: 100
     };
     let funFunc = () => { service.withdraw(account, 0); }
	   expect(funFunc).toThrow();
  });

  it ('should have a valid account', ()=> {
    let account: Account = {
      customerName: 'jon',
      balance: 100
    };
    expect(service.validAccount(account)).toBe(true);
  });

  it ('should have correct balance after withdraw', ()=> {
    const initialBalance = 100;
    let account: Account = {
      customerName: 'jon',
      balance: initialBalance
    };
    let cash = 70;
    service.withdraw(account, cash)
    let currentBalance = service.getBalance(account);
    expect(currentBalance).toBe(initialBalance - cash);
  })



});

import { Injectable } from '@angular/core';
import { Account} from './../account';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  getBalance(account: Account): number {
    if (this.ValidAccount(account)===true){
      return account.balance;
    } else {
      throw new Error ('Cannot get the balance, check your account');
    }
  };

  isBalancePositive(x: number): boolean {
    if (x >= 0) {
      return true;
    } else {
      return false;
    }
  };

  isNameValid(x: any): boolean {
    if( typeof x !== 'string' ) return false;
    else if(x==='') return false;
    return true;

  };

  ValidAccount(account: Account): boolean {
    if((this.isBalancePositive && this.isNameValid)){
      return true;
    } else {
      throw new Error ('Account isnt valid')
    }
  };

  deposit (depositAmount: number, account: Account): any {
    account.balance = account.balance + depositAmount;
    return account.balance;
  };

  isDepositPositive(amount: number): boolean {
    if (amount > 0) {
      return true;
    } else {
      throw new Error ('Deposit isnt valid')

    }
  };

  withdraw (withdrawalAmount: number, account: Account): any {
    account.balance = account.balance - withdrawalAmount;
    return account.balance;
  };

  isWithdrawalValid(cash: number, account: Account): boolean {
    if (cash>50 && cash <= account.balance) {
      return true;
    } else {
      throw new Error ('Withdrawal amount isnt valid');
    }
  };



  constructor() { }
}

import { Injectable } from '@angular/core';
import { Account} from './../account';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  getBalance(account: Account): number {
    if (this.validAccount(account)===true){
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

  validAccount(account: Account): boolean {
    if((this.isBalancePositive(account.balance) && this.isNameValid(account.customerName))){
      return true;
    } else {
      throw new Error ('Account isnt valid')
    }
  };

  deposit (account: Account,depositAmount: number): void {
    this.isDepositPositive(depositAmount);
    account.balance = account.balance + depositAmount;
  };

  isDepositPositive(amount: number): boolean {
    if (amount > 0) {
      return true;
    } else {
      throw new Error ('Deposit isnt valid')

    }
  };

  withdraw (account: Account, withdrawalAmount: number): void {
    this.isWithdrawalValid(withdrawalAmount, account);
    account.balance = account.balance - withdrawalAmount;

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

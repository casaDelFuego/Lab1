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
      //throw new Error ('Account is not valid');
      return false;
    }
  };

  deposit (account: Account,depositAmount: number): void {
    if (depositAmount>0){
    account.balance = account.balance + depositAmount;
  } else {
    throw new Error ('Deposit is not valid')
  }
  };


  withdraw (account: Account, withdrawalAmount: number): void {
    if (withdrawalAmount>50 && withdrawalAmount <= account.balance){
      account.balance = account.balance - withdrawalAmount;
    } else {
      throw new Error ('Withdrawal amount is not valid');
    }

  };


  constructor() { }
}

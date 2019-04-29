import { Injectable } from '@angular/core';
import { Account} from './../account';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

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

  ValidAccount(Account): boolean {
    if((this.isBalancePositive && this.isNameValid)){
      return true;
    } else {
      throw new Error ('Account isnt valid')
    }
  };


  constructor() { }
}

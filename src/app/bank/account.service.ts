import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  isBalancePositive(x: any): boolean {
    if (x >= 0) {
      return true;
    } else {
      return false;
    }
  }

  isNameValid(x: any): boolean {
    if( typeof x !== 'string' ) return false;
    else if(x==='') return false;
    return true;

  }


  constructor() { }
}

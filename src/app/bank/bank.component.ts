import { Component, OnInit, Input} from '@angular/core';
import { BankService } from './bank.service';
import { Account } from './../account';


@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  title = 'Bank';
  @Input() account: Account;


  constructor(private service: BankService) { }

  ngOnInit() {
  }

  getBalance(): any {
    return this.service.getBalance(this.account);
  };

  deposit(a: number): number {
    return this.service.deposit(a, this.account);
  };

  withdraw(a: number): any {
    return this.service.withdraw(a, this.account);
  }


}

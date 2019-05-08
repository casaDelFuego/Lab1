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
  @Input() account: Account = {
    customerName: 'Per Gustavsson',
    balance: 1000
  };


  constructor(private service: BankService) { }

  ngOnInit() {
  }

  getBalance(): any {
    return this.service.getBalance(this.account);
  };

  deposit(account: Account, a: number): void {
    this.service.deposit(this.account, a);
  };

  withdraw(account: Account, a: number): void {
    this.service.withdraw(this.account, a);
  }


}

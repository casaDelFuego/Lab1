import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankComponent } from './bank.component';
import { AccountService } from './account.service';

describe('BankComponent', () => {
  let component: BankComponent;
  let service: AccountService;
  let fixture: ComponentFixture<BankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(AccountService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have 0 or positive balance', () => {
    let balance = 100;
    let actual = service.isBalancePositive(balance);
    expect(actual).toBe(true);
  });

   it ('should have a name of a customer', ()=> {
     let name = "random dude";
     let actual = service.isNameValid(name);
     expect(actual).toBe(true);
   });




});

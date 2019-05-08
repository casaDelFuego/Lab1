import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BankComponent } from './bank.component';
import { BankService } from './bank.service';
import { Account} from './../account';

describe('BankComponent', () => {
  let component: BankComponent;
  let fixture: ComponentFixture<BankComponent>;
  let domElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankComponent ],
      imports: [FormsModule],
      providers: [BankService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankComponent);
    component = fixture.componentInstance;
    domElement = fixture.nativeElement;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Bank'`, () => {
		const fixture = TestBed.createComponent(BankComponent);
		const bank = fixture.debugElement.componentInstance;
		expect(bank.title).toEqual('Bank');
	});

  it('should be able to show an account on the page', () => {
    let account: Account = {
      customerName: 'jon',
      balance: 100
    };
    let accountInfo = domElement.querySelector('.accountInfo')
    expect(accountInfo).toBeTruthy();
  });

  it('should use the BankService to show the balance', () => {

    const account: Account = {
      customerName: 'jon',
      balance: 100
    };

    const mockService = jasmine.createSpyObj(['getBalance']);
    mockService.getBalance(account.balance);
    const component: BankComponent = new BankComponent(mockService);

    component.getBalance();

    expect(mockService.getBalance).toHaveBeenCalled();
  });

  it('should use the BankService to make a deposit', () => {

    const account: Account = {
      customerName: 'jon',
      balance: 100
    };

    const mockService = jasmine.createSpyObj(['deposit']);
    mockService.deposit(account.balance);
    const component: BankComponent = new BankComponent(mockService);

    component.deposit(account, 10);

    expect(mockService.deposit).toHaveBeenCalled();

  });

  it('should use the BankService to make a withdrawal', () => {

    const account: Account = {
      customerName: 'jon',
      balance: 100
    };

    const mockService = jasmine.createSpyObj(['withdraw']);
    mockService.withdraw(account.balance);
    const component: BankComponent = new BankComponent(mockService);

    component.withdraw(account, 30);

    expect(mockService.withdraw).toHaveBeenCalled();

  });

  it('should show the balance in the DOM element that has a CSS class accountBalance', () => {
    let showBalance = domElement.querySelector('.accountBalance').innerText;
    expect(showBalance).toEqual('1000');
  });
 
  it('should have an input field where user can write an amount', () => {
    let input = domElement.querySelector('input');
    expect(input).toBeTruthy();
  });

  it('should have a button that runs a function that adds the amount of deposit', () => {
    let button = domElement.querySelector('.addDeposit');
    spyOn(component, 'deposit');
    button.click();

    expect(component.deposit).toHaveBeenCalled();
  });

  it('should have a button that runs a function that take the amount from account', () => {
    let button = domElement.querySelector('.withdraw');
    spyOn(component, 'withdraw');
    button.click();

    expect(component.withdraw).toHaveBeenCalled();
  });

});

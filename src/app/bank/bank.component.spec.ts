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

  // it('should be able to show an account on the page', () => {
  //   let account: Account = {
  //     customerName: 'jon',
  //     balance: 100
  //   };
  //   let accountInfo = element.querySelector
  //   expect(account).toBeTruthy();
  // });


});

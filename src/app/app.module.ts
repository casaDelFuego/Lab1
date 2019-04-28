import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './bank/bank.component';

@NgModule({
  declarations: [
    AppComponent,
    BankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*shared module
, one customer can have several accounts, one account has only one
saldo.
balance return number, 0 or bigger
konto is an object, everything else are functions so we need to test only them
you cannot transfer from one account to that exact account
first the test, get it red, then write the actual function

bank component should contain 4 dom element, show account, textfeild, 2 buttons

*/

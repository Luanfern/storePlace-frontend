import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountInterface } from 'src/app/shared/Interfaces/account-interface';
import { MyAccountService } from 'src/app/shared/services/my-account/my-account.service';

@Component({
  selector: 'app-my-currency',
  templateUrl: './my-currency.component.html',
  styleUrls: ['./my-currency.component.scss']
})
export class MyCurrencyComponent implements OnInit {

  account: AccountInterface = {
    name: ''
  }

  subscriptionAccount!: Subscription;

  constructor(
    private myAccount: MyAccountService,
  ) { }

  ngOnInit(): void {
    this.account = this.myAccount.cA
    this.subscriptionAccount = this.myAccount.currentAccount.subscribe(
      (acc) => {
        console.log(acc)
        this.account = acc;
      }
    );
  }

  ngOnDestroy() {
    this.subscriptionAccount.unsubscribe();
  }

}

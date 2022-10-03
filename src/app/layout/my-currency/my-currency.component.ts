import { Component, OnInit } from '@angular/core';
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


  constructor(
    private myAccount: MyAccountService,
  ) { }

  ngOnInit(): void {
    this.account = this.myAccount.currentAccount
  }

}

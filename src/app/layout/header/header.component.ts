import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountInterface } from 'src/app/shared/Interfaces/account-interface';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';
import { MyAccountService } from 'src/app/shared/services/my-account/my-account.service';import { ShoppingKartService } from 'src/app/shared/services/shopping-kart/shopping-kart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true;

  isLoggedHeader: boolean = false;
  account: AccountInterface = {name: ''}
  shoppingKart: ProductInterface[] = []
  subscriptionAccount!: Subscription;
  subscriptionLogged!: Subscription;

  constructor(
    public myAccount: MyAccountService,
    private myShoppingKart: ShoppingKartService
    ) { }

  ngOnInit(): void {
    this.subscriptionAccount = this.myAccount.currentAccount.subscribe((acc) => this.account = acc);
    console.log(this.account)
    this.subscriptionLogged = this.myAccount.islogged.subscribe((logged) => this.isLoggedHeader = logged);
    console.log(this.isLoggedHeader)
    this.shoppingKart = this.myShoppingKart.myShoppingKart
  }
}

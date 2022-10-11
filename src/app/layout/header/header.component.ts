import { Component, OnInit } from '@angular/core';
import { AccountInterface } from 'src/app/shared/Interfaces/account-interface';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';
import { MyAccountService } from 'src/app/shared/services/my-account/my-account.service';import { ShoppingKartService } from 'src/app/shared/services/shopping-kart/shopping-kart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedHeader: boolean = false;
  
  public isMenuCollapsed = true;

  account: AccountInterface = {
    name: ''
  }

  shoppingKart: ProductInterface[] = []

  constructor(
    private myAccount: MyAccountService,
    private myShoppingKart: ShoppingKartService
    ) { }

  ngOnInit(): void {
    this.account = this.myAccount.account
    this.shoppingKart = this.myShoppingKart.myShoppingKart

    this.isLoggedHeader = this.myAccount.logged
  }

}

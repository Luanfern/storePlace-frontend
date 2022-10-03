import { Component, OnInit } from '@angular/core';
import { MyAccountService } from 'src/app/shared/services/my-account/my-account.service';
import { ShoppingKartService } from 'src/app/shared/services/shopping-kart/shopping-kart.service';

@Component({
  selector: 'app-shopping-kart',
  templateUrl: './shopping-kart.component.html',
  styleUrls: ['./shopping-kart.component.scss']
})
export class ShoppingKartComponent implements OnInit {

  constructor(
    private myAccount: MyAccountService,
    private myShoppingKart: ShoppingKartService
  ) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';
import { MyAccountService } from 'src/app/shared/services/my-account/my-account.service';
import { ShoppingKartService } from 'src/app/shared/services/shopping-kart/shopping-kart.service';

@Component({
  selector: 'app-shopping-kart',
  templateUrl: './shopping-kart.component.html',
  styleUrls: ['./shopping-kart.component.scss']
})
export class ShoppingKartComponent implements OnInit {

  kartProducts: ProductInterface[] = []
  keepBuying: string = ''
  currentCurrency: number = 0

  subscriptionAccount!: Subscription;

  constructor(
    private myAccount: MyAccountService,
    private myShoppingKart: ShoppingKartService
  ) { }

  ngOnInit(): void {
    this.currentCurrency = this.myAccount.cA.currency!
    this.subscriptionAccount = this.myAccount.currentAccount.subscribe(
      (acc) => {
        this.currentCurrency = acc.currency!;
      }
    );
    console.log(this.currentCurrency)
    this.kartProducts = this.myShoppingKart.getmyShoppingKart()
    console.log(this.kartProducts)
  }

  ngOnDestroy() {
    this.subscriptionAccount.unsubscribe();
  }

  kbgetter(): string {
    if (this.currentCurrency == undefined || this.currentCurrency <= 0.0) {
      return 'Indisponível! Verifique seu Saldo.'
    } else {
      return ''
    }
  }

}

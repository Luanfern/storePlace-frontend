import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';
import { ShoppingKartService } from 'src/app/shared/services/shopping-kart/shopping-kart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() forRemove: boolean = false;

  @Input() product: ProductInterface = {
    name: '',
    code: 0,
    price: 0,
    description: '',
    category: '',
    image: ''
  }

  constructor(
    private myShoppingKart: ShoppingKartService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  openProduct(productCode: number){
    this.route.navigate(['product', productCode])
  }

  clickActionButton(p: ProductInterface): void {
    if (!this.forRemove) {
      return this.myShoppingKart.addProductToKart(p) 
    } else {
      return this.myShoppingKart.removeProductToKart(p)
    }
  }
}

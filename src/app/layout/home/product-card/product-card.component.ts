import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';
import { ShoppingKartService } from 'src/app/shared/services/shopping-kart/shopping-kart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductInterface = {
    name: '',
    code: 0,
    price: 0,
    description: '',
    category: '',
    image: ''
  }

  constructor(
    private myShoppingKart: ShoppingKartService
  ) { }

  ngOnInit(): void {
  }

  addToShoppingKart(p: ProductInterface){
    this.myShoppingKart.addProductToKart(p)
  }

}

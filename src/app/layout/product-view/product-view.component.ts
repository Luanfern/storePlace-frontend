import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  
  forRemove: boolean = false

  product: ProductInterface = {
    name: '',
    code: 0,
    price: 0,
    description: '',
    category: '',
    image: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  clickActionButton(p: string/* ProductInterface */): void {
    if (!this.forRemove) {
      //return this.myShoppingKart.addProductToKart(p) 
    } else {
      //return this.myShoppingKart.removeProductToKart(p)
    }
  }

}

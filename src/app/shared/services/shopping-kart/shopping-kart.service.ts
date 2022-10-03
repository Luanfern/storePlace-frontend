import { Injectable } from '@angular/core';
import { ProductInterface } from '../../Interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingKartService {

  myShoppingKart: ProductInterface[] = []

  constructor() { }

  addProductToKart(p: ProductInterface){
    this.myShoppingKart.push(p)
  }
}

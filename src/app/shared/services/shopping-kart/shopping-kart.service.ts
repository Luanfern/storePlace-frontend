import { Injectable } from '@angular/core';
import { ProductInterface } from '../../Interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingKartService {

  myShoppingKart: ProductInterface[] = []

  constructor() { }

  getmyShoppingKart(): ProductInterface[] {
    return this.myShoppingKart
  }

  addProductToKart(p: ProductInterface){
    this.myShoppingKart.push(p)
  }

  removeProductToKart(p: ProductInterface){
    const index = this.myShoppingKart.indexOf(p)
    this.myShoppingKart.splice(index, 1)
    console.log(index)
  }
}

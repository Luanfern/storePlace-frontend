import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductInterface } from '../../Interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingKartService {

  myShoppingKart: ProductInterface[] = []

  constructor(private http: HttpClient) { }

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

  getKartList():Observable<ProductInterface[]> {
    const url = `${environment.URL_API}shoppingKart/products`
    console.log(url)
    return this.http.post<ProductInterface[]>(url,
    {headers:{
      'Content-Type': 'application/json',
    }}
    )
  }
}

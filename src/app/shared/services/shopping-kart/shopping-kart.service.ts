import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, take } from 'rxjs';
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

  addProductToKart(p: ProductInterface) {
    try {
      this.addFromKart(p.id)
      .pipe(
        take(1),
        map((r: any) => {
          if (r.status == 'ok') {
            this.myShoppingKart.push(p)
          } else {
            
          }
        })
      ).subscribe()
    } catch (error) {
      
    }
  }

  removeProductToKart(p: ProductInterface) {
    try {
      this.removeFromKart(p.id)
      .pipe(
        take(1),
        map((r: any) => {
          if (r.status == 'ok') {
            const index = this.myShoppingKart.indexOf(p)
            this.myShoppingKart.splice(index, 1)
          } else {
            
          }
        })
      ).subscribe()
    } catch (error) {

    }
  }

  removeFromKart(id: number): Observable<any> {
    const url = `${environment.URL_API}shoppingKart/removeProduct`
    const remove = this.http.post<ProductInterface[]>(url,
      { "productId": id },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
    return remove
  }

  addFromKart(id: number): Observable<any> {
    const url = `${environment.URL_API}shoppingKart/addProduct`
    const add = this.http.post<ProductInterface[]>(url,
      { "productId": id },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
    return add
  }

  getKartList(): Observable<ProductInterface[]> {
    const url = `${environment.URL_API}shoppingKart/products`
    console.log(url)
    return this.http.post<ProductInterface[]>(url,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  }

  buy(): Observable<any> {
    const url = `${environment.URL_API}product/buy`
    return this.http.post<any>(url,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  }
}

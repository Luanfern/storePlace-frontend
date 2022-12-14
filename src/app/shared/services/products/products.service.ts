import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductInterface } from '../../Interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  paginationControll: number = 0

  constructor(
    private http: HttpClient
    ) { }

    getProducts(search: string = ''):Observable<ProductInterface[]> {
      console.log(this.paginationControll)
      const url = `${environment.URL_API}products/${search}`
      console.log(url)
      return this.http.post<ProductInterface[]>(url,
        {
          "pagination": [
            0, 12
          ]
        },
      {headers:{
        'Content-Type': 'application/json',
      }}
      )
    }

    getProductsByCat(search: string = ''):Observable<ProductInterface[]> {
      console.log(this.paginationControll)
      const url = `${environment.URL_API}products/cat/${search}`
      console.log(url)
      return this.http.post<ProductInterface[]>(url,
        {
          "pagination": [
            0, 12
          ]
        },
      {headers:{
        'Content-Type': 'application/json',
      }}
      )
    }
}

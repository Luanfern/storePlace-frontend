import { Component, OnInit } from '@angular/core';
import { catchError, map, Subscription } from 'rxjs';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  existProducts: boolean | undefined
  products: ProductInterface[] = []
  productsSubscriptions: Subscription[] = []
  search: string = ''

  constructor(
    private productService: ProductsService
    ) { }

  ngOnInit(): void {
      this.getProductsAsync(this.search)
  }

  getProductsAsync(search: string){
    this.productsSubscriptions[1] = this.productService.getProducts(search).
    pipe(
      catchError(async (v) => {console.log(v)}),
      map((listProducts: any) => {
        this.products = listProducts
      })
    )
    .subscribe()
  }

  getProductsByCatAsync(search: string){
    this.productsSubscriptions[2] = this.productService.getProductsByCat(search).
    pipe(
      catchError(async (v) => {console.log(v)}),
      map((listProducts: any) => {
        this.products = listProducts
      })
    )
    .subscribe()
  }

  setSearch(search: {s: string, byCat: boolean}){
    this.search = search.s
    if (search.byCat) {
      this.getProductsByCatAsync(search.s)
    } else {
      this.getProductsAsync(search.s) 
    }
  }

  loadMore(){
    this.getProductsAsync(this.search)
  }

  ngOnDestroy(): void {
    this.productsSubscriptions.forEach(s => s.unsubscribe())
  }

}

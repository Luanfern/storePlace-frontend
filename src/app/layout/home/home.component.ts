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
  countProducts: number = 0
  productsSubscriptions: Subscription[] = []
  search: string = ''
  showProducts: boolean = true
  searchByCatNumber: string = ''

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProductsAsync(this.search)
  }

  getProductsAsync(search: string, paginationInitial: number = 0) {
    this.searchByCatNumber = ''
    this.productService.getFromBackEnd = true
    this.productsSubscriptions[1] = this.productService.getProducts(search, paginationInitial).
      pipe(
        catchError(async (v) => { console.log(v) }),
        map((listProducts: any) => {
          this.setCountandProducts(listProducts)
        })
      )
      .subscribe()
  }

  getProductsByCatAsync(search: string, paginationInitial: number = 0) {
    this.productService.getFromBackEnd = true
    this.productsSubscriptions[2] = this.productService.getProductsByCat(search, paginationInitial).
      pipe(
        catchError(async (v) => { console.log(v) }),
        map((listProducts: any) => {
          this.setCountandProducts(listProducts)
        })
      )
      .subscribe()
  }

  setSearch(search: { s: string, byCat: boolean, searchCatString?: string }) {
    this.products = []
    if (search.byCat) {
      this.searchByCatNumber = search.s
      this.search = search.searchCatString!
      this.getProductsByCatAsync(search.s)
    } else {
      this.search = search.s
      this.getProductsAsync(search.s)
    }
  }

  loadMore(ret: any) {
    if (ret.count > this.products.length) {
      console.log('loadMore', ret)
      if (this.searchByCatNumber != '') {
        this.getProductsByCatAsync(this.searchByCatNumber, this.products.length)
      }else {
        this.getProductsAsync(this.search, this.products.length)
      }
    }
  }

  setCountandProducts(listProducts: any) {
    this.products.push(...listProducts.products)
    this.countProducts = listProducts.count
    this.productService.getFromBackEnd = false
    if (listProducts.count == 0) {
      this.showProducts = false
    } else {
      this.showProducts = true
    }
  }

  ngOnDestroy(): void {
    this.productsSubscriptions.forEach(s => s.unsubscribe())
  }

}

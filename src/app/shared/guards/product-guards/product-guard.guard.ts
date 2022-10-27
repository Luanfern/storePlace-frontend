import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, take } from 'rxjs';
import { ProductInterface } from '../../Interfaces/product-interface';
import { ProductsService } from '../../services/products/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardGuard implements Resolve<ProductInterface> {

  constructor(
    private product: ProductsService
  ){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): ProductInterface | Observable<ProductInterface> | Promise<ProductInterface> {
    return this.product.getProduct(route.params['code'])
  }
  
}

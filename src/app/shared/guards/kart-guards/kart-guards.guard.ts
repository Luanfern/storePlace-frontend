import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../Interfaces/product-interface';
import { ShoppingKartService } from '../../services/shopping-kart/shopping-kart.service';

@Injectable({
  providedIn: 'root'
})
export class KartGuardsGuard implements Resolve<ProductInterface[]> {

  constructor(
    private shoppingKartService: ShoppingKartService
    ){}

    resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<ProductInterface[]> | Observable<ProductInterface[]> | Promise<ProductInterface[]>  {
    try {
      return this.shoppingKartService.getKartList()
    } catch (error) {
      throw error
    }
  }
  
}

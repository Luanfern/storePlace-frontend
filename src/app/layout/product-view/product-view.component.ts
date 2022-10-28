import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';
import { ShoppingKartService } from 'src/app/shared/services/shopping-kart/shopping-kart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  
  forRemove: boolean = false

  product: ProductInterface = {
    id: 0,
    name: '',
    code: 0,
    price: 0,
    description: '',
    category: '',
    image: ''
  }

  constructor(
    private route: ActivatedRoute,
    private myShoppingKart: ShoppingKartService
  ) { }

  ngOnInit(): void {
    this.route.data
    .pipe(take(1))
    .subscribe((p: any) => {
      this.product = p.product
      console.log(this.myShoppingKart.myShoppingKart)
      console.log(this.product.id)
      const result = this.myShoppingKart.myShoppingKart.find((element) => element.id === p.product.id)
      if(result != undefined) this.forRemove = true
    })
  }

  clickActionButton(p: ProductInterface): void {
    if (!this.forRemove) {
      this.forRemove = !this.forRemove
      return this.myShoppingKart.addProductToKart(p) 
    } else {
      this.forRemove = !this.forRemove
      return this.myShoppingKart.removeProductToKart(p)
    }
  }

}

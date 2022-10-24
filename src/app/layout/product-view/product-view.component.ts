import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  
  forRemove: boolean = false

  product: ProductInterface = {
    name: '',
    code: 0,
    price: 0,
    description: '',
    category: '',
    image: ''
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data
    .pipe(take(1))
    .subscribe((p: any) => {
      this.product = p.product
    })
  }

  clickActionButton(p: string/* ProductInterface */): void {
    if (!this.forRemove) {
      //return this.myShoppingKart.addProductToKart(p) 
    } else {
      //return this.myShoppingKart.removeProductToKart(p)
    }
  }

}

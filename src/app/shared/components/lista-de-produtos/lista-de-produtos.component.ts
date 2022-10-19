import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.scss']
})
export class ListaDeProdutosComponent implements OnInit{

  @Input('products') productsReceive: ProductInterface[] = []
  @Input() toRemove: boolean = false

  constructor() { }

  ngOnInit(): void { }

}

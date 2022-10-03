import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';
import { ShoppingKartService } from 'src/app/shared/services/shopping-kart/shopping-kart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductInterface[] = [
    {
      name: 'Sabão Omo 1kg',
      code: 1,
      price: 13.99,
      description: 'sabao...',
      category: 'Produtos de Limpeza',
      image: 'https://a-static.mlcdn.com.br/800x560/sabao-em-po-omo-multiacao-1kg/magazineluiza/220993100/c22aa7ae888816de7442afa6f9d14f8d.jpg'
    },
    {
      name: 'Rodo de borracha',
      code: 1,
      price: 41.78,
      description: 'sabao...',
      category: 'Produtos de Limpeza',
      image: 'https://a-static.mlcdn.com.br/800x560/rodo-30-cm-plastico-santa-maria-351/lojasgigantao/5691p/9f5ffd84065f138e82f47e3fb5c24ab3.jpg'
    },
    {
      name: 'Balde de plástico 10L',
      code: 1,
      price: 24.99,
      description: 'sabao...',
      category: 'Produtos de Limpeza',
      image: 'https://a-static.mlcdn.com.br/800x560/balde-de-plastico-125-litros-romao-cor-rosa/dcordecoracoes/10199153878/f9d9bfdd9e5a1870f8fb87958f1bea9f.jpeg'
    },
    {
      name: 'saco plástico 100L',
      code: 1,
      price: 11.99,
      description: 'sabao...',
      category: 'Produtos de Limpeza',
      image: 'https://alfalagos.vtexassets.com/arquivos/ids/156469-800-auto?v=637795048579530000&width=800&height=auto&aspect=true'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}

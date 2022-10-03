import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.scss']
})
export class ListaDeProdutosComponent implements OnInit {

  products: ProductInterface[] = [
    {
      name: 'Sabão Omo 1kg Sabão Omo 1kg Sabão Omo 1kg Sabão Omo 1kg Sabão Omo 1kg Sabão Omo 1kg',
      code: 1,
      price: 13.99,
      description: 'sabao...',
      category: 'Produtos de Limpeza',
      image: 'https://a-static.mlcdn.com.br/800x560/sabao-em-po-omo-multiacao-1kg/magazineluiza/220993100/c22aa7ae888816de7442afa6f9d14f8d.jpg'
    },
    {
      name: 'Sabão Omo 1kg',
      code: 1,
      price: 13.99,
      description: 'sabao...',
      category: 'Produtos de Limpeza',
      image: 'https://a-static.mlcdn.com.br/800x560/sabao-em-po-omo-multiacao-1kg/magazineluiza/220993100/c22aa7ae888816de7442afa6f9d14f8d.jpg'
    },
    {
      name: 'Sabão Omo 1kg',
      code: 1,
      price: 13.99,
      description: 'sabao...',
      category: 'Produtos de Limpeza',
      image: 'https://a-static.mlcdn.com.br/800x560/sabao-em-po-omo-multiacao-1kg/magazineluiza/220993100/c22aa7ae888816de7442afa6f9d14f8d.jpg'
    },
    {
      name: 'Sabão Omo 1kg',
      code: 1,
      price: 13.99,
      description: 'sabao...',
      category: 'Produtos de Limpeza',
      image: 'https://a-static.mlcdn.com.br/800x560/sabao-em-po-omo-multiacao-1kg/magazineluiza/220993100/c22aa7ae888816de7442afa6f9d14f8d.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

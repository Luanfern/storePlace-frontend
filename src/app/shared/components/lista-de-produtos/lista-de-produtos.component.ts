import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { delay, map, pairwise, throttleTime } from 'rxjs';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.scss'],
})
export class ListaDeProdutosComponent implements OnInit, AfterViewInit{

  @Input('products') productsReceive: ProductInterface[] = []
  @Input() toRemove: boolean = false

  constructor() { }
  ngAfterViewInit(): void { }

  ngOnInit(): void {}

}

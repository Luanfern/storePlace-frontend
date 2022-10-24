import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.scss'],
})
export class ListaDeProdutosComponent implements OnInit, AfterViewInit {

  @ViewChild('scrollProducts') scrollListProducts!: ElementRef<HTMLDivElement>;
  @Input('searchBy') search: string = ''
  @Input('products') productsReceive: ProductInterface[] = []
  @Input('count') countTotalProducts: number = 0
  @Input() toRemove: boolean = false

  fakeHeight: number = 0

  scrollController: any
  loadMore: boolean = false

  @Output() lm = new EventEmitter<{ count: number, loadMore: boolean }>()

  constructor(private productsService: ProductsService) { }
  ngAfterViewInit(): void {
    this.verifyScroll()
  }
  ngOnInit(): void { }

  verifyScroll() {
    this.scrollController = setInterval(() => {
      let currentScroll = this.scrollListProducts!.nativeElement.scrollTop
      let height = (this.scrollListProducts!.nativeElement.scrollHeight - this.scrollListProducts.nativeElement.clientHeight + this.fakeHeight)
      this.loadMore = this.productsService.getFromBackEnd
      if(this.loadMore) this.fakeHeight = 0

      let statusvar = {
        prodsqtd: this.productsReceive.length,
        totalprodsBD:this.countTotalProducts,
        getFromBacktpBool: this.productsService.getFromBackEnd,
        heightMath: (height - currentScroll)
      }
      //console.table(statusvar)

      if (this.productsReceive.length < this.countTotalProducts) {
        if (height - currentScroll < 220) {
          console.log('lm true')
          if (this.productsReceive.length < this.countTotalProducts && this.productsService.getFromBackEnd == false) {
            this.fakeHeight = 500
            this.lm.emit({ count: this.countTotalProducts, loadMore: true})
            console.log('getprods!')
          }
        }
      }
    }, 100)
  }

}

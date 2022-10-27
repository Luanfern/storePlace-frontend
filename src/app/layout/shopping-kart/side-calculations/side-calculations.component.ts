import { AfterViewInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';
import { ModalServiceService } from 'src/app/shared/services/modal/modal-service.service';
import { MyAccountService } from 'src/app/shared/services/my-account/my-account.service';
import { ShoppingKartService } from 'src/app/shared/services/shopping-kart/shopping-kart.service';

@Component({
  selector: 'app-side-calculations',
  templateUrl: './side-calculations.component.html',
  styleUrls: ['./side-calculations.component.scss']
})
export class SideCalculationsComponent implements OnInit, DoCheck, AfterViewInit {

  @Input() kartCalc: ProductInterface[] = []
  total: number = 0.0
  @Input() keepBuying: string = ''
  disable: boolean = false

  constructor(
    private shoppingKartService: ShoppingKartService,
    private modalService: ModalServiceService,
    private account: MyAccountService
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.calcFinalValue()
    this.disable = this.keepBuying != '' ? false : true
    console.log(this.disable)
  }

  ngDoCheck(): void {
    this.calcFinalValue()
  }

  calcFinalValue() {
    var temporaryFinalCalc = 0
    this.kartCalc.forEach(kc => {
      temporaryFinalCalc += kc.price
    })
    this.total = temporaryFinalCalc
  }

  comprar() {
    this.modalService.changeModal('Compra', 'Processando...')
    this.shoppingKartService.buy()
      .pipe(
        take(1),
        map((ret: any) => {
          console.log(ret)
          if (ret.status == true) {
            this.modalService.changeContentModal(ret.message, 'green')
          } else {
            this.modalService.changeContentModal(ret.message, 'red')
          }
          this.shoppingKartService.myShoppingKart = []

          const newCa = this.account.cA
          newCa.currency = ret.currency
          this.account.setCurrentAccount(newCa)
          
          setTimeout(() => {
            this.modalService.closeModal()
          }, 2500);
        })
      ).subscribe()
    console.log('comprar!')
  }
}

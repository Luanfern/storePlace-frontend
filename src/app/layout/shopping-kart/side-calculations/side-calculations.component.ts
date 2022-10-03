import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/shared/Interfaces/product-interface';

@Component({
  selector: 'app-side-calculations',
  templateUrl: './side-calculations.component.html',
  styleUrls: ['./side-calculations.component.scss']
})
export class SideCalculationsComponent implements OnInit, DoCheck {

  @Input() kartCalc: ProductInterface[] = []
  total: number = 0.0
  @Input() keepBuying: string = ''
  disable: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.calcFinalValue()
    this.disable = this.keepBuying != '' ? true : false
  }

  ngDoCheck(): void {
   this.calcFinalValue()
  }

  calcFinalValue(){
    var temporaryFinalCalc = 0
    this.kartCalc.forEach(kc => {
      temporaryFinalCalc += kc.price
    })
    this.total = temporaryFinalCalc
  }

}

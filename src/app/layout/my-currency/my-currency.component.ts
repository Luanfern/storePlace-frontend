import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, Subscription, take } from 'rxjs';
import { AccountInterface } from 'src/app/shared/Interfaces/account-interface';
import { MyAccountService } from 'src/app/shared/services/my-account/my-account.service';

@Component({
  selector: 'app-my-currency',
  templateUrl: './my-currency.component.html',
  styleUrls: ['./my-currency.component.scss']
})
export class MyCurrencyComponent implements OnInit {

  account: AccountInterface = { name: '' }
  subscriptionAccount!: Subscription;
  modal!: NgbModal
  changeCurrency: boolean = false

  constructor(
    private myAccount: MyAccountService,
    private ngModal: NgbModal,
  ) {
    this.modal = this.ngModal
  }

  ngOnInit(): void {
    this.account = this.myAccount.cA
    this.subscriptionAccount = this.myAccount.currentAccount.subscribe(
      (acc) => {
        console.log(acc)
        this.account = acc;
      }
    );
  }

  ngOnDestroy() {
    this.subscriptionAccount.unsubscribe();
  }

  async addCurrency(changeValue: string): Promise<void> {
    const value = Number.parseInt(changeValue)
    console.log(value)
    if (value != 0 || value != null || value != undefined || value == isNaN) {
      this.changeCurrency = true
      this.myAccount.changeCurrency(value)
        .pipe(
          take(1),
          catchError(async (e) => {
            console.log('ERROR CHANGE', e)
            this.changeCurrency = false
          })
        )
        .subscribe(
          ret => {
            if (ret.status) {
              const clone = this.myAccount.cA;
              clone.currency = this.myAccount.cA.currency! + value;
              this.myAccount.setCurrentAccount(clone);
              this.changeCurrency = false
              this.closeModal()
            }
          }
        )
    }
  }

  changeCurrencyModal(modalChangeCurrency: any) {
    this.modal.open(modalChangeCurrency, { centered: true });
  }

  closeModal() {
    this.modal.dismissAll()
  }

}

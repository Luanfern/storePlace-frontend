import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, isEmpty, Subscription, take } from 'rxjs';
import { AccountInterface } from 'src/app/shared/Interfaces/account-interface';
import { ModalServiceService } from 'src/app/shared/services/modal/modal-service.service';
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
    private modalService: ModalServiceService
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
    const value = changeValue.length != 0 ? Number.parseInt(changeValue) : null
    console.log(value)
    if (value != 0 && value != null && value != undefined) {
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
    } else {
      this.closeModal()
      this.modalService.changeModal('Carregamento de Valores', 'Você tentou carregar um valor vazio, insira um valor numérico para realizar o carregamento.')
      var modalNotChange = setInterval(() => {this.modalService.closeModal(), clearInterval(modalNotChange)}, 3000)
    }
  }

  changeCurrencyModal(modalChangeCurrency: any) {
    this.modal.open(modalChangeCurrency, { centered: true });
  }

  closeModal() {
    this.modal.dismissAll()
  }

}

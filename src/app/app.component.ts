import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, delay, take } from 'rxjs';
import { AuthLoginService } from './shared/services/auth-login/auth-login.service';
import { MyAccountService } from './shared/services/my-account/my-account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalServiceService } from './shared/services/modal/modal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'storePlace-frontend';
  automaticAuth: boolean = false

  constructor(
    private authLogin: AuthLoginService,
    private myAccount: MyAccountService,
    private route: Router,
    private modalService: ModalServiceService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.modalService.changeModal('Auto-login', 'Recuperando dados do Usuário... Aguarde.')
      this.automaticAuth = true
      this.authLogin.authValidate().
        pipe(
          take(1),
          catchError(async (err) => {
            this.modalService.closeModal()
            this.automaticAuth = false
            this.route.navigate(['login'])
            console.log(err.error.error)
          }),
        ).subscribe((acc: any) => {
          this.automaticAuth = false
          console.log(acc)
          if (acc.ignore) {
            this.myAccount.setIslogged()
            this.myAccount.setCurrentAccount(acc.acc)
            this.modalService.closeModal()
          } else {
            if (acc.status == false) {
              this.modalService.changeContentModal(acc.error)
              this.route.navigate(['login'])
            } else {
              this.myAccount.setIslogged()
              this.myAccount.setCurrentAccount(acc.acc)
            }
          }
        }
        )
    }
  }
}

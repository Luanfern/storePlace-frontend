import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, Observer, Subscription, take } from 'rxjs';
import { AuthLoginService } from './shared/services/auth-login/auth-login.service';
import { MyAccountService } from './shared/services/my-account/my-account.service';
import { ModalServiceService } from './shared/services/modal/modal-service.service';
import { ShoppingKartService } from './shared/services/shopping-kart/shopping-kart.service';
import { environment } from 'src/environments/environment';
import { getMessaging, getToken, MessagePayload, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'storePlace-frontend';
  automaticAuth: boolean = false
  messaging = getMessaging();
  message: string = ''

  constructor(
    private authLogin: AuthLoginService,
    private myAccount: MyAccountService,
    private route: Router,
    private modalService: ModalServiceService,
    private myShoppingKart: ShoppingKartService,
  ) { }

  ngOnInit(): void {

    this.requestPermission();
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
        ).subscribe(async (acc: any) => {
          this.automaticAuth = false
          console.log(acc)
          if (acc.ignore) {
            this.getKartList()
            this.myAccount.setIslogged()
            this.myAccount.setCurrentAccount(acc.acc)
            this.modalService.closeModal()
          } else {
            if (acc.status == false) {
              this.modalService.changeContentModal(acc.error, 'white')
              this.route.navigate(['login'])
            } else {
              this.getKartList()
              this.myAccount.setIslogged()
              this.myAccount.setCurrentAccount(acc.acc)
            }
          }
        }
        )
    }
  }
  getKartList() {
    this.myShoppingKart.getKartList()
      .pipe(take(1))
      .subscribe((p: any) => {
        if (p.status == true) {
          this.myShoppingKart.myShoppingKart.push(...p.products)
        }
      })
  }

  listen() {
    onMessage(this.messaging, (payload: any) => {
      this.message = payload.messageId
      console.log('Message received. ', payload);
    });
  }

  requestPermission() { 
    getToken(this.messaging, { vapidKey: environment.firebase.vapidKey }).then((currentToken: any) => {
      if (currentToken) {
        console.log("Hurraaa!!! we got the token.....")
        console.log(currentToken);
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err: any) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });

  }
}
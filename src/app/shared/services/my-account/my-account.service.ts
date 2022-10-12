import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AccountInterface } from '../../Interfaces/account-interface';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {
  
  public islogged = new Subject<boolean>();
  public currentAccount = new Subject<AccountInterface>();

  cA: AccountInterface =  {name: ''}

  constructor() { }

  setIslogged() {
    this.islogged.next(true);
  }

  setCurrentAccount(value?: AccountInterface) {
     value ? this.cA = value : null
    this.currentAccount.next(this.cA)
  }

  async setTokenOnLocalStorage(token: string){
    localStorage.setItem('token', token)
  }
}

import { Injectable } from '@angular/core';
import { AccountInterface } from '../../Interfaces/account-interface';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  private islogged: boolean = false

  private currentAccount: AccountInterface = {
    name: '',
    currency: 0
  }

  constructor() { }

  setAccount(account: AccountInterface){
    this.currentAccount = account
  }

  get account(){
    return this.currentAccount
  }

  setLogged(){
    this.islogged = true
  }

  get logged(){
    return this.islogged
  }
}

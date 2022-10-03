import { Injectable } from '@angular/core';
import { AccountInterface } from '../../Interfaces/account-interface';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  currentAccount: AccountInterface = {
    name: 'luan',
    currency: 99.80
  }

  constructor() { }
}

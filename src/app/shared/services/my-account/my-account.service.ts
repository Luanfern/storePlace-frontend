import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountInterface } from '../../Interfaces/account-interface';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  public islogged = new Subject<boolean>();
  public currentAccount = new Subject<AccountInterface>();

  cA: AccountInterface = { name: '' }

  constructor(
    private http: HttpClient
  ) { }

  setIslogged() {
    this.islogged.next(true);
  }

  setCurrentAccount(value?: AccountInterface) {
    value ? this.cA = value : null
    this.currentAccount.next(this.cA)
  }

  async setTokenOnLocalStorage(token: string) {
    localStorage.setItem('token', token)
  }

   changeCurrency(valueMoney: number): Observable<any> {
    const change = this.http.post<any>(
      `${environment.URL_API}user/updateCurrency`,
    { "currency": valueMoney },
    {headers:
      {
        'Content-Type': 'application/json',
      },
    })

    return change
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountInterface } from '../../Interfaces/account-interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  verifyEmail(email: string): Observable<Object> {
    return this.http.post<Object>(
      `${environment.URL_API}registerveiu`,
      {
        email
      },
      {
        headers:
        {
          'Content-Type': 'application/json'
        },
      },
    )
  }

  register(acount: AccountInterface): Observable<string> {
    var register = this.http.post<string>(
      `${environment.URL_API}register`,
      {
        "name": acount.name,
        "email": acount.email,
        "password": acount.password,
        "telefone": acount.telefone,
      },
      {headers:
        {
          'Content-Type': 'application/json'
        },
      },
      );

      return register
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountInterface } from '../../Interfaces/account-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor(private http: HttpClient) { }

  authValidate(token: string): Observable<boolean> {
    var validate = this.http.post<boolean>(
      `${environment.URL_API}login/tokenAuth`,
      {headers:{
        'Content-Type': 'application/json',
      },
    },
      );
      return validate
  }

  authLogin(acount: AccountInterface): Observable<string> {
    var login = this.http.post<string>(
      `${environment.URL_API}login`,
      {
        "email": acount.email!,
        "password": acount.password!
      },
      {headers:
        {
          'Content-Type': 'application/json'
        },
      },
      );

      return login
  }

}

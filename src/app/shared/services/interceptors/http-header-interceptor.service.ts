import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHeaderInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var token = localStorage.getItem('token')

    var cloneRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
      body: req.body
    })
    return next.handle(token ? cloneRequest : req)
  }
}

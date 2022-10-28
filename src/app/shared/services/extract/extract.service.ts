import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IExtract } from '../../Interfaces/extract-interface';

@Injectable({
  providedIn: 'root'
})
export class ExtractService {

  constructor(private http: HttpClient) { }

  getExtracts(): Observable<IExtract[]> {
    const url = `${environment.URL_API}extracts`
    return this.http.post<IExtract[]>(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}

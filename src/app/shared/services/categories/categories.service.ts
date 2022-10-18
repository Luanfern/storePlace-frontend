import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriesInterface } from '../../Interfaces/category-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  listCategories():Observable<CategoriesInterface[]> {
    return this.http.get<CategoriesInterface[]>(`${environment.URL_API}categories`)
  }
}

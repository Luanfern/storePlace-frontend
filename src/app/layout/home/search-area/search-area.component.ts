import { Component, HostListener, OnInit } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { CategoriesInterface } from 'src/app/shared/Interfaces/category-interface';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss']
})
export class SearchAreaComponent implements OnInit {
  public isCollapsed = true;
  smallScreen: boolean = false;

  categories$!: Observable<CategoriesInterface[]>

  /*
    {id: 1, name: 'Roupas'},
    {id: 2, name: 'Eletro-domésticos'},
    {id: 3, name: 'Comidas'},
    {id: 4, name: 'Utensilios de Cozinha'},
    {id: 5, name: 'Eletrônicos e Tecnologia'}
   */

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.categories$ = this.categoriesService.listCategories()
    if (window.innerWidth > 576) {
      this.isCollapsed = false
      this.smallScreen = false
    } else {
      this.isCollapsed = true
      this.smallScreen = true
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 575 && this.smallScreen) {
      this.smallScreen = false     
      this.isCollapsed = false
    }
    if (window.innerWidth <= 575 && !this.smallScreen) {
      this.smallScreen = true
      this.isCollapsed = true
    }
}


}

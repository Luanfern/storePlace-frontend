import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
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
  @Output() setSearch = new EventEmitter<{s: string, byCat: boolean, searchCatString?: string}>()
  serachForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {

    this.serachForm = this.formBuilder.group({
      search: [null],
    })

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

  submitSearch(byCategory: boolean = false, categoryNumber?: number, searchCatString?: string){
    if (byCategory) {
      this.serachForm.get('search')?.setValue('')
      console.log(searchCatString)
      this.setSearch.emit({s: categoryNumber!.toString(), byCat: true, searchCatString: searchCatString})
    } else {
      this.setSearch.emit({s: this.serachForm.get('search')?.value, byCat: false})
    }
  }

}

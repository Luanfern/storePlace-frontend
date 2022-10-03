import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss']
})
export class SearchAreaComponent implements OnInit {
  public isCollapsed = true;
  smallScreen: boolean = false;

  categories: any[] = [
    {id: 1, title: 'Roupas'},
    {id: 2, title: 'Eletro-domésticos'},
    {id: 3, title: 'Comidas'},
    {id: 4, title: 'Utensilios de Cozinha'},
    {id: 5, title: 'Eletrônicos e Tecnologia'}
  ]

  constructor() { }

  ngOnInit(): void {
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

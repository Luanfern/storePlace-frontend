import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './app-routing.module';
import { ListaDeProdutosComponent } from './lista-de-produtos/lista-de-produtos.component';
import { SearchAreaComponent } from './search-area/search-area.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCardComponent } from './product-card/product-card.component';
import { TruncateStringPipe } from 'src/app/shared/pipes/truncate-string.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    ListaDeProdutosComponent,
    SearchAreaComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    NgbModule
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }

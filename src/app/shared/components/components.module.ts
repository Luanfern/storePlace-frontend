import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ListaDeProdutosComponent } from './lista-de-produtos/lista-de-produtos.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    ButtonComponent,
    ListaDeProdutosComponent,
    ProductCardComponent
    ],
  imports: [
    CommonModule,
    ScrollingModule
  ],
   exports:[
    ButtonComponent,
    ListaDeProdutosComponent,
    ProductCardComponent
   ]
})
export class ComponentsModule { }

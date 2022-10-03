import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingKartComponent } from './shopping-kart.component';
import { SideCalculationsComponent } from './side-calculations/side-calculations.component';
import { ShoppingKartRoutingModule } from './shopping-kart-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';



@NgModule({
  declarations: [
    ShoppingKartComponent,
    SideCalculationsComponent
  ],
  imports: [
    CommonModule,
    ShoppingKartRoutingModule,
    ComponentsModule
  ],
  exports: [
    ShoppingKartRoutingModule
  ]
})
export class ShoppingKartModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingKartComponent } from './shopping-kart.component';

const routes: Routes = [
  {path: '', component: ShoppingKartComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingKartRoutingModule { }

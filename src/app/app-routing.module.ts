import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { MyAccountComponent } from './layout/my-account/my-account.component';
import { MyCurrencyComponent } from './layout/my-currency/my-currency.component';
import { RegisterComponent } from './layout/register/register.component';
import { ShoppingKartComponent } from './layout/shopping-kart/shopping-kart.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./layout/home/home.module').then(m=>m.HomeModule)},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'myaccount', component: MyAccountComponent},
  {path: 'mycurrency', component: MyCurrencyComponent},
  {path: 'shoppingkart', component: ShoppingKartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

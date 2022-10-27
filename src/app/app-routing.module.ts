import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { MyAccountComponent } from './layout/my-account/my-account.component';
import { MyCurrencyComponent } from './layout/my-currency/my-currency.component';
import { ProductViewComponent } from './layout/product-view/product-view.component';
import { RegisterComponent } from './layout/register/register.component';
import { KartGuardsGuard } from './shared/guards/kart-guards/kart-guards.guard';
import { ProductGuardGuard } from './shared/guards/product-guards/product-guard.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./layout/home/home.module').then(m=>m.HomeModule)},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'myaccount', component: MyAccountComponent},
  {path: 'mycurrency', component: MyCurrencyComponent},
  {path: 'shoppingkart', loadChildren: () => import('./layout/shopping-kart/shopping-kart.module').then(m=>m.ShoppingKartModule),
    resolve: {product: KartGuardsGuard}},
  {path: 'product/:code', component: ProductViewComponent,
    resolve: {product: ProductGuardGuard}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

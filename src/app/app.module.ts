import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { HomeModule } from './layout/home/home.module';
import { ComponentsModule } from './shared/components/components.module';
import { MyCurrencyComponent } from './layout/my-currency/my-currency.component';
import { MyAccountComponent } from './layout/my-account/my-account.component';
import { ShoppingKartComponent } from './layout/shopping-kart/shopping-kart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MyCurrencyComponent,
    MyAccountComponent,
    ShoppingKartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    //APP MODULES
    HomeModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

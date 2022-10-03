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
import { ShoppingKartModule } from './layout/shopping-kart/shopping-kart.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MyCurrencyComponent,
    MyAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    //APP MODULES
    HomeModule,
    ShoppingKartModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

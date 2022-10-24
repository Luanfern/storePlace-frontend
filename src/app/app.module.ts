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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptorService } from './shared/services/interceptors/http-header-interceptor.service';
import { RouterModule } from '@angular/router';
import { ModalComponentComponent } from './shared/services/modal/modal-component/modal-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductViewComponent } from './layout/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MyCurrencyComponent,
    MyAccountComponent,
    ModalComponentComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

    //APP MODULES
    HomeModule,
    ShoppingKartModule,
    ComponentsModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpHeaderInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponentComponent]
})
export class AppModule { }

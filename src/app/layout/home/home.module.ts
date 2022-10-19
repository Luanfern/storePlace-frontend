import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './app-routing.module';
import { SearchAreaComponent } from './search-area/search-area.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SearchAreaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }

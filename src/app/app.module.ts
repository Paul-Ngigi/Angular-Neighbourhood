import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NeighbourhoodComponent } from './components/neighbourhood/neighbourhood.component';
import { BusinessComponent } from './components/business/business.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BusinessService } from './service/business/business.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NeighbourhoodComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }

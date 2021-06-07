import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NeighbourhoodComponent } from './components/neighbourhood/neighbourhood.component';
import { BusinessComponent } from './components/business/business.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BusinessService } from './service/business/business.service';
import { AddBusinessComponent } from './components/add-business/add-business.component';
import { AddNeighbourhoodComponent } from './components/add-neighbourhood/add-neighbourhood.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NeighbourhoodComponent,
    BusinessComponent,
    AddBusinessComponent,
    AddNeighbourhoodComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }

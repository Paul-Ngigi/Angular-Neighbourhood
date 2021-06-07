import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { BusinessComponent } from './components/business/business.component';
import { NeighbourhoodComponent } from './components/neighbourhood/neighbourhood.component';
import { AddBusinessComponent } from './components/add-business/add-business.component';
import { AddNeighbourhoodComponent } from './components/add-neighbourhood/add-neighbourhood.component';
import { NotFoundComponent } from './components/not-found/not-found.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'businesses', component: BusinessComponent },
  { path: 'add-business', component: AddBusinessComponent },
  { path: 'neighbourhood', component: NeighbourhoodComponent },
  { path: 'add-neighbourhood', component: AddNeighbourhoodComponent },
  { path: '**', component: NotFoundComponent },

  { path: '', redirectTo:"", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

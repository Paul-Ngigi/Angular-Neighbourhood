import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { NeighbourhoodComponent } from './components/neighbourhood/neighbourhood.component';
import { AddBusinessComponent } from './components/add-business/add-business.component';
import { AddNeighbourhoodComponent } from './components/add-neighbourhood/add-neighbourhood.component';


const routes: Routes = [
  {path: 'businesses', component: BusinessComponent},
  {path: 'add-business', component: AddBusinessComponent},
  {path: 'neighbourhood', component: NeighbourhoodComponent},
  {path: 'add-neighbourhood', component: AddNeighbourhoodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

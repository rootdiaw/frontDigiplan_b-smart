import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListplateformeComponent } from './listplateforme/listplateforme.component';
import { NewdigiplanComponent } from './newdigiplan/newdigiplan.component';
import { NewoptionComponent } from './newoption/newoption.component';
import { NewplateformeComponent } from './newplateforme/newplateforme.component';

const routes: Routes = [
  {
    path:'newdigiplan',
    component:NewdigiplanComponent
  },
  {
    path:'newplateforme',
    component:NewplateformeComponent
  }
  ,
  {
    path:'listplateforme',
    component:ListplateformeComponent
  },
  {
    path:'option',
    component:NewoptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

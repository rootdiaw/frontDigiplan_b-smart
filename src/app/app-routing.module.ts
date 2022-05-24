import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullComponent} from './layouts/full/full.component';
import { ConnexionComponent } from './modules/connexion/connexion.component';
import {DasboardComponent} from './modules/dasboard/dasboard.component';
import {FooterComponent} from './shared/footer/footer.component';

const routes: Routes = [
 /*  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
  path: 'login',
  component: ConnexionComponent,
    data:{
      title: 'login'
        }
  }, */
  {
    
    path: '',
    component: FullComponent,
    children:[
      
          {
            path:'admin',
            loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
          }
    ]
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

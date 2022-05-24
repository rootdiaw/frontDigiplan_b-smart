import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';

import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { PlateformComponent } from './plateform/plateform.component';
import { NewplateformeComponent } from './newplateforme/newplateforme.component';
import { ListplateformeComponent } from './listplateforme/listplateforme.component';
import { ModifplateformeComponent } from './modifplateforme/modifplateforme.component';
import { DeleteplateformeComponent } from './deleteplateforme/deleteplateforme.component';
import { NewoptionComponent } from './newoption/newoption.component';
import { ModifoptionComponent } from './modifoption/modifoption.component';
import { NewdigiplanComponent } from './newdigiplan/newdigiplan.component';

@NgModule({
  declarations: [ PlateformComponent, NewplateformeComponent, ListplateformeComponent, ModifplateformeComponent, DeleteplateformeComponent, NewoptionComponent, ModifoptionComponent, NewdigiplanComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatInputModule, 
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    MatStepperModule, 
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule,
  ]
})
export class AdminModule { }

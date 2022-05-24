import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'
import {FullModule} from './layouts/full/full.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { DasboardComponent } from './modules/dasboard/dasboard.component';
import {MatCardModule} from '@angular/material/card';
import { AdminModule } from './modules/admin/admin.module';
import { ConnexionComponent } from './modules/connexion/connexion.component';
import { DeconnexionComponent } from './shared/deconnexion/deconnexion.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    ConnexionComponent,
    DeconnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FullModule,
    HighchartsChartModule,
    MatCardModule,
    AdminModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,      
    MatTableModule,
    HttpClientModule,
    MatOptionModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatStepperModule, 
    MatButtonModule,   
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatSelectModule,      
    MatProgressSpinnerModule,

  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

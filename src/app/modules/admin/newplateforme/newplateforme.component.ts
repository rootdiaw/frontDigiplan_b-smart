import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Plateforme } from 'src/app/models/plateforme.model';
import { PlateformeService } from 'src/app/services/plateforme.service';
import * as internal from 'stream';
@Component({
  selector: 'app-newplateforme',
  templateUrl: './newplateforme.component.html',
  styleUrls: ['./newplateforme.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class NewplateformeComponent implements OnInit {
  var_nom!: String;
  var_heurepost!: String;
  var_format!: String;
  message!:String;
  firstFormGroup!: FormGroup;
  plateforme: Plateforme = new Plateforme ();

  
  isEditable = false;
  isLinear = false;
  constructor(private _formBuilder: FormBuilder, 
    public router: Router, private plateformeService: PlateformeService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      heurepost: ['', Validators.required],
      format: ['', Validators.required]
    });  
  }

  savePlateforme(){
    this.plateforme=this.firstFormGroup.value
    this.var_nom=this.firstFormGroup.get("nom")?.value;
    this.var_heurepost=this.firstFormGroup.get("heurepost")?.value;
    this.var_format=this.firstFormGroup.get("format")?.value;
    if((this.var_nom.length!=0)&&(this.var_heurepost.length!=0)&&(this.var_format.length!=0))
    {
      this.plateformeService.addPlateforme(this.plateforme).subscribe(
        data=>{
          
          this.router.navigate(['/admin/listplateforme']);
        }
      )
    }
    else{
      this.message="tout les champs avec (*) sont obligatoire!";  
    }
  }
}

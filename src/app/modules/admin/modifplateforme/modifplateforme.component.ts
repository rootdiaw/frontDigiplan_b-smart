import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Plateforme } from 'src/app/models/plateforme.model';
import { PlateformeService } from 'src/app/services/plateforme.service';

@Component({
  selector: 'app-modifplateforme',
  templateUrl: './modifplateforme.component.html',
  styleUrls: ['./modifplateforme.component.scss']
})
export class ModifplateformeComponent implements OnInit {
  firstFormGroup!: FormGroup;
  plateforme: Plateforme = new Plateforme ();
  constructor(private _formBuilder: FormBuilder, 
    public router: Router, private plateformeService: PlateformeService,
    @Inject(MAT_DIALOG_DATA) public data: {plateforme: Plateforme}) 
    {
     
      this.plateforme=data.plateforme;
     }
     ngOnInit() {
       console.log("=======",this.data.plateforme.idplateforme)
      this.firstFormGroup = this._formBuilder.group({
        nom: [this.data.plateforme.nom],
        heurepost: [this.data.plateforme.heurepost],
        format: [this.data.plateforme.format]
      });
      
    }
    updatePlateforme(){
      let id: any
      id=this.data.plateforme.idplateforme
      if(this.plateforme!=null){
        this.plateforme=this.data.plateforme;
        if(this.firstFormGroup.get("nom")?.value!=""){
          this.plateforme.nom=this.firstFormGroup.get("nom")?.value;
        }
        if(this.firstFormGroup.get("heurepost")?.value!=""){
          this.plateforme.heurepost=this.firstFormGroup.get("heurepost")?.value;
        }
        if(this.firstFormGroup.get("format")?.value!=""){
          this.plateforme.format=this.firstFormGroup.get("format")?.value;
        }
        this.plateformeService.updatePlateforme(id,this.plateforme).subscribe(
          data=>{
            console.log(data)
           
          },err=>{
            console.log(err)
          }
        )
        this.router.navigate(['/admin/listplateforme']);
      }
    }

}

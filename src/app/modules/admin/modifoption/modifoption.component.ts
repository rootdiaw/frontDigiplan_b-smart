import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OptionService } from 'src/app/services/option.service';
import { PlateformeService } from 'src/app/services/plateforme.service';

import { Option } from 'src/app/models/Option.model';

@Component({
  selector: 'app-modifoption',
  templateUrl: './modifoption.component.html',
  styleUrls: ['./modifoption.component.scss']
})
export class ModifoptionComponent implements OnInit {
  firstFormGroup!: FormGroup;
  listePlateformes!:any
  option:Option = new Option();
  constructor( private _formBuilder: FormBuilder,
    public router: Router, public dialog: MatDialog,
    private optionService: OptionService,private plateformeService: PlateformeService,
    @Inject(MAT_DIALOG_DATA) public data: {option: Option}) 
    {
     
      this.option=data.option;
     }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      objectifmacrom: [this.data.option.objectifmacrom ],
      plateformes: [this.data.option.plateformes ],
    });
    this.getPlateforme();
  }

  getPlateforme(){
    this.plateformeService.getAllPlateforme().subscribe(
      data=>{
        this.listePlateformes=data
      }
     )

  }
  updateOption(){
    let id:any
    id=this.data.option.idoption;
    if(this.option!=null){
      this.option=this.data.option;
      if(this.firstFormGroup.get("objectifmacrom")?.value!=""){
        this.option.objectifmacrom=this.firstFormGroup.get("objectifmacrom")?.value;
      }
     
      if(this.firstFormGroup.get("plateformes")?.value!=""){
        this.option.plateformes=this.firstFormGroup.get("plateformes")?.value;
      }
      this.optionService.updateOption(id,this.option).subscribe(
        data=>{
          console.log(data)
          
        },err=>{
          console.log(err)
        }
      )
      this.router.navigate(['/admin/option']);
    }


  }
}

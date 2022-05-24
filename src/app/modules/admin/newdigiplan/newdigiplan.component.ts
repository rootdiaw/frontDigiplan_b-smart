import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OptionService } from 'src/app/services/option.service';
import { PlateformComponent } from '../plateform/plateform.component';
@Component({
  selector: 'app-newdigiplan',
  templateUrl: './newdigiplan.component.html',
  styleUrls: ['./newdigiplan.component.scss']
})
export class NewdigiplanComponent implements OnInit {

  listOption!:any
  firstFormGroup!: FormGroup;
  var_objectifmacrom!:String;
  var_sexe!:String;
  var_age!:String;
message!:String;
  constructor(private _formBuilder: FormBuilder,private router: Router,
    private optionService: OptionService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
 
        sexe: ['', Validators.required],
        age: ['', Validators.required],
        objectifmacroms: ['', Validators.required],
    });
    this.getOption();
  }

  getOption(){
    this.optionService.getAllOption().subscribe(data=>{
      this.listOption=data
    })
   
  } 

  genererPlateform(){
      this.var_sexe=this.firstFormGroup.get("sexe")?.value;
      this.var_age=this.firstFormGroup.get("age")?.value
    if((this.var_age.length==0)||(this.var_sexe.length==0))
    {
      this.message=" tous les champs avec * sont obligatoire"
    }
    else{
      this.var_objectifmacrom=this.firstFormGroup.get("objectifmacroms")?.value;
       const dialogRef = this.dialog.open(PlateformComponent,
        {
          data: {var_objectifmacrom: this.var_objectifmacrom
  
          },}
        );
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    
  }
}

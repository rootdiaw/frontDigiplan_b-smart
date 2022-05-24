import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Plateforme } from 'src/app/models/plateforme.model';
import { PlateformeService } from 'src/app/services/plateforme.service';

@Component({
  selector: 'app-deleteplateforme',
  templateUrl: './deleteplateforme.component.html',
  styleUrls: ['./deleteplateforme.component.scss']
})
export class DeleteplateformeComponent implements OnInit {
  id!:number;

  constructor( public router: Router, private plateformeService: PlateformeService,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}) 
    {
      this.id=data.id;
     }

  ngOnInit(): void {
    
  }

  deletePlateforme(){
    this.plateformeService.deletePlateforme(this.id).subscribe(
      data=>{
      },err=>{
        console.log(err)
      }
    )

  }

}

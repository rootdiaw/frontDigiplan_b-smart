import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Option } from 'src/app/models/Option.model';
import { OptionService } from 'src/app/services/option.service';
import { PlateformeService } from 'src/app/services/plateforme.service';
import { ModifoptionComponent } from '../modifoption/modifoption.component';
@Component({
  selector: 'app-newoption',
  templateUrl: './newoption.component.html',
  styleUrls: ['./newoption.component.scss']
})
export class NewoptionComponent implements OnInit {
  listePlateformes!:any
  options!: FormGroup;
  message!:String;
  var_plateforme!:String;
  displayedColumns: string[] = [ 'objectifmacron','plateformes','actions'];
  dataSource!: MatTableDataSource<Option>;
  option:Option = new Option();
  constructor( private _formBuilder: FormBuilder,
    public router: Router, public dialog: MatDialog,
    private optionService: OptionService,
    private plateformeService: PlateformeService) { }
    @ViewChild(MatPaginator) paginator!: MatPaginator ;
    @ViewChild(MatSort) sort!: MatSort;
  /* 
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } */

  ngOnInit() {
    this.options = this._formBuilder.group({
      objectifmacrom: ['', Validators.required ],
      plateformes: ['', Validators.required ],
    });
    this.getPlateforme();
    this.getOption();
  } 
   getPlateforme(){
    this.plateformeService.getAllPlateforme().subscribe(
      data=>{
        this.listePlateformes=data
      }
     )
     
  } 
   update(option: Option){
    const dialogRef = this.dialog.open(ModifoptionComponent,
      {
        width: '25%',
        height: '45%',
        data: { option: option },}
      );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getOption();
    });
  }
  delete(id: number){
    if(confirm("Voulez Vous vraiment supprimer la objectif macron ?")) {
      this.optionService.deleteOption(id)
        .subscribe(data=> {
          
          this.getOption()
        }, err=>{
          console.log(err)
        }) 
    }
  } 

   getOption(){
    this.optionService.getAllOption().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data) ;
      //this.ngAfterViewInit();
    })
    
  } 

 saveOption(){
   this.var_plateforme=this.options.get("plateformes")?.value;
   if(this.var_plateforme.length==0){
    this.message=" tous les champs avec * sont obligatoire"
    
   }else{
    this.option=this.options.value
    this.optionService.addOption(this.option).subscribe(
      data=>{
        console.log(data)
        this.ngOnInit();
      }
    )
   }
  
  } 

    applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
  
rowClicked(row: any): void 
{
    console.log(row);
       
  } 



}

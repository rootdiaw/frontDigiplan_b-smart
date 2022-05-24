import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Plateforme } from 'src/app/models/plateforme.model';
import { PlateformeService } from 'src/app/services/plateforme.service';
import { DeleteplateformeComponent } from '../deleteplateforme/deleteplateforme.component';
import { ModifplateformeComponent } from '../modifplateforme/modifplateforme.component';

@Component({
  selector: 'app-listplateforme',
  templateUrl: './listplateforme.component.html',
  styleUrls: ['./listplateforme.component.scss']
})
export class ListplateformeComponent implements OnInit {
  displayedColumns: string[] = ['nom','heurepost', 'format','actions'];
  dataSource!: MatTableDataSource<Plateforme>;

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort;
/* 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } */

  constructor(public dialog: MatDialog, private plateformeService: PlateformeService) { }

  ngOnInit(): void {
    this.getPlateforme();
  }

  getPlateforme(){

    this.plateformeService.getAllPlateforme().subscribe(
      data=>{
        this.dataSource = new MatTableDataSource(data) ;
          console.log(data)
      }
     )
    /*  this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort; */
  }
  update(plateforme: Plateforme){
    const dialogRef = this.dialog.open(ModifplateformeComponent,
      {
        width: '65%',
        height: '90%',
        data: { plateforme: plateforme },}
      );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getPlateforme();
    });
  }
  delete(id:number)
 {
  if(confirm("Voulez Vous vraiment supprimer la plateforme ?")) {
    this.plateformeService.deletePlateforme(id)
      .subscribe(data=> {
        this.getPlateforme()
      }, err=>{
        console.log(err)
      }) 
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

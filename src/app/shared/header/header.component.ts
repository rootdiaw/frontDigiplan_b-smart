import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeconnexionComponent } from '../deconnexion/deconnexion.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(
    public dialog : MatDialog) { }
  ngOnInit(): void {
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  deconnexion(){
    const dialogRef = this.dialog.open(DeconnexionComponent, {
     width: '25%',
     height: '25%',
    });
   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   }); 
 }

}

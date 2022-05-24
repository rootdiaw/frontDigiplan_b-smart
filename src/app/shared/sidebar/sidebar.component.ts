import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  var_login!:String;


  constructor() { }

  ngOnInit(): void {
    this.var_login = new String(localStorage.getItem('tokenlogin'));
  }

}

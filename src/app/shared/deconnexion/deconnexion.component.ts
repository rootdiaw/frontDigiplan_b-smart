import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentificationService.service';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.scss']
})
export class DeconnexionComponent implements OnInit {

  firstFormGroup!:FormGroup;
  constructor(private router:Router,
    private fb: FormBuilder,
    private authentificationService:AuthentificationService) { }

  ngOnInit(){
   
  }
  exit(){
    this.authentificationService.logout(); 
  }

}

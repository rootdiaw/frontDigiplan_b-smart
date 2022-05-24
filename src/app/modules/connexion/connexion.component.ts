import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';
import { AuthentificationService } from 'src/app/services/authentificationService.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  tokenlogin!:any;
  hide=true;
  form!:FormGroup;
  admin:Admin = new Admin();
  message!:String;
  returnUrl!: string;
  backgroundUrl="assets/images/03.jpg"
  constructor(private fb:FormBuilder,
    private router:Router,
    private adminService: AdminService,
    private authentificationService : AuthentificationService) { }

    ngOnInit(){
      this.form=this.fb.group({
        login: ['', Validators.required],
        password: ['', Validators.required],
      });
      this.returnUrl = '/fullaccueil';  
      this.authentificationService.logout();
    }
    login(){
      this.admin.email=this.form.get("login")?.value;
      this.admin.password=this.form.get("password")?.value;
      
      this.adminService.findBylog(this.admin).subscribe(data=>{
       
          if(data.length==0){
            this.message="Votre login ou votre mot de passe est incorect!";  
            
          } 
          else  {
            localStorage.setItem('isLoggedIn', "true"); 
            this.tokenlogin=data[0].login
            localStorage.setItem('tokenlogin', this.tokenlogin); 
            this.router.navigate(['admin']);           
          }
      }, err=>{
        
      })
    }

}

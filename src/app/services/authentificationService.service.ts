import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
  constructor(
    private route:Router
  ) { }    
  logout() :void {    
  localStorage.setItem('isLoggedIn','false');    
  localStorage.removeItem('tokenlogin'); 
  
  this.route.navigate(['/'])
  }
  
}

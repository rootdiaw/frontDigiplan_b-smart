import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../models/admin.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
public readonly apiUrl:string="http://localhost:8015/apiadmin";

  getAllAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl);
  }

  getAdminById(id: number): Observable<Admin>{
    const url = `${this.apiUrl}/admin/${id}`;
    return this.http.get<Admin>(url);
  }

  updateAdmin(id: number, admin: Admin): Observable<Admin>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Admin>(url, admin);
  }

 

  addAdmin(admin: Admin): Observable<Admin>{
    return this.http.post<Admin>(this.apiUrl, admin);
  }

  deleteAdmin(id: number): Observable<{}>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);

  }

  public findBylog(admin:Admin): Observable<Admin[]>
  {
    //const url = `${this.apiUrl}/${id}`;
    return this.http.post<Admin[]>(this.apiUrl+"/auth",admin)
  }
 

}

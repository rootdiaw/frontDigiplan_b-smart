import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Digiplan } from '../models/digiplan.model';

@Injectable({
    providedIn: 'root'
  })
  export class DigiplanService{
    constructor(private http:HttpClient) { }
    public readonly apiUrl:string="http://localhost:8015/apidigiplan";

    
getAllDigiplan(): Observable<Digiplan[]>{
    return this.http.get<Digiplan[]>(this.apiUrl);
  }

  getDigiplanById(id: number): Observable<Digiplan>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Digiplan>(url);
  }

  updateDigiplan(id: number, digiplan: Digiplan): Observable<Digiplan>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Digiplan>(url, digiplan);
  }

  addDigiplan(digiplan: Digiplan): Observable<Digiplan>{
    return this.http.post<Digiplan>(this.apiUrl, digiplan);
  }

  deleteDigiplan(id: number): Observable<{}>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);

  }
  }
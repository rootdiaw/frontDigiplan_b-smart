import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plateforme } from '../models/plateforme.model';


@Injectable({
    providedIn: 'root'
  })
  export class PlateformeService {
    
  
    constructor(private http:HttpClient) { }
  public readonly apiUrl:string="http://localhost:8015/apiplateforme";
  
    getAllPlateforme(): Observable<Plateforme[]>{
      return this.http.get<Plateforme[]>(this.apiUrl);
    }
  
    getPlateformeById(id: number): Observable<Plateforme>{
      const url = `${this.apiUrl}/plateforme/${id}`;
      return this.http.get<Plateforme>(url);
    }
    getPlateformeByNom(nom: String): Observable<Plateforme[]>{
      const url = `${this.apiUrl}/plateformenom/${nom}`;
      return this.http.get<Plateforme[]>(url);
    }

    getAllPlateformebyArray(tab:String[]): Observable<Plateforme[]>{
      const url = `${this.apiUrl}/plateformearray?tab=`+tab;
     // const baseUrl = this.apiUrl + "/plateformearray?tab="+tab;
      return this.http.get<Plateforme[]>(url);
    }
  
    updatePlateforme(id: number, plateforme: Plateforme): Observable<Plateforme>{
      const url = `${this.apiUrl}/${id}`;
      return this.http.put<Plateforme>(url, plateforme);
    }
  
   
  
    addPlateforme(plateforme: Plateforme): Observable<Plateforme>{
      return this.http.post<Plateforme>(this.apiUrl, plateforme);
    }
  
    deletePlateforme(id: number): Observable<{}>{
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete(url);
  
    }
  
  }
  
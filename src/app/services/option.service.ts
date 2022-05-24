import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '../models/Option.model';


@Injectable({
    providedIn: 'root'
  })
  export class OptionService {
  
    constructor(private http:HttpClient) { }
  public readonly apiUrl:string="http://localhost:8015/apioption";
  
    getAllOption(): Observable<Option[]>{
      return this.http.get<Option[]>(this.apiUrl);
    }
  
    getOptionById(id: number): Observable<Option>{
      const url = `${this.apiUrl}/Option/${id}`;
      return this.http.get<Option>(url);
    }
    getOptionByNom(nom: String): Observable<Option[]>{
      const url = `${this.apiUrl}/Optionbynom/${nom}`;
      return this.http.get<Option[]>(url);
    }

    
  
    updateOption(id: number, option: Option): Observable<Option>{
      const url = `${this.apiUrl}/${id}`;
      return this.http.put<Option>(url, option);
    }
  
   
  
    addOption(option: Option): Observable<Option>{
      return this.http.post<Option>(this.apiUrl, option);
    }
  
    deleteOption(id: number): Observable<{}>{
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete(url);
  
    }
  
  }
  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { trabajo } from '../Model/trabajo.model';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {


  URL='http://localhost:8080/';



  constructor(private http: HttpClient) { }

  public getTrabajo():Observable<trabajo>{
    return this.http.get<trabajo>(this.URL+'//trabajo/traer');
  }



  
}

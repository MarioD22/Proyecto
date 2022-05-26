import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { capacitacion } from '../Model/capacitacion.model';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionService {


  URL='http://localhost:8080/';



  constructor(private http: HttpClient) { }

  public getCapacitacion():Observable<capacitacion>{
    return this.http.get<capacitacion>(this.URL+'/capacitacion/traer');
  }



}

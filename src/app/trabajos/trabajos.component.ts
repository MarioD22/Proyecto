import { Component, OnInit } from '@angular/core';
import { trabajo } from '../Model/trabajo.model';
import { TrabajoService } from '../service/trabajo.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

 trabajo : trabajo = new trabajo("","","")
  
 constructor( public trabajoservice: TrabajoService){}
 

  ngOnInit(): void {
    this.trabajoservice.getTrabajo().subscribe(data => {this.trabajo=data})
   
    
  }

  
}

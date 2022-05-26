import { Component, OnInit } from '@angular/core';
import { capacitacion } from '../Model/capacitacion.model';
import { CapacitacionService } from '../service/capacitacion.service';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.css']
})
export class CapacitacionComponent implements OnInit {
  
  capacitacion: capacitacion= new capacitacion("","")


  constructor(public capacitacionservice: CapacitacionService) { }

  ngOnInit(): void {
   this.capacitacionservice.getCapacitacion().subscribe(data=> {this.capacitacion=data})
    
  }

}

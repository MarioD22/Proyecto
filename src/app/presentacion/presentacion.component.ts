import { Component, OnInit } from '@angular/core';
import { persona } from '../Model/persona.model';
import { PersonaService } from '../service/persona.service';


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  
  persona:persona =new persona("","","","","","","","","")
  
  constructor(public personaservice: PersonaService) { }

  ngOnInit(): void {
    this.personaservice.getPersona().subscribe(data => {this.persona=data})
  }

}

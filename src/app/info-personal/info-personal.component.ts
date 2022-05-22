import { Component, OnInit } from '@angular/core';
import { persona } from '../Model/persona.model';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent implements OnInit {

  persona:persona =new persona("","","","","","","","","");

  constructor(public personaservice: PersonaService) { }

  ngOnInit(): void {

    this.personaservice.getPersona().subscribe(data => {this.persona=data})
                  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';

//creamos el constructor donde definimos el enrutador
constructor(private router:Router){}

PresentacionMario(){
  this.router.navigate(["presentacion"]);
}



  name : string = 'Mario Daniel Cena';
  age : number = 38;
}

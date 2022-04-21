import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacitacionComponent } from './capacitacion/capacitacion.component';
import { FooterComponent } from './footer/footer.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { LoginComponent } from './login/login.component';
import { MenuCentralComponent } from './menu-central/menu-central.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { TrabajosComponent } from './trabajos/trabajos.component';

const routes: Routes = [
  {path:'capacitacion', component:CapacitacionComponent},
  {path:'presentacion', component:PresentacionComponent},
  {path:'footer', component:FooterComponent},
  {path:'info-personal', component:InfoPersonalComponent},
  {path:'login', component:LoginComponent},
  {path:'menu', component:MenuCentralComponent},
  {path:'redes',component:RedesSocialesComponent},
  {path:'trabajos', component:TrabajosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

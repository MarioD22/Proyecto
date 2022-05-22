import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { CapacitacionComponent } from './capacitacion/capacitacion.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { LoginComponent } from './login/login.component';
import { MenuCentralComponent } from './menu-central/menu-central.component';
import { ImagenPerfilComponent } from './imagen-perfil/imagen-perfil.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RedesSocialesComponent,
    PresentacionComponent,
    InfoPersonalComponent,
    CapacitacionComponent,
    TrabajosComponent,
    LoginComponent,
    MenuCentralComponent,
    ImagenPerfilComponent,
    HeaderComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Config Moeda BR
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './components/principal/principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HorasComponent } from './components/horas/horas.component';
import { SetorComponent } from './components/setor/setor.component';
import { CargoComponent } from './components/cargo/cargo.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FuncionarioComponent } from './components/funcionario/funcionario.component';
import { EquipeComponent } from './components/equipe/equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RodapeComponent,
    PrincipalComponent,
    HorasComponent,
    SetorComponent,
    CargoComponent,
    UsuarioComponent,
    FuncionarioComponent,
    EquipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

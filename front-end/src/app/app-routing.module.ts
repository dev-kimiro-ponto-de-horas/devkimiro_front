import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorasComponent } from './components/horas/horas.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SetorComponent } from './components/setor/setor.component';
import { CargoComponent } from './components/cargo/cargo.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FuncionarioComponent } from './components/funcionario/funcionario.component';
import { EquipeComponent } from './components/equipe/equipe.component';

const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'horas', component: HorasComponent},
  {path: 'setor', component:SetorComponent},
  {path: 'cargo',component: CargoComponent},
  {path: 'usuario',component: UsuarioComponent},
  {path: 'funcionario',component: FuncionarioComponent},
  {path: 'equipe', component: EquipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

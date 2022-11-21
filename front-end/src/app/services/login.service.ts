import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../classes/Funcionario';
import { Login } from '../classes/Login';
@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor(private http : HttpClient) { }

  private urlService : String = "http://localhost:8080"

  logarFuncionario(login : Login) : Observable<string>{
    return this.http.get<string>(this.urlService + "/funcionario/login/" + login.login + "/" + login.senha)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  logarUsuario(){

  }
}

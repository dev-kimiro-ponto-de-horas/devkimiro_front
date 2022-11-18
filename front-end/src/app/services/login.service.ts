import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../classes/Login';
@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor(private http : HttpClient) { }

  private urlService : String = "http://localhost:8080"

  criarLogin(login : Login) : Observable<Login>{
    return this.http.post<Login>(this.urlService + "/login", login)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }



}

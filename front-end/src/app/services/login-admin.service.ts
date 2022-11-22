import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../classes/Login';
import { Login_admin } from '../classes/Login_admin';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  private urlService : string = "http://localhost:8080"

  constructor(private http : HttpClient) { }

  logarUsuario(login : Login_admin) : Observable<string> {
    return this.http.get<string>(this.urlService + "/usuario/login/adm/" + login.login)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }
}

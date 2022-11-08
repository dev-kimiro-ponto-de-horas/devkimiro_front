import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioSistema } from '../classes/usuarioSistema';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http : HttpClient) { }

  private urlService : String = "http://localhost:8080/"

  listarTodosUsuarios() : Observable<UsuarioSistema>{
    return this.http.get<UsuarioSistema>(this.urlService + "usuario")
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  listarUsuarioPorId(id: number) : Observable<UsuarioSistema>{
    return this.http.get<UsuarioSistema>(this.urlService + "usuario/" + id)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  listarUsuarioPorLogin(login: string) : Observable<UsuarioSistema>{
    return this.http.get<UsuarioSistema>(this.urlService + "usuario/login/" + login)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  listarUsuarioPorEmail(email: string) : Observable<UsuarioSistema>{
    return this.http.get<UsuarioSistema>(this.urlService + "usuario/email/" + email)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  criarUsuario(usuario : UsuarioSistema) : Observable<UsuarioSistema>{
    return this.http.post<UsuarioSistema>(this.urlService + "usuario", usuario)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  atualizarusuario(usuario: UsuarioSistema, login: string) : Observable<UsuarioSistema>{
    return this.http.put<UsuarioSistema>(this.urlService + "usuario/" + login, usuario)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  deletarUsuario(id: number) : Observable<any> {
    return this.http.delete<any>(this.urlService + "usuario/" + id)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

}

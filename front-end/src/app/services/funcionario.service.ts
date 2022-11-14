import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../classes/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  private urlService : String = "http://localhost:8080/"

  listarTodosFuncionarios() : Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.urlService + "funcionario")
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  buscarFuncionarioPorId(id: number) : Observable<Funcionario>{
    return this.http.get<Funcionario>(this.urlService + "funcionario")
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  buscarFuncionarioPorCracha(cracha: string) : Observable<Funcionario>{
    return this.http.get<Funcionario>(this.urlService + "funcionario/cracha/" + cracha)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  buscarFuncionarioPorEmail(email: string) : Observable<Funcionario>{
    return this.http.get<Funcionario>(this.urlService + "funcionario/email" + email)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  criarFuncionario(funcionario: Funcionario) : Observable<Funcionario>{
    return this.http.post<Funcionario>(this.urlService + "funcionario", funcionario)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  atualizarFuncionario(funcionario: Funcionario, cracha: string ){
    return this.http.put<Funcionario>(this.urlService + "funcionario/" + cracha, funcionario)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  deletarFuncionario(id: number) : Observable<any>{
    return this.http.delete<any>(this.urlService + "funcionario/" + id)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }
}

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargo } from '../classes/Cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http : HttpClient) { }

  private urlService : String = "http://localhost:8080/";

  listarTodosCargos() : Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.urlService + "cargo")
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  listarCargoPorId(id: number) : Observable<Cargo> {
    return  this.http.get<Cargo>(this.urlService + "cargo/" + id)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  buscarCargoPorNome(nome: string) : Observable<Cargo> {
    return this.http.get<Cargo>(this.urlService + "cargo/nome/" + nome)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  criarCargo(cargo: Cargo) : Observable<Cargo> {
    return this.http.post<Cargo>(this.urlService + "cargo", cargo)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  atualizarCargo(cargo: Cargo) : Observable<Cargo> {
    return this.http.put<Cargo>(this.urlService + "cargo/" + cargo.id, cargo)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  deletarCargo(id: number) : Observable<any> {
    return this.http.delete<any>(this.urlService + "cargo/" + id)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }


}

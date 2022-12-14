import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setor } from '../classes/Setor';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  constructor(private http: HttpClient) { }

  private urlService : String = "http://localhost:8080/";

  listarTodosSetores() : Observable<Setor[]> {
    return this.http.get<Setor[]>(this.urlService + "setor")
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  listarSetorPorId(id: number) : Observable<Setor> {
    return  this.http.get<Setor>(this.urlService + "setor/" + id)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  criarSetor(setor: Setor) : Observable<Setor> {
    return this.http.post<Setor>(this.urlService + "setor", setor)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  atualizarSetor(setor: Setor) : Observable<Setor> {
    return this.http.put<Setor>(this.urlService + "setor/" + setor.id, setor)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  deletarSetor(id: number) : Observable<any> {
    return this.http.delete<any>(this.urlService + "setor/" + id)
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }
}

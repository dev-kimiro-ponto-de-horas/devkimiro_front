import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calendario } from '../classes/Calendario';

@Injectable({
  providedIn: 'root'
})
export class HorasService {

  constructor(private http : HttpClient) { }

  private urlService : String = "http://localhost:8080/";

  buscarTodosCalendariosPorCracha() : Observable<Calendario[]>{
    return this.http.get<Calendario[]>(this.urlService + "calendario/" +  localStorage.getItem("funcionario"))
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }

  buscarTodosCalendarios() : Observable<Calendario[]>{
    return this.http.get<Calendario[]>(this.urlService + "calendario")
    .pipe(
      resposta => resposta,
      erro => erro
    )
  }
}

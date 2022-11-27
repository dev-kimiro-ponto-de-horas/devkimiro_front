import { Component, OnInit } from '@angular/core';
import { Calendario } from 'src/app/classes/Calendario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { HorasService } from 'src/app/services/horas.service';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.scss']
})
export class HorasComponent implements OnInit {

  public calendarios : Calendario[];

  constructor(private horasService : HorasService) { }

  ngOnInit(): void {
    this.horasService.buscarTodosCalendariosPorCracha().subscribe({
      next: (resposta) => this.calendarios = resposta,
      error: (erro) => console.log(erro),
    })
  }
}

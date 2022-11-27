import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/classes/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public funcionario : Funcionario;

  constructor(private funcionarioService : FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.buscarFuncionarioPorCracha(localStorage.getItem("funcionario")).subscribe({
      next: (resposta) => this.funcionario = resposta,
      error: (erro) => console.log(erro)
    })
  }

  baterPontoInicio(){
    this.funcionarioService.baterPontoInicio(localStorage.getItem("funcionario")).subscribe({
      next: (resposta) => console.log(resposta),
      error: (erro) => console.log(erro)
    })
    location.reload();
  }

  baterPontoSaida(){
    this.funcionarioService.baterPontoSaida(localStorage.getItem("funcionario")).subscribe({
      next: (resposta) => console.log(resposta),
      error: (erro) => console.log(erro)
    })
    location.reload();
  }
}



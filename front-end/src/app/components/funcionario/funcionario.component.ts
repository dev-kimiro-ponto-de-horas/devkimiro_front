import { HighContrastModeDetector } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cargo } from 'src/app/classes/Cargo';
import { Funcionario } from 'src/app/classes/Funcionario';
import { Setor } from 'src/app/classes/Setor';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { SetorService } from 'src/app/services/setor.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {

  registroFuncionario!: FormGroup;

  public funcionario : Funcionario;

  public funcionarios : Funcionario[];

  public setores : Setor[];

  public cargos : Cargo[];

  hide = true;


  constructor(private funcionarioService : FuncionarioService, private setorService : SetorService, private cargoService : CargoService) { }

  ngOnInit(): void {

    this.funcionarioService.listarTodosFuncionarios().subscribe({
      next: (resposta) => this.funcionarios = resposta,
      error: (erro) => console.log(erro),
    });

    this.setorService.listarTodosSetores().subscribe({
      next: (resposta) => this.setores = resposta,
      error: (erro) => console.log(erro),
    });

    this.cargoService.listarTodosCargos().subscribe({
      next: (resposta) => this.cargos = resposta,
      error: (erro) => console.log(erro),
    });

    this.registroFuncionario = new FormGroup({
      nomeCargo: new FormControl('', [Validators.required]),
      nomeSetor: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      cracha: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    });
  }

  get nomeCargo() {
    return this.registroFuncionario.get('nomeCargo')!;
  }

  get nomeSetor() {
    return this.registroFuncionario.get('nomeSetor')!;
  }

  get email() {
    return this.registroFuncionario.get('email')!;
  }

  get nome() {
    return this.registroFuncionario.get('nome')!;
  }

  get cracha() {
    return this.registroFuncionario.get('cracha')!;
  }

  get senha() {
    return this.registroFuncionario.get('senha')!;
  }

  submit(){
    if(this.registroFuncionario.invalid)
    return;
      this.funcionarioService.criarFuncionario(this.registroFuncionario.value).subscribe({
        next: (resposta) => this.funcionario = resposta,
        error: (erro) => console.log(erro)
      });

    console.log(this.registroFuncionario.value);
    location.reload();
  }

  deletarFuncionario(id: number){
    this.funcionarioService.deletarFuncionario(id).subscribe();
    location.reload();
  }

}

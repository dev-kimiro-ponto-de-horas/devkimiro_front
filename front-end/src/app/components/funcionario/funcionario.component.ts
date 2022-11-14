import { HighContrastModeDetector } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/classes/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {

  registroFuncionario!: FormGroup;

  public funcionario : Funcionario;

  public funcionarios : Funcionario[];

  hide = true;


  constructor(private funcionarioService : FuncionarioService) { }

  ngOnInit(): void {

    this.funcionarioService.listarTodosFuncionarios().subscribe({
      next: (resposta) => this.funcionarios = resposta,
      error: (erro) => console.log(erro),
    });

    this.registroFuncionario = new FormGroup({
      email: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      cracha: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    });
  }

  get email() {
    return this.registroFuncionario.get('email')!;
  }

  get login() {
    return this.registroFuncionario.get('login')!;
  }

  get role() {
    return this.registroFuncionario.get('role')!;
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

    console.log(this.registroFuncionario.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {

  registroFuncionario!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registroFuncionario = new FormGroup({
      email: new FormControl(),
      login: new FormControl(),
      role: new FormControl(),
      cracha: new FormControl(),
      senha: new FormControl()
    })
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

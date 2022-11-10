import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  registroUsuario!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registroUsuario = new FormGroup({
      email: new FormControl(),
      login: new FormControl(),
      senha: new FormControl(),
      role: new FormControl()
    })
  }

  get email() {
    return this.registroUsuario.get('email')!;
  }

  get login() {
    return this.registroUsuario.get('login')!;
  }

  get senha() {
    return this.registroUsuario.get('senha')!;
  }

  get role() {
    return this.registroUsuario.get('role')!;
  }
  submit(){
    if(this.registroUsuario.invalid)
    return;

    console.log(this.registroUsuario.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioSistema } from 'src/app/classes/usuarioSistema';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  registroUsuario!: FormGroup;

  public usuario : UsuarioSistema;

  public usuarios : UsuarioSistema[];

  constructor(private usuarioService : UsuarioServiceService) { }

  ngOnInit(): void {

    this.usuarioService.listarTodosUsuarios().subscribe({
      next: (resposta) => this.usuarios = resposta,
      error: (erro) => console.log(erro),
    });

    this.registroUsuario = new FormGroup({
      email: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required])
    });
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

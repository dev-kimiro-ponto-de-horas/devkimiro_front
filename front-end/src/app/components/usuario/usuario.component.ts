import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { UsuarioSistema } from 'src/app/classes/usuarioSistema';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  registroUsuario!: FormGroup;

  registroUsuarioAtualizar!: FormGroup;

  public usuario : UsuarioSistema;

  public usuarios : UsuarioSistema[];

  hide = true;

  constructor(private usuarioService : UsuarioServiceService) { }

  ngOnInit(): void {

    this.usuarioService.listarTodosUsuarios().subscribe({
      next: (resposta) => this.usuarios = resposta,
      error: (erro) => console.log(erro),
    });

    this.registroUsuario = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    });

    this.registroUsuarioAtualizar = new FormGroup({
      login: new FormControl(''),
      senha: new FormControl('', [Validators.required])
    })
  }

  get nome() {
    return this.registroUsuario.get('nome');
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

  get loginAtualizar() {
    return this.registroUsuarioAtualizar.get('login')!;
  }

  get senhaAtualizar() {
    return this.registroUsuarioAtualizar.get('senha')!;
  }

  submit(){
    if(this.registroUsuario.invalid)
      return;
    this.usuarioService.criarUsuario(this.registroUsuario.value).subscribe({
      next: (resposta) => this.usuario = resposta,
      error: (erro) => console.log(erro)
    });
    console.log(this.registroUsuario.value);
    location.reload();
  }

  deletarUsuario(id: number){
    console.log("ID que está sendo enviado: " + id);
    this.usuarioService.deletarUsuario(id).subscribe();
    location.reload();
  }

  submitUpdate(){
    if(this.registroUsuarioAtualizar.invalid){
      return;
    }
    // this.usuarioService.atualizarusuario(this.registroUsuarioAtualizar.value).subscribe({
    //   next: (resposta) => this.usuario = resposta,
    //   error: (erro) => console.log(erro),
    // });
    console.log(this.registroUsuarioAtualizar.value);
    // location.reload();
  }
}

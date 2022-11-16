import { Setor } from './../../classes/Setor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SetorService } from 'src/app/services/setor.service';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.scss']
})
export class SetorComponent implements OnInit {

  registroSetor!: FormGroup;

  registroSetorAtualizar!: FormGroup;

  public setor: Setor;

  public setores: Setor[];

  constructor(private setorService : SetorService) { }

  ngOnInit(): void {

    this.setorService.listarTodosSetores().subscribe({
      next: (resposta) => this.setores = resposta,
      error: (erro) => console.log(erro),
    });

    this.registroSetor = new FormGroup({
      nomeSetor: new FormControl('', [Validators.required]),
      responsavel: new FormControl('', [Validators.required])
    });

    this.registroSetorAtualizar = new FormGroup({
      id: new FormControl(''),
      nomeSetor: new FormControl('', [Validators.required]),
      responsavel: new FormControl('', [Validators.required])
    })
  }

  get nomeSetor() {
    return this.registroSetor.get('nomeSetor')!;
  }

  get responsavel() {
    return this.registroSetor.get('responsavel')!;
  }

  get id() {
    return this.registroSetorAtualizar.get('id')!;
  }

  get nomeSetorAtualizar() {
    return this.registroSetorAtualizar.get('nomeSetor')!;
  }

  get responsavelAtualizar() {
    return this.registroSetorAtualizar.get('responsavel')!;
  }

  submit(){
    if(this.registroSetor.invalid)
      return;
      this.setorService.criarSetor(this.registroSetor.value).subscribe({
        next: (resposta) => this.setor = resposta,
        error: (erro) => console.log(erro),
      });
    console.log(this.registroSetor.value);
    location.reload();
  }

  deletarSetor(id: number){
    this.setorService.deletarSetor(id).subscribe();
    location.reload();
  }

  submitUpdate(){
    if(this.registroSetorAtualizar.invalid)
      return;
      this.setorService.atualizarSetor(this.registroSetorAtualizar.value).subscribe({
        next: (resposta) => this.setor = resposta,
        error: (erro) => console.log(erro),
      });
      console.log(this.registroSetorAtualizar.value);
      location.reload();
  }
}

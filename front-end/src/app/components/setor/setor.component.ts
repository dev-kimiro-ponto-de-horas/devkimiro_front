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

  public setor : Setor;

  public setores: Setor[];

  constructor(private setorService : SetorService) { }

  ngOnInit(): void {

    this.setorService.listarTodosCargos().subscribe({
      next: (resposta) => this.setores = resposta,
      error: (erro) => console.log(erro),
    });

    this.registroSetor = new FormGroup({
      nomeSetor: new FormControl('', [Validators.required]),
      responsavel: new FormControl('', [Validators.required])
    });
  }

  get nomeSetor() {
    return this.registroSetor.get('nomeSetor')!;
  }

  get responsavel() {
    return this.registroSetor.get('responsavel')!;
  }

  submit(){
    if(this.registroSetor.invalid)
    return;

    console.log(this.registroSetor.value);
  }

}

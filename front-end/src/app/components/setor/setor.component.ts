import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.scss']
})
export class SetorComponent implements OnInit {

  registroSetor!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registroSetor = new FormGroup({
      nomeSetor: new FormControl(),
      responsavel: new FormControl()
    })
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

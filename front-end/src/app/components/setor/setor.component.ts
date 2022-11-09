import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.scss']
})
export class SetorComponent implements OnInit {

  registroSetor!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  submit(){

  }

}

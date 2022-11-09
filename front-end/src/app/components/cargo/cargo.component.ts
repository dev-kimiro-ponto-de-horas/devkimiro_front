import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.scss']
})
export class CargoComponent implements OnInit {

  registroCargo!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registroCargo = new FormGroup({
      nomeSetor: new FormControl(),
      responsavel: new FormControl()
    })
  }

  get nomeCargo() {
    return this.registroCargo.get('nomeCargo')!;
  }

  get salario() {
    return this.registroCargo.get('salario')!;
  }

  get cargaHoraria(){
    return this.cargaHoraria.get('cargaHoraria');
  }

  submit(){
    if(this.registroCargo.invalid)
    return;

    console.log(this.registroCargo.value);
  }

}

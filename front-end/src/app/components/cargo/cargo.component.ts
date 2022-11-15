import { Setor } from './../../classes/Setor';
import { Cargo } from './../../classes/Cargo';
import { CargoService } from './../../services/cargo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.scss']
})
export class CargoComponent implements OnInit {

  registroCargo!: FormGroup;

  public cargo : Cargo;

  public cargos : Cargo[];

  constructor(private cargoService : CargoService) { }

  ngOnInit(): void {

    this.cargoService.listarTodosCargos().subscribe({
      next: (resposta) => this.cargos = resposta,
      error: (erro) => console.log(erro),
    });

    this.registroCargo = new FormGroup({
      nomeCargo: new FormControl('', [Validators.required]),
      salario: new FormControl('', [Validators.required]),
      cargaHoraria: new FormControl('', [Validators.required])
    });
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

    this.cargoService.criarCargo(this.registroCargo.value).subscribe({
      next: (resposta) => this.cargo = resposta,
      error: (erro) => console.log(erro)
    });
    console.log(this.registroCargo.value);
    location.reload();
  }

  deletarCargo(id: number){
    this.cargoService.deletarCargo(id).subscribe();
    location.reload();
  }
}

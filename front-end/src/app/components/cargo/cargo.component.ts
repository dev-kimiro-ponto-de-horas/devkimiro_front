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

  registroCargoAtualizar!: FormGroup;

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

    this.registroCargoAtualizar = new FormGroup({
      id: new FormControl(''),
      nomeCargo: new FormControl('', [Validators.required]),
      salario: new FormControl('', [Validators.required]),
      cargaHoraria: new FormControl('', [Validators.required]),
    })
  }

  get nomeCargo() {
    return this.registroCargo.get('nomeCargo')!;
  }

  get salario() {
    return this.registroCargo.get('salario')!;
  }

  get cargaHoraria(){
    return this.cargaHoraria.get('cargaHoraria')!;
  }

  get id(){
    return this.registroCargoAtualizar.get('id')!;
  }

  get nomeCargoAtualizar() {
    return this.registroCargoAtualizar.get('nomeCargo')!;
  }

  get salarioAtualizar() {
    return this.registroCargoAtualizar.get('salario')!;
  }

  get cargaHorariaAtualizar(){
    return this.registroCargoAtualizar.get('cargaHorario')!;
  }

  submit(){
    if(this.registroCargo.invalid){
      return;
    }
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

  submitUpdate(){
    if(this.registroCargoAtualizar.invalid){
      return;
    }
    this.cargoService.atualizarCargo(this.registroCargoAtualizar.value).subscribe({
      next: (resposta) => this.cargo = resposta,
      error: (erro) => console.log(erro),
    });
    console.log(this.registroCargoAtualizar.value);
    location.reload();
  }
}

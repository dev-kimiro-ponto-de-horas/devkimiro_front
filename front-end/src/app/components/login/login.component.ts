import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  registroLogin!: FormGroup;

  constructor( private loginService : LoginService, private router : Router) { }

  ngOnInit(): void {

    this.registroLogin = new FormGroup({
      login: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    })
  }

  get login() {
    return this.registroLogin.get('login')!;
  }

  get senha() {
    return this.registroLogin.get('senha')!;
  }

  loginFuncionario(){
    if(this.registroLogin.invalid){
      return;
    }

    this.loginService.logarFuncionario(this.registroLogin.value).subscribe( resposta => {
      localStorage.setItem("funcionario", resposta);
      console.info(localStorage.getItem("funcionario"));
      this.router.navigate(['/principal']);
    },
    erro => {
      console.log(erro);
    })
  }

  loginUsuario(){
    // if(this.registroLogin.invalid){
    //   return;
    // }

    this.loginService.logarUsuario(this.registroLogin.value).subscribe( resposta => {
      console.log(resposta);
      // this.router.navigate(['/principal'])
    },
    erro => {
      console.log(erro);
    })
  }
}

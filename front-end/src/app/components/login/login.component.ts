import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/classes/Login';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  registroLogin!: FormGroup;

  public login: Login;

  constructor( private loginService : LoginService) { }

  ngOnInit(): void {

    this.registroLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get username() {
    return this.registroLogin.get('username')!;
  }

  get password() {
    return this.registroLogin.get('password')!;
  }

  submit(){
    if(this.registroLogin.invalid){
      return;
  }
    this.loginService.criarLogin(this.registroLogin.value).subscribe({
    next: (resposta) => this.login = resposta,
    error: (erro) => console.log(erro),
    });
      console.log(this.registroLogin.value);

  }

}

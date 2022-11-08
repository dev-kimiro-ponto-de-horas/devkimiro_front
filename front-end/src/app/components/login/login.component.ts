import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  registroLogin!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.registroLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  get email() {
    return this.registroLogin.get('email')!;
  }

  get password() {
    return this.registroLogin.get('password')!;
  }

  submit(){
    if(this.registroLogin.invalid)
      return;

      console.log(this.registroLogin.value);

      //método para acessar
  }

}

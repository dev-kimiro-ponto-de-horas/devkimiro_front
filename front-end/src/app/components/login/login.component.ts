import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAdminService } from 'src/app/services/login-admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginADMINComponent implements OnInit {

  registroAdmin!: FormGroup;

  hide = true;

  constructor(private loginService : LoginAdminService, private router : Router) { }

  ngOnInit(): void {
    this.registroAdmin = new FormGroup({
      login: new FormControl('', [Validators.required]),
    })
  }

  get login() {
    return this.registroAdmin.get('login')!;
  }

  loginAdmin(){
    if(this.registroAdmin.invalid)
      return;

    this.router.navigate(['/setor'])
  }
}

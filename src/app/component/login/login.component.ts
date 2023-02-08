import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private auth: AuthService) { }

  email: string = "";
  password: string = "";

  login() {
    if (this.email == "") {
      alert('Please Enter Email');
      return;
    }
    if (this.password == "") {
      alert('Please Enter Password');
      return;
    }

    this.auth.login(this.email, this.password)

    this.email = '';
    this.password = ''
  }



}

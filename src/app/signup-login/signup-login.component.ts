import { Component, OnInit } from '@angular/core';
import { AuthenticatedService } from '../authenticated.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {

user: {  
  username: string;
  password: string;

}
  invalidLogin = false;
constructor(private authService: AuthenticatedService,
              private router: Router) { 
                this.user = {
                  username: '',
                  password: ''
                };
              }

  ngOnInit() {
  }

  async login(): Promise<void> {
    await this.authService.login(this.user.username, this.user.password);

    if (this.authService.getToken === undefined){
      this.invalidLogin = true;
    }else {
      this.invalidLogin = false;
      this.router.navigate(['/main']);
    }

  }

  async signup(): Promise<void> {
    await this.authService.signup(this.user.username, this.user.password);
    await this.login();
    

  }

}

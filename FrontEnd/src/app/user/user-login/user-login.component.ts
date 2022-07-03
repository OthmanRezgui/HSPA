import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService :AuthenticationService, private alertifyService : AlertifyService, private router : Router ) {}

  ngOnInit() {
  }

  onSubmit(loginForm : NgForm)
  {
    const token =  this.authService.authUser(loginForm.value);
    if(token)
    {
      localStorage.setItem('token', token.userName);
      this.alertifyService.success('login successful');
      this.router.navigate(['/']);
    }

    else{
      this.alertifyService.error('user name or password is wrong');
        }

  }

}

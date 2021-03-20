import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import * as alertyfy from "alertifyjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form:NgForm)
  {
    let user=this.authService.authUser(form.value);
    if(user)
    {
      localStorage.setItem('token',user.userName);
      alertyfy.success("Login successfull!");
      this.router.navigate(['/']);
    }
    else
    {
      alertyfy.error("Login unsuccessfull!");
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as alertyfy from "alertifyjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) { }
  userLoggedIn:string;
  ngOnInit(): void {
  }

  loggedin()
  {

     let token=localStorage.getItem('token');
     this.userLoggedIn=token;
     return token;
  }

  logout()
  {
      localStorage.removeItem('token');
      alertyfy.success("You are logged out!");
  }

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
}

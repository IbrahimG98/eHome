import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { UsersService } from '../../services/users.service';
import * as alertyfy from "alertifyjs";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
   user:User;
   userSubmitted:boolean;
  constructor(private fb:FormBuilder,private userservice:UsersService) { }

  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      userName: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      passwordConfirm: new FormControl(null,Validators.required),
      mobile: new FormControl(null,[Validators.required,Validators.minLength(8)]),

    },this.passwordMatchValidator)

  }

  getUserData():User
  {
    return this.user={
      userName:this.getUserName().value,
      email:this.getEmail().value,
      password:this.getPassword().value,
      mobile:this.getMobile().value
    };
  }

  passwordMatchValidator(form:FormGroup):Validators
  {
    return form.get('password').value===form.get('passwordConfirm').value
    ?null:{notmatched:true};
  }

  getUserName()
  {
    return this.registrationForm.get('userName') as FormControl;
  }
  getEmail()
  {
    return this.registrationForm.get('email') as FormControl;
  }
  getPassword()
  {
    return this.registrationForm.get('password') as FormControl;
  }
  getPasswordConfirm()
  {
    return this.registrationForm.get('passwordConfirm') as FormControl;
  }
  getMobile()
  {
    return this.registrationForm.get('mobile') as FormControl;
  }
  onSubmit()
  {
    this.userSubmitted=true;
    if(this.registrationForm.valid)
    {
      console.log(this.registrationForm);
       this.getUserData();
       this.userservice.addUser(this.user);
       this.registrationForm.reset();
       this.userSubmitted=false;
       alertyfy.success("You have successfully registered!");
    }
    else
    {
      alertyfy.error("An error occured while registering!Check your details!");
    }
  }

}

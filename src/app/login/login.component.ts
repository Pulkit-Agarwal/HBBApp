import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from './login.service';
import { User } from '../DataModel/user';
import { Router } from '@angular/router';
import {TranslateService } from '../translate.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted:boolean =false;
  isUserInValid:boolean  = false;
  user:User = new User();
  
  constructor(
    private formBuilder: FormBuilder,
    private _loginService:LoginService,
    private router:Router,
    private translate:TranslateService) 
    {

    }

  ngOnInit() {
    this._loginService.initUsers();
    this.user.employeeType = "Employee";
    
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

login(user:User){
  this.submitted = true;
   let loggedInUser = this._loginService.login(user);
  if(loggedInUser){
    this.isUserInValid = false;
    if(loggedInUser.employeeType  != "HR"){
    this.router.navigate(['employee/',loggedInUser.policies[0],loggedInUser.Id]);
    }else{
    this.router.navigate(['hr/',loggedInUser.Id]);
    }
  }else{
    this.isUserInValid = true;
  }

  
}

isUserValid():boolean{
 return  this.submitted && this.isUserInValid;
}

setLang(lang: string) {
  this.translate.use(lang);
}

onLanguageChange(event){
  let lang = event.target.value;
  this.translate.use(lang);
}

}

import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {CookieService} from 'angular2-cookie/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { Router } from '@angular/router'
import {RestQueryService} from '../../sharedModules/restQueryService'

@Component({
  selector: 'login-dialog',
  templateUrl: 'loginDialog.html',
  styleUrls : ['loginDialog.css'],
})
export class LoginDialog{

  loginForm: FormGroup = new FormGroup({
    userID : new FormControl(),
    password : new FormControl()
  });

  singupForm: FormGroup = new FormGroup({
    firstName : new FormControl('', Validators.minLength(2)),
    lastName : new FormControl('',Validators.minLength(2)),
    email : new FormControl('',Validators.email),
    userID : new FormControl('',Validators.maxLength(64)),
    password : new FormControl('',Validators.minLength(8)),
    confirmPassword : new FormControl('',Validators.minLength(8))
  });
  constructor(public _dialogRef: MdDialogRef<LoginDialog>, private _restService:RestQueryService,
              private _cookieService:CookieService, private _router:Router) {}

  doSignup(){
    console.log(this.singupForm.value);
    this._restService.signUp(this.singupForm.value).subscribe(response => {
      console.log(response);


    })

  }
  doLogin(){

    this._restService.login(this.loginForm.value).subscribe(response => {
      this._cookieService.put("jwt",response.jwt);
      this._cookieService.put("userID",response.userID);
    });
    this._router.navigate(['/profile/' + this._cookieService.get("userID")])
  }
}


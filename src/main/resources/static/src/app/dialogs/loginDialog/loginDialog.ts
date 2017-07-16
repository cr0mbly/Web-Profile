import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {CookieService} from 'angular2-cookie/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {RestQueryService} from '../../sharedModules/restQueryService'

@Component({
  selector: 'login-dialog',
  templateUrl: 'loginDialog.html',
  styleUrls : ['loginDialog.css'],
})
export class LoginDialog implements OnInit{

  private response;

  loginForm: FormGroup = new FormGroup({
    username : new FormControl(),
    password : new FormControl()
  });

  singupForm: FormGroup = new FormGroup({
    firstname : new FormControl('', Validators.minLength(2)),
    lastname : new FormControl('',Validators.minLength(2)),
    email : new FormControl('',Validators.email),
    username : new FormControl('',Validators.maxLength(64)),
    password : new FormControl('',Validators.minLength(8)),
    confirmPassword : new FormControl('',Validators.minLength(8))
  });
  constructor(public _dialogRef: MdDialogRef<LoginDialog>, private _restService:RestQueryService, private _cookieService:CookieService) {}

  doSignup(){
    console.log(this.singupForm.value)
  }
  doLogin(){

    this._restService.login().subscribe(response => {
      this._cookieService.put("jwt",response.jwt);
    })
  }

  ngOnInit(){
  }
}


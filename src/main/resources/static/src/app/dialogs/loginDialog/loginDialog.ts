import {Component} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {CookieService} from 'angular2-cookie/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { Router } from '@angular/router'
import {RestQueryService} from '../../sharedModules/restQueryService'
import {SharedServices} from '../../sharedModules/sharedServices'

@Component({
  selector: 'login-dialog',
  templateUrl: 'loginDialog.html',
  styleUrls : ['loginDialog.css'],
})
export class LoginDialog{

  private authResponse:string;

  private loginForm: FormGroup = new FormGroup({
    userID : new FormControl(),
    password : new FormControl()
  });

  private singUpForm: FormGroup = new FormGroup({
    firstName : new FormControl('', Validators.minLength(2)),
    lastName : new FormControl('',Validators.minLength(2)),
    email : new FormControl('',Validators.email),
    userID : new FormControl('',Validators.maxLength(64)),
    password : new FormControl('',Validators.minLength(8)),
    confirmPassword : new FormControl('',Validators.minLength(8))
  });

  constructor(public _loginDialog: MdDialogRef<LoginDialog>, private _restService:RestQueryService,
              private _router:Router, private _cookies: CookieService) {}

  doSignup(){

    let signUpDetails = this.singUpForm.value;
    delete signUpDetails.confirmPassword;

    this._restService.signUp(signUpDetails).subscribe(response => {
      this._loginDialog.close();
      this._router.navigate([response.redirect]);


    })

  }
  doLogin(){
    this._restService.login(this.loginForm.value).subscribe(response => {
      if(response.validLogin){
        console.log(response);
        this._cookies.put("jwt",response.jwt);
        this._cookies.put("userID",response.userID);
        this._cookies.put("role", response.role);

        this._loginDialog.close();
        this._router.navigate(['/profile/' + this._cookies.get("userID")])
      }else {
        this.authResponse = response.message;
      }

    });
  }

  changeTab($event: any){
    this.authResponse = null;
  }
}


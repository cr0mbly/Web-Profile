import {Component} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'login-dialog',
  templateUrl: 'loginDialog.html',
  styleUrls : ['loginDialog.css']
})
export class LoginDialog {

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
  constructor(public dialogRef: MdDialogRef<LoginDialog>) {}

  doSignup(){
    console.log(this.singupForm.value)
  }
  doLogin(){
    console.log(this.loginForm.toString())
  }
}


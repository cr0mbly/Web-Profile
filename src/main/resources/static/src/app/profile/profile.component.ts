import {Component, OnInit} from '@angular/core';
import {RestQueryService} from '../sharedModules/restQueryService'
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: '<profile></profile>',
  templateUrl: 'profile.component.html',
  styleUrls : ['profile.component.css']
})

export class profile implements OnInit{

  constructor(private _restQueryService:RestQueryService){}

  private updateForm: FormGroup = new FormGroup({
    firstName : new FormControl('', Validators.minLength(2)),
    lastName : new FormControl('',Validators.minLength(2)),
    email : new FormControl('',Validators.email),
    userID : new FormControl('',Validators.maxLength(64)),
    password : new FormControl('',Validators.minLength(8)),
    confirmPassword : new FormControl('',Validators.minLength(8))
  });

  public editFields:Boolean = false;

  submitUpdate(){
    if(this.editFields){
      let profile = this.updateForm.value;
      delete profile.confirmPassword;
      this._restQueryService.updateProfile(profile).subscribe(response => {

      });
    }
    this.editFields = !this.editFields;
  }

  ngOnInit(){
    this._restQueryService.profile().subscribe(response => {
      this.updateForm.get('firstName').setValue(response.firstName);
      this.updateForm.get('lastName').setValue(response.lastName);
      this.updateForm.get('email').setValue(response.email);
      this.updateForm.get('userID').setValue(response.userID);
      this.updateForm.get('password').setValue(response.passwordLength);
      this.updateForm.get('confirmPassword').setValue(response.passwordLength);


    })
  }
}

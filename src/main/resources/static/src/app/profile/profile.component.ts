import {Component, OnInit} from '@angular/core';
import {RestQueryService} from '../sharedModules/restQueryService'
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {MdSnackBar} from '@angular/material';
import {ActivatedRoute} from "@angular/router";


// Profile class
@Component({
  selector: '<profile></profile>',
  templateUrl: 'profile.component.html',
  styleUrls : ['profile.component.css']
})

export class profile implements OnInit{

  constructor(private _restQueryService:RestQueryService, private _route:ActivatedRoute , public snackBar: MdSnackBar){}
  private currentUser:string;
  private adminEdit:boolean = false;

  private updateForm: FormGroup = new FormGroup({
    firstName : new FormControl('', Validators.minLength(2)),
    lastName : new FormControl('',Validators.minLength(2)),
    email : new FormControl('',Validators.email),
    userID : new FormControl('',Validators.maxLength(64)),
    password : new FormControl('',Validators.minLength(8)),
    confirmPassword : new FormControl('',Validators.minLength(8))
  });

  public editFields:Boolean = false;

  private openSnackBar() {
    this.snackBar.open("User Updated")._dismissAfter(2000);
  };

  submitUpdate(){
    if(this.editFields && this.updateForm.dirty){

      let profile = this.updateForm.value;
      delete profile.confirmPassword;
      profile['userID'] = this.currentUser;

      this._restQueryService.updateProfile(profile).subscribe(response => {
          this.openSnackBar()
      });
    }
    this.editFields = !this.editFields;
  }

  ngOnInit(){
    this._route.params.subscribe(params =>{
      if(params.adminID){
        this.adminEdit = true;

      }
    });

    this._restQueryService.profile().subscribe(response => {
      this.currentUser = response.userID;

      this.updateForm.get('firstName').setValue(response.firstName);
      this.updateForm.get('lastName').setValue(response.lastName);
      this.updateForm.get('email').setValue(response.email);
      this.updateForm.get('password').setValue(response.password);
      this.updateForm.get('confirmPassword').setValue(response.password);


    })
  }
}

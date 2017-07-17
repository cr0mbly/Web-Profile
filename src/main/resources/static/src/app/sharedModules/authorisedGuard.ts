import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SharedServices } from './sharedServices';
import {CookieService} from "angular2-cookie/core";

@Injectable()
export class AuthorisedGuard implements CanActivate {

  constructor(private _sharedServices: SharedServices, private _cookies:CookieService) {}

  canActivate() {
    if(this._sharedServices.loggedInState.value){
      return true
    }
    if(this._cookies.get('jwt')){
      return true;
    }else{
      return false;
    }
  }
}

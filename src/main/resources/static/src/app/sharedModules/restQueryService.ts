import {Injectable} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import {SharedServices} from './sharedServices'


@Injectable()
export class RestQueryService {

  private backEndHost : string = "http://localhost:8080";

  private backendURLS = {
    "user" : "/user/",
    "signUp" : "signUp/",
    "login" : "login/",
    "profile" : "profile/"
  };

  constructor(private _http:Http, private _cookies:CookieService, private _sharedServices:SharedServices) {
  };

  signUp(signUpForm) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.backEndHost + this.backendURLS.user + this.backendURLS.signUp , signUpForm,options).map(res => res.json());
  };

  login(loginForm) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.backEndHost + this.backendURLS.user + this.backendURLS.login , loginForm,options)
      .map(res => res.json()).subscribe(response => {
        this._cookies.put("jwt",response.jwt);
        this._cookies.put("userID",response.userID);
        this._sharedServices.loggedIn(true);
      });
  };

  updateProfile(updateForm){
    let headers = new Headers([{ 'Content-Type': 'application/json' },
                               { 'authorization': 'Bearer ' + this._cookies.get("jwt")}]);
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.backEndHost + this.backendURLS.user + this.backendURLS.profile , updateForm,options).map(res => res.json());
  };

  profile() {

    let headers = new Headers({ 'authorization': 'Bearer ' + this._cookies.get("jwt")});
    let options = new RequestOptions({ headers: headers });

    return this._http.get(this.backEndHost + this.backendURLS.user +
      this.backendURLS.profile + this._cookies.get("userID"),options).map(res => res.json());
  };
}

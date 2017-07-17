import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RestQueryService {

  private backEndHost : string = "http://localhost:8080";

  private backendURLS = {
    "user" : "/user/",
    "signUp" : "signUp/",
    "login" : "login/"
  };

  constructor(private _http:Http) {
  };

  signUp(signUpForm) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.backEndHost + this.backendURLS.user + this.backendURLS.signUp , signUpForm,options).map(res => res.json());
  };

  login(loginForm) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.backEndHost + this.backendURLS.user + this.backendURLS.login , loginForm,options).map(res => res.json());
  };
}

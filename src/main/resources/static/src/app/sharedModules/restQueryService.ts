import {Injectable} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {SharedServices} from './sharedServices'

@Injectable()
export class RestQueryService {

  private backEndHost : string = "http://localhost:8080";

  private backendURLS = {
    "user" : "/user/",
    "signUp" : "signUp/",
    "login" : "login/",
    "logout" : "logout/",
    "profile" : "/profile/",
    "adminProfiles" : "/admin/profiles/"
  };

  constructor(private _http:Http, private _cookies:CookieService, private _sharedServices:SharedServices) {
  };

  loadJsonResource(resourcesToLoad) : Observable<any> {
    return this._http.get(resourcesToLoad)
      .map(res => res.json())
      .catch(RestQueryService.handleError);
  }

  signUp(signUpForm) : Observable<any> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.backEndHost + this.backendURLS.user + this.backendURLS.signUp , signUpForm,options)
      .map(res => res.json())
      .catch(RestQueryService.handleError);
  };

  login(loginForm) : Observable<any> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.backEndHost + this.backendURLS.user + this.backendURLS.login , loginForm,options)
      .map(res => res.json())
      .catch(RestQueryService.handleError);
  };

  logout(){

    let headers = new Headers([{ 'authorization': 'Bearer ' + this._cookies.get("jwt")},{ 'Content-Type': 'application/json' }]);
    let options = new RequestOptions({ headers: headers });

    return this._http.delete(this.backEndHost +  this.backendURLS.user + this.backendURLS.logout + this._cookies.get("userID"),options)
      .catch(RestQueryService.handleError);
  }

  updateProfile(updateForm) : Observable<any> {
    let headers = new Headers({ 'authorization': 'Bearer ' + this._cookies.get("jwt")});
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.backEndHost + this.backendURLS.user + this.backendURLS.profile +  this._cookies.get("userID"), updateForm,options)
      .map(res => res.json())
      .catch(RestQueryService.handleError);
  };

  profile() : Observable<any> {

    let headers = new Headers({ 'authorization': 'Bearer ' + this._cookies.get("jwt")});
    let options = new RequestOptions({ headers: headers });

    return this._http.get(this.backEndHost +
      this.backendURLS.profile + this._cookies.get("userID"),options)
      .map(res => res.json())
      .catch(RestQueryService.handleError);
  };

  fetchProfiles() : Observable<any> {
    let headers = new Headers({ 'authorization': 'Bearer ' + this._cookies.get("jwt")});
    let options = new RequestOptions({ headers: headers });

    return this._http.get(this.backEndHost +
      this.backendURLS.adminProfiles + this._cookies.get("userID"),options)
      .map(res => res.json());
      // .catch(RestQueryService.handleError);
  };




  //  TODO make it more specific
  private static handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

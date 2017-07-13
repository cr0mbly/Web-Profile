import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RestQueryService {

  constructor(private _http:Http) {
  };

  getposts(uri) {
    return this._http.get(uri).map(res => res.json());
  };
  login() {

    let form = {
      "firstName" : "Alice",
      "lastName" : "Smith",
      "email" : "alice.smith@gmail.com",
      "password" : "password1"
    };

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('http://localhost:8080/user/login/', form,options).map(res => res.json());
  };
};

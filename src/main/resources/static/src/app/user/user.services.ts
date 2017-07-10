import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {


  private serviceUrl : 'https://jsonplaceholder.typicode.com/users';
  constructor(private _http:Http) {
  };

  getposts() {
    return this._http.get('http://localhost:3000/users').map(res => res.json());
  };
  postPosts(form) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this._http.post('http://localhost:3000/users/', form.value,options);
  };
};

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CryptonatorApiService {

  CryptoPaths = {
    "root" : "https://www.cryptocompare.com/api/",
    "data" : "data/",
    "coinList" : "coinlist/"
  };

  constructor(private _http:Http) {
  };

  getCoinTypes() : Observable<any> {

    return this._http.get(this.CryptoPaths.root + this.CryptoPaths.data + this.CryptoPaths.coinList)
      .map(res => res.json())
      .catch(CryptonatorApiService.handleError);
  };

  //  TODO make it more specific
  private static handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CryptonatorApiService {

  CryptoPaths = {
    "root" : "https://www.cryptocompare.com/api/",
    "data" : "data/",
    "coinList" : "/coinlist/"
  };

  constructor(private _http:Http) {
  };

  getCoinTypes() : Observable<any> {

    return this._http.get(this.CryptoPaths.root + this.CryptoPaths.data + this.CryptoPaths.coinList)
      .map(res => res.json())
      .catch(RestQueryService.handleError);
  };

}

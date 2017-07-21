import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';

import {CookieService} from "angular2-cookie/core";

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private _cookies:CookieService) {}

  canActivate() {
    return this._cookies.get("roles") === "ADMIN";
  }
}


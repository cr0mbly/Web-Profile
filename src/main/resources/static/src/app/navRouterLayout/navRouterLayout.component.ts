import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import {SharedServices} from "../sharedModules/sharedServices";
import {LoginDialog} from "../dialogs/loginDialog/loginDialog";
import {MdDialog, MdMenuModule} from "@angular/material";

@Component({
  moduleId : module.id,
  selector: 'nav-router-layout',
  templateUrl: 'navRouterLayout.component.html',
  styleUrls: ['navRouterLayout.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class navRouterLayout implements OnInit{

  private mobile;
  private loggedIn: boolean;
  private userID:string;

  constructor(private _sharedServices:SharedServices, public dialog: MdDialog, private _cookie:CookieService){
    this._sharedServices.mobileViewObservable.subscribe(data => this.mobile = data);

  }

  openDialog() {
    if(!this.loggedIn){
      let dialogRef = this.dialog.open(LoginDialog);
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

  ngOnInit(){
    this._sharedServices.loggedIn(true);
    this.loggedIn = this._sharedServices.loggedInState.value;
    this.userID = this._cookie.get('userID');
  }
}

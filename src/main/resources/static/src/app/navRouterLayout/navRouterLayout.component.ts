import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import {Router} from '@angular/router';
import {SharedServices} from "../sharedModules/sharedServices";
import {RestQueryService} from "../sharedModules/restQueryService";
import {LoginDialog} from "../dialogs/loginDialog/loginDialog";
import {MdDialog} from "@angular/material";

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
  public profileLink:string;
  private toolbarLinks;
  constructor(private _sharedServices:SharedServices, public dialog: MdDialog,
              private _cookies:CookieService, private _restQueryService:RestQueryService, private _router:Router){
  }

  openDialog() {
    if(!this.loggedIn){
      let dialogRef = this.dialog.open(LoginDialog);
      dialogRef.afterClosed()
    }
  }

  doLogout(){
    this._restQueryService.logout().subscribe(response => {
        this._cookies.remove("jwt");
        this._cookies.remove("userID");
        this._cookies.remove("role");
        this._sharedServices.loggedIn(false);
        this._router.navigate(['']);
    });
  }

  toolbarNav(route){
    this._router.navigate([route]);
  }

  ngOnInit(){

    // moblie view check
    this._sharedServices.mobileViewObservable.subscribe(data => this.mobile = data);

    // query logged in state
    this._sharedServices.loggedInObservable.subscribe(state => {

      this.loggedIn = state;

      if(state){
        this._restQueryService.loadJsonResource("assets/resource.json").subscribe(resource => {
          this.toolbarLinks = resource[this._cookies.get("role")];
        });

        this.userID = this._cookies.get('userID');
        this.profileLink = "/profile/" + this.userID
      }
    });
  }
}

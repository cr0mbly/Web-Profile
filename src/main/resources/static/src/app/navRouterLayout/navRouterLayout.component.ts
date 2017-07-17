import {Component, ViewEncapsulation} from '@angular/core';
import {SharedServices} from "../sharedModules/sharedServices";
import {LoginDialog} from "../dialogs/loginDialog/loginDialog";
import {MdDialog} from "@angular/material";

@Component({
  moduleId : module.id,
  selector: 'nav-router-layout',
  templateUrl: 'navRouterLayout.component.html',
  styleUrls: ['navRouterLayout.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class navRouterLayout{

  private mobile;


  constructor(private sharedServices:SharedServices, public dialog: MdDialog){
    this.sharedServices.mobileViewObservable.subscribe(data => this.mobile = data);

  }

  openDialog() {
    let dialogRef = this.dialog.open(LoginDialog);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

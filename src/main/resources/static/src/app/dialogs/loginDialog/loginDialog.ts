import {Component} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'login-dialog',
  templateUrl: 'loginDialog.html',
})
export class LoginDialog {
  constructor(public dialogRef: MdDialogRef<LoginDialog>) {}
}


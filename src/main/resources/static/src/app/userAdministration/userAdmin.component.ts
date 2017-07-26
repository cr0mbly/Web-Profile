import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {RestQueryService} from "../sharedModules/restQueryService";
import {Router} from "@angular/router";
import {CookieService} from "angular2-cookie/core";



@Component({
  selector: 'user-admin',
  templateUrl: 'userAdmin.component.html',
  styleUrls : ['userAdmin.component.css'],
})
export class UserAdministration implements OnInit{
  displayedColumns;
  dataSource: TableDataSource | null;

  constructor(private _restQueryService: RestQueryService, private _router:Router, private _cookies:CookieService){}

  ngOnInit() {
    let data = this._restQueryService.fetchProfiles();
      this.dataSource = new TableDataSource(data);
      setTimeout(() => { // required
        this.displayedColumns = ['userId', 'firstName', 'lastName', 'email', 'edit'];
      }, 1);
    }

  editUser(row){
    let adminUser = this._cookies.get('userID');
    this._router.navigate(['/admin/', adminUser,'/editProfile/',row.userID]);
  }

}

export interface Profile {
  userID: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class TableDataSource extends DataSource<any>{

  constructor(private _data:Observable<any>) {
    super();
  }

  connect(): Observable<Profile[]> {
    return this._data;
  }

  disconnect() {}

}

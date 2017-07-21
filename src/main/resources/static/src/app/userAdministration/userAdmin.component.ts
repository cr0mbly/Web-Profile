import {Component, OnInit} from '@angular/core';
import {RestQueryService} from "../sharedModules/restQueryService";
@Component({
  selector: 'user-admin',
  templateUrl: 'userAdmin.component.html',
  styleUrls : ['userAdmin.component.css'],
})
export class UserAdministration implements OnInit{


  constructor(private _restQueryService:RestQueryService) {}


  ngOnInit(){
    this._restQueryService.fetchProfiles().subscribe(response => {
      console.log(response);
    });

  }




}

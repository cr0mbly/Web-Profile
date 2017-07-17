import {Component, OnInit} from '@angular/core';
import {RestQueryService} from '../sharedModules/restQueryService'

@Component({
  selector: '<profile></profile>',
  templateUrl: 'profile.component.html',
})

export class profile implements OnInit{

  constructor(private _restQueryService:RestQueryService){}

  private user = {};

  ngOnInit(){
    this._restQueryService.profile().subscribe(response => {
      console.log(response);
      this.user = response;



    })
  }
}

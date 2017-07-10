import {Component, ViewEncapsulation} from '@angular/core';
import 'hammerjs';
import {SharedServices} from "../sharedModules/SharedServices";

@Component({
  moduleId : module.id,
  selector: 'nav-router-layout',
  templateUrl: 'app/navRouterLayout/navRouterLayout.component.html',
  styleUrls: ['app/navRouterLayout/navRouterLayout.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class navRouterLayout{

  private response;


  constructor(private sharedServices:SharedServices){
    this.sharedServices.mobileViewObservable.subscribe(data => this.response = data);

  }

  private yo(){
    console.log(this.response);
    return this.response;
  }

}

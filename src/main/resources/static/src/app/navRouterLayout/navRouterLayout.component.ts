import {Component, ViewEncapsulation} from '@angular/core';
import 'hammerjs';
import {SharedServices} from "../sharedModules/SharedServices";

@Component({
  moduleId : module.id,
  selector: 'nav-router-layout',
  templateUrl: 'navRouterLayout.component.html',
  styleUrls: ['navRouterLayout.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class navRouterLayout{

  private mobile;


  constructor(private sharedServices:SharedServices){
    this.sharedServices.mobileViewObservable.subscribe(data => this.mobile = data);

  }

  private yo(){
    console.log(this.mobile);
    return this.mobile;
  }

}

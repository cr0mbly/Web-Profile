import {Component, ViewEncapsulation} from '@angular/core';
import 'hammerjs';
import {SharedServices} from "../sharedModules/SharedServices";

@Component({
  moduleId : module.id,
  selector: 'side-nav-component',
  templateUrl: 'headerRouter.component.html',
  styleUrls: ['headerRouter.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class sideNavComponent{

  private response;


  constructor(private sharedServices:SharedServices){
    this.sharedServices.mobileViewObservable.subscribe(data => this.response = data);

  }

  private yo(){
    console.log(this.response);
    return this.response;
  }

}

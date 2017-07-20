import {Component, HostListener} from '@angular/core';
import 'rxjs'
import 'rxjs/add/operator/map'
import {SharedServices} from './sharedModules/sharedServices'




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent{

  private resizeTimeout;

  constructor(private _sharedServices:SharedServices){
  }

  @HostListener('window:resize')
  onWindowResize(event) {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
     };

    this.resizeTimeout = setTimeout((() => {
      this._sharedServices.changeNav(event.target.innerWidth < 500 ? true : false);
    }).bind(this), 200);
  }
}

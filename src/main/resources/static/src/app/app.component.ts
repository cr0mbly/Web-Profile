import {Component, ViewChild,HostListener} from '@angular/core';
import 'rxjs'
import 'rxjs/add/operator/map'
import {SharedServices} from './sharedModules/SharedServices'




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {

  constructor(private sharedServices:SharedServices){}

  private resizeTimeout;

  @HostListener('window:resize')
  onWindowResize(event) {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
     };

    this.resizeTimeout = setTimeout((() => {
      this.sharedServices.changeNav(event.target.innerWidth < 500 ? true : false);
    }).bind(this), 200);
  }
}

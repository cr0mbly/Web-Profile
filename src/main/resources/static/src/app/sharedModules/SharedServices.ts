import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class SharedServices {

  public mobileView = new BehaviorSubject<boolean>(false);

  public loggedInState = new BehaviorSubject<boolean>(false);

  mobileViewObservable = this.mobileView.asObservable();
  // service command
  changeNav(state) {
    this.mobileView.next(state);
  };

  loggedIn(state) {
    this.loggedInState.next(state);
  };

};

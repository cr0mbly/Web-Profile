import {Component, OnInit} from '@angular/core';
import {User} from './user.interface'
import {UserService} from './user.services'
import {Observable} from "rxjs/Observable";
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'user-component',
  templateUrl: 'user.template.html',
  providers: [UserService]
})

export class UserComponent implements OnInit {

  private users:User;
  private currentUser:FormGroup;


  constructor(private _userService:UserService) {
    // super();
  }

  onSubmit(form):void {
    this._userService.postPosts(form);

  }

  private refreshData():void {
    this._userService.getposts().subscribe(userResponse => {
      this.users = userResponse;
      this.subscribeToData();
    })
  }

  private subscribeToData():void {
    Observable.timer(5000).first().subscribe(() => this.refreshData());
  }

  ngOnInit() {
    this.refreshData();
    this.currentUser = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        suite: new FormControl(''),
        city: new FormControl(''),
        zipcode: new FormControl(''),
        geo: new FormGroup({
          lat: new FormControl(''),
          lng: new FormControl(''),
        })
      })
    });
  }


}

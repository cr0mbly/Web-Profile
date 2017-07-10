"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var user_services_1 = require('./user.services');
var Observable_1 = require("rxjs/Observable");
var forms_1 = require('@angular/forms');
var UserComponent = (function (_super) {
    __extends(UserComponent, _super);
    function UserComponent(_userService) {
        _super.call(this);
        this._userService = _userService;
    }
    UserComponent.prototype.onSubmit = function (form) {
        this._userService.postPosts(form);
    };
    UserComponent.prototype.refreshData = function () {
        var _this = this;
        this._userService.getposts().subscribe(function (userResponse) {
            _this.users = userResponse;
            _this.subscribeToData();
        });
    };
    UserComponent.prototype.subscribeToData = function () {
        var _this = this;
        Observable_1.Observable.timer(5000).first().subscribe(function () { return _this.refreshData(); });
    };
    UserComponent.prototype.ngOnInit = function () {
        this.refreshData();
        this.currentUser = new forms_1.FormGroup({
            id: new forms_1.FormControl(''),
            name: new forms_1.FormControl(''),
            username: new forms_1.FormControl(''),
            email: new forms_1.FormControl(''),
            address: new forms_1.FormGroup({
                street: new forms_1.FormControl(''),
                suite: new forms_1.FormControl(''),
                city: new forms_1.FormControl(''),
                zipcode: new forms_1.FormControl(''),
                geo: new forms_1.FormGroup({
                    lat: new forms_1.FormControl(''),
                    lng: new forms_1.FormControl(''),
                })
            })
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-component',
            templateUrl: 'user.template.html',
            providers: [user_services_1.UserService]
        })
    ], UserComponent);
    return UserComponent;
}(core_1.OnInit));
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map
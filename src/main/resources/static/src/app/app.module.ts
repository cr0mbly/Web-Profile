//library imports
import { BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes, CanActivate} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {MdTabsModule, MdDialogModule, MdCardModule, MdInputModule, MdMenuModule, MdIconModule, MdRippleModule, MdToolbarModule, MdSidenavModule, MdButtonModule} from '@angular/material';

// //local imports
import { AppComponent } from './app.component';
import {RestQueryService} from './sharedModules/restQueryService'
import {navRouterLayout} from './navRouterLayout/navRouterLayout.component'
import {Landing} from "./landing/landing.component";
import {profile} from "./profile/profile.component";
import {SharedBody} from "./sharedBodyView/sharedBody.component";
import {LoginDialog} from "./dialogs/loginDialog/loginDialog";
import {SharedServices} from "./sharedModules/sharedServices";
import {AuthorisedGuard} from "./sharedModules/authorisedGuard"


// Route mapping
const appRoutes: Routes = [
  { path : '', component: SharedBody},
  { path: 'profile/:userID',
    component: profile,
    canActivate: [AuthorisedGuard]},
];




@NgModule({
  declarations: [
    AppComponent,
    navRouterLayout,
    Landing,
    SharedBody,
    profile,
    LoginDialog
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdSidenavModule,
    MdMenuModule,
    MdIconModule,
    MdInputModule,
    MdRippleModule,
    MdToolbarModule,
    MdCardModule,
    RouterModule.forRoot(appRoutes),
    MdDialogModule,
    MdTabsModule
  ],
  providers: [RestQueryService, SharedServices, CookieService, AuthorisedGuard],
  entryComponents : [LoginDialog],
  bootstrap: [AppComponent]
})
export class AppModule {

}

//library imports
import { BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CdkTableModule} from '@angular/cdk';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {MdGridListModule, MdTableModule, MdSnackBarModule, MdTabsModule, MdDialogModule, MdCardModule, MdInputModule, MdMenuModule, MdIconModule, MdRippleModule, MdToolbarModule, MdSidenavModule, MdButtonModule} from '@angular/material';
// //local imports
import { AppComponent } from './app.component';
import {RestQueryService} from './sharedModules/restQueryService'
import {navRouterLayout} from './navRouterLayout/navRouterLayout.component'
import {Landing} from "./landing/landing.component";
import {profile} from "./profile/profile.component";
import {SharedBody} from "./sharedBodyView/sharedBody.component";
import {Footer} from "./footer/footer.component";
import {LoginDialog} from "./dialogs/loginDialog/loginDialog";
import {SharedServices} from "./sharedModules/sharedServices";
import {CryptonatorApiService} from "./sharedModules/CryptonatorApiService";
import {AuthorisedGuard} from "./sharedModules/loginGuards/authorisedGuard"
import {AdminGuard} from "./sharedModules/loginGuards/adminGuard"
import {UserAdministration} from "./userAdministration/userAdmin.component"



// Route mapping
const appRoutes: Routes = [
  { path : '',
    component: Landing},
  { path : 'home',
    component: SharedBody,
    canActivate: [AuthorisedGuard]},
  { path: 'profile/:userID',
    component: profile,
    canActivate: [AuthorisedGuard]},
  { path: 'admin/profiles',
    component: UserAdministration,
    canActivate : [AuthorisedGuard, AdminGuard]},
  { path: 'admin/:adminID/editProfile/:userID',
    component : profile,
    canActivate: [AuthorisedGuard, AdminGuard]
  }
];




@NgModule({
  declarations: [
    AppComponent,
    navRouterLayout,
    Landing,
    SharedBody,
    Footer,
    profile,
    LoginDialog,
    UserAdministration
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdTableModule,
    MdSnackBarModule,
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
    MdTabsModule,
    MdGridListModule,
    CdkTableModule
  ],
  providers: [RestQueryService, SharedServices, CryptonatorApiService, CookieService, AuthorisedGuard, AdminGuard],
  entryComponents : [LoginDialog],
  bootstrap: [AppComponent]
})
export class AppModule {

}

//library imports
import { BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MdDialog, MdDialogRef,MdCardModule, MdInputModule, MdMenuModule, MdIconModule, MdRippleModule, MdToolbarModule, MdSidenavModule, MdButtonModule} from '@angular/material';
//
// //local imports
import { AppComponent } from './app.component';
import { UserComponent} from './user/user.component'
import {SharedServices} from './sharedModules/SharedServices'
import {UserService} from './user/user.services'
import {navRouterLayout} from './navRouterLayout/navRouterLayout.component'
import {Landing} from "./landing/landing.component";
import {Link1} from "./link1/link1.component";
import {SharedBody} from "./sharedBodyView/sharedBody.component";


const appRoutes: Routes = [
  { path : '', component: SharedBody},
  { path: 'link-1', component: Link1 },
  { path: 'hello', component: Landing ,children: [
    { path: 'test', component: SharedBody }
  ]}
];




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    navRouterLayout,
    Landing,
    SharedBody,
    Link1
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdDialog,
    MdDialogRef,
    MdButtonModule,
    MdSidenavModule,
    MdMenuModule,
    MdIconModule,
    MdInputModule,
    MdRippleModule,
    MdToolbarModule,
    MdCardModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [UserService,SharedServices],
  bootstrap: [AppComponent]
})
export class AppModule {

}
